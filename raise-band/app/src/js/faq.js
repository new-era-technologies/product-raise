'use strict';

const quest = document.querySelectorAll('.info__inner'),
      answ = document.querySelectorAll('.info__answ');


//show/hide faq answer info
quest.forEach(
    q => q.addEventListener('click', function (e) {
        const it = this.closest('.container__info').children[1];
        this.closest('.container__info').children[0].children[1].classList.toggle('transform-arrow');
        it.classList.contains('block') ? setTimeout(function () { it.classList.remove('block') }, 400) : it.classList.add('block');
        setTimeout(function () {
            it.classList.toggle('show');
        }, 100);
    })
);