import "./scss/index.scss"

function $(selector) {
    return document.querySelector(selector)
}

window.onload = function () {

    if (window.location.pathname.indexOf('index.html') >= 0) {
        let currentIndex = window.location.hash.indexOf('#')
        let current = window.location.hash.substring(currentIndex + 1).split('=')[1]
        if (current == 1) {
            $('#page1').className = 'current2'

        } else if (current == 0) {
            $('#page1').className = 'current1'
        } else {
            $('#page1').className = 'current1'
        }
    }

    window.onhashchange = function (e) {

        if (window.location.pathname.indexOf('index.html') >= 0) {
            let currentIndex = e.newURL.indexOf('#')
            let current = e.newURL.substring(currentIndex + 1).split('=')[1]
            if (current == 1) {
                $('#page1').className = 'current2'

            } else {
                $('#page1').className = 'current1'
            }
        }
    }
}
  
