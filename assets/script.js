var color1 = document.querySelector('#color-1')
var color2 = document.querySelector('#color-2')

document.body.style.background = `linear-gradient(to bottom right, ${color1.value}, ${color2.value})`

/**
 * Set background gradient color
 * @return { void } Nothing to return
 */
var setGradient = () => {
  document.body.style.background = `linear-gradient(to bottom right, ${color1.value}, ${color2.value})`
}

color1.addEventListener('input', setGradient)
color2.addEventListener('input', setGradient)
