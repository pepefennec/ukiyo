export const SCHEMA_VERSION = 3;
export const FAMILIES = ['Descanso','Creatividad','Exploración','Entretenimiento','Descubrimientos'];
export const CATALOG = [
  {id:'seed-descanso-minimo',title:'Recuperación mínima',family:'Descanso',icon:'leaf',duration:10,energy:'Baja',tags:['calma','sin pantalla'],description:'Un momento breve para descansar sin exigencias.',instructions:'Busca una postura cómoda, baja el ritmo y respira con naturalidad.',materials:[]},
  {id:'seed-paseo',title:'Paseo sin prisa',family:'Exploración',icon:'footprints',duration:30,energy:'Media',tags:['exterior','movimiento'],description:'Caminar por un lugar conocido prestando atención al entorno.',instructions:'Elige un recorrido seguro y vuelve cuando lo desees.',materials:[]},
  {id:'seed-dibujo',title:'Dibujo libre',family:'Creatividad',icon:'pencil',duration:25,energy:'Media',tags:['crear','papel'],description:'Dibujar sin buscar un resultado concreto.',instructions:'Empieza con una forma, una línea o cualquier idea pequeña.',materials:['Papel','Lápiz']},
  {id:'seed-escritura',title:'Escritura creativa',family:'Creatividad',icon:'pen',duration:20,energy:'Media',tags:['crear','reflexión'],description:'Escribir una escena, una idea o unas líneas libres.',instructions:'Escribe durante unos minutos sin corregir.',materials:['Cuaderno']},
  {id:'seed-musica',title:'Escuchar un álbum',family:'Entretenimiento',icon:'headphones',duration:45,energy:'Baja',tags:['música','interior'],description:'Escuchar un álbum completo con atención tranquila.',instructions:'Pon algo que disfrutes y deja el teléfono a un lado.',materials:[]},
  {id:'seed-cine',title:'El viaje de Chihiro',family:'Entretenimiento',icon:'film',duration:125,energy:'Baja',tags:['película','interior'],description:'Una noche de cine para dejarse llevar por otro mundo.',instructions:'Prepara un lugar cómodo y disfruta a tu ritmo.',materials:[]},
  {id:'seed-stardew',title:'Stardew Valley',family:'Entretenimiento',icon:'gamepad',duration:40,energy:'Baja',tags:['videojuego','calma'],description:'Un rato de juego sin objetivos ni presión.',instructions:'Elige una tarea agradable o simplemente recorre el mundo.',materials:[]},
  {id:'seed-fotografia',title:'Paseo fotográfico',family:'Descubrimientos',icon:'camera',duration:35,energy:'Media',tags:['exterior','curiosidad'],description:'Mirar un lugar cotidiano como si fuera nuevo.',instructions:'Busca cinco detalles que normalmente pasarían desapercibidos.',materials:['Cámara o teléfono']},
  {id:'seed-cocina',title:'Cocina creativa',family:'Creatividad',icon:'utensils',duration:60,energy:'Media',tags:['crear','hogar'],description:'Probar una receta nueva o cambiar una conocida.',instructions:'Elige algo sencillo y disfruta también la preparación.',materials:['Ingredientes']},
  {id:'seed-leer',title:'Leer unas páginas',family:'Descanso',icon:'book',duration:25,energy:'Baja',tags:['lectura','calma'],description:'Volver a una historia sin obligación de avanzar mucho.',instructions:'Lee hasta que sientas que fue suficiente.',materials:['Libro']},
  {id:'seed-amigo',title:'Hablar con alguien de confianza',family:'Descubrimientos',icon:'message',duration:20,energy:'Variable',tags:['conexión','bienestar'],description:'Compartir un momento sencillo con alguien cercano.',instructions:'Pregunta primero si es un buen momento para conversar.',materials:[]},
  {id:'seed-software',title:'Construir una idea digital',family:'Creatividad',icon:'code',duration:45,energy:'Alta',tags:['proyecto','tecnología'],description:'Explorar una idea o construir una pequeña función.',instructions:'Elige un avance pequeño que te resulte interesante.',materials:['Computadora']}
];
export const RITUAL_TEMPLATES = [
  {id:'ritual-trabajo',title:'Desconectar después del trabajo',intent:'Desconectar',energy:'Baja',steps:[['seed-descanso-minimo',10],['seed-musica',20]]},
  {id:'ritual-cuerpo',title:'Despejar cuerpo y mente',intent:'Calma',energy:'Media',steps:[['seed-paseo',25],['seed-descanso-minimo',10]]},
  {id:'ritual-dormir',title:'Prepararme para dormir',intent:'Calma',energy:'Baja',steps:[['seed-leer',20],['seed-descanso-minimo',10]]},
  {id:'ritual-emocional',title:'Cuidar mi bienestar emocional',intent:'Disfrutar',energy:'Variable',steps:[['seed-escritura',15],['seed-amigo',15]]}
];
export const PLAN_TEMPLATES = [
  {id:'tpl-solo',title:'Un día para mí',company:'Solo',days:1},
  {id:'tpl-pareja',title:'Fin de semana juntos',company:'Pareja',days:2},
  {id:'tpl-amigos',title:'Tres días con amigos',company:'Amigos',days:3},
  {id:'tpl-familia',title:'Una semana en familia',company:'Familia',days:7}
];
