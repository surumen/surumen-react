

// ============================================================
// Google Analytics
// ============================================================



// ============================================================
// Barba
// ============================================================

// ------------------------------------------------------------
// Fade Left
// ------------------------------------------------------------
const FadeLeftTransition = Barba.BaseTransition.extend({
  start: function () {
    Promise
      .all([this.newContainerLoading, this.fadeOut()])
      .then(this.fadeIn.bind(this))
  },
  fadeOut: function () {
    const oldContainer = this.oldContainer
    return new Promise(function (resolve) {
      anime({
        targets: oldContainer,
        opacity: 0,
        translateX: -500,
        easing: 'easeInQuart',
        duration: 400,
        complete: function () {
          resolve()
        }
      })
    })
  },
  fadeIn: function () {
    const _this = this
    const oldContainer = this.oldContainer
    const newContainer = this.newContainer
    window.scrollTo(0, 0)
    oldContainer.style.display = 'none'
    newContainer.style.visibility = 'visible'
    newContainer.style.opacity = 0
    newContainer.style.transform = 'translateX(100px)'
    anime({
      targets: newContainer,
      opacity: 1,
      translateX: 0,
      easing: 'easeOutQuart',
      duration: 1000,
      complete: function () {
        _this.done()
      }
    })
  }
})

// ------------------------------------------------------------
// Fade Right
// ------------------------------------------------------------
const FadeRightTransition = Barba.BaseTransition.extend({
  start: function () {
    Promise
      .all([this.newContainerLoading, this.fadeOut()])
      .then(this.fadeIn.bind(this))
  },
  fadeOut: function () {
    const oldContainer = this.oldContainer
    return new Promise(function (resolve) {
      anime({
        targets: oldContainer,
        opacity: 0,
        translateX: 500,
        easing: 'easeInQuart',
        duration: 400,
        complete: function () {
          resolve()
        }
      })
    })
  },
  fadeIn: function () {
    const _this = this
    const oldContainer = this.oldContainer
    const newContainer = this.newContainer
    window.scrollTo(0, 0)
    oldContainer.style.display = 'none'
    newContainer.style.visibility = 'visible'
    newContainer.style.opacity = 0
    newContainer.style.transform = 'translateX(-100px)'
    anime({
      targets: newContainer,
      opacity: 1,
      translateX: 0,
      easing: 'easeOutQuart',
      duration: 1000,
      complete: function () {
        _this.done()
      }
    })
  }
})

Barba.Pjax.getTransition = function () {
  if (location.pathname === '/' || location.search.includes('next')) {
    return FadeRightTransition
  }
  return FadeLeftTransition
}

const Home = Barba.BaseView.extend({
  namespace: 'home',
  menu: document.querySelector('.menu'),
  header: document.querySelector('.header'),
  onEnter: function () {
    this.menu.classList.remove('open')
    this.header.classList.remove('menu-active')
  },
  onEnterCompleted: function () {},
  onLeave: function () {
    this.header.classList.add('menu-active')
    this.menu.classList.add('open')
  },
  onLeaveCompleted: function () {}
})

// Don't forget to init the view!
Home.init()


// ============================================================
// On Page Transition
// ============================================================
