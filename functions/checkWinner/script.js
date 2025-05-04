//1
const calcAverage = (scoreOne, scoreTwo, scoreThree) => (scoreOne + scoreTwo + scoreThree)/3;
console.log(calcAverage(44,23,71));
//2
const scoreDolphins = calcAverage (44, 23, 71);
const scoreKoalas = calcAverage (65, 54, 49);

const scoreDolphins2 = calcAverage(85, 54, 41); // DATA 2: Dolphins
const scoreKoalas2 = calcAverage(23, 34, 27); // DATA 2: Koalas

//3
function checkWinner (scoreDolphins, scoreKoalas) {
    if (scoreDolphins>=scoreKoalas*2) {
        console.log(`Dolphins win (${scoreDolphins} vs. ${scoreKoalas})`);
    } else if (scoreKoalas>=scoreDolphins*2) {
        console.log(`Koalas win (${scoreKoalas} vs. ${scoreDolphins})`);
    } else {
        console.log(`No team wins...`);
    }
}
//4
console.log(checkWinner(scoreDolphins, scoreKoalas)); // For DATA 1
console.log(checkWinner(scoreDolphins, scoreKoalas2)); // For DATA 2
