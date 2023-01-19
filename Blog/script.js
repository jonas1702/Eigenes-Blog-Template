const menu = document.querySelector('.nav-list--mobile')
const menuButton = document.querySelector('.nav-menu')
const page = document.querySelector('.page')
let toggle = false;

menuButton.addEventListener('click', () => {
    if(toggle == false) {
        menu.style.top = '52px'
        menuButton.innerText = 'close'
        page.classList.add('page--blur')
        
    } if(toggle == true) {
        menu.style.top = '-153px'
        menuButton.innerText = 'menu'
        page.classList.remove('page--blur')
    }
    toggle = !toggle;
})

const card = document.querySelectorAll('.main-card')
const flipButton = document.querySelectorAll('.main-card-icon-button')
const cardBack = document.querySelectorAll('.main-card-back')
let flipToggle = false

flipButton.forEach(element => {
    element.addEventListener('click', () => {
        flipCard(element)
        flipToggle = true
    })
});

cardBack.forEach(element => {
    element.addEventListener('click', () => {
        console.log('click')
        element.parentElement.style.transform = 'rotateY(0deg)'
    })
})

function flipCard(e) {
    let parent = e.parentElement
    while (!parent.classList.contains('main-card-flip')) {
        parent = parent.parentElement
    }
    parent.style.transform = 'rotateY(180deg)'
}

let prevScrollpos = window.pageYOffset
const banner = document.querySelector('.nav-banner')

window.addEventListener('scroll', () => {
    let scrollPos = window.pageYOffset;
    if (prevScrollpos > scrollPos) {
        if (window.innerWidth >= 900) {
            banner.style.top = '70px'
        } else {
            banner.style.top = '60px'
        }
    } else {
        if (prevScrollpos < scrollPos) {
            if (window.innerWidth >= 900) {
                banner.style.top = '40px'
            } else {
                banner.style.top = '30px'
            }
        }
    }
    prevScrollpos = scrollPos;
})

/* on window resize */
window.addEventListener('resize', () => {
    if (window.innerWidth >= 900) {
        banner.style.top = '70px'
    } else {
        banner.style.top = '60px'
    }
})

// function cointoss() {
//     let toss = []
//     for(i = 0; i < 100000; i++) {
//         toss.push(Math.floor(Math.random() * 2))
//     }
//     let ones = toss.filter(x => x == 1).length;
//     let probability = ones / toss.length * 100
//     console.log(probability + '%')
// }

// cointoss();