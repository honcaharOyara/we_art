import refs from "./refs";
import burgerMenuHandler from "./burger-menu-handler";

refs.burgerToggler.addEventListener('click', burgerMenuHandler)
refs.backdrop.addEventListener('click', burgerMenuHandler)

refs.burgerToggler.addEventListener('click', burgerMenuHandler)

refs.bannerPlayBtn.addEventListener('click', e => {
    e.currentTarget.classList.toggle('paused');

    (!refs.bannerVideo.paused) ?
    refs.bannerVideo.pause() :
    refs.bannerVideo.play();
})

const aboutContentParagraphs = refs.aboutContentWrap.querySelectorAll('p')

if(aboutContentParagraphs.length > 2) {
    for (let i = 0; i < aboutContentParagraphs.length ; i++) {
        if (i > 1) {
            aboutContentParagraphs[i].style.display = 'none';
        }
    }

    refs.readeMoreBtn.classList.add('show')
    refs.readeMoreBtn.addEventListener('click', e => {
        e.preventDefault()
        for (let i = 0; i < aboutContentParagraphs.length ; i++) {
            if (aboutContentParagraphs[i].style.display === 'none') {
                aboutContentParagraphs[i].style.display = 'block';
                e.target.classList.remove('show')
            }
        }
    })
}
