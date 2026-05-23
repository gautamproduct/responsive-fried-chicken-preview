// Mobile nav
const check = document.getElementById('check')
const navLinks = document.querySelectorAll('nav ul li a')

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    check.checked = false
  })
})

// Active nav link on scroll
const sections = document.querySelectorAll('.section[id]')
const navLi = document.querySelectorAll('nav ul li a')

const scrollActive = () => {
  let current = ''
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120
    const sectionHeight = section.offsetHeight
    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute('id')
    }
  })
  navLi.forEach(li => {
    li.classList.remove('active')
    if (li.getAttribute('href') === `#${current}`) {
      li.classList.add('active')
    }
  })
}
window.addEventListener('scroll', scrollActive)

// Menu category filter
const categoryBtns = document.querySelectorAll('.category li')
const menuItems = document.querySelectorAll('.menu-item')

categoryBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    categoryBtns.forEach(b => b.classList.remove('active'))
    btn.classList.add('active')
    const filter = btn.dataset.filter
    menuItems.forEach(item => {
      if (filter === 'all' || item.dataset.category === filter) {
        item.style.display = 'block'
        item.style.animation = 'none'
        setTimeout(() => {
          item.style.animation = 'fadeInUp .6s ease forwards'
        }, 10)
      } else {
        item.style.display = 'none'
      }
    })
  })
})

// Scroll reveal animation
const revealElements = document.querySelectorAll('.reveal')

const revealOnScroll = () => {
  const windowHeight = window.innerHeight
  const revealPoint = 100

  revealElements.forEach(el => {
    const revealTop = el.getBoundingClientRect().top
    if (revealTop < windowHeight - revealPoint) {
      el.classList.add('active')
    } else {
      el.classList.remove('active')
    }
  })
}

// Add reveal class to elements we want to animate
const elementsToReveal = [
  '.box', '.menu-item', '#about .visual', '#about .text',
  '#reviews .text', '#reviews .visual', '#contact .visual', '#contact .text',
  '.faq details', '.footer .container > div'
]

elementsToReveal.forEach(sel => {
  document.querySelectorAll(sel).forEach(el => el.classList.add('reveal'))
})

window.addEventListener('scroll', revealOnScroll)
window.addEventListener('load', revealOnScroll)

// Initial reveal call after a small delay for animation
setTimeout(revealOnScroll, 200)
