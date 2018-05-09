import "./styl/index.styl"
window.onload = function() {
  let h = document.createElement('div')
  let f = document.createElement('div')
  let header = document.querySelector('.header')
  let footer = document.querySelector('.footer')

  h.innerHTML = `<nav class="nav"><ul>
    <li class="collection"><a href="#">COLLECTION</a></li>
    <li class=campaign"><a href="#">CAMPAIGN</a></li>
    <li class="lookbook"><a href="#">LOOKBOOK</a</li>
    <li class="brand-story"><a href="#">BRAND STORY</a></li>
    <li class="projects"><a href="#">PROJECTS</a></li>
    <li class="contact"><a href="#">CONTACT</a></li>
    <li class="stores"><a href="#">STORES</a></li>
    </ul></nav>`

  f.innerHTML = `<ul class="f"><li>@ 2018 Pomme de terre</li><li>INSTAGRAM</li><li>WEIBO</li><li>WECHAT</li></ul>`

  header.appendChild(h)

  footer.appendChild(f)
}

