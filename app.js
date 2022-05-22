const ratio = 0.01
const options = {
    root: null,
    rootMargin: '0px',
    treshold: ratio
}

const handleIntersect = function (entries, observer) {
    entries.forEach(function (entry) {
        if (entry.intersectionRatio >= ratio) {

            if (entry.target == document.querySelector('.anim-text1')) {
                entry.target.classList.toggle('anim-text-visible')
                entry.target.classList.toggle('anim-text1')
            }
            if (entry.target == document.querySelector('.anim-text2')) {
                entry.target.classList.toggle('anim-text-visible')
                entry.target.classList.toggle('anim-text2')
            }
            if (entry.target == document.querySelector('.anim-text3')) {
                entry.target.classList.toggle('anim-text-visible')
                entry.target.classList.toggle('anim-text3')
            }
            if (entry.target == document.querySelector('.anim-icons')) {
                entry.target.classList.toggle('anim-icons-visible')
                entry.target.classList.toggle('anim-icons')
            }
            if (entry.target == document.querySelector('.anim-box')) {
                entry.target.classList.toggle('anim-box-visible')
                entry.target.classList.toggle('anim-box')
            }
        }
    })
}

const observer = new IntersectionObserver(handleIntersect, options);
observer.observe(document.querySelector('.anim-text1'))
observer.observe(document.querySelector('.anim-text2'))
observer.observe(document.querySelector('.anim-text3'))
observer.observe(document.querySelector('.anim-icons'))
observer.observe(document.querySelector('.anim-box'))