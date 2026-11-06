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
