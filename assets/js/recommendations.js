const normalize=value=>String(value||'').trim().toLowerCase();
const energyRank={'muy baja':0,baja:1,media:2,alta:3};
const moodIntentions={agotado:['descansar','calma','desconectar'],neutral:['calma','disfrutar','curiosidad'],animado:['disfrutar','crear','explorar','curiosidad']};

function scoreEntry(entry,checkin,recentIds=[]){
  let score=0;
  const reasons=[];
  const wantedEnergy=normalize(checkin.energy);
  const entryEnergy=normalize(entry.energy);
  if(wantedEnergy){
    if(entryEnergy===wantedEnergy){score+=6;reasons.push(`energía ${wantedEnergy}`)}
    else if(entryEnergy!=='variable'&&energyRank[entryEnergy]<=energyRank[wantedEnergy]){score+=3;reasons.push('energía compatible')}
    else if(entryEnergy!=='variable')score-=5;
  }
  const intention=normalize(checkin.intent);
  if(intention&&entry.intentions?.includes(intention)){score+=7;reasons.push(`intención: ${intention}`)}
  const mood=normalize(checkin.mood);
  const moodMatches=(moodIntentions[mood]||[]).filter(value=>entry.intentions?.includes(value));
  if(moodMatches.length){score+=Math.min(4,moodMatches.length*2);reasons.push(`estado: ${moodMatches[0]}`)}
  const available=Number(checkin.time);
  if(available){
    if(entry.duration<=available){score+=4;reasons.push(`cabe en ${available} min`)}
    else if(entry.tags?.includes('continuable')){score+=1;reasons.push('puede continuarse después')}
    else score-=4;
  }
  if(recentIds.includes(entry.id))score-=3;
  return {entry,score,reasons};
}

export function recommendEntries(entries,checkin={},recentIds=[]){
  return entries.map(entry=>scoreEntry(entry,checkin,recentIds)).sort((a,b)=>b.score-a.score||a.entry.id.localeCompare(b.entry.id));
}

export function recommendationExplanation(result){return result.reasons.length?result.reasons.join(' · '):'propuesta flexible del catálogo'}

function checkinHash(checkin){
  return [...`${normalize(checkin.mood)}|${normalize(checkin.energy)}|${normalize(checkin.intent)}|${checkin.time||''}`]
    .reduce((total,char)=>((total*31)+char.charCodeAt(0))>>>0,0);
}

export function selectRecommendation(ranked,checkin={},variation=0){
  if(!ranked.length)return [];
  const available=Number(checkin.time)||60;
  const maximum=available<=20?1:available<=45?2:available<=90?3:4;
  const best=ranked[0].score;
  const close=ranked.filter(result=>result.score>=best-3).slice(0,8);
  const primary=close[(checkinHash(checkin)+variation)%close.length];
  if(primary.entry.kind==='ritual')return [primary];

  const selected=[primary];
  let suggested=Number(primary.entry.duration)||30;
  const remaining=ranked.filter(result=>result!==primary);
  while(selected.length<maximum){
    const next=remaining.find(result=>{
      if(selected.includes(result))return false;
      const duration=Number(result.entry.duration)||30;
      if(suggested+duration>available)return false;
      const sameSubtype=selected.some(item=>item.entry.subtype&&item.entry.subtype===result.entry.subtype);
      return !sameSubtype&&result.entry.kind!=='ritual';
    });
    if(!next)break;
    selected.push(next);
    suggested+=Number(next.entry.duration)||30;
  }
  return selected;
}
