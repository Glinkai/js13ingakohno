//1

//function Person(name, id, age) {
// this.name = name,
//  this.id = id,
// this.age = age
//}

//Object.prototype.sayHi = () => {
//console.log("Hello from prototype");
//}
//console.log(sayHi());

//2

//animal = {
//eats: true,

//}
//panther = {
//color: 'black',
//__proto__: animal

//}
//wolf = {
//size: 'big',
//__proto__: panther
//}

//3

proto = {
    sayHi() {
        console.log('Hi');
    }
}

myObject = Object.create(proto);
console.log(Object.getPrototypeOf(myObject));