function sowing() {
    let index = 0
    let timer = null
    let sowContainer = document.querySelector('.sowing-map')
    if (!sowContainer) return
    let imgs = sowContainer.getElementsByClassName('img')
    let dots = document.querySelector('.dots-wrapper').getElementsByClassName('dot')
    let outter = document.querySelector('.outter')

    function slide() {
        index + 1 >= imgs.length ? index = 0 : index++
        run(index)
    }

    function run(index) {
        let targetImg = imgs[index]
        let targetDot = dots[index]
        for (let i = 0; i < imgs.length; i++) {
            if (imgs[i].className.indexOf('hidden') >= 0) continue
            imgs[i].className += ' hidden'
        }
        targetImg.className = targetImg.className.replace('hidden', '')

        for (let i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace('active', '')
        }
        targetDot.className += ' active'
    }

    timer = setInterval(slide, 5000)

    document.querySelector('.dots-wrapper').onclick = function (e) {
        let i = e.target.dataset.index
        if (!i) return
        index = i
        console.log(index)
        run(index)
    }

    outter.onmouseover = function () {
        clearTimeout(timer)
    }
    outter.onmouseout = function () {
        timer = setInterval(slide, 5000)
    }

}

export default sowing