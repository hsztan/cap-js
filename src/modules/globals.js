export const shows = [];
export const likes = [];
// const involvementID = 'kRRjieBzj8pkjFUnklmh';
const involvementID = 'LpjkxbOoouO6w5jth5ro';

export const involvementEndpoints = {
  likes: `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${involvementID}/likes`,
  comments: `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${involvementID}/comments`,
};

export const showEndpoints = {
  shows: 'https://api.tvmaze.com/shows',
};
