//fade and slide in Intersection Observer
//from Kevin Powell
// https://www.youtube.com/watch?v=huVJW23JHKQ

const faders = document.querySelectorAll('.fade-in');
const sliders = document.querySelectorAll('.slide-in');

const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -150px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, apprearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
        return;
    } else {
        entry.target.classList.add('appear');
        appearOnScroll.unobserve('entry.target');}
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

sliders.forEach(slider => {
    appearOnScroll.observe(slider);
});