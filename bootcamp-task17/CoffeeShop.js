function CoffeeShop(name) {
  this.name = name;
  this.menu = [];
  this.orders = [];
  this.indx = 0;
}
CoffeeShop.prototype.dailyMenu = function (foodsDrinks) {
  this.menu.push(...foodsDrinks);
  return this.menu;
};
CoffeeShop.prototype.addOrder = function (order) {
  if (this.menu.some((el) => el.name === order.name)) {
    this.orders.push(order);
    return this.orders;
  } else {
    return "This item is currently unavailable!";
  }
};
CoffeeShop.prototype.listOrders = function () {
  return this.orders;
};
CoffeeShop.prototype.fullfillOrder = function () {
  if (this.orders.length > 0) {
    let readyFood = `The ${this.orders[0].foodName} is ready!`;

    this.orders.shift();
    return readyFood;
  } else {
    return `All orders have been fulfilled!`;
  }
};
CoffeeShop.prototype.dueAmount = function () {
  let sum = this.orders.reduce((acc, el) => acc + el.price, 0);
  return sum;
};
CoffeeShop.prototype.cheapestItem = function () {
  for (let indx = 1; indx < this.menu.length; indx++) {
    let cheapestItem = this.menu[0].price;
    if (cheapestItem > this.menu[indx].price) {
      cheapestItem = this.menu[indx].foodName;
      return cheapestItem;
    }
  }
};
CoffeeShop.prototype.drinksOnly = function () {
  let drinksOnly = [];
  for (let indx = 0; indx < this.menu.length; indx++) {
    if (this.menu[indx].type === "drink") {
      drinksOnly.push(this.menu[indx].foodName);
    }
  }
  return drinksOnly;
};
CoffeeShop.prototype.foodsOnly = function () {
  let foodsOnly = [];
  for (let indx = 0; indx < this.menu.length; indx++) {
    if (this.menu[indx].type === "food") {
      foodsOnly.push(this.menu[indx].foodName);
    }
  }
  return foodsOnly;
};

const myCoffeeShop = new CoffeeShop();
console.log(
  myCoffeeShop.dailyMenu([
    { foodName: "hot cocoa", price: 10, type: "drink" },
    { foodName: "iced tea", price: 3, type: "drink" },
    { foodName: "cinnamon roll", price: 5, type: "food" },
  ])
);
console.log(
  myCoffeeShop.addOrder({ foodName: "hot cocoa", price: 10, type: "drink" })
);

console.log(
  myCoffeeShop.addOrder({ foodName: "iced tea", price: 5, type: "drink" })
);

console.log(myCoffeeShop.fullfillOrder());
console.log(myCoffeeShop.fullfillOrder());
console.log(myCoffeeShop.listOrders());
console.log(myCoffeeShop.dueAmount());
console.log(myCoffeeShop.cheapestItem());
console.log(myCoffeeShop.drinksOnly());
console.log(myCoffeeShop.foodsOnly());
console.log(myCoffeeShop.listOrders());
