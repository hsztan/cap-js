export const getLikes = async (id) => {
  try {
  } catch (error) {}
};

export const getComments = async (endPoint, appId, itemId) => {
  try {
    const comments=await fetch(`${endPoint}/apps/${appId}/comments?item_id=item1`);
    return await comments.json();
  } catch (error) {
    return [];
  }
};

export const postLike = async (id) => {
  try {
  } catch (error) {}
};

export const postComment = async (id) => {
  try {
    const result=await fetch(`${endPoint}/apps/${appId}/comments/`);
    console.log(result.text());
  } catch (error) {}
};
