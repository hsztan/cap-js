export const shows = [];
export const likes = [];
const involvementID = 'L3n1Fgz2qZv3YeTDXtiE';

export const involvementEndpoints = {
  likes: `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${involvementID}/likes`,
  comments: `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${involvementID}/comments`,
};

export const showEndpoints = {
  shows: 'https://api.tvmaze.com/shows',
};
