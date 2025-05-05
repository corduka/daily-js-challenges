//#1
function calcRange (temps) {
    const max = Math.max(...temps); // find highest temperature
    const min = Math.min(...temps); // find lowest temperature
    const range = max - min; // calculate the difference
    return range; // return the result
}

console.log(calcRange([12, 5, -3, 20, 18])); 

//#2

const cities = ['New York', 'London', 'Tokyo'];

const temperatures = [
[12, 19, 27], //New York
[5, 10, 18], //London
[22, 30, 35], //Tokyo
];

//#3
/*
Use the calcRange function to calculate the temperature range 
for each city and print a message like this: 
"The temperature range in New York is 25°C."
*/
for (let i = 0; i < cities.length; i++) {
    const city = cities[i];
    const temps = temperatures[i];
    const range = calcRange(temps);

    console.log(`The temperature range in ${city} is ${range}°C.`);
}