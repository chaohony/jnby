import "./scss/index.scss"
import page2 from './js/page2'
import href from './js/href'
import sowing from './js/sowing-map'
window.onload = function () {
    let state = {
        timer1: null,
        timer2: null
    }

    // 插入头尾
    let h = document.createElement('div')
    let f = document.createElement('div')
    let header = document.querySelector('.header')
    let footer = document.querySelector('.footer')
    h.innerHTML = `<nav class="nav">
                  <ul class="ul">
                    <li class="collection">
                      <a class="li-a" href="./page2.html">
                        <span class="en">COLLECTION</span>
                        <span class="ch">搭配</span>
                      </a>
                    </li>
                    <li class="campaign">
                      <a class="li-a" href="./page3.html">
                        <span class="en">CAMPAIGN</span>
                        <span class="ch">形象片</span>
                      </a>
                    </li>
                    <li class="lookbook">
                      <a class="li-a sp" href="./page4.html">
                        <span class="en">LOOKBOOK</span>
                        <span class="ch">产品图册</span>
                        <br>
                        <div class="lo-wrapper">
                          <div class="lo jumpToPage11">AW 17</div>
                          <div class="lo jumpToPage11">SS 18</div>
                          <div class="lo jumpToPage11">AW 18</div>
                        </div> 
                      </a>
                    </li>
                    <li class="brand-story">
                      <a class="li-a" href="./page5.html">
                        <span class="en">BRAND STORY</span>
                        <span class="ch">品牌故事</span>
                      </a>
                    </li>
                    <li class="projects">
                      <a class="li-a sp" href="./page12.html">
                        <span class="en">PROJECTS</span>
                        <span class="ch">专题</span>
                        <br>
                        <div class="lo-wrapper">
                          <div class="lo jumpToPage6">
                            <span class="inner-en">IS THAT YOU</span>
                            <div class="los inner-ch">寻人启事</div>
                          </div>
                          <div class="lo jumpToPage10">
                            <span class="inner-en">PARENT - CHILD CLUB</span>
                            <div class="los inner-ch">亲子俱乐部</div>
                          </div>
                          <div class="lo jumpToPage8">
                            <span class="inner-en">IT'S DIFFERENT BUT FUNNY</span>
                            <div class="los inner-ch">不一样才好玩</div>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li class="contact">
                      <a class="li-a" href="./page9.html">
                        <span class="en">CONTACT</span>
                        <span class="ch">联系我们</span>
                      </a>
                    </li>
                    <li class="stores">
                      <a class="li-a" href="http://www.jnbygroup.com/address.do?p=3">
                        <span class="en">STORES</span>
                        <span class="ch">店铺</span>
                      </a>
                    </li></ul>
                    <div class="ballon">
                      <span class="one"></span>
                      <span class="two"></span>
                      <span class="three"></span>
                      </div>
                  </nav>`
    f.innerHTML = `<ul class="f">
                    <li>@ 2018 Pomme de terre</li>
                    <li><a href="https://www.instagram.com/pommedeterre__/" target="_self"></a>INSTAGRAM</li>
                    <li><a href="https://weibo.com/pommedeterre2016?refer_flag=1005055014_" target="_self">WEIBO</a></li>
                    <li><a href="https://mp.weixin.qq.com/s/tlS237QVGdbeDb-taD86Hg" target="_self">WECHAT</a></li>
                 </ul>`
    header.appendChild(h)
    footer.appendChild(f)

    // collapse效果
    let d = document.querySelector('.ballon')
    let c = document.querySelector('.ul')
    d.addEventListener('click', toggleNav)

    function toggleNav(e) {
        e.stopPropagation()
        let className = d.className
        let className_1 = c.className
        if (className.indexOf('active') >= 0) {
            className = className.replace('active', '').trim()
            className_1 = className_1.replace('down', '').trim()
        } else {
            className = className + ' active'
            className_1 = className_1 + ' down'
        }
        d.className = className
        c.className = className_1
    }

    // 工具函数
    function toggleClass(e) {
        if (!e) return
        let nameS = e.className.split('')
        let num = nameS[nameS.length - 1]
        num = Number(num) + 1 > 4 ? 1 : Number(num) + 1
        nameS.splice(2, 1, num)
        return nameS.join('')
    }

    // page1页的背景图改变效果
    ((d) => {
        let timer = setInterval(() => {
            if (!d) return
            d.className = toggleClass(d)
        }, 7000)
    })(document.getElementById('page1'))


    // page2页的图片效果
    page2()
    href()
    sowing()

}
  
