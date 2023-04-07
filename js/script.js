let menu = document.querySelector('.burger');
let main = document.querySelector('main');
let menuList = document.querySelector('.invisible');

menu.addEventListener('click', function() {
    main.classList.toggle('menu-open');
    menuList.classList.toggle('apparait');
});