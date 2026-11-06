export const DEFAULT_ACTIVITIES = [
  {id:1,name:'Escuchar música',category:'Desconexión',duration:'15–30 min',energy:'Baja',icon:'♫',status:'Pendiente',type:'Recurrente',description:'Pon algo que te guste y deja que el momento fluya.',url:'',image:''},
  {id:2,name:'Dibujar un rato',category:'Creatividad',duration:'Flexible',energy:'Media',icon:'✎',status:'Pendiente',type:'Recurrente',description:'Crear sin preocuparte por el resultado.',url:'',image:''},
  {id:3,name:'Leer',category:'Tranquilidad',duration:'15–30 min',energy:'Baja',icon:'▤',status:'Pendiente',type:'Recurrente',description:'Leer unas páginas sin prisa.',url:'',image:''},
  {id:4,name:'Salir a caminar',category:'Exploración',duration:'30–60 min',energy:'Media',icon:'↗',status:'Pendiente',type:'Recurrente',description:'Cambiar de ambiente y recorrer un lugar.',url:'',image:''},
  {id:5,name:'Ver una película',category:'Entretenimiento',duration:'1–2 h',energy:'Baja',icon:'▣',status:'Pendiente',type:'Experiencia',description:'Una película que tenías ganas de ver.',url:'',image:''}
];

export const MOOD_OPTIONS = [['agobiado','😮‍💨','Agobiado'],['bajo','😔','Bajo de ánimo'],['neutral','😐','Neutral'],['tranquilo','😌','Tranquilo'],['animado','😊','Animado']];
export const ENERGY_OPTIONS = ['Baja','Media','Alta','Variable'];
export const TIME_OPTIONS = ['15 minutos','30 minutos','1 hora','1–2 horas','Flexible'];
export const INTENTIONS = [['Desconectar','☁'],['Crear','✎'],['Explorar','⌖'],['Tranquilizarme','☕'],['Entretenerme','▣'],['Lo que surja','✧']];
export const CATEGORIES = ['Desconexión','Creatividad','Exploración','Tranquilidad','Entretenimiento'];
export const DURATION_OPTIONS = ['5–15 min','15–30 min','30–60 min','1–2 h','Más de 2 h','Flexible'];

export const iconFor = category => ({
  'Desconexión':'☁',
  'Creatividad':'✎',
  'Exploración':'⌖',
  'Tranquilidad':'☕',
  'Entretenimiento':'▣'
}[category] || '✧');
