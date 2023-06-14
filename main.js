let right=document.querySelector('.rbtn');
let gamburger=document.querySelector('.gamburger');
right.addEventListener('click',function(){
    if(gamburger.classList.contains('gamburger--open')){
        gamburger.classList.remove('gamburger--open');

    }else{gamburger.classList.add('gamburger--open');}
})

const leftBtn = document.querySelector('.swiper--left'),
rightBtn = document.querySelector('.swiper--right'),
gtr =  document.querySelector('.swiper--gtr');
let index = 0;

rightBtn.addEventListener('click',function(){
    index++;
    if (index >2) {
        index = 2;
    }
    gtr.style.transform = `translateX(${-(index * 100)}%)`;
})
leftBtn.addEventListener('click',function(){
    index--;
    if (index < 0) {
    index = 0;
    }
    gtr.style.transform = `translateX(${-(index * 100)}%)`;
})
