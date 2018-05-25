import "./scss/index.scss"
window.onload = function() {
  let state = {}
  let timer
  let h = document.createElement('div')
  let f = document.createElement('div')
  let header = document.querySelector('.header')
  let footer = document.querySelector('.footer')
  h.innerHTML = `<nav class="nav">
                  <ul class="ul">
                    <li class="collection">
                      <a href="./page2.html">COLLECTION</a>
                    </li>
                    <li class="campaign">
                      <a href="./page3.html">CAMPAIGN</a>
                    </li>
                    <li class="lookbook">
                      <a href="./page4.html">LOOKBOOK</a>
                      <div class="lo">AW 18</div>
                      <div class="lo">SS 18</div>
                    </li>
                    <li class="brand-story">
                      <a href="./page5.html">BRAND STORY</a>
                    </li>
                    <li class="projects sp">
                      <a href="./page6.html">PROJECTS</a>
                      <div class="lo sp">
                        <a href="./page7.html">IS THAT YOU</a>
                        <div class="spHidden">寻人启事</div>
                      </div>
                      <div class="lo">
                        PARENT - CHILD CLUB<div>亲子俱乐部</div>
                      </div>
                      <div class="lo sp">
                        <a class="sp" href="./page8.html">IT'S DIFFERENT BUT FUNNY</a>
                        <div>不一样才好玩</div>
                      </div>
                    </li>
                    <li class="contact">
                      <a href="./page9.html">CONTACT</a>
                    </li>
                    <li class="stores">
                      <a href="#">STORES</a>
                    </li></ul>
                    <div class="ballon">
                      <span class="one"></span>
                      <span class="two"></span>
                      <span class="three"></span>
                      </div>
                  </nav>`
  f.innerHTML = `<ul class="f"><li>@ 2018 Pomme de terre</li><li>INSTAGRAM</li><li>WEIBO</li><li>WECHAT</li></ul>`
  header.appendChild(h)
  footer.appendChild(f)

  window.onresize = function() {
    clearTimeout(timer)
    timer = setTimeout(() => {
      prepareToRun()
    }, 400)
  }

  let d = document.querySelector('.ballon')
  let c = document.querySelector('.ul')
  d.addEventListener('click', toggleNav)

  function toggleNav(e) {
    e.stopPropagation()
    let className = d.className
    let className_1 = c.className
    if(className.indexOf('active') >= 0) {
      className = className.replace('active', '').trim()
      className_1 = className_1.replace('down', '').trim()
    } else {
      className = className + ' active'
      className_1 = className_1 + ' down'
    }
    d.className = className
    c.className = className_1
  }
  
  
  function toggleClass(e) {
    if(!e) return
    let nameS = e.className.split('')
    let num = nameS[nameS.length-1]
    num = Number(num) + 1 > 4 ? 1 : Number(num) + 1
    nameS.splice(2,1,num)
    return nameS.join('')
  }

  ((d) => {
    let timer = setInterval(() => {
      if(!d) return
      d.className = toggleClass(d)
    }, 3000)
  })(document.getElementById('page1'))

  function sliderImg(c, duration, f) {
    if(!c || !c.style) return
    let i = 0
    let imgs = c.getElementsByTagName('img')
    let width = imgs[0].clientWidth
    let height = imgs[0].clientHeight
    if(f === 'h') {
      state.hTimer = setInterval(() => {
        c.style.transition = `transform .5s ease-in-out`
        c.style.transform = `translate3d(${-width * (i+1)}px, 0, 0)`
      }, duration)
    } else {
      state.vTimer = setInterval(() => {
        c.style.transition = `transform .5s ease-in-out`
        c.style.transform = `translate3d(0, ${-height * (i+1)}px, 0)`
      }, duration)
    }
    c.addEventListener('transitionend', () => {
      i++
      if(i === 2) {
        c.style.transition = `none`
        c.style.transform = `translate3d(0,0,0)`
        i = 0
      }
    })
  }

  function prepareToRun() {
    clearTimeout(state.hTimer)
    clearTimeout(state.vTimer)
    let v0 = document.getElementsByClassName('view-window')[0]
    let v1 = document.getElementsByClassName('view-window')[1]
    if(!v0 || !v0.style) return
    v0.style.transform = `translate3d(0,0,0)`
    v1.style.transform = `translate3d(0,0,0)`
    sliderImg(v0, 5000, 'h')
    sliderImg(v1, 5000, 'v')
  }
  
  prepareToRun()
}
  
