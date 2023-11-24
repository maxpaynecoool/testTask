import './assets/scss/style.scss'

let buttonPayment = document.querySelector('.item__about__payment__button')
let buttonPayment2 = document.querySelector('.item__about__payment__button_2')
let buttonPayment3 = document.querySelector('.item__about__payment__button_3')

const openWindow = (num) => {
    let buttonBird = document.querySelector(`.buttonBird${num}`)
    let itemAboutMore = document.querySelector(`.item__about__more_${num}`)

    buttonBird.style.transform !== 'rotate(180deg)'
        ? buttonBird.style.transform = 'rotate(180deg)'
        : buttonBird.style.transform = null

    itemAboutMore.hidden = !itemAboutMore.hidden
}

buttonPayment.addEventListener('click', () => openWindow(1))
buttonPayment2.addEventListener('click', () => openWindow(2))
buttonPayment3.addEventListener('click', () => openWindow(3))