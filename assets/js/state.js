import {CATALOG,CATALOGUE_VERSION,PLAN_TEMPLATES,SCHEMA_VERSION} from './data.js';
import {loadState,saveState} from './storage.js';
export const uid=prefix=>prefix+'_'+Date.now().toString(36)+'_'+Math.random().toString(36).slice(2,7);
export function initialState(){return {schemaVersion:SCHEMA_VERSION,catalogueVersion:CATALOGUE_VERSION,route:'inicio',homeMode:'ocupado',catalog:structuredClone(CATALOG),library:[],favorites:[],collections:[],interests:['Descanso','Creatividad'],plans:PLAN_TEMPLATES.map(x=>({...x,template:true,date:null,description:'',daysData:[]})),memories:[],projects:[],ritualDraft:null,activeRitual:null,settings:{busyDays:[1,2,3,4,5],theme:'light',reminder:false,reminderTime:'19:00'}}}
export let state=initialState();
let persistTimer;
function migrateV2(legacy){
  const next=initialState();
  const items=[...(legacy.activities||[]),...(legacy.experiences||[]),...(legacy.rituals||[])];
  next.library=items.map(item=>({id:uid('exp'),legacyId:item.id,title:item.name,family:(item.cats||[])[0]||'Descubrimientos',duration:Number(item.duration)||30,energy:item.energy||'Variable',description:item.description||item.guide||'',tags:(item.cats||[]).slice(1),icon:'leaf',personal:true,legacyCover:item.cover||null}));
  next.projects=(legacy.projects||[]).map(item=>({id:uid('project'),legacyId:item.id,title:item.name,description:item.description||'',steps:item.steps||[],resources:item.resources||''}));
  next.plans.push(...(legacy.plans||[]).filter(plan=>!plan.template).map(plan=>({id:uid('plan'),legacyId:plan.id,title:plan.name,description:plan.description||'',company:plan.people||'Solo',date:plan.date||null,days:Number(plan.days)||1,template:false,daysData:(plan.schedule||[]).map(day=>({title:day.title,entries:(day.blocks||[]).map(block=>({kind:'activity',label:block.what,time:block.when,legacyRef:block.ref||null}))}))})));
  next.memories=(legacy.memories||[]).map(memory=>({id:uid('memory'),legacyId:memory.id,kind:'session',title:memory.name||'Momento',note:memory.note||'',at:memory.at||new Date().toISOString(),seconds:Number(memory.seconds)||0,highlighted:Boolean(memory.favorite),legacyItemId:memory.itemId||null}));
  next.settings.theme=legacy.settings?.theme==='Oscuro'?'dark':'light';
  return next;
}
export async function hydrate(){try{const saved=await loadState();if(saved?.schemaVersion===SCHEMA_VERSION){state={...initialState(),...saved,catalogueVersion:CATALOGUE_VERSION,catalog:structuredClone(CATALOG)};await saveState(state);return}const raw=localStorage.getItem('ukiyo_v2_proto_2026_11');if(raw){const legacy=JSON.parse(raw);if(Array.isArray(legacy.activities)){state=migrateV2(legacy);await saveState(state)}}}catch(error){console.warn('No se pudo recuperar el estado local',error)}}
export function update(mutator){mutator(state);clearTimeout(persistTimer);persistTimer=setTimeout(()=>saveState(state).catch(error=>console.warn('No se pudo guardar',error)),80)}
export async function replaceState(next){if(!next||next.schemaVersion!==SCHEMA_VERSION)throw new Error('El respaldo no corresponde a Ukiyo B3');state=structuredClone(next);await saveState(state)}
