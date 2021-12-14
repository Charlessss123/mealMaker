const menu = {
  _courses : {
    appetizers : [],
    mains : [],
    desserts : [],
  },


 get appetizers() {
 return this._courses.appetizers;
  },

  get mains() {
 return this._courses.mains;
  },

  get desserts() {
 return this._courses.desserts;
  },

  set appetizers(appetizerIn) {
   this._courses.appetizers = appetizerIn;
  },

  

  set mains(mainIn) {
  this._courses.mains = mainIn;
  },


  set desserts(desertsIn) {
  this._courses.deserts = desertsIn;
  },


get courses() {
 return {
   appetizers: this.appetizers,
   mains: this.mains,
   desserts: this.desserts, 
 };
  },


addDishToCourse(courseName,dishName,dishPrice){
  const dish = {
  name: dishName,
  price: dishPrice,
   }
return this._courses[courseName].push(dish);
},

getRandomDishFromCourse(courseName){
   const dishes = this._courses[courseName];
   const randomIndex = Math.floor(Math.random()* dishes.length);
   return dishes[randomIndex];
},

generateRandomMeal(){
 const appetizer = this.getRandomDishFromCourse('appetizers');
  const main = this.getRandomDishFromCourse('mains');
  const dessert = this.getRandomDishFromCourse('desserts');
  const totalPrice = appetizer.price + main.price + dessert.price;
  
  return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name} The price is $${totalPrice}.`;
  }
};



menu.addDishToCourse('appetizers', 'Caesar Salad', 4.25);
menu.addDishToCourse('appetizers', 'Salad', 4.5);
menu.addDishToCourse('appetizers', 'Caesar ', 4.2);
const meal = menu.generateRandomMeal();
console.log(meal)
