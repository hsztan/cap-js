// import getShows from '../src/modules/shows-api-helpers';
import * as fs from 'fs';
import mockGetShows from '../src/modules/shows-api-helpers';
import mockData from '../src/modules/mock-data';
import { shows, showEndpoints } from '../src/modules/globals';
import { displayItemsCount, displayTVShows } from '../src/modules/api-dom';

jest.mock('../src/modules/shows-api-helpers');
mockGetShows.mockImplementation(() => Promise.resolve(mockData));

describe('displayItemsCount', () => {
  beforeAll(() => {
    document.body.innerHTML = fs.readFileSync('dist/index.html');
  });
  it('Displays the amount of objects fetched from the API', async () => {
    const tvShows = await mockGetShows('fakeEndpoint', [1, 3, 4, 5, 6, 7]);
    shows.push(...tvShows);
    const expected = tvShows.length;
    const showsCount = displayItemsCount();
    expect(showsCount).toBe(expected);
  });
});
