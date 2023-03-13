// burger menu for mobile 
const menubtn = document.getElementById('menubtn');
const nav = document.querySelector('nav.menu');

menubtn.onclick = () => {
    menubtn.classList.toggle('opened');
    nav.classList.toggle('opened');
}


// slider

const slides = document.querySelectorAll('.slide');
const navs = document.querySelectorAll('.slidenav');
let currentSlide = 0;
let interval;

if(slides.length > 0){
    for(let nav of navs){
        nav.onclick = () => {
            currentSlide = +nav.dataset.slide;
            changeSlide(currentSlide);
        }
    }   
    init();
}

function init(){
    interval = setInterval(()=>{
        currentSlide = currentSlide < slides.length - 1 ? ++currentSlide : 0;
        changeSlide(currentSlide);
    }, 3000);
}

function changeSlide(n){
    for(let i = 0; i < slides.length; i++){
        slides[i].classList.remove('active');
        navs[i].classList.remove('active');
    }
    slides[n].classList.add('active');
    navs[n].classList.add('active');
    clearInterval(interval);
    init();
}

