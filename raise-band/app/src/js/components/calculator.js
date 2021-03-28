'use strict';

//declare variables
const dropBtn = document.querySelectorAll('.control__btn.dropbtn'),
    dropCont = document.querySelectorAll('.dropdown-content'),
    menuItems = document.querySelectorAll('.control__list__item'),
    minPages = document.getElementById('min-pages'),
    maxPages = document.getElementById('max-pages'),
    pagesCount = document.getElementById('pages-count'),
    dateCont = document.getElementById('date-span');

//show/hide menu by click
dropBtn.forEach(
    v => v.addEventListener('click', function (e) {
        this.closest('.dropdown').children[1].classList.toggle('show');
    })
)

//hide menu by click out
window.addEventListener('click', function (e) {
    if (!e.target.classList.contains('dropbtn')) {
        dropCont.forEach(
            it => it.classList.remove('show')
        )
    }
});

//change value in dropdown button
menuItems.forEach(
    it => it.addEventListener('click', function (e) {
        this.closest('.dropdown').children[0].innerText = this.innerText;
        this.closest('.dropdown').children[1].classList.remove('show');
    })
)

//count pages by click -
minPages.addEventListener('click', function () {
    if (pagesCount.innerHTML != 0) {
        pagesCount.innerHTML = pagesCount.innerHTML - 1;
    }
})

//count pages by click +
maxPages.addEventListener('click', function () {
    pagesCount.innerHTML = Number(pagesCount.innerHTML) + 1;
})







//show calendar button with current date
const date = new Date();
const mon = date.toLocaleString('default', { month: 'short' });
dateCont.innerHTML = date.getUTCDate() + ' ' + mon + ' ' + date.getFullYear();

flatpickr('#flatpickr', {
    dateFormat: "d F Y",
    shorthandCurrentMonth: true,
    allowInput: true,
    appendTo: dateCont,
})