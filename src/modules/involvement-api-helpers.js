export const getLikes = async (endpoint) => {
  let data;
  try {
    const response = await fetch(endpoint);
    data = await response.json();
  } catch (error) {
    return error.message;
  }
  return data;
};

export const getComments = async (id) => {
  try {
  } catch (error) {}
};

export const postLike = async (endpoint, id) => {
  let response;
  try {
    response = await fetch(endpoint, {
      method: 'POST',
      body: JSON.stringify({
        item_id: id,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    return error.message;
  }
  return response.ok;
};

export const postComment = async (id) => {
  try {
  } catch (error) {}
};
