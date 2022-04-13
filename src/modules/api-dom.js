import {
  shows, likes, showEndpoints, involvementEndpoints,
} from './globals';
import { getShows } from './shows-api-helpers';
import { getLikes, postLike } from './involvement-api-helpers';
import { commentButtonClick } from './helpers-api-dom'
const mainContainer = document.querySelector('main');

const setShows = async () => {
  const allShows = await getShows(showEndpoints.shows, [1, 5, 7, 3, 6, 9]);
  shows.push(...allShows);
};

const displayTVShows = async () => {
  await setShows();
  // create artcile element
  shows.forEach((show, i) => {
    const articleElem = document.createElement('article');
    articleElem.classList.add('show');
    articleElem.innerHTML = `
       <figure>
          <img class="show-img" src="${show.image.medium}" alt="picture" />
        </figure>
        <figcaption>
          <p>${show.name}</p>
          <p>
            <span class="hearts"><i data-id="${show.id}" class="fa-solid fa-heart"></i></span><br /><span
              class="likes" id="like-${show.id}"
              >5 likes</span
            >
          </p>
        </figcaption>
        <button class="btn" data-id="${i}" type="button">Comments</button>
    `;
    mainContainer.appendChild(articleElem);
  });
  const buttons = Array.from(document.querySelectorAll('.btn'));
  buttons.forEach(button => commentButtonClick(button));
};

const displayLikes = async () => {
  const data = await getLikes(involvementEndpoints.likes);
  likes.push(...data);
  // search containers for their corresponding id and set their value
  likes.forEach((like) => {
    const likeContainer = document.querySelector(`#like-${like.item_id}`);
    if (likeContainer) {
      likeContainer.innerText = `${like.likes} likes`;
    }
  });
};

const handleLike = async (eve) => {
  const likeElem = eve.target;
  const tvShowID = likeElem.dataset.id;
  await postLike(involvementEndpoints.likes, tvShowID);
  displayLikes();
};

const createLikes = async () => {
  const likesContainers = document.querySelectorAll('.hearts');
  likesContainers.forEach((likesContainer) => {
    likesContainer.addEventListener('click', handleLike);
  });
};

export default async () => {
  try {
    await displayTVShows();
    displayLikes();
    createLikes();
  } catch (error) {
    return error.message;
  }
  return true;
};
