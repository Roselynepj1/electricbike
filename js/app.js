//Locate and change document descriptions for the bike

document.getElementById('brand').textContent = ElectricBike.brand
document.getElementById('model').textContent = ElectricBike.modelName
document.getElementById('batteryCapacity').textContent = ElectricBike.voltage
document.getElementById('chargingTime').textContent = ElectricBike.chargingTime
document.getElementById('range').textContent = ElectricBike.range
document.getElementById('motorPower').textContent = ElectricBike.specs.motor
document.getElementById('topSpeed').textContent = ElectricBike.maxSpeed
document.getElementById('wheelSize').textContent = ElectricBike.wheelSize
document.getElementById('brake').textContent = ElectricBike.specs.tire
document.getElementById('weight').textContent = ElectricBike.specs.weight
document.getElementById('userWeight').textContent =
  ElectricBike.specs.maxUserWeight
document.getElementById('brand').textContent = ElectricBike.brand

const colorBlack = document.getElementById('colorBlack')
const colorRed = document.getElementById('colorRed')
const colorBlue = document.getElementById('colorBlue')

function changeImage(event) {
  const { target } = event
  const targetImage = document.getElementById('targetImage')
  const image = target.getAttribute('data-image')
  targetImage.setAttribute('src', image)
}

colorBlack.addEventListener('click', changeImage)
colorRed.addEventListener('click', changeImage)
colorBlue.addEventListener('click', changeImage)

//handle gauge meter
var opts = {
  angle: -0.2, // The span of the gauge arc
  lineWidth: 0.2, // The line thickness
  radiusScale: 1, // Relative radius
  pointer: {
    length: 0.6, // // Relative to gauge radius
    strokeWidth: 0.035, // The thickness
    color: '#000000', // Fill color
  },
  limitMax: false, // If false, max value increases automatically if value > maxValue
  limitMin: false, // If true, the min value of the gauge will be fixed
  colorStart: '#6F6EA0', // Colors
  colorStop: '#C0C0DB', // just experiment with them
  strokeColor: '#EEEEEE', // to see which ones work best for you
  generateGradient: true,
  highDpiSupport: true, // High resolution support
}
var target = document.getElementById('gauge') // your canvas element
var gauge = new Gauge(target).setOptions(opts) // create sexy gauge!
gauge.maxValue = ElectricBike.maxSpeed // set max gauge value
gauge.setMinValue(0) // Prefer setter over gauge.minValue = 0
gauge.animationSpeed = 50 // set animation speed (32 is default value)
gauge.set(0) // set actual value

let aInterval
let dInterval

var audio = new Audio() 
document.getElementById('accelerate').addEventListener('click', () => {
  audio.src = './audio/accelerate.wav'
  audio.play()
  if (dInterval) {
    clearInterval(dInterval)
  }
  aInterval = setInterval(() => {
    const speed = ElectricBike.accelerate()
    gauge.set(speed)
  }, 100)

  if (ElectricBike.speed == ElectricBike.maxSpeed) clearInterval(aInterval)
})
document.getElementById('deaccelerate').addEventListener('click', () => {
  audio.src = './audio/decelerating.wav'
  audio.play()
  if (aInterval) {
    clearInterval(aInterval)
  }
  dInterval = setInterval(() => {
    const speed = ElectricBike.deaccelerate()
    gauge.set(speed)
  }, 200)

  if (ElectricBike.speed == 0) clearInterval(dInterval)
})
document.getElementById('close').addEventListener('click', () => {
  if (aInterval) {
    clearInterval(aInterval)
  }
  if (dInterval) {
    clearInterval(dInterval)
  }

  document.getElementById('gauge-container').style.display = 'none'
  document.getElementById('bike-details').style.display = 'block'
})

document.getElementById('test').addEventListener('click', () => {
  document.getElementById('gauge-container').style.display = 'flex'
  document.getElementById('bike-details').style.display = 'none'
})


// document.getElementById('gauge-container').style.display = 'none'