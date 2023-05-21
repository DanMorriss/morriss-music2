const danImage = document.getElementById('dan-image');
const danBio = document.getElementById('dan-bio');
const danFlex = document.getElementById('dan-flex');

danImage.addEventListener('click', displayDansBio);

function displayDansBio() {
    if (danBio.classList.contains('hide')) {
    danBio.classList.remove('hide');
    danFlex.removeAttribute('id');
    } else {
        danBio.classList.add('hide');
        danFlex.setAttribute('id', 'dan-flex');
    }
}