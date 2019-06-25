const open_more = document.querySelector('#open-more');
const close_more = document.querySelector('#close-more');
const content_more = document.querySelector('#more-ocean-content');
const animals = document.querySelectorAll('.animal')

open_more.addEventListener('click', () => {
    content_more.classList.toggle('open')
})

close_more.addEventListener('click', () => {
    content_more.classList.remove('open')
})

for(let i = 0; i < animals.length; i ++){
    
    animals[i].addEventListener('click', () => {
        animals[i].querySelector('.popin-info-animal').classList.add('open')
    })
}

document.querySelector('.popin-info-animal.open').addEventListener('click', (e) => {
    console.log(e.target)
    e.target.classList.remove('open')
})