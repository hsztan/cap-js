import { shows } from './globals';
import { involvementEndpoints } from './globals'
import { getComments, postComment } from './involvement-api-helpers'

const getMovieComment = async movieId => await getComments(involvementEndpoints.comments, movieId);
const postMovieComment = async data => await postComment(involvementEndpoints.comments, data);

export const commentButtonClick = (button) => {
  button.addEventListener('click', async () => {
    const show = shows[Number(button.dataset.id)];
    const commentContainer = document.getElementById('comment-popup');
    const closePopup = document.getElementById('close-popup');
    const commentFrom = commentContainer.querySelector('form');
    commentContainer.classList.toggle('hide', false);
    closePopup.addEventListener('click', () => {
      commentContainer.classList.toggle('hide', true);
    });
    const movieCover = document.getElementById('movie-cover').querySelector('img');
    movieCover.src = show.image.medium;
    const movieTitle = document.getElementById('movie-cover').querySelector('.caption');
    movieTitle.textContent = show.name;
    const details = document.getElementById('detail').querySelectorAll('ul');
    details[0].innerHTML = '<li><h3>Genres</h3></li>';
    details[1].innerHTML = '<li><h3>Country</h3></li>';
    show.genres.slice(-5).forEach((genre) => {
      const li = `<li><p>${genre}</p></li>`;
      details[0].insertAdjacentHTML('beforeend', li);
    });
    Object.values(show.network.country).slice(-5).forEach((country) => {
      const li = `<li><p>${country}</p></li>`;
      details[1].insertAdjacentHTML('beforeend', li);
    });
    try {
      const commentList = commentContainer.querySelector('#comment-list');
      const postResult = await getMovieComment(show.id);
      commentList.innerHTML=`<h1>comment <span>(${postResult.length})</span></h1>`;
      // <p>03/11/2021 Alex: I'd love to buy it!</p>
      // <p>03/11/2021 Mia: I love</p>
      console.log(postResult);
    } catch (error) {
      return ['no failed to fetch comment']
    }
    commentFrom.addEventListener('submit', (e) => {
      e.preventDefault();
      const name=commentFrom.querySelector('input').value;
      const message=commentFrom.querySelector('textarea').value;
      console.log(name);
      console.log(show.id);
      postMovieComment({
        "item_id": show.id,
        "username": name,
        "comment": message
      });
    });
    console.log(shows[Number(button.dataset.id)]);
  });
};

// REMOVE
export const X = 0;