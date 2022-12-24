const player = document.querySelector("#player");

const playSong = (id) => {
  player.src = `https://www.youtube.com/embed/${id}?autoplay=1`;
};
