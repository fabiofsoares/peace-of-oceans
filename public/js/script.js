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
        animals[i].querySelector('.popin-info-animal').classList.toggle('open')
    })
}


const open_map = document.querySelector('#open-map')
const open_view = document.querySelector('#open-view')
const map_menu = document.querySelector('#map-world-menu')


open_map.addEventListener('click', () => {
    map_menu.classList.add('open')
})

open_view.addEventListener('click', () => {
    map_menu.classList.remove('open')
})




