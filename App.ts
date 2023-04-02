abstract class Vehicle {
  make: string;
  model: string;
  year: number;
  rented: boolean;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.rented = false;
  }

  getMake() {
    return this.make;
  }

  getModel() {
    return this.model;
  }

  getYear() {
    return this.year;
  }

  isRented() {
    return this.rented;
  }

  setRented(rented: boolean) {
    this.rented = rented;
  }

  abstract rentalRate(): number;

  rent() {
    if (this.isRented()) {
      console.log("This vehicle is already rented.");
    } else {
      console.log("You have rented this vehicle.");
      this.setRented(true);
    }
  }

  return() {
    if (this.isRented()) {
      console.log("You have returned this vehicle.");
      this.setRented(false);
    } else {
      console.log("This vehicle has not been rented.");
    }
  }
}

class Car extends Vehicle {
  numDoors: number;

  constructor(make: string, model: string, year: number, numDoors: number) {
    super(make, model, year);
    this.numDoors = numDoors;
  }

  rentalRate() {
    return 50; // $50 per day
  }
}

class Truck extends Vehicle {
  payloadCapacity: number;

  constructor(make: string, model: string, year: number, payloadCapacity: number) {
    super(make, model, year);
    this.payloadCapacity = payloadCapacity;
  }

  rentalRate() {
    return 100; // $100 per day
  }
}

class Motorcycle extends Vehicle {
  engineSizeCC: number;

  constructor(make: string, model: string, year: number, engineSizeCC: number) {
    super(make, model, year);
    this.engineSizeCC = engineSizeCC;
  }

  rentalRate() {
    return 25; // $25 per day
  }
}

const car = new Car("Toyota", "Corolla", 2022, 4);
car.rent();
car.return();
console.log(car.rentalRate());