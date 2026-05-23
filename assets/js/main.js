// Mobile nav
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
  })
}

if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
  })
}

const navLink = document.querySelectorAll('.nav__link')

navLink.forEach(n => n.addEventListener('click', () => {
  navMenu.classList.remove('show-menu')
}))

// Header shadow
const scrollHeader = () => {
  const header = document.getElementById('header')
  this.scrollY >= 50 ? header.classList.add('shadow-header')
                     : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', scrollHeader)

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
  const scrollY = window.scrollY

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 100,
          sectionId = current.getAttribute('id')

    const link = document.querySelector('.nav__list a[href*=' + sectionId + ']')
    if (link) {
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        link.classList.add('active-link')
      } else {
        link.classList.remove('active-link')
      }
    }
  })
}
window.addEventListener('scroll', scrollActive)

// Menu category filter
const categoryBtns = document.querySelectorAll('.category__btn')
const menuCards = document.querySelectorAll('.menu__card')

categoryBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    categoryBtns.forEach(b => b.classList.remove('active'))
    btn.classList.add('active')

    const filter = btn.dataset.filter

    menuCards.forEach(card => {
      if (filter === 'all' || card.dataset.category === filter) {
        card.classList.remove('hide')
      } else {
        card.classList.add('hide')
      }
    })
  })
})

// FAQ accordion
const faqHeaders = document.querySelectorAll('.faq__header')

faqHeaders.forEach(header => {
  header.addEventListener('click', () => {
    const item = header.parentElement
    const isOpen = item.classList.contains('open')

    faqHeaders.forEach(h => h.parentElement.classList.remove('open'))

    if (!isOpen) {
      item.classList.add('open')
    }
  })
})

// Scroll up button
const scrollUp = () => {
  const scrollUpBtn = document.getElementById('scroll-up')
  this.scrollY >= 350 ? scrollUpBtn.classList.add('show-scroll')
                      : scrollUpBtn.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

// Scroll reveal animation
const revealElements = document.querySelectorAll('.reveal')

const revealOnScroll = () => {
  const windowHeight = window.innerHeight
  const revealPoint = 80

  revealElements.forEach(el => {
    const revealTop = el.getBoundingClientRect().top
    if (revealTop < windowHeight - revealPoint) {
      el.classList.add('active')
    } else {
      el.classList.remove('active')
    }
  })
}

const elementsToReveal = [
  '.how__card', '.menu__card', '.about__img', '.about__data',
  '.reviews__img', '.reviews__data', '.contact__img', '.contact__data',
  '.faq__item', '.footer__container > div'
]

elementsToReveal.forEach(sel => {
  document.querySelectorAll(sel).forEach(el => el.classList.add('reveal'))
})

window.addEventListener('scroll', revealOnScroll)
window.addEventListener('load', revealOnScroll)
setTimeout(revealOnScroll, 200)
