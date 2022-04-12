import { shows, showEndpoints } from './globals';
import { getShows } from './shows-api-helpers';

console.log('start');
export const displayShows = async () => {
  const allShows = await getShows(showEndpoints.shows, [1, 5, 7, 3, 6, 9]);
  shows.push(...allShows);
  console.log(shows);
};
