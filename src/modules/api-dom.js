import { shows, showEndpoints } from './globals';
import { getShows } from './shows-api-helpers';

const mainContainer = document.querySelector('main');

console.log('start');
export const setShows = async () => {
  const allShows = await getShows(showEndpoints.shows, [1, 5, 7, 3, 6, 9]);
  shows.push(...allShows);
  console.log(shows);
};

export const displayTVShows = async () => {
  await setShows();
  // create artcile element
  shows.forEach((show) => {
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
              class="likes"
              >5 likes</span
            >
          </p>
        </figcaption>
        <button class="btn" data-id="${show.id}" type="button">Comments</button>
    `;
    mainContainer.appendChild(articleElem);
  });
};

/* <figure>
       <img src="${show.image.medium}" alt="picture" />
     </figure>
     <figcaption>
       <p>${show.name}</p>
       <p>
         <span><i class="fa-solid fa-heart"></ispan><br /><span
           class="likes"
           >5 likes</span
         >
       </p>
     </figcaption>
     <button class="btn" data-id="${show.id}" type="button">Commentbutton></button> */
