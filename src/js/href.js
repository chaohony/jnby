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

    document.getElementsByClassName('jumpToPage10')[0] ? document.getElementsByClassName('jumpToPage10')[0].onclick = function (e) {
        e.stopPropagation()
        e.preventDefault()
        window.open('./page10.html', '_self')
    } : ''

    document.getElementsByClassName('jumpToPage11')[0] ? document.getElementsByClassName('jumpToPage11')[0].onclick = function (e) {
        e.stopPropagation()
        e.preventDefault()
        window.open('./page11.html', '_self')
    } : ''

}