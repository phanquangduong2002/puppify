const slider = document.querySelector('.slider');
const sliderMain = document.querySelector('.slider-main');
const sliderItems = document.querySelectorAll('.slider-main__item');
const nextBtn = document.querySelector('.slider-next');
const prevBtn = document.querySelector('.slider-prev');
const dotItemsBtn = document.querySelectorAll('.slider-dots__item');
const sliderItemWidth = sliderItems[0].getBoundingClientRect().width;
const sliderLength = sliderItems.length;

let positionX = 0;
let index = 1;


nextBtn.addEventListener('click', function() {
    handleChangeSlide(1);
});

prevBtn.addEventListener('click', function() {
    handleChangeSlide(-1);
});

let dataIndexNow = 1;
[...dotItemsBtn].forEach((item) => item.addEventListener("click", function(e) {
    [...dotItemsBtn].forEach((el) => el.classList.remove("slider-dots__item--active"));
    e.target.classList.add("slider-dots__item--active");
    const sliderIndex = parseInt(e.target.dataset.index);
    const dataIndex = dataIndexNow - sliderIndex;
    sliderMain.style = `transform: translateX(${positionX + dataIndex * sliderItemWidth}px)`;
    positionX += dataIndex * sliderItemWidth;
    index = index - dataIndex;
    dataIndexNow = sliderIndex;
  })
);

function handleChangeSlide(direction) {
    if(direction === 1)  {
        index ++;
        dataIndexNow ++;
        if(index > sliderLength) {
            index --;
            dataIndexNow --;
            return;
        };
        positionX = positionX - sliderItemWidth;
        sliderMain.style = `transform: translateX(${positionX}px)`;
    }

    else if(direction === -1) {
        index --;
        dataIndexNow --;
        if(index < 1) {
            index ++;
            dataIndexNow ++;
            return;
        };
        positionX = positionX + sliderItemWidth;
        sliderMain.style = `transform: translateX(${positionX}px)`;
    }
    
    [...dotItemsBtn].forEach((el) => el.classList.remove("slider-dots__item--active"));
    dotItemsBtn[index - 1].classList.add("slider-dots__item--active");
}



// Slider Products (Use Slick Slider)

$(document).ready(function(){
    $('.slider__products').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: false,
        draggable: false,
        // prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        // nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"

        dots: true,
        
    });
  });
