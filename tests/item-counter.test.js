// import getShows from '../src/modules/shows-api-helpers';
import * as fs from 'fs';
import mockGetShows from '../src/modules/shows-api-helpers';
import mockData from './mock-data';
import { shows } from '../src/modules/globals';
import { displayItemsCount, displayTVShows } from '../src/modules/api-dom';

jest.mock('../src/modules/shows-api-helpers');
mockGetShows.mockImplementation(() => Promise.resolve(mockData));

describe('displayItemsCount', () => {
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('dist/index.html');
    shows.splice(0, shows.length);
  });
  it('counts the amount of tv-shows fetched from the API', async () => {
    const tvShows = await mockGetShows('fakeEndpoint', [1, 3, 4, 5, 6, 7]);
    shows.push(...tvShows);
    const expected = tvShows.length;
    const showsCount = displayItemsCount();
    expect(showsCount).toBe(expected);
  });
  it('displays the item count on the home-page', async () => {
    await displayTVShows();
    displayItemsCount();
    const expected = '(6)';
    const counterSelector = document.getElementById('shows-counter');
    expect(counterSelector.innerText).toBe(expected);
  });
});
