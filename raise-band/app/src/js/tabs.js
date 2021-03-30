'use strict';

const tabContItem = document.querySelectorAll('.tabcontent__item'),
      tabLink = document.querySelectorAll('.tab__link');

//set tab event by click
for (let i = 0; i < tabLink.length; i++) {
    tabLink[i].addEventListener('click', function () {

        //hide all tabcontent
        for (let i = 0; i < tabContItem.length; i++) {
            tabContItem[i].classList.remove('show');
            tabContItem[i].classList.remove('block');
            tabLink[i].classList.remove('active-tab');
        }
        //show current tabcontent
        tabLink[i].classList.add('active-tab');
        tabContItem[i].classList.add('block');
        setTimeout(function () {
            tabContItem[i].classList.add('show');
        }, 100);
    })
}