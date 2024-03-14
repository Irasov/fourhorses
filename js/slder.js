
const slider = document.querySelector('.members__slider');
const widthSlide = document.querySelector('.members__slide');
const prevButton = document.querySelector('.controler-members__prev');
const nextButton = document.querySelector('.controler-members__next');
const blockCount = document.querySelector('.controler-members__count');
const slides = Array.from(slider.querySelectorAll('.members__slide'));
const slideCount = slides.length;
let slideIndex = 0;
blockCount.innerHTML = `${slideIndex+1}<span> / ${slideCount}</span>`;

const slider_mini = document.querySelector('.vasuki__slider');
const widthSlide_mini = document.querySelector('.vasuki__stage-slide');
const prevButton_mini = document.querySelector('.vasuki__slider-prev');
const nextButton_mini = document.querySelector('.vasuki__slider-next');
const slides_mini = Array.from(slider_mini.querySelectorAll('.vasuki__stage-slide'));
let slideIndex_mini = 0;
const slideCount_mini = slides_mini.length;

prevButton.addEventListener('click', () => {
    slideIndex = (slideIndex - 1 + slideCount) % slideCount;
    blockCount.innerHTML = `${slideIndex+1}<span> / ${slideCount}</span>`;
    slide();
  });

  setInterval(()=>{
    slideIndex = (slideIndex + 1) % slideCount;
    blockCount.innerHTML = `${slideIndex+1}<span> / ${slideCount}</span>`;
    slide();
  }, 4000);

nextButton.addEventListener('click', () => {
    slideIndex = (slideIndex + 1) % slideCount;
    blockCount.innerHTML = `${slideIndex+1}<span> / ${slideCount}</span>`;
    slide();
}); 


  const slide = () => {
    const imageWidth = widthSlide.clientWidth+20;
    const slideOffset = -slideIndex * imageWidth;
    slider.style.transform = `translateX(${slideOffset}px)`;
  }
  
  prevButton_mini.addEventListener('click', () => {
    slideIndex_mini = (slideIndex_mini - 1 + slideCount_mini) % slideCount_mini;
    const activeDiv = document.querySelector(`.active-${slideIndex_mini}`);
    let activName = `active-${slideIndex_mini}`;
    if(activName == "active-0"){
      prevButton_mini.setAttribute("disabled", "disabled");
      nextButton_mini.removeAttribute("disabled");
    } else {
      prevButton_mini.removeAttribute("disabled");
      nextButton_mini.removeAttribute("disabled");
    }
    const preveDiv = document.querySelector(`.active-${slideIndex_mini+1}`);
    activeDiv.classList.add('active');
    preveDiv.classList.remove('active');
    slide_mini();
  });

  nextButton_mini.addEventListener('click', () => {
    slideIndex_mini = (slideIndex_mini + 1) % slideCount_mini;
    const activeDiv = document.querySelector(`.active-${slideIndex_mini}`);
    let activName = `active-${slideIndex_mini}`;
    if(activName == "active-4"){
      nextButton_mini.setAttribute("disabled", "disabled");
      prevButton_mini.removeAttribute("disabled");
    } else {
      nextButton_mini.removeAttribute("disabled");
      prevButton_mini.removeAttribute("disabled");
    }
    const preveDiv = document.querySelector(`.active-${slideIndex_mini-1}`);
    activeDiv.classList.add('active');
    preveDiv.classList.remove('active');
    slide_mini();
  });

  const slide_mini = () => {
    const imageWidth_mini = widthSlide_mini.clientWidth;
    const slideOffset_mini = -slideIndex_mini * imageWidth_mini;
    slider_mini.style.transform = `translateX(${slideOffset_mini}px)`;
  }

  window.addEventListener('load', () => {
    slide();
    slide_mini();
  });

  window.addEventListener(`resize`, event => {
    slide();
    slide_mini();
  }, false);
  