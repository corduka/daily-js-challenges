/*
'use strict';

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true;
if (hasDriversLicense) console.log('I can drive :D');
*/

//calling / running / invoking function

// function logger() {
//     console.log('My name is Jonas.');
// }

// logger();

// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);


//Practice 1
// function greetUser(firstName, lastName) {
//     console.log(firstName, lastName);
//     const greeting = `Hello ${firstName} ${lastName}! Welcome back!`;
//     return greeting;
// }

// const welcomeUsers = greetUser('Abdullah', 'Corduk');
// console.log(welcomeUsers);

//Practice 2
// function checkAge (age) {
//     if (age>18) {
//         return 'You are an adult.';
//     } else {
//         return 'You are a minor.';
//     }
// }
// const ageMessage = checkAge(20);
// console.log(ageMessage); // Output: You are an adult.

//Practice 3
// function orderPizza (pizzaType, quantity) {
//     if (quantity===1) {
//         return `You ordered ${quantity} ${pizzaType} pizza.`;
//     } else {
//         return `You ordered ${quantity} ${pizzaType} pizza.`;
//     }
// }
// const orderMessage = orderPizza ('Margherita', 4);
// console.log(orderMessage);

//Practice 3.1

// function orderPizza (pizzaType, quantity) {
//     const pizzaWord = quantity === 1 ? 'pizza' : 'pizzas';
//     return `You ordered ${quantity} ${pizzaType} ${pizzaWord}.`;
// }
// const orderMessage = orderPizza ('Pineapple', 2);
// console.log(orderMessage);

//Practice 4
// function gradeEvaluation (studentsGrade) {
//     if (studentsGrade>=90) {
//         return `Excellent`;
//     } else if (studentsGrade >=70 && studentsGrade <=89) {
//         return `Good`;
//     } else if (studentsGrade<=69) {
//         return `Needs Improvement`;
//     } else {
//         return `Not a valid score`;
//     }
// }
// const results = gradeEvaluation(95);
// console.log(gradeEvaluation(95));

//Practice 5
// function temperatureFeedback (temperature) {
//     if (temperature>30) {
//         return "It's hot outside!";
//     } else if (temperature>=15 && temperature<=30) {
//         return "The weather is pleasant."
//     } else if (temperature<15) {
//         return "It's cold, wear a jacket!"
//     } else {
//         return "Not a valid temperature."
//     }
// }
// console.log(temperatureFeedback(-10));
// const feedback = temperatureFeedback(-10);

//Practice 6
// function evaluateSpeed (speed) {
//     if (speed > 120) {
//         return `You're speeding! Slow down!`;
//     } else if (speed <= 120 && speed >=60) {
//         return `You are driving at a safe speed.`;
//     } else if (speed < 60) {
//         return `You're driving quite slow. Speed up if safe!`
//     } else {
//         return `Not a valid input.`;
//     }
// } 
// console.log(evaluateSpeed(21));
// const speedMessage = evaluateSpeed(21);

//Practice 7
// function weatherStatus (temperature) {
//     if (temperature>35) {
//         return `It's extremely hot! Stay hydrated.`
//     } else if (temperature >= 20 && temperature <= 35) {
//         return `The weather is warm and pleasant.`
//     } else if (temperature >= 5 && temperature <= 19) {
//         return `It's a bit chilly. Consider wearing a jacket.`
//     } else if (temperature < 5) {
//         return `Brrr! It's freezing cold!`
//     } else {
//         return `Not a valid input.`
//     }
// } 
// console.log(weatherStatus(1));
// const weatherMessage = weatherStatus (2);

/*
//Function expression
const calcAge2 = function (birthYear) {
    return 2025 - birthYear;
}

//Arrow Function
const calcAge3 = birthYear => 2025 - birthYear;
const age3 = calcAge3 (1989);
console.log(age3);

//How many years a person has left until retirement?
const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2025 - birthYear;
const retirement = 65 - age;
return `${firstName} retires in ${retirement} years.`;
}

console.log(yearsUntilRetirement(1989, 'Abdullah'));
console.log(yearsUntilRetirement(1993, 'Tolga'));
*/

