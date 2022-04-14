import * as Helpers from '../src/modules/involvement-api-helpers'
import { getCommentCount } from '../src/modules/helpers-api-dom'
import mockComment from './mock-comment';
jest.mock('../src/modules/involvement-api-helpers');
Helpers.getMovieComment = jest.fn((id) => Promise.resolve(mockComment));
