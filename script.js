const btn = document.getElementById('btn');
const second = document.querySelector('nav .second');
    btn.addEventListener('click', () => {
        btn.classList.toggle('rot')
        second.classList.toggle('flex')
})

const year = document.getElementById('year');
const currentYear = new Date().getFullYear()
year.innerText = currentYear;

const toggle = document.getElementById('toggle-btn');
const icons = document.getElementById('icons-cont');

toggle.addEventListener('click' , () => {
    icons.classList.toggle('show');
})