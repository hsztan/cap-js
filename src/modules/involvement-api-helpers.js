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

export const getComments = async (endPoint, itemId) => {
  console.log(endPoint);
  try {
    const url = `${endPoint}?item_id=${itemId}`;
    console.log(url);
    const comments = await fetch(url);
    return await comments.json();
  } catch (error) {
    return [];
  }
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

export const postComment = async (endPoint, data) => {
  // console.log(data);
  try {
    const result = await fetch(endPoint, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(result.text());
  } catch (error) {
    return error.message;
  }
};

