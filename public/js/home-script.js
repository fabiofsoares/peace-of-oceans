const sign = document.querySelector("#sign")
const home_section = document.querySelector("#home-section")
const certificat = document.querySelector("#certificate-section")

sign.addEventListener('click', () => {
    let name = document.querySelector('#firstname').value;
    document.querySelector('.user-name').innerHTML = name;
    home_section.classList.remove('active')
    certificat.classList.add('active')
})