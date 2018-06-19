let timer = null
let flag = true
let debounce = null
export default function page2() {
    clearTimeout(timer)
    timer = setInterval(() => {
        toggleClass(document.querySelector('#page2 .img-group-left'), 'img1', 'img2')
        toggleClass(document.querySelector('#page2 .img-group-right'), 'img3', 'img4')
    }, 7000)
    if(document.querySelector('#page2 .btn-left') && document.querySelector('#page2 .btn-right')) {
        document.querySelector('#page2 .btn-left').onclick = prev
        document.querySelector('#page2 .btn-right').onclick = next
    }
}

function toggleClass(target, a, b) {
    if(!target) return
    let className = target.className
    if (!className) return
    className.search(a) >= 0 ? className = className.replace(new RegExp(a), b) : className = className.replace(new RegExp(b), a)
    target.className = className
}

function prev() {
    // 防抖
    clearTimeout(debounce)
    setTimeout(() => {
        clearTimeout(timer)
            toggleClass(document.querySelector('#page2 .img-group-left'), 'img1', 'img2')
            toggleClass(document.querySelector('#page2 .img-group-right'), 'img3', 'img4')
            flag = false
        // 1s的频率
        setTimeout(() => {
            flag = true
            page2()
        }, 1050)
    }, 50)
}

function next() {
    clearTimeout(debounce)
    setTimeout(() => {
        clearTimeout(timer)
        if(flag) {
            toggleClass(document.querySelector('#page2 .img-group-left'), 'img1', 'img2')
            toggleClass(document.querySelector('#page2 .img-group-right'), 'img3', 'img4')
            flag = false
        }
        setTimeout(() => {
            flag = true
            page2()
        }, 1050)
    }, 50)
}