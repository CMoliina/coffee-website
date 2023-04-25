// /*=============== SHOW MENU ===============*/
// const navMenu = document.getElementById('nav-menu'),
// navToggle = document.getElementById('nav-toggle'),
// navClose = document.getElementById('nav-close')

// /*=============== MENU SHOW ===============*/ 
// // validate if constant exist
// if(navToggle) {
//     navToggle.addEventListener('click', () => {
//         navMenu.classList.add('show-menu')
//     })
// }

// /*=============== MENU HIDDEN ===============*/
// // validate if constant exist
// if(navClose) {
//     navClose.addEventListener('click', () => {
//         navMenu.classList.remove('show-menu')
//     })
// }

// /*=============== REMOVE MENU MOBILE ===============*/
// const navLink = document.querySelectorAll('.nav__link')

// const linkAction = () => {
//     const navMenu = document.getElementById('nav-menu')
//     //when we click on each nav__link, we remove the show-menu class
//     navMenu.classList.remove('show-menu')
// }
// navLink.forEach(n => n.addEventListener('click', linkAction))

// /*=============== CHANGE BACKGROUND HEADER ===============*/
// const scrollHeader = () => {
//     const header = document.getElementById('header')
//     //when the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
//     this.scrollY >= 50 ? header.classList.add('scroll-header') : header.classList.remove('scroll-header')
// }
// window.addEventListener('scroll', scrollHeader)

// /*=============== TESTIMONIAL SWIPER ===============*/
///////////////////////

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
    const header = document.getElementById('header')
    //when the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('scroll-header') : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    //when the scroll is greater than 350 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute('id'),
        sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionClass.classList.add('active-link')
        }
        else {
            sectionClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    //reset: true //animation repeat
})

sr.reveal(`.home__data, .products__data, .steps__content, footer__container`)
sr.reveal(`.home__img`, {origin: 'bottom'})
sr.reveal(`.products__card`, {interval: 100})
sr.reveal(`.about__img, .testimonial__img`, {origin: 'right'})
sr.reveal(`.about__data, .testimonial__data`, {origin: 'left'})