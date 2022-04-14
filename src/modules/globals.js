export const shows = [];
export const likes = [];
// const involvementID = 'kRRjieBzj8pkjFUnklmh';
// const involvementID = 'kRRjieBzj8pkjFUnklmh';
const involvementID = 'BnTzJ7Tc26oItwsOw3wZ';

export const involvementEndpoints = {
  likes: `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${involvementID}/likes`,
  comments: `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${involvementID}/comments`,
};

export const showEndpoints = {
  shows: 'https://api.tvmaze.com/shows',
};
