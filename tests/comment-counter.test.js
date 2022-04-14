import * as Helpers from '../src/modules/involvement-api-helpers';
import { getCommentCount } from '../src/modules/helpers-api-dom';
import mockComment from './mock-comment';

jest.mock('../src/modules/involvement-api-helpers');
Helpers.getMovieComment = jest.fn(() => Promise.resolve(mockComment));
describe('get comments count', () => {
  const newComment = {
    username: 'Henry Nawrocki',
    creation_date: '2022-04-14',
    comment: 'Beautiful Series',
  };
  it('assert comment count increase on adding comment', async () => {
    let commentCount = await getCommentCount(1);
    expect(commentCount).toBe(0);
    mockComment.push(newComment);
    commentCount = await getCommentCount(1);
    expect(commentCount).toBe(1);
    mockComment.push(newComment);
    commentCount = await getCommentCount(1);
    expect(commentCount).toBe(2);
  });
});