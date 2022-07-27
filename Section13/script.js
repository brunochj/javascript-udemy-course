'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
    e.preventDefault()
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

// for (let i = 0; i < btnsOpenModal.length; i++)
//     btnsOpenModal[i].addEventListener('click', openModal);
btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal))

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});

const btnScrollTo = document.querySelector('.btn--scroll-to')
const section1 = document.querySelector('#section--1')

btnScrollTo.addEventListener('click', () => {
    // const s1coords = section1.getBoundingClientRect();
    // console.log(s1coords);
    // console.log(e.target.getBoundingClientRect());
    // console.log('Current scroll (X/Y)', window.pageXOffset, pageYOffset);
    // console.log('height/width viewport', document.documentElement.clientHeight, document.documentElement.clientWidth);
    // window.scrollTo(s1coords.left + window.pageXOffset, s1coords.top + window.pageYOffset)
    // window.scrollTo({
    //     left: s1coords.left + window.pageXOffset,
    //     top: s1coords.top + window.pageYOffset,
    //     behavior: 'smooth'
    // })

    section1.scrollIntoView({ behavior: 'smooth' })
})

const navLink = document.querySelectorAll('.nav__link')
const navLinks = document.querySelector('.nav__links')
// navLink.forEach((el) => {
//     el.addEventListener('click', e => {
//         e.preventDefault();
//         const id = el.getAttribute('href')
//         console.log(id)
//         document.querySelector(id).scrollIntoView({behavior: 'smooth'})
//     })
// })

navLinks.addEventListener('click', e => {
    if (e.target.classList.contains('nav__link')) {
        e.preventDefault();
        const id = e.target.getAttribute('href')
        console.log(id)
        document.querySelector(id).scrollIntoView({ behavior: 'smooth' })
    }
})


const tabs = document.querySelectorAll('.operations__tab')
const tabsContainer = document.querySelector('.operations__tab-container')
const tabsContent = document.querySelectorAll('.operations__content')

// tabs.forEach(t => t.addEventListener('click', () => {
//     console.log('tab');
// }))
tabsContainer.addEventListener('click', e => {
    const clicked = e.target.closest('.operations__tab');
    if (!clicked) return

    tabs.forEach(t => t.classList.remove('operations__tab--active'))
    tabsContent.forEach(c => c.classList.remove('operations__content--active'))

    clicked.classList.add('operations__tab--active')

    document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active')

})

const nav = document.querySelector(".nav")

const handleHover = (e, opacity) => {
    if (e.target.classList.contains('nav__link')) {
        const link = e.target;
        const siblings = link.closest('.nav').querySelectorAll('.nav__link');
        const logo = link.closest('.nav').querySelector('img')

        siblings.forEach(el => {
            if (el !== link) el.style.opacity = opacity
        })
        logo.style.opacity = opacity
    }
}

nav.addEventListener('mouseover', e => handleHover(e, 0.5))

nav.addEventListener('mouseout', e => handleHover(e, 1))

// const initialCoords = section1.getBoundingClientRect()

// window.addEventListener('scroll', e => {
//     if(window.scrollY > initialCoords.top) nav.classList.add('sticky')
//     else nav.classList.remove('sticky')
// })

// const obsCallback = (entries, observer) => {
//     entries.forEach(entry => {
//         console.log(entry)
//     })
// }

// const obsOptions = {
//     root: null,
//     threshold: [0, 0.2]
// }

// const observer = new IntersectionObserver(obsCallback, obsOptions);

// observer.observe(section1)

const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height
const stickyNav = (entries) => {
    const [entry] = entries;
    if (!entry.isIntersecting) nav.classList.add('sticky')
    else nav.classList.remove('sticky')
}
const headerObserver = new IntersectionObserver(stickyNav, {
    root: null,
    threshold: 0,
    rootMargin: `-${navHeight}px`
})
headerObserver.observe(header)


const allSections = document.querySelectorAll('.section')

const revealSection = (entries, observer) => {
    const [entry] = entries;
    if (!entry.isIntersecting) return;
    entry.target.classList.remove('section--hidden')
    observer.unobserve(entry.target)
}

const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.15
})

allSections.forEach(section => {
    sectionObserver.observe(section)
    // section.classList.add('section--hidden')
})


const imgTargets = document.querySelectorAll('img[data-src]')

const loadImg = (entries, observer) => {
    const [entry] = entries;
    if (!entry.isIntersecting) return
    entry.target.src = entry.target.dataset.src;
    entry.target.addEventListener('load', () => {
        entry.target.classList.remove('lazy-img')
    })

    observer.unobserve(entry.target)
}

const imgObserver = new IntersectionObserver(loadImg, {
    root: null,
    threshold: 0
})

imgTargets.forEach(img => imgObserver.observe(img))

const slider = () => {

    const slides = document.querySelectorAll('.slide');
    const btnLeft = document.querySelector('.slider__btn--left')
    const btnRight = document.querySelector('.slider__btn--right')
    const dotContainer = document.querySelector('.dots')

    let curSlide = 0;
    const maxSlide = slides.length;

    const createDots = () => {
        slides.forEach((_, i) => {
            dotContainer.insertAdjacentHTML('beforeend', `<button class="dots__dot"data-slider=${i}></button>`)
        })
    }

    const goToSlide = slide => {
        slides.forEach((s, i) => s.style.transform = `translateX(${100 * (i - slide)}%)`)
    }


    const activateDot = slide => {
        document.querySelectorAll('.dots__dot').forEach(dot => dot.classList.remove('dots__dot--active'))
        document.querySelector(`.dots__dot[data-slider="${slide}"]`).classList.add('dots__dot--active')
    }

    const nextSlide = () => {
        if (curSlide === maxSlide - 1) {
            curSlide = 0
        } else
            curSlide++
        goToSlide(curSlide)
        activateDot(curSlide)
    }

    const prevSlide = () => {
        if (curSlide === 0) {
            curSlide = maxSlide - 1
        } else
            curSlide--
        goToSlide(curSlide)
        activateDot(curSlide)
    }

    const init = () => {
        createDots()
        goToSlide(0)
        activateDot(0)
    }

    init()

    btnRight.addEventListener('click', nextSlide)
    btnLeft.addEventListener('click', prevSlide)

    document.addEventListener('keydown', e => {
        if (e.key === 'ArrowLeft') prevSlide()
        e.key === 'ArrowRight' && nextSlide()
    })

    dotContainer.addEventListener('click', e => {
        if (e.target.classList.contains('dots__dot')) {
            const { slider } = e.target.dataset
            goToSlide(slider)
            activateDot(slider)
        }
    })
};
slider();


// const h1 = document.querySelector('h1')
// const alertH1 = e => {
//     alert('addEventListerner: Great! You are reading the heading :D')

//     h1.removeEventListener('mouseenter', alertH1)
// }
// h1.addEventListener('mouseenter', alertH1)

// h1.onmouseenter = e => {
//     alert('onmouseenter: Great! You are reading the heading :D')
// }



////////////////
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

// const header = document.querySelector('header')
// const allSections = document.querySelectorAll('.section')
// console.log(allSections);
// document.getElementById('section--1')
// const allButtons = document.getElementsByTagName('button')
// console.log(allButtons);
// console.log(document.getElementsByClassName('btn'));

//Creating and inserting elements
// const message = document.createElement('div')
// message.classList.add('cookie-message')
// // message.textContent = 'We use cookies for improved functionality and analytics.'
// message.innerHTML = 'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>'

// // header.prepend(message)
// header.append(message)
// // header.append(message.cloneNode(true))

// // header.before(message)
// // header.after(message)

// //Delete elements
// document.querySelector('.btn--close-cookie').addEventListener('click', () => message.remove())

// //Styles
// message.style.backgroundColor = "#37383d"
// message.style.width = "120%"

// console.log(getComputedStyle(message).height);

// message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px'
// document.documentElement.style.setProperty('--color-primary', 'orangered')

// //Attributes
// const logo = document.querySelector('.nav__logo')
// console.log(logo.alt);
// console.log(logo.src);

// const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
// const randomColor = () => `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

// const navLink = document.querySelector('.nav__link')
// const navLinks = document.querySelector('.nav__links')
// const nav = document.querySelector('.nav')
// navLink.addEventListener('click', e => {
//     navLink.style.backgroundColor = randomColor();
//     console.log('Link', e.target, e.currentTarget);
//     console.log(e.currentTarget === this);
//     e.stopPropagation()
// })

// navLinks.addEventListener('click', e => {
//     navLinks.style.backgroundColor = randomColor()
//     console.log('Container', e.target, e.currentTarget);
//     console.log(e.currentTarget === this);
// })

// nav.addEventListener('click', e => {
//     nav.style.backgroundColor = randomColor()
//     console.log('Nav', e.target, e.currentTarget);
//     console.log(e.currentTarget === this);
// })

// const h1 = document.querySelector('h1')
// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes);
// console.log(h1.children);
// h1.firstElementChild.style.color = 'white'
// h1.lastElementChild.style.color = 'orangered'
// console.log(h1.parentNode);
// console.log(h1.parentElement);
// h1.closest('.header').style.background = 'var(--gradient-secondary)'
// h1.closest('h1').style.background = 'var(--gradient-primary)'
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);
// console.log(h1.previousSibling);
// console.log(h1.nextSibling);
// console.log(h1.parentElement.children);
// [...h1.parentElement.children].forEach(el => {
//     if(el!== h1) el.style.transform = 'scale(0.5)'
// })