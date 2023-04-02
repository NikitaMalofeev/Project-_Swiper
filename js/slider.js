let images = [{
    url: "../asset/item1.jpg",
    title: "Mermeid and waterfall"
}, {
    url: "../asset/item3.jpg",
    title: "Queen of autumn"
}, {
    url: "../asset/item2.jpg",
    title: "Cyberpank girl"
}, {
    url: "../asset/item4.jpg",
    title: "Girl in the church"
}, {
    url: "../asset/item5.jpg",
    title: "Violinist on the square"
}];


function initSlider () {
    if (!images || !images.length) return;

    let sliderImages = document.querySelector('.swiper__content');
    let sliderArrows = document.querySelector('.button');

    
    initImages();
    initArrows();

    function initImages () {
        images.forEach((image, index) => {
            let imageDiv = `<div class="image n${index} ${index === 0? 'active' : ''}" style="background-image:url(${images[index].url})"; data-index ="${index}"></div>`;
            sliderImages.innerHTML += imageDiv;
        });
    }


    function initArrows () {
        sliderArrows.querySelectorAll('.button').forEach(arrow => {
            arrow.addEventListener('click', function() {
                let curImageNum = +sliderImages.querySelector('.active').dataset.index;
                let nextImageNum;

                if (arrow.classList.contains("button-prev")) {
                    nextImageNum = curImageNum === 0? images.length - 1 : curImageNum - 1;
                } else {
                    nextImageNum = curImageNum === images.length - 1? 0 : curImageNum + 1;
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



document.addEventListener("DOMContentLoaded", initSlider);

