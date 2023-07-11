const inputPassword = document.querySelector('#pwd');
const main = document.querySelector('main');
inputPassword.addEventListener('input', handleChangeInput);

function handleChangeInput(event) {
  let blurPixels = 14 - event.target.value.length;
  main.style.backdropFilter = `blur(${blurPixels}px)`;
}
