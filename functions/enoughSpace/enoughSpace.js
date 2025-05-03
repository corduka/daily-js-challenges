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
 */
//with arrow function:
function enough(cap,on,wait) {
    return (cap-on >= wait) ? 0 : wait - (cap-on);
  }
  console.log(enough(100, 100, 0));
 