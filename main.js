let navIcon =document.querySelector(".icon")
let nav = document.querySelector("ul");
let img = document.getElementById('toggle-img');
navIcon.addEventListener('click', ()=>{
   if(nav.classList.contains('show-nav')){
       img.src = 'images/icon-hamburger.svg';
       nav.classList.remove('show-nav')
   }
   else{
    img.src = 'images/icon-close.svg';
    nav.classList.add('show-nav')
   }
})


