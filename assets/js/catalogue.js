// Catálogo B3 proporcionado por el equipo de producto. Las semillas son inmutables.
export const CATALOGUE_SCHEMA = "b3-catalogue-draft-1";
export const TAG_TAXONOMY = {
  "category": [
    "Descanso",
    "Creatividad",
    "Exploración",
    "Entretenimiento",
    "Descubrimientos"
  ],
  "energy": [
    "muy-baja",
    "baja",
    "media",
    "alta",
    "variable"
  ],
  "intention": [
    "descansar",
    "desconectar",
    "calma",
    "preparar-sueno",
    "activarse-suave",
    "bienestar-emocional",
    "conexion",
    "disfrutar",
    "crear",
    "curiosidad",
    "explorar",
    "aprender"
  ],
  "place": [
    "interior",
    "exterior",
    "interior-alternativa"
  ],
  "company": [
    "solo",
    "pareja",
    "amigos",
    "familia",
    "amigo",
    "acompanado"
  ],
  "type": [
    "ritual",
    "actividad",
    "obra",
    "proyecto"
  ]
};
export const RECOMMENDATION_RULES = {
  "confirmed": [
    "Check-in opcional; tiempo, energía e intención pueden omitirse.",
    "Proponer una secuencia principal editable, no un listado infinito.",
    "Permitir omitir, sustituir, reordenar, añadir y ajustar duraciones.",
    "No imponer duración total exacta.",
    "Evitar exceso de repetición; dar prioridad a materiales disponibles si se conoce esta información.",
    "Sin conexión ni IA externa obligatoria; recomendaciones por reglas locales.",
    "Tiempos reales de sesión sin contar pausas."
  ],
  "proposed": [
    "Tratar energía variable como no determinada; no asumir compatibilidad automática con energía muy baja.",
    "Tratar requisitos de salida, materiales y compañía como restricciones blandas salvo incompatibilidad expresa.",
    "Para duraciones largas ofrecer fragmentar solo si la actividad admite sesiones parciales.",
    "Distinguir duración sugerida del tiempo real y del estado de avance de obras/proyectos."
  ]
};
export const SEED_ENTRIES = [
  {
    "id": "rit-desconectar",
    "title": "Desconectar después del trabajo",
    "kind": "ritual",
    "category": "Descanso",
    "secondary_categories": [],
    "subtype": null,
    "estimated_minutes": 45,
    "energy": "baja",
    "place": [
      "interior"
    ],
    "company": [
      "solo"
    ],
    "intentions": [
      "desconectar",
      "calma"
    ],
    "tags": [
      "post-trabajo",
      "en-casa",
      "sin-pantalla-opcional",
      "relajacion",
      "baja-preparacion"
    ],
    "summary": "Un cambio de ritmo después de un día ocupado.",
    "steps": [
      {
        "title": "Ducha tibia",
        "minutes": 20,
        "guidance": "Una ducha cómoda; temperatura a tu gusto."
      },
      {
        "title": "Música tranquila",
        "minutes": 15,
        "guidance": "Escucha algo que te ayude a bajar revoluciones."
      },
      {
        "title": "Respiración o pausa",
        "minutes": 10,
        "guidance": "Respira con naturalidad o permanece en calma."
      }
    ],
    "materials": [
      "Acceso a ducha (opcional)",
      "Música (opcional)"
    ],
    "resources": [],
    "warnings": [
      "Evita temperaturas de agua que te resulten incómodas.",
      "No fuerces la respiración."
    ],
    "progress": null,
    "origin": "base",
    "notes": null,
    "editable_on_save": true,
    "timer_optional": true,
    "reflection_optional": true,
    "photos_optional": true
  },
  {
    "id": "rit-despejar",
    "title": "Despejar cuerpo y mente",
    "kind": "ritual",
    "category": "Descanso",
    "secondary_categories": [
      "Exploración"
    ],
    "subtype": null,
    "estimated_minutes": 45,
    "energy": "media",
    "place": [
      "exterior",
      "interior-alternativa"
    ],
    "company": [
      "solo",
      "acompanado"
    ],
    "intentions": [
      "desconectar",
      "activarse-suave",
      "calma"
    ],
    "tags": [
      "movimiento-suave",
      "aire-libre",
      "paseo",
      "movilidad",
      "requiere-salida-opcional"
    ],
    "summary": "Movimiento amable para recuperar claridad.",
    "steps": [
      {
        "title": "Paseo cómodo",
        "minutes": 30,
        "guidance": "Camina a un ritmo agradable, sin convertirlo en entrenamiento."
      },
      {
        "title": "Movilidad suave",
        "minutes": 15,
        "guidance": "Mueve las articulaciones sin dolor y sin forzar amplitudes."
      }
    ],
    "materials": [
      "Calzado cómodo (si sales)"
    ],
    "resources": [],
    "warnings": [
      "Adapta o sustituye el paseo según clima y seguridad del entorno.",
      "Detén cualquier movimiento que produzca dolor."
    ],
    "progress": null,
    "origin": "base",
    "notes": null,
    "editable_on_save": true,
    "timer_optional": true,
    "reflection_optional": true,
    "photos_optional": true
  },
  {
    "id": "rit-dormir",
    "title": "Prepararme para dormir",
    "kind": "ritual",
    "category": "Descanso",
    "secondary_categories": [],
    "subtype": null,
    "estimated_minutes": 45,
    "energy": "baja",
    "place": [
      "interior"
    ],
    "company": [
      "solo"
    ],
    "intentions": [
      "calma",
      "preparar-sueno"
    ],
    "tags": [
      "noche",
      "pre-sueno",
      "en-casa",
      "baja-estimulacion",
      "sin-pantalla-opcional"
    ],
    "summary": "Un cierre tranquilo antes de descansar.",
    "steps": [
      {
        "title": "Preparar ambiente",
        "minutes": 10,
        "guidance": "Reduce distracciones y acomoda luz y temperatura."
      },
      {
        "title": "Lectura tranquila",
        "minutes": 20,
        "guidance": "Lee algo agradable sin exigirte avanzar."
      },
      {
        "title": "Relajación muscular",
        "minutes": 15,
        "guidance": "Afloja el cuerpo con movimientos o descansos suaves."
      }
    ],
    "materials": [
      "Lectura opcional",
      "Lugar cómodo"
    ],
    "resources": [],
    "warnings": [
      "No fuerces estiramientos ni posturas."
    ],
    "progress": null,
    "origin": "base",
    "notes": null,
    "editable_on_save": true,
    "timer_optional": true,
    "reflection_optional": true,
    "photos_optional": true
  },
  {
    "id": "rit-emocional",
    "title": "Cuidar mi bienestar emocional",
    "kind": "ritual",
    "category": "Descanso",
    "secondary_categories": [],
    "subtype": null,
    "estimated_minutes": 30,
    "energy": "variable",
    "place": [
      "interior",
      "exterior"
    ],
    "company": [
      "solo",
      "amigo"
    ],
    "intentions": [
      "bienestar-emocional",
      "calma",
      "conexion"
    ],
    "tags": [
      "emociones",
      "journaling-opcional",
      "conversacion",
      "musica",
      "flexible"
    ],
    "summary": "Un espacio amable para reconocer cómo estás y acompañarte.",
    "steps": [
      {
        "title": "Escribir o hablar con un amigo",
        "minutes": 15,
        "guidance": "Elige escribir unas líneas, conversar con alguien de confianza o simplemente reflexionar."
      },
      {
        "title": "Música o contemplación",
        "minutes": 15,
        "guidance": "Cierra con música, silencio o una pausa agradable."
      }
    ],
    "materials": [
      "Cuaderno (opcional)",
      "Teléfono si eliges llamar"
    ],
    "resources": [],
    "warnings": [
      "No es una intervención terapéutica ni reemplaza apoyo profesional cuando sea necesario."
    ],
    "progress": null,
    "origin": "base",
    "notes": null,
    "editable_on_save": true,
    "timer_optional": true,
    "reflection_optional": true,
    "photos_optional": true
  },
  {
    "id": "rit-hora",
    "title": "Una hora para mí",
    "kind": "ritual",
    "category": "Descanso",
    "secondary_categories": [
      "Entretenimiento"
    ],
    "subtype": null,
    "estimated_minutes": 60,
    "energy": "variable",
    "place": [
      "interior"
    ],
    "company": [
      "solo"
    ],
    "intentions": [
      "disfrutar",
      "calma",
      "desconectar"
    ],
    "tags": [
      "autocuidado",
      "lectura",
      "en-casa",
      "pausa-larga"
    ],
    "summary": "Una hora flexible dedicada a disfrutar y recuperarte.",
    "steps": [
      {
        "title": "Ducha relajante",
        "minutes": 20,
        "guidance": "Hazla tan breve o larga como te resulte agradable."
      },
      {
        "title": "Lectura",
        "minutes": 25,
        "guidance": "Continúa una lectura que te guste."
      },
      {
        "title": "Pausa consciente",
        "minutes": 15,
        "guidance": "Termina con descanso sin tarea adicional."
      }
    ],
    "materials": [
      "Ducha opcional",
      "Libro opcional"
    ],
    "resources": [],
    "warnings": [
      "Ajusta o elimina cualquier paso que no te apetezca o no esté disponible."
    ],
    "progress": null,
    "origin": "base",
    "notes": null,
    "editable_on_save": true,
    "timer_optional": true,
    "reflection_optional": true,
    "photos_optional": true
  },
  {
    "id": "rit-minima",
    "title": "Recuperación mínima",
    "kind": "ritual",
    "category": "Descanso",
    "secondary_categories": [],
    "subtype": null,
    "estimated_minutes": 15,
    "energy": "muy-baja",
    "place": [
      "interior"
    ],
    "company": [
      "solo"
    ],
    "intentions": [
      "descansar",
      "calma"
    ],
    "tags": [
      "post-trabajo",
      "muy-baja-energia",
      "en-casa",
      "sin-materiales",
      "inicio-facil"
    ],
    "summary": "Una opción breve para días en los que queda poca energía.",
    "steps": [
      {
        "title": "Descansar cómodamente",
        "minutes": 5,
        "guidance": "Siéntate o recuéstate en un lugar agradable."
      },
      {
        "title": "Música tranquila",
        "minutes": 10,
        "guidance": "Escucha música suave o descansa en silencio."
      }
    ],
    "materials": [
      "Música opcional"
    ],
    "resources": [],
    "warnings": [
      "Si la música no ayuda, sustitúyela por silencio."
    ],
    "progress": null,
    "origin": "base",
    "notes": null,
    "editable_on_save": true,
    "timer_optional": true,
    "reflection_optional": true,
    "photos_optional": true
  },
  {
    "id": "ent-viaje-oeste",
    "title": "Viaje al Oeste",
    "kind": "obra",
    "category": "Entretenimiento",
    "secondary_categories": [
      "Descanso",
      "Descubrimientos"
    ],
    "subtype": "libro",
    "estimated_minutes": 30,
    "energy": "baja",
    "place": [
      "interior",
      "exterior"
    ],
    "company": [
      "solo"
    ],
    "intentions": [
      "disfrutar",
      "curiosidad",
      "calma"
    ],
    "tags": [
      "lectura",
      "libro",
      "narrativa",
      "continuable",
      "baja-energia"
    ],
    "summary": "Continúa la lectura de la novela clásica a tu ritmo.",
    "steps": [
      {
        "title": "Retomar lectura",
        "minutes": 30,
        "guidance": "Abre el libro y continúa desde el capítulo que elijas."
      }
    ],
    "materials": [
      "Acceso al libro"
    ],
    "resources": [],
    "warnings": [],
    "progress": {
      "status": "en-progreso-ejemplo",
      "note": "Capítulo actual por registrar"
    },
    "origin": "base",
    "notes": null,
    "editable_on_save": true,
    "timer_optional": true,
    "reflection_optional": true,
    "photos_optional": true
  },
  {
    "id": "ent-chihiro",
    "title": "El viaje de Chihiro",
    "kind": "obra",
    "category": "Entretenimiento",
    "secondary_categories": [],
    "subtype": "pelicula",
    "estimated_minutes": 120,
    "energy": "baja",
    "place": [
      "interior"
    ],
    "company": [
      "solo",
      "pareja",
      "amigos",
      "familia"
    ],
    "intentions": [
      "disfrutar",
      "desconectar"
    ],
    "tags": [
      "pelicula",
      "animacion",
      "audiovisual",
      "sesion-larga"
    ],
    "summary": "Disfruta la película sin otras obligaciones.",
    "steps": [
      {
        "title": "Ver película",
        "minutes": 120,
        "guidance": "Prepara un lugar cómodo y reproduce la obra desde una fuente a la que tengas acceso."
      }
    ],
    "materials": [
      "Acceso legítimo a la película",
      "Pantalla y audio"
    ],
    "resources": [],
    "warnings": [],
    "progress": {
      "status": "pendiente-ejemplo"
    },
    "origin": "base",
    "notes": null,
    "editable_on_save": true,
    "timer_optional": true,
    "reflection_optional": true,
    "photos_optional": true
  },
  {
    "id": "ent-stranger",
    "title": "Stranger Things",
    "kind": "obra",
    "category": "Entretenimiento",
    "secondary_categories": [],
    "subtype": "serie",
    "estimated_minutes": 50,
    "energy": "baja",
    "place": [
      "interior"
    ],
    "company": [
      "solo",
      "pareja",
      "amigos"
    ],
    "intentions": [
      "disfrutar",
      "curiosidad"
    ],
    "tags": [
      "serie",
      "audiovisual",
      "continuable",
      "episodios"
    ],
    "summary": "Mira un episodio o una parte de la serie.",
    "steps": [
      {
        "title": "Ver episodio",
        "minutes": 50,
        "guidance": "Selecciona el episodio y retoma tu progreso."
      }
    ],
    "materials": [
      "Acceso legítimo a la serie"
    ],
    "resources": [],
    "warnings": [],
    "progress": {
      "status": "pendiente-ejemplo"
    },
    "origin": "base",
    "notes": null,
    "editable_on_save": true,
    "timer_optional": true,
    "reflection_optional": true,
    "photos_optional": true
  },
  {
    "id": "ent-stardew",
    "title": "Stardew Valley",
    "kind": "obra",
    "category": "Entretenimiento",
    "secondary_categories": [
      "Descanso"
    ],
    "subtype": "videojuego",
    "estimated_minutes": 45,
    "energy": "baja",
    "place": [
      "interior"
    ],
    "company": [
      "solo",
      "acompanado"
    ],
    "intentions": [
      "disfrutar",
      "desconectar",
      "crear"
    ],
    "tags": [
      "videojuego",
      "interactivo",
      "continuable",
      "relajante"
    ],
    "summary": "Disfruta una sesión flexible de juego.",
    "steps": [
      {
        "title": "Jugar libremente",
        "minutes": 45,
        "guidance": "Retoma tu partida y juega al ritmo que prefieras."
      }
    ],
    "materials": [
      "Juego instalado o disponible",
      "Dispositivo compatible"
    ],
    "resources": [],
    "warnings": [],
    "progress": {
      "status": "pendiente-ejemplo"
    },
    "origin": "base",
    "notes": null,
    "editable_on_save": true,
    "timer_optional": true,
    "reflection_optional": true,
    "photos_optional": true
  },
  {
    "id": "ent-abbey",
    "title": "Abbey Road",
    "kind": "obra",
    "category": "Entretenimiento",
    "secondary_categories": [
      "Descanso"
    ],
    "subtype": "album",
    "estimated_minutes": 45,
    "energy": "baja",
    "place": [
      "interior",
      "exterior"
    ],
    "company": [
      "solo",
      "acompanado"
    ],
    "intentions": [
      "disfrutar",
      "calma"
    ],
    "tags": [
      "musica",
      "album",
      "escucha",
      "baja-preparacion"
    ],
    "summary": "Escucha el álbum con atención o simplemente disfrútalo.",
    "steps": [
      {
        "title": "Escuchar álbum",
        "minutes": 45,
        "guidance": "Reproduce el álbum desde tu propia fuente de audio."
      }
    ],
    "materials": [
      "Acceso legítimo al álbum",
      "Audio opcional"
    ],
    "resources": [],
    "warnings": [],
    "progress": {
      "status": "pendiente-ejemplo"
    },
    "origin": "base",
    "notes": null,
    "editable_on_save": true,
    "timer_optional": true,
    "reflection_optional": true,
    "photos_optional": true
  },
  {
    "id": "ent-lego",
    "title": "LEGO Botanicals",
    "kind": "actividad",
    "category": "Entretenimiento",
    "secondary_categories": [
      "Creatividad"
    ],
    "subtype": "pasatiempo",
    "estimated_minutes": 50,
    "energy": "media",
    "place": [
      "interior"
    ],
    "company": [
      "solo",
      "pareja",
      "amigos",
      "familia"
    ],
    "intentions": [
      "disfrutar",
      "crear"
    ],
    "tags": [
      "manualidades",
      "construccion",
      "tactil",
      "materiales-especificos"
    ],
    "summary": "Arma un modelo a tu ritmo, disfrutando el proceso.",
    "steps": [
      {
        "title": "Preparar piezas",
        "minutes": 5,
        "guidance": "Organiza un espacio cómodo."
      },
      {
        "title": "Construir",
        "minutes": 45,
        "guidance": "Sigue las instrucciones o disfruta del proceso paso a paso."
      }
    ],
    "materials": [
      "Set compatible de LEGO Botanicals",
      "Espacio para trabajar"
    ],
    "resources": [],
    "warnings": [
      "Atiende las recomendaciones de edad y piezas pequeñas del producto."
    ],
    "progress": {
      "status": "pendiente-ejemplo"
    },
    "origin": "base",
    "notes": null,
    "editable_on_save": true,
    "timer_optional": true,
    "reflection_optional": true,
    "photos_optional": true
  },
  {
    "id": "cre-dibujo",
    "title": "Dibujo libre",
    "kind": "actividad",
    "category": "Creatividad",
    "secondary_categories": [
      "Descanso"
    ],
    "subtype": null,
    "estimated_minutes": 30,
    "energy": "media",
    "place": [
      "interior",
      "exterior"
    ],
    "company": [
      "solo",
      "acompanado"
    ],
    "intentions": [
      "crear",
      "calma"
    ],
    "tags": [
      "arte",
      "dibujo",
      "expresion",
      "flexible"
    ],
    "summary": "Bocetos sin objetivo ni resultado obligatorio.",
    "steps": [
      {
        "title": "Elegir materiales",
        "minutes": 5,
        "guidance": "Prepara papel o una herramienta digital."
      },
      {
        "title": "Dibujar libremente",
        "minutes": 25,
        "guidance": "Explora líneas, formas y escenas sin evaluarte."
      }
    ],
    "materials": [
      "Papel y lápiz o dispositivo de dibujo"
    ],
    "resources": [],
    "warnings": [],
    "progress": null,
    "origin": "base",
    "notes": null,
    "editable_on_save": true,
    "timer_optional": true,
    "reflection_optional": true,
    "photos_optional": true
  },
  {
    "id": "cre-escritura",
    "title": "Escritura creativa",
    "kind": "actividad",
    "category": "Creatividad",
    "secondary_categories": [],
    "subtype": null,
    "estimated_minutes": 30,
    "energy": "media",
    "place": [
      "interior",
      "exterior"
    ],
    "company": [
      "solo"
    ],
    "intentions": [
      "crear",
      "curiosidad"
    ],
    "tags": [
      "escritura",
      "narrativa",
      "expresion",
      "flexible"
    ],
    "summary": "Escribe una escena, poema, idea o relato breve.",
    "steps": [
      {
        "title": "Elegir una idea",
        "minutes": 5,
        "guidance": "Puedes partir de una frase o imagen mental."
      },
      {
        "title": "Escribir libremente",
        "minutes": 25,
        "guidance": "Escribe sin necesidad de terminar o corregir."
      }
    ],
    "materials": [
      "Cuaderno o editor de texto"
    ],
    "resources": [],
    "warnings": [],
    "progress": null,
    "origin": "base",
    "notes": null,
    "editable_on_save": true,
    "timer_optional": true,
    "reflection_optional": true,
    "photos_optional": true
  },
  {
    "id": "cre-foto",
    "title": "Fotografía",
    "kind": "actividad",
    "category": "Creatividad",
    "secondary_categories": [
      "Entretenimiento",
      "Exploración"
    ],
    "subtype": null,
    "estimated_minutes": 45,
    "energy": "media",
    "place": [
      "interior",
      "exterior"
    ],
    "company": [
      "solo",
      "acompanado"
    ],
    "intentions": [
      "crear",
      "curiosidad",
      "explorar"
    ],
    "tags": [
      "fotografia",
      "observacion",
      "visual",
      "paseo-opcional"
    ],
    "summary": "Encuentra composiciones o detalles cotidianos.",
    "steps": [
      {
        "title": "Buscar un tema",
        "minutes": 5,
        "guidance": "Elige una luz, color o textura que te interese."
      },
      {
        "title": "Tomar fotografías",
        "minutes": 40,
        "guidance": "Experimenta con ángulos y encuadres."
      }
    ],
    "materials": [
      "Cámara o teléfono"
    ],
    "resources": [],
    "warnings": [
      "Respeta la privacidad de otras personas y las normas del lugar."
    ],
    "progress": null,
    "origin": "base",
    "notes": null,
    "editable_on_save": true,
    "timer_optional": true,
    "reflection_optional": true,
    "photos_optional": true
  },
  {
    "id": "cre-cocina",
    "title": "Cocina creativa",
    "kind": "actividad",
    "category": "Creatividad",
    "secondary_categories": [
      "Entretenimiento"
    ],
    "subtype": null,
    "estimated_minutes": 60,
    "energy": "media",
    "place": [
      "interior"
    ],
    "company": [
      "solo",
      "pareja",
      "amigos",
      "familia"
    ],
    "intentions": [
      "crear",
      "disfrutar"
    ],
    "tags": [
      "gastronomia",
      "cocina",
      "practica",
      "preparacion"
    ],
    "summary": "Prueba una receta o reinventa una preparación conocida.",
    "steps": [
      {
        "title": "Elegir preparación",
        "minutes": 10,
        "guidance": "Revisa qué tienes disponible."
      },
      {
        "title": "Cocinar",
        "minutes": 40,
        "guidance": "Prepara la receta sin apresurarte."
      },
      {
        "title": "Disfrutar y recoger",
        "minutes": 10,
        "guidance": "Sirve, prueba y deja el espacio cómodo."
      }
    ],
    "materials": [
      "Ingredientes variables",
      "Utensilios de cocina"
    ],
    "resources": [],
    "warnings": [
      "Respeta medidas habituales de higiene alimentaria y seguridad al cocinar."
    ],
    "progress": null,
    "origin": "base",
    "notes": null,
    "editable_on_save": true,
    "timer_optional": true,
    "reflection_optional": true,
    "photos_optional": true
  },
  {
    "id": "cre-manualidades",
    "title": "Manualidades",
    "kind": "actividad",
    "category": "Creatividad",
    "secondary_categories": [
      "Entretenimiento"
    ],
    "subtype": null,
    "estimated_minutes": 45,
    "energy": "media",
    "place": [
      "interior"
    ],
    "company": [
      "solo",
      "pareja",
      "amigos",
      "familia"
    ],
    "intentions": [
      "crear",
      "disfrutar"
    ],
    "tags": [
      "manualidades",
      "tactil",
      "construccion",
      "materiales-variables"
    ],
    "summary": "Construye, pinta o decora algo sencillo.",
    "steps": [
      {
        "title": "Preparar materiales",
        "minutes": 5,
        "guidance": "Reúne lo que vas a utilizar."
      },
      {
        "title": "Crear libremente",
        "minutes": 40,
        "guidance": "Disfruta de probar técnicas o acabados."
      }
    ],
    "materials": [
      "Materiales según el proyecto"
    ],
    "resources": [],
    "warnings": [
      "Utiliza herramientas y adhesivos siguiendo las indicaciones del fabricante."
    ],
    "progress": null,
    "origin": "base",
    "notes": null,
    "editable_on_save": true,
    "timer_optional": true,
    "reflection_optional": true,
    "photos_optional": true
  },
  {
    "id": "cre-software",
    "title": "Desarrollo de software",
    "kind": "actividad",
    "category": "Creatividad",
    "secondary_categories": [
      "Descubrimientos"
    ],
    "subtype": null,
    "estimated_minutes": 60,
    "energy": "alta",
    "place": [
      "interior"
    ],
    "company": [
      "solo",
      "acompanado"
    ],
    "intentions": [
      "crear",
      "aprender",
      "curiosidad"
    ],
    "tags": [
      "programacion",
      "tecnologia",
      "proyecto",
      "pantalla",
      "concentracion"
    ],
    "summary": "Explora una idea o construye una herramienta personal.",
    "steps": [
      {
        "title": "Elegir un objetivo pequeño",
        "minutes": 10,
        "guidance": "Escoge una función, prueba o experimento."
      },
      {
        "title": "Experimentar o desarrollar",
        "minutes": 40,
        "guidance": "Construye, investiga o depura sin exigirte terminar."
      },
      {
        "title": "Anotar siguiente idea",
        "minutes": 10,
        "guidance": "Guarda lo que te gustaría retomar."
      }
    ],
    "materials": [
      "Computadora o dispositivo de desarrollo",
      "Herramientas locales necesarias"
    ],
    "resources": [],
    "warnings": [
      "Realiza respaldos o usa control de versiones antes de cambios importantes."
    ],
    "progress": null,
    "origin": "base",
    "notes": null,
    "editable_on_save": true,
    "timer_optional": true,
    "reflection_optional": true,
    "photos_optional": true
  },
  {
    "id": "proy-ukiyo",
    "title": "Desarrollar Ukiyo",
    "kind": "proyecto",
    "category": "Creatividad",
    "secondary_categories": [
      "Descubrimientos"
    ],
    "subtype": "proyecto",
    "estimated_minutes": 60,
    "energy": "alta",
    "place": [
      "interior"
    ],
    "company": [
      "solo",
      "acompanado"
    ],
    "intentions": [
      "crear",
      "aprender",
      "curiosidad"
    ],
    "tags": [
      "proyecto-personal",
      "programacion",
      "diseno",
      "tecnologia",
      "continuable",
      "sin-fecha-limite"
    ],
    "summary": "Proyecto demostrativo de varias sesiones: desarrollar y mejorar la aplicación Ukiyo.",
    "steps": [
      {
        "title": "Diseñar la experiencia",
        "minutes": null,
        "guidance": "Definir o revisar una pantalla, un flujo o una decisión de UX."
      },
      {
        "title": "Desarrollar funcionalidades",
        "minutes": null,
        "guidance": "Implementar un cambio pequeño y comprobable."
      },
      {
        "title": "Probar la aplicación",
        "minutes": null,
        "guidance": "Recorrer el flujo y registrar incidencias."
      },
      {
        "title": "Preparar versión instalable",
        "minutes": null,
        "guidance": "Revisar empaquetado y requisitos Android cuando corresponda."
      }
    ],
    "materials": [
      "Dispositivo de desarrollo",
      "Repositorio del proyecto"
    ],
    "resources": [],
    "warnings": [],
    "progress": {
      "status": "ejemplo-editable",
      "next_step": null,
      "no_deadline": true
    },
    "origin": "base",
    "notes": "Las etapas son opcionales, no se ejecutan obligatoriamente en una sesión. Duración de 60 minutos es sugerencia para una sesión, no estimación de proyecto.",
    "editable_on_save": true,
    "timer_optional": true,
    "reflection_optional": true,
    "photos_optional": true
  }
];
