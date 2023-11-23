// const car = {
//   brand: "BMW",
//   model: 2020,
//   engine: 2000,
//   colors: ["pink", "blue"],
// };

// const brand = car.brand;
// console.log(brand);

// console.log(car["model"]);

// const { brand: name, engine, colors } = car;

// console.log(engine, colors, name);

// const { model } = car;
// console.log(model);

const cars = {
  car1: {
    name: "BMW",
    model: 1990,
    engine: 1.6,
  },

  car2: {
    name: "Mercedes",
    model: 2022,
    engine: 2.0,
  },
  car3: ["anadol", "togg", "devrim"],
  car4: "kağnı",
};

let { car1, car2, car4, car3 } = cars;
console.log(car2, car4);

const { name: c1Name, model: c1Model } = car1;
const { name: c2Name, model: c2Model } = car2;
console.log(c2Name, c2Model);

const {
  car1: { nameCar1, modelCar1, engineCar1 },
  car2: { nameCar2, modelCar2, engineCar2 },
} = cars;
