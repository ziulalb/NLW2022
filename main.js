window.addEventListener('scroll', onScroll)

onScroll()

function onScroll() {
  showNavOnScroll()
  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)

}

function activateMenuAtCurrentSection(section){
  // ver se o topo da seção passou da linha
  const targetLine = scrollY+ innerHeight / 2

  // topo da seção
  const sectionTop = section.offsetTop
  // altura da seção
  const sectionHeight = section.offsetHeight
  // topo da seção chegou ou passou a linha alvo
  const sectionTopReachOrPassedTargetline = targetLine >= sectionTop

  // onde a seção termina
  const sectionEndsAt = sectionTop + sectionHeight

  // ver se a base da seção passou da linha
  const sectionEndPassedTargetline = sectionEndsAt <= targetLine

  // limites da seção
  const sectionBoundaries =
    sectionTopReachOrPassedTargetline && !sectionEndPassedTargetline

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  // se passou do fim da seção e do topo da proxima
  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }



  console.log(sectionBoundaries)
}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}


function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu(){
  document.body.classList.remove('menu-expanded')
}



ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
}).reveal(`
#home,  
#home img, 
#home .stats, 
#services,
#serices header,
#services .card,
#about,
#about header,
#about .content
#contact,
#contact header,
#about .content
`);

