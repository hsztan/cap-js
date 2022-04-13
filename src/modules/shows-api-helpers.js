/* eslint-disable import/prefer-default-export */
export default async (endpoint, showsIDs) => {
  let data;
  try {
    const promises = [];
    const fetches = [];
    for (let i = 0; i < showsIDs.length; i += 1) {
      const url = `${endpoint}/${showsIDs[i]}`;
      fetches.push(fetch(url));
    }
    const responses = await Promise.all(fetches);
    responses.forEach((response) => {
      promises.push(response.json());
    });
    data = await Promise.all(promises);
  } catch (error) {
    return error.message;
  }
  return data;
};
