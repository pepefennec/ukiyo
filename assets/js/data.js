import {SEED_ENTRIES,TAG_TAXONOMY} from './catalogue.js';

export const SCHEMA_VERSION = 3;
export const CATALOGUE_VERSION = 'b3-definitive-1';
export const FAMILIES = TAG_TAXONOMY.category;

const ICONS={ritual:'leaf',libro:'book',pelicula:'film',serie:'film',videojuego:'gamepad',album:'headphones',pasatiempo:'leaf',proyecto:'code',actividad:'pencil'};
const label=value=>value==='muy-baja'?'Muy baja':value.charAt(0).toUpperCase()+value.slice(1);

const BASE_CATALOG = SEED_ENTRIES.map(entry=>({
  ...entry,
  family:entry.category,
  duration:entry.estimated_minutes,
  energy:label(entry.energy),
  description:entry.summary,
  instructions:entry.steps?.[0]?.guidance||entry.summary,
  icon:ICONS[entry.subtype]||ICONS[entry.kind]||'leaf',
  catalogueVersion:CATALOGUE_VERSION
}));

const slug=value=>value.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'');
const energyRank={'Muy baja':0,'Baja':1,'Media':2,'Alta':3,'Variable':4};
const selfCareByTitle=new Map();
for(const ritual of BASE_CATALOG.filter(entry=>entry.kind==='ritual')){
  for(const step of ritual.steps||[]){
    const id=`care-${slug(step.title)}`;
    const current=selfCareByTitle.get(id);
    if(current){
      current.duration=Math.min(current.duration,Number(step.minutes)||current.duration);
      current.estimated_minutes=current.duration;
      current.energy=energyRank[ritual.energy]<energyRank[current.energy]?ritual.energy:current.energy;
      current.intentions=[...new Set([...current.intentions,...ritual.intentions])];
      current.tags=[...new Set([...current.tags,...ritual.tags])];
      current.sourceRitualIds.push(ritual.id);
      continue;
    }
    selfCareByTitle.set(id,{
      id,title:step.title,kind:'actividad',category:'Descanso',family:'Descanso',secondary_categories:[],subtype:'autocuidado',
      estimated_minutes:Number(step.minutes)||10,duration:Number(step.minutes)||10,energy:ritual.energy,
      place:[...(ritual.place||[])],company:[...(ritual.company||[])],intentions:[...(ritual.intentions||[])],
      tags:[...new Set(['autocuidado','paso-independiente',...(ritual.tags||[])])],description:step.guidance,instructions:step.guidance,
      summary:step.guidance,steps:[],materials:[...(ritual.materials||[])],resources:[],warnings:[...(ritual.warnings||[])],progress:null,
      origin:'derived-ritual-step',notes:'También forma parte de un ritual de autocuidado.',editable_on_save:true,timer_optional:true,
      reflection_optional:true,photos_optional:true,icon:'leaf',sourceRitualIds:[ritual.id],catalogueVersion:CATALOGUE_VERSION
    });
  }
}

export const SELF_CARE_ACTIVITIES=[...selfCareByTitle.values()];
export const CATALOG=[...BASE_CATALOG,...SELF_CARE_ACTIVITIES];

export const PLAN_TEMPLATES = [
  {id:'tpl-solo',title:'Un día para mí',company:'Solo',days:1},
  {id:'tpl-pareja',title:'Fin de semana juntos',company:'Pareja',days:2},
  {id:'tpl-amigos',title:'Tres días con amigos',company:'Amigos',days:3},
  {id:'tpl-familia',title:'Una semana en familia',company:'Familia',days:7}
];
