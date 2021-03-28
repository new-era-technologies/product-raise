'use strict';

//declare variables
const dropBtn = document.querySelectorAll('.control__btn.dropbtn'),
      dropCont = document.querySelectorAll('.dropdown-content'),
      menuItems = document.querySelectorAll('.control__list__item'),
      minPages = document.getElementById('min-pages'),
      maxPages = document.getElementById('max-pages'),
      pagesCount = document.getElementById('pages-count'),
      dateCont = document.getElementById('date-span'),
      submitCalc = document.getElementById('submit-calculator');
let calcInfoObj = {};

//show/hide menu by click
dropBtn.forEach(
    v => v.addEventListener('click', function () {
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
    it => it.addEventListener('click', function () {
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

//set calendar
flatpickr('#flatpickr', {
    dateFormat: "j M Y",
    onChange: function (selectedDates, dateStr, instance) {
        dateCont.innerHTML = dateStr;
    }
})

//console.log object by click send calculator info
submitCalc.addEventListener('click', function (e) {
    e.preventDefault();
    calcInfoObj = {
        colors: document.getElementById('colors').innerHTML != 'Colors' ? document.getElementById('colors').innerHTML : 'empty',
        size: document.getElementById('size').innerHTML != 'Size' ? document.getElementById('size').innerHTML : 'empty',
        pages: document.getElementById('pages-count').innerHTML,
        date: document.getElementById('date-span').innerHTML,
        city: document.getElementById('city').innerHTML != 'City' ? document.getElementById('city').innerHTML : 'empty',
        delivery: document.getElementById('delivery').innerHTML != 'Delivery' ? document.getElementById('delivery').innerHTML : 'empty'
    }
    console.log(calcInfoObj);
})