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
const scrollHeader = () => {
  const header = document.getElementById('header')
  this.scrollY >= 50 ? header.classList.add('shadow-header')
                     : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', scrollHeader)
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
const scrollUp = () => {
  const scrollUpBtn = document.getElementById('scroll-up')
  this.scrollY >= 350 ? scrollUpBtn.classList.add('show-scroll')
                      : scrollUpBtn.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)
const revealElements = document.querySelectorAll('.home__data, .menu__card, .contact__data, .contact__img, .footer div')
revealElements.forEach(el => {
  el.style.opacity = '0'
  el.style.transform = 'translateY(40px)'
  el.style.transition = 'all .7s ease'
})
const revealOnScroll = () => {
  const windowHeight = window.innerHeight
  revealElements.forEach((el, i) => {
    const revealTop = el.getBoundingClientRect().top
    if (revealTop < windowHeight - 80) {
      setTimeout(() => {
        el.style.opacity = '1'
        el.style.transform = 'translateY(0)'
      }, i * 80)
    }
  })
}
window.addEventListener('scroll', revealOnScroll)
window.addEventListener('load', revealOnScroll)
setTimeout(revealOnScroll, 300)

const homeImg = document.querySelector('.home__img')
if (homeImg) {
  let startY = 0
  const floatAnimation = () => {
    startY = Math.sin(Date.now() / 2000) * 12
    homeImg.style.transform = `translateY(${startY}px)`
    requestAnimationFrame(floatAnimation)
  }
  floatAnimation()
}
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
document.querySelectorAll('.menu__card').forEach(c => c.classList.remove('hide'))
