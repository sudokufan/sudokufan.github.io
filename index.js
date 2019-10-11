var aTags = document.querySelectorAll('a')

aTags.forEach(function (aTag) {
    aTag.addEventListener('mouseenter', function() {
        aTag.firstElementChild.classList.add('hidden')
    })
    aTag.addEventListener('mouseleave', function() {
        aTag.firstElementChild.classList.remove('hidden')
    })
})