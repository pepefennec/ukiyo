import {DEFAULT_ACTIVITIES} from './data.js';

export const state = {
  tab: 'pausa',
  mood: 'neutral',
  energy: 'Baja',
  time: '30 minutos',
  intention: 'Desconectar',
  dailyNote: '',
  activities: DEFAULT_ACTIVITIES.map(activity => ({...activity})),
  history: [],
  activeSession: null,
  filter: 'Todas',
  search: '',
  editingId: null,
  recommendationOffset: 0
};
