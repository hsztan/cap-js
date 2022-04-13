import { shows,involvmentEndpoints } from './globals';
import { getComments } from './involvement-api-helpers';
export const commentButtonClick =  button => {
  button.addEventListener('click', async e => {
    const show = shows[Number(button.dataset.id)];
    const commentContainer = document.getElementById('comment-popup');
    const closePopup = document.getElementById('close-popup');
    commentContainer.classList.toggle('hide', false)
    closePopup.addEventListener('click', () => {
      commentContainer.classList.toggle('hide', true)
    });
    const movieCover = document.getElementById('movie-cover').querySelector('img');
    movieCover.src = show.image.medium;
    const movieTitle = document.getElementById('movie-cover').querySelector('.caption');
    movieTitle.textContent = show.name;
    const details = document.getElementById('detail').querySelectorAll('ul');
    details[0].innerHTML=`<li><h3>Genres</h3></li>`;
    details[1].innerHTML=`<li><h3>Country</h3></li>`;
    show.genres.slice(-5).forEach(genre => {
      const li = `<li><p>${genre}</p></li>`;
      details[0].insertAdjacentHTML('beforeend', li);
    });
    Object.values(show.network.country).slice(-5).forEach(country => {
      const li = `<li><p>${country}</p></li>`;
      details[1].insertAdjacentHTML('beforeend', li);
    })
    const data=await getComments(involvmentEndpoints.base,'Ar2NMDv10jZ3pBmgm0tK',show.id);
    console.log(data);
    // console.log(shows[Number(button.dataset.id)]);
  });
}
