const burgermenu = document.querySelector('#burger')
const navmenu = document.querySelector('#navmenu')


burgermenu.addEventListener('click',()=>{

    burgermenu.classList.toggle('is-active');
    navmenu.classList.toggle('is-active');


})