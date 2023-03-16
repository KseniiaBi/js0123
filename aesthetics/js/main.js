// burger menu for mobile 
const menubtn = document.getElementById('menubtn');
const nav = document.querySelector('nav.menu');

if(menubtn != null){
    menubtn.onclick = () => {
        menubtn.classList.toggle('opened');
        nav.classList.toggle('opened');
    }
}

// arrow 'scroll to top'
const arrowTop = document.querySelector('.scroll_top');
arrowTop.onclick = () => window.scrollTo({top:0,left: 0, behavior: 'smooth'});

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


// catalog 

// load items
const url = 'js/catalog.json';
let items;
let itemsOnPage = [];
const catalog = document.querySelector('.cat-list');
const xhr = new XMLHttpRequest();
xhr.open('GET', url);
xhr.send();

xhr.onreadystatechange = () => {
    if(xhr.readyState == 4){
       items = JSON.parse(xhr.responseText);
       items.forEach(item=>createItem(item));
    }
}

function createItem(data){
    let item = document.createElement('div');
    item.classList.add('cat-item');
    item.dataset.type = data.producttype.toLowerCase();

    const heart = new Image();
    heart.src = 'images/icon-heart.png';
    heart.alt = 'To wishlist';
    heart.classList.add('cat-heart');

    const preview = new Image();
    preview.src = data.img;
    preview.alt = data.name;
    preview.classList.add('cat-img');

    const name = document.createElement('p');
    name.innerText = data.name;
    name.classList.add('cat-text');

    const price = document.createElement('p');
    price.classList.add('cat-price');
    price.innerText = `${data.price} грн`;

    const actions = document.createElement('div');
    actions.classList.add('cat-icons');
    actions.innerHTML = `<a href="product_${data.id}" class="cat-detailes">Детальніше</a>
    <button data-item="${data.id}" class="buy">В кошик</button>`;

    item.append(heart, preview, name, price, actions);
    catalog.append(item);
    itemsOnPage.push(item);
}



// filters
const filters = document.querySelectorAll('.filter_title');
for(let f of filters){
    f.onclick = () =>{
        f.classList.toggle('active');
    }
}

// sort
const sorter = document.querySelector('.sort');
const activeSort = document.querySelector('.value.selected');
const options = document.querySelectorAll('.opt');

activeSort.onclick = () => sorter.classList.toggle('opened');
for(let opt of options){
    opt.onclick = () => {
        activeSort.textContent = opt.textContent;
        sorter.classList.remove('opened');
        switch(opt.dataset.sort){
            case 'name': sortByName();
                        break;
            case 'price_high': sortByPriceHigh();
                        break;
            case 'price_low': sortByPriceLow();
                        break;                       
            case 'rating': sortDefault();
                         break;
        }
    }
}

function sortByPriceLow(){
    let itemsCopy = document.querySelectorAll('.cat-price');
    itemsCopy = [].slice.call(itemsCopy);
    itemsCopy.sort((a,b)=>{
        if(+a.innerText.substr(0, a.innerText.length - 4) > +b.innerText.substr(0, b.innerText.length - 4)){
            return 1;
        }
        else if(+a.innerText.substr(0, a.innerText.length - 4) < +b.innerText.substr(0, b.innerText.length - 4)){
            return -1;
        }
        else{
            return 0;
        }
    });

    for(let i = 0; i < itemsCopy.length; i++){
        itemsCopy[i].parentNode.style.order = i;
    }
}

function sortByPriceHigh(){
    let itemsCopy = document.querySelectorAll('.cat-price');
    itemsCopy = [].slice.call(itemsCopy);
    itemsCopy.sort((b,a)=>{
        if(+a.innerText.substr(0, a.innerText.length - 4) > +b.innerText.substr(0, b.innerText.length - 4)){
            return 1;
        }
        else if(+a.innerText.substr(0, a.innerText.length - 4) < +b.innerText.substr(0, b.innerText.length - 4)){
            return -1;
        }
        else{
            return 0;
        }
    });

    for(let i = 0; i < itemsCopy.length; i++){
        itemsCopy[i].parentNode.style.order = i;
    }
}

function sortByName(){
    let itemsCopy = document.querySelectorAll('.cat-text');
    itemsCopy = [].slice.call(itemsCopy);
    itemsCopy.sort((a,b)=>{
        if(a.innerText > b.innerText){
            return 1;
        }
        else if(a.innerText < b.innerText){
            return -1;
        }
        else{
            return 0;
        }
    });

    for(let i = 0; i < itemsCopy.length; i++){
        itemsCopy[i].parentNode.style.order = i;
    }
}

function sortDefault(){
    let items = document.querySelectorAll('.cat-item');
    items = [].slice.call(items);
    items.forEach(item => item.style.order = 0);
}


