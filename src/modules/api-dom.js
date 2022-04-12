import { shows, likes, showEndpoints, involvementEndpoints } from './globals';
import { getShows } from './shows-api-helpers';
import { getLikes } from './involvement-api-helpers';

const mainContainer = document.querySelector('main');

export const setShows = async () => {
  const allShows = await getShows(showEndpoints.shows, [1, 5, 7, 3, 6, 9]);
  shows.push(...allShows);
};

export const displayTVShows = async () => {
  await setShows();
  console.log(shows);
  // create artcile element
  shows.forEach((show, i) => {
    const articleElem = document.createElement('article');
    articleElem.classList.add('show');
    articleElem.innerHTML = `
       <figure>
          <img src="${show.image.medium}" alt="picture" />
        </figure>
        <figcaption>
          <p>${show.name}</p>
          <p>
            <span><i class="fa-solid fa-heart"></i></span><br /><span
              class="likes" id="like-${show.id}"
              >5 likes</span
            >
          </p>
        </figcaption>
        <button class="btn" data-id="${i}" type="button">Comments</button>
    `;
    mainContainer.appendChild(articleElem);
  });
};

export const displayLikes = async () => {
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
