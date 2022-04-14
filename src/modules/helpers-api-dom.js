import { shows, involvementEndpoints } from './globals';

import { getComments, postComment } from './involvement-api-helpers';

const getMovieComment = async (movieId) => {
  const movies = await getComments(involvementEndpoints.comments, movieId);
  return movies;
};
const postMovieComment = async (data) => postComment(involvementEndpoints.comments, data);

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
    const commentList = commentContainer.querySelector('#comment-list');
    let commentCounter = 0;
    try {
      const postResult = await getMovieComment(show.id);
      commentCounter = postResult.length || 0;
      commentList.innerHTML = `<h1>comment <span>(${commentCounter})</span></h1>`;
      postResult.forEach((comment) => {
        commentList.insertAdjacentHTML('beforeend', `<p>${comment.username}: ${comment.comment}</p>`);
      });
      console.log(postResult);
    } catch (error) {
      commentList.insertAdjacentHTML('beforeend', '<p id="simple-errore">ther are no comments</p>');
    }
    commentFrom.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = commentFrom.querySelector('input');
      const message = commentFrom.querySelector('textarea');
      console.log(name);
      console.log(show.id);
      postMovieComment({
        item_id: show.id,
        username: name.value,
        comment: message.value,
      });
      commentCounter += 1;
      commentList.insertAdjacentHTML('beforeend', `<p>${name.value}: ${message.value}</p>`);
      commentList.firstChild.innerHTML = `<h1>comment <span>(${commentCounter})</span></h1>`;
      commentList.removeChild(commentList.querySelector('#simple-errore'));
      name.value = '';
      message.value = '';
    });
    console.log(shows[Number(button.dataset.id)]);
  });
};

// REMOVE
export const X = 0;