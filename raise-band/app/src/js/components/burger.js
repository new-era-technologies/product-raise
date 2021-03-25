'use strict';

//declare variables
const burger = document.getElementById('burger'),
      burgerModal = document.getElementById('burger-modal'),
      butCloseBurModal = document.getElementById('but-close-burger-modal'),
      burgerModalList = document.getElementById('burger-modal-list');

//show burger nav menu
burger.addEventListener('click', function () {
    burgerModal.style.width = '80%';
    burgerModalList.style.display = 'flex';
});

//hide burger nav menu
butCloseBurModal.addEventListener('click', function () {
    burgerModal.style.width = 0;
    burgerModalList.style.display = 'none';
});