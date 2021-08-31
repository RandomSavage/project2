console.log('Connected')

let jumboSlide = document.querySelector('.jumbo-slider__slide')

let slideBg = document.querySelector('.jumbo-slider__slide-bg')

console.log(slideBg.style.background)

// search side nav button
let sliderLink1 = document.getElementsByClassName('jumbo-slider__link')[0]
let sliderLink2 = document.getElementsByClassName('jumbo-slider__link')[1]
let sliderLink3 = document.getElementsByClassName('jumbo-slider__link')[2]
 console.log(sliderLink1.innerText, sliderLink2.innerText, sliderLink3.innerText)

 // search slider circles
let sliderCircle1 = document.getElementsByClassName('jumbo-slider__circle')[0]
let sliderCircle2 = document.getElementsByClassName('jumbo-slider__circle')[1]
let sliderCircle3 = document.getElementsByClassName('jumbo-slider__circle')[2]

let addActive = (sliderLink, sliderLinkAlt1, sliderLinkAlt2) => {
  sliderLink.classList.add('jumbo-slider__link--active')
  sliderLinkAlt1.classList.remove('jumbo-slider__link--active')
  sliderLinkAlt2.classList.remove('jumbo-slider__link--active')
}

let addFilled = (sliderCircle, sliderCircleAlt1, sliderCircleAlt2) => {
  sliderCircle.classList.add('jumbo-slider__circle--filled')
  sliderCircleAlt1.classList.remove('jumbo-slider__circle--filled')
  sliderCircleAlt2.classList.remove('jumbo-slider__circle--filled')
}

sliderLink1.addEventListener('click', () => {
  slideBg.style.background = "url('public/imagejpeg_0.jpg')"
  addActive(sliderLink1, sliderLink2, sliderLink3)
  addFilled(sliderCircle1, sliderCircle2, sliderCircle3)
  console.log('style applied')
})

sliderLink2.addEventListener('click', () => {
  slideBg.style.background = "url('public/imagejpeg_1.jpg')"
  addActive(sliderLink2, sliderLink1, sliderLink3)
  addFilled(sliderCircle2, sliderCircle1, sliderCircle3)
  console.log('style applied')
})

sliderLink3.addEventListener('click', () => {
  slideBg.style.background = "url('public/imagejpeg_0001.jpg')"
  addActive(sliderLink3, sliderLink1, sliderLink2)
  addFilled(sliderCircle3, sliderCircle1, sliderCircle2)
  console.log('style applied')
})