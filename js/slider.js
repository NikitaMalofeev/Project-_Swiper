let images = [{
    url: "https://wampi.ru/image/RpvMaOi",
    title: "Mermeid and waterfall"
}, {
    url: "https://wampi.ru/image/Rpvixvx",
    title: "Queen of autumn"
}, {
    url: "https://wampi.ru/image/Rpvim1O",
    title: "Cyberpank girl"
}, {
    url: "https://wampi.ru/image/Rpvina6",
    title: "Girl in the church"
}, {
    url: "https://wampi.ru/image/RpviCss",
    title: "Violinist on the square"
}]


function initSlider () {
    if( !images || !images.length ) return;

    let sliderImages = document.querySelector('.swiper__content');
    let sliderArrows = document.querySelector('.button');

    function initImages () {
        images.forEach((image, index) => {
            let imageDiv = `<div class ="image n${index} ${index === 0? 'active' : ''}" style ="background-image:url($(images[index].url)); data-index ="${index}" "></div>`;
            sliderImages += imageDiv;
        });
    }

    function initArrow () {
        sliderArrows.querySelectorAll('.button').forEach(arrow => {
            arrow.addEventListener('click', function() {
                let curImageNum = +sliderImages.querySelector('.active').dataset.index;
                let nextImageNum;

                if (arrow.classList.contains("button__prev")) {
                    nextImageNum = curNumber === 0? images.length - 1 : curNumber - 1;
                } else {
                    nextImageNum = curNumber === images.length? 0 : curNumber + 1;
                }
                moveSlider(nextImageNum);
            });
        });
    }

    function moveSlider (num) {
        sliderImages.querySelector(".active").classList.remove('active');
        sliderImages.querySelector('.n' + num).classList.add('active')
    }
}



initSlider();
initArrow();

document.addEventListener("DomContentLoaded", initSlider)