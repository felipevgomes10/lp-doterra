export default function bannerInit() {
  const btnLeft = document.querySelector('.arrow-left');
  const btnRight = document.querySelector('.arrow-right');
  const bannerWrapper = document.querySelector('.banner-wrapper');
  let index = 0;

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
    changePhoto(0, 1, 0, '-500px', '0px');
  });

  btnLeft.addEventListener('click', () => {
    changePhoto(1, 0, 1, '0px', '-500px');
  });

  setInterval(() => {
    changePhoto(0, 1, 0, '-500px', '0px');
  }, 8000);
}
