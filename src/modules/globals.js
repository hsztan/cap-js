export const shows = [];
export const likes = [];
// const involvementID = 'kRRjieBzj8pkjFUnklmh';
// const involvementID = 'kRRjieBzj8pkjFUnklmh';
const involvementID = 'liC9ThW4ZLo9XW4PzXx2';

export const involvementEndpoints = {
  likes: `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${involvementID}/likes`,
  comments: `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${involvementID}/comments`,
};

export const showEndpoints = {
  shows: 'https://api.tvmaze.com/shows',
};
