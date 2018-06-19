export default function href() {
    // 链接跳转
    document.getElementsByClassName('jumpToPage8')[0] ? document.getElementsByClassName('jumpToPage8')[0].onclick = function (e) {
        e.stopPropagation()
        e.preventDefault()
        window.open('./page8.html', '_self')
    } : ''

    document.getElementsByClassName('jumpToPage7')[0] ? document.getElementsByClassName('jumpToPage7')[0].onclick = function (e) {
        e.stopPropagation()
        e.preventDefault()
        window.open('./page7.html', '_self')
    } : ''

    document.getElementsByClassName('jumpToPage6')[0] ? document.getElementsByClassName('jumpToPage6')[0].onclick = function (e) {
        e.stopPropagation()
        e.preventDefault()
        window.open('./page6.html', '_self')
    } : ''

}