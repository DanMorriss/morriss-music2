//Toggle Sheet Music Containers
const sheetMusicHeading = document.getElementsByClassName('dropdown-header');
const songList = document.getElementsByClassName('dropdown-content');
for (let i = 0; i < 7; i++) {
    sheetMusicHeading[i].addEventListener('click', function(e) {
      songList[i].classList.toggle('hide');
  });
  }