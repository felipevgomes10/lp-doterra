export default function bannerInit() {
  const btnLeft = document.querySelector('.arrow-left');
  const btnRight = document.querySelector('.arrow-right');
  const bannerSlider = document.querySelector('.banner-slider');
  const bannerWrapper = document.querySelector('.banner-wrapper');
  let index = 0;
  let width;

  const changePhoto = (position, newPosition, reset, start, end) => {
    if (index === position) {
      index = newPosition;
      bannerWrapper.style.transform = `translateX(${start})`;
    } else {
      bannerWrapper.style.transform = `translateX(${end})`;
      index = reset;
    }
  };

  btnRight.addEventListener('click', () => {
    width = `-${bannerSlider.offsetWidth}px`;
    changePhoto(0, 1, 0, width, '0px');
  });

  btnLeft.addEventListener('click', () => {
    width = `-${bannerSlider.offsetWidth}px`;
    changePhoto(1, 0, 1, '0px', width);
  });

  setInterval(() => {
    width = `-${bannerSlider.offsetWidth}px`;
    changePhoto(0, 1, 0, width, '0px');
  }, 8000);
}
