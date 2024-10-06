const ElectricBike = {
  brand: 'Gardeney',
  modelName: 'C08C Mini Harlei',
  speed: 0,
  maxSpeed: 32,
  wheelSize: 10,
  voltage: 60,
  foldable: false,
  colors: ['Black', 'Red', 'Blue'],
  features: ['LED Lights', 'LCD Display'],
  specs: {
    brand: 'Gardeney',
    maxUserWeight: 85,
    battery: '48V,10AH Li battery',
    chargingTime: 4,
    range: 30,
    weight: 28,
    tire: '10x6.0/5.5',
    brake: 'Oil brake + disc brake',
    motor: 800,
  },
  accelerate: function () {
    if (this.speed === this.maxSpeed) return this.speed
    return (this.speed += 2)
  },
  deaccelerate: function () {
    if (this.speed === 0) return this.speed
    return (this.speed -= 2)
  },
}
