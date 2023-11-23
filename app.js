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

const team = [
  {
    name: "Josh",
    surname: "Barry",
    job: "developer",
    age: 30,
  },
  {
    name: "Josh",
    surname: "Barry",
    job: "tester",
    age: 45,
  },
  {
    name: "Hazel",
    surname: "Nut",
    job: "team lead",
    age: 40,
  },
];

team.forEach((t) => {
  console.log("NAME:", t.name);
  console.log("SURNAME:", t.surname);
  console.log("JOB:", t["job"]);
  console.log("AGE:", t["age"]);
  console.log("***********");
});
team.forEach((person) => {
  const { name, surname, job, age } = person;
  console.log("NAME:", name);
  console.log("SURNAME:", surname);
  console.log("JOB:", job);
  console.log("AGE:", age);
  console.log("***********");
});

const getProduct = () => {
  return {
    id: "123",
    pName: "NIKE",
    price: 300,
    stock: 1000,
  };
};
console.log(getProduct());
let { pName, price, stock } = getProduct();
console.log("PRODUCT NAME:", pName, "PRICE", price);

stock = stock - 100;
console.log("REMAINING STOCK:", stock);

// const print = function (data) {
//   const { id, pName, price } = data;
//   console.log(pName, price);
// };
const print = function ({ pName, price }) {
  console.log(pName, price);
};

const data = { id: "123", pName: "NIKE", price: 300 };
print(data);

const names = ["Ahmet", "Mehmet", "İsmet", "Saffet"];
const ismet = names[2];
console.log(ismet);

const [ahmo, , ismo, safo] = names;
console.log(ahmo, ismo, safo);