//Functions calling other functions
/*
const calcAge = function (birthYear) {
    return 2025 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;
    if (retirement < 0) {
        return `${firstName} was already retired ${Math.abs(retirement)} years ago.`;
    } else {
        return `${firstName} retires in ${retirement} years.`
    }
}

console.log(yearsUntilRetirement(1989, 'Abdullah'));
console.log(yearsUntilRetirement(1950, 'Mike'));
*/

// Function Practice 8
// function greetuser(hour) {
//     if (hour <= 11 && hour >=5) {
//         return `Good morning!`;
//     } else if (hour <= 17 && hour >=12) {
//         return `Good afternoon!`;
//     } else if (hour <= 21 && hour >=18) {
//         return `Good evening!`;
//     } else {
//         return `Good night!`;
//     }
// }
// console.log(greetuser(10));

//Function Coding Challange 1
/*
Jim Bob is working as a bus driver. However, 
he has become extremely popular amongst the city's residents. 
With so many passengers wanting to get aboard his bus, 
he sometimes has to face the problem of not enough space left on the bus! 
He wants you to write a simple program telling him 
if he will be able to fit all the passengers.

Task Overview:
You have to write a function that accepts three parameters:

cap is the amount of people the bus can hold excluding the driver.
on is the number of people on the bus excluding the driver.
wait is the number of people waiting to get on to the bus excluding the driver.
If there is enough space, return 0, and if there isn't, 
return the number of passengers he can't take.*/

 // avaiableSpace = cap - on
 // if avaiableSpace >= wait // return 0
 // it not, return wait-availableSpace : number of people who cannot fit

  //Should I decleare const availableSpace = (cap - on); inside of the function or outside of the function?
  //answer: inside
  /*
//  function enough(cap, on, wait) {
//     const availableSpace = (cap - on);
//     if (availableSpace >= wait) {
//         return 0
//     } else {
//         return wait - availableSpace;
//     }
//   }
//   console.log(enough(100, 100, 50));

//with arrow function:
  function enough(cap,on,wait) {
    return (cap-on >= wait) ? 0 : wait - (cap-on);
  }
  console.log(enough(100, 100, 0));
  */

  //Function Coding Challange 2
  //Given an integral number, determine if it's a square number:
//The tests will always use some integral number, so don't worry about that in dynamic typed languages.
// Examples
// -1  =>  false
//  0  =>  true
//  3  =>  false
//  4  =>  true
// 25  =>  true
// 26  =>  false

//Logic
//1. take the square root of the number.
//2. if the result is a integer, return true.
//3. if not, return false.

// let isSquare = function(n){
//     if (Number.isInteger(Math.sqrt(n))) {
//         return true;
//     }     else {
//         return false;
//     }
// }
// console.log(isSquare(4));

//with arrow function
// let isSquare = n => Number.isInteger(Math.sqrt(n));
// console.log(isSquare(4));


// A function that sums numbers from 1 to n: 1+2+3+4+5+6+7+8+9+10
// function summation(num) {
//     let sum = 0;
//     for (let i = 1; i <= num; i++) {
//       sum += i;
//     }
//     return sum;
//   }
  


// function summation (num) {
//     return (num * ( num + 1 )) / 2; 
// }
// // console.log(summation(2));


//DATA STRUCTURES : ARRAYS
// const friend1 = 'Michael';
// const friend2 = 'Abdullah'
// const friend3 = 'Tolga';
// const friends = ['Michael', 'Abdullah', 'Tolga']; //that is called literal syntax
// console.log(friends);

// //Another way to write array
// const years = new Array(1991, 1984, 2008, 2020);
// console.log(years[2]);
// console.log(friends.length);

const friends = ['Michael', 'Abdullah', 'Tolga']; 
friends.push('Jay');
console.log(friends);

//Array Method inclides
if (friends.includes('Michael')) {
  console.log('You have a friend called Steven');
}