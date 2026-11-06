import {SEED_ENTRIES,TAG_TAXONOMY} from './catalogue.js';

export const SCHEMA_VERSION = 3;
export const CATALOGUE_VERSION = 'b3-definitive-1';
export const FAMILIES = TAG_TAXONOMY.category;

const ICONS={ritual:'leaf',libro:'book',pelicula:'film',serie:'film',videojuego:'gamepad',album:'headphones',pasatiempo:'leaf',proyecto:'code',actividad:'pencil'};
const label=value=>value==='muy-baja'?'Muy baja':value.charAt(0).toUpperCase()+value.slice(1);

export const CATALOG = SEED_ENTRIES.map(entry=>({
  ...entry,
  family:entry.category,
  duration:entry.estimated_minutes,
  energy:label(entry.energy),
  description:entry.summary,
  instructions:entry.steps?.[0]?.guidance||entry.summary,
  icon:ICONS[entry.subtype]||ICONS[entry.kind]||'leaf',
  catalogueVersion:CATALOGUE_VERSION
}));

export const PLAN_TEMPLATES = [
  {id:'tpl-solo',title:'Un día para mí',company:'Solo',days:1},
  {id:'tpl-pareja',title:'Fin de semana juntos',company:'Pareja',days:2},
  {id:'tpl-amigos',title:'Tres días con amigos',company:'Amigos',days:3},
  {id:'tpl-familia',title:'Una semana en familia',company:'Familia',days:7}
];
