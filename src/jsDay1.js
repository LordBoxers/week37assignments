/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function add(n1, n2){
   return n1 +n2;
}
var sub = function(n1,n2){
  return n1 - n2
}
var mul = function(n1,n2) {
    return n1 * n2;
}
var cb = function(n1,n2, callback){
    try {
  return "Result from the two numbers: "+n1+"+"+n2+"="+callback(n1,n2);
    } catch (e) {
        if (e instanceof EvalError) {
            console.error(e.name + ': ' + e.message)
        } else if (e instanceof RangeError) {
            console.error(e.name + ': ' + e.message)
        }
    }
};

console.log(cb(1,2,mul))
console.log(cb(1,2, function() {return t1/t2; }))

//opgave 1 punkt 2

/*      
 *add(1,2) - add two inputs together
 *add - prints the function name
 *add(1,2,3) - adds 2 first inputs as the constructor implied first
 *add(1) - function can't run since 1 can't be added to a undefined variable
 *cb(3,3,add) - returns the two first input as parameters for the add function
 *cb(4,3,sub) - returns the two first input as parameters for the sub function
 *cb(3,3,add()) - callback is not considered a function since it requires parameters and throws a 'Not a Number' error
 *cb(3,"hh",add) - throws an error since the callback method throws a 'Not a Number' error
 **/ 


//opgave 2 punkt 1
var gruppe1 = ["Henrik", "Michael", "Sebastian", "Rasmus", "bob", "bo"]
var gruppe2 = gruppe1.filter(x => x.length <= 3)
console.log(gruppe1)
console.log(gruppe2)

//opgave 2 punkt 2
var gruppeUC = gruppe1.map(x => x.toUpperCase())
console.log(gruppeUC)

//opgave 2 punkt 3
var toList = function (a) {
    return "<ul>"+a.map(x => "<li>"+x).join("</li>")+"</li></ul>"
}

console.log(toList(gruppe1));

//opgave 2 punkt 4
var cars = [
  { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
  { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
  { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
  { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
  { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
];

var newerThan1999 = cars.filter(x => x.year > 1999)
console.log(newerThan1999)
var findVolvo = cars.filter(x => x.make === 'Volvo');
console.log(findVolvo)
var cheapCar = cars.filter(x => x.price < 5000);
console.log(cheapCar);

//opgave 2 punkt 4a
var fancyfunc = cars.map(x => "INSERT INTO cars (id,year,make,model,price) VALUES ( " + x.id + ", " + x.year + ", " + x.make + ", " + x.model + ", " + x.price + " );")
console.log(fancyfunc.join("\n"))

//opgave 3 punk 1
//mit svar før afprøvning: A, D, F, E, B
var msgPrinter = function(msg,delay){
  setTimeout(function(){
    console.log(msg);
  },delay);
};
console.log("aaaaaaaaaa");
msgPrinter ("bbbbbbbbbb",2000);
console.log("dddddddddd");
msgPrinter ("eeeeeeeeee",1000);
console.log("ffffffffff");
