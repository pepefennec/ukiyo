function timeFits(activity, availableTime) {
  if (availableTime === 'Flexible' || activity.duration === 'Flexible') return true;
  const durationRank = {'5–15 min':1,'15–30 min':2,'30–60 min':3,'1–2 h':4,'Más de 2 h':5};
  const timeRank = {'15 minutos':1,'30 minutos':2,'1 hora':3,'1–2 horas':4,'Flexible':5};
  return (durationRank[activity.duration] || 3) <= (timeRank[availableTime] || 3) + 1;
}

function energyFits(activity, energy) {
  if (energy === 'Baja') return activity.energy === 'Baja' || activity.energy === 'Variable';
  if (energy === 'Media') return activity.energy !== 'Alta';
  return true;
}

function intentionFits(activity, intention) {
  switch (intention) {
    case 'Crear': return activity.category === 'Creatividad';
    case 'Explorar': return activity.category === 'Exploración';
    case 'Tranquilizarme': return activity.category === 'Tranquilidad' || activity.energy === 'Baja';
    case 'Entretenerme': return activity.category === 'Entretenimiento';
    case 'Desconectar': return ['Desconexión','Tranquilidad','Entretenimiento'].includes(activity.category);
    default: return true;
  }
}

export function getRecommendations(activities, preferences, offset = 0) {
  const activeActivities = activities.filter(activity => activity.status !== 'Archivada');
  return activities
    .filter(activity => activity.status !== 'Archivada')
    .map((activity, index) => ({
      ...activity,
      recommendationOrder: (index - offset + activeActivities.length) % activeActivities.length,
      score:
        (intentionFits(activity, preferences.intention) ? 4 : 0) +
        (timeFits(activity, preferences.time) ? 2 : 0) +
        (energyFits(activity, preferences.energy) ? 2 : 0)
    }))
    .sort((a, b) => b.score - a.score || a.recommendationOrder - b.recommendationOrder)
    .slice(0, 3);
}
