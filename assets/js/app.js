import {hydrate} from './state.js';
import {initializeApp} from './ui.js';
await hydrate();
initializeApp();
if('serviceWorker' in navigator)navigator.serviceWorker.register('./sw.js').catch(error=>console.warn('Modo offline no disponible',error));
