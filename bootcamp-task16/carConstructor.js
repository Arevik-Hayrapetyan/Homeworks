function CarConstructor(model, milesPerGallon) {
  this.tank = 0;
  this.odometer = 0;
  this.model = model;
  this.milesPerGallon = milesPerGallon;
}
CarConstructor.prototype.fill = function (gallons) {
  return (this.tank += gallons);
};
CarConstructor.prototype.drive = function (distance) {
  this.odometer += distance;

  if (this.milesPerGallon * distance > this.tank) {
    return "Cant drive";
  }
  return `"I ran out of fuel at ${this.odometer} miles!"`;
};
const car = new CarConstructor("BMV", 1);
console.log(car.fill(10));
console.log(car.drive(20));
