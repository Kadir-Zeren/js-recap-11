const car = {
  brand: "BMW",
  model: 2020,
  engine: 2000,
  colors: ["pink", "blue"],
};

const brand = car.brand;
console.log(brand);

console.log(car["model"]);

const { brand: name, engine, colors } = car;

console.log(engine, colors, name);
