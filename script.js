// Constructor function for Car
function Car(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  
  // Accelerate method - increases speed by 10
  Car.prototype.accelerate = function() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  };
  
  // Brake method - decreases speed by 5
  Car.prototype.brake = function() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  };
  
  // Creating two Car objects with the given data
  const car1 = new Car('BMW', 120);
  const car2 = new Car('Mercedes', 95);
  
  // Testing accelerate and brake methods
  car1.accelerate();
  car1.accelerate();
  car1.brake();
  car1.accelerate();
  
  car2.brake();
  car2.accelerate();
  car2.brake();
  car2.accelerate();
  