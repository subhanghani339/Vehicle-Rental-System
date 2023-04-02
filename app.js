var __extends =
  (this && this.__extends) ||
  (function () {
    var extendStatics = function (d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (d, b) {
            d.__proto__ = b;
          }) ||
        function (d, b) {
          for (var p in b)
            if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
      return extendStatics(d, b);
    };
    return function (d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError(
          "Class extends value " + String(b) + " is not a constructor or null"
        );
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype =
        b === null
          ? Object.create(b)
          : ((__.prototype = b.prototype), new __());
    };
  })();
var Vehicle = /** @class */ (function () {
  function Vehicle(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.rented = false;
  }
  Vehicle.prototype.getMake = function () {
    return this.make;
  };
  Vehicle.prototype.getModel = function () {
    return this.model;
  };
  Vehicle.prototype.getYear = function () {
    return this.year;
  };
  Vehicle.prototype.isRented = function () {
    return this.rented;
  };
  Vehicle.prototype.setRented = function (rented) {
    this.rented = rented;
  };
  Vehicle.prototype.rent = function () {
    if (this.isRented()) {
      console.log("This vehicle is already rented.");
    } else {
      console.log("You have rented this vehicle.");
      this.setRented(true);
    }
  };
  Vehicle.prototype.return = function () {
    if (this.isRented()) {
      console.log("You have returned this vehicle.");
      this.setRented(false);
    } else {
      console.log("This vehicle has not been rented.");
    }
  };
  return Vehicle;
})();
var Car = /** @class */ (function (_super) {
  __extends(Car, _super);
  function Car(make, model, year, numDoors) {
    var _this = _super.call(this, make, model, year) || this;
    _this.numDoors = numDoors;
    return _this;
  }
  Car.prototype.rentalRate = function () {
    return 50; // $50 per day
  };
  return Car;
})(Vehicle);
var Truck = /** @class */ (function (_super) {
  __extends(Truck, _super);
  function Truck(make, model, year, payloadCapacity) {
    var _this = _super.call(this, make, model, year) || this;
    _this.payloadCapacity = payloadCapacity;
    return _this;
  }
  Truck.prototype.rentalRate = function () {
    return 100; // $100 per day
  };
  return Truck;
})(Vehicle);
var Motorcycle = /** @class */ (function (_super) {
  __extends(Motorcycle, _super);
  function Motorcycle(make, model, year, engineSizeCC) {
    var _this = _super.call(this, make, model, year) || this;
    _this.engineSizeCC = engineSizeCC;
    return _this;
  }
  Motorcycle.prototype.rentalRate = function () {
    return 25; // $25 per day
  };
  return Motorcycle;
})(Vehicle);
var car = new Car("Toyota", "Corolla", 2022, 4);
car.rent();
car.return();
console.log(car.rentalRate());
