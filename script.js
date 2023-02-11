const galleryPics = document.querySelectorAll('.pics');
const imageSlider = document.querySelector('.image-slider');
const slidingImage = document.querySelector('.sliding-image')
const clickIcon = document.querySelectorAll('.click-icon');

const rightClick = document.querySelector('.right-click');
const leftClick = document.querySelector('.left-click');

imageSlider.addEventListener('mouseover', function () {
  clickIcon.forEach((el) => {
    el.style.opacity = 1;
  })
})

imageSlider.addEventListener('mouseout', function () {
  clickIcon.forEach((el) => {
    el.style.opacity = 0;
  })
})

let count = 2;
const showImage = () => {
  slidingImage.src = galleryPics[count].src;
}

rightClick.addEventListener('click', function () {
  showImage();
  count++;
  if (count == galleryPics.length) {
    count = 0;
  }
});

leftClick.addEventListener('click', function () {
  showImage();
  count--;
  if (count < 0) {
    count = galleryPics.length - 1;
  }
});

galleryPics.forEach((el, i) => {
  el.addEventListener('click', function () {
    count = i;
    showImage();
  })
})
