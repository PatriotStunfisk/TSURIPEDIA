export type WeatherKind = 'sun' | 'cloud' | 'rain' | 'snow' | 'storm';
/** Summarize the main forecast; localized exceptions remain in the full forecast. */
export function describeWeather(text: string) {
  const main = text.split('所により')[0];
  const matches = main.match(/晴れ?|くもり|曇り?|雨|雪|雷/g) ?? [];
  const kinds = [...new Set(matches.map((word): WeatherKind =>
    word.startsWith('晴') ? 'sun' : /くもり|曇/.test(word) ? 'cloud' : word === '雨' ? 'rain' : word === '雪' ? 'snow' : 'storm'))];
  const labels = { sun: '晴れ', cloud: '曇り', rain: '雨', snow: '雪', storm: '雷' };
  return { kinds, label: kinds.map(kind => labels[kind]).join('・') || text };
}
