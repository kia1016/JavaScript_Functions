console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
// function printOdds(){
//     for (let i = 1; i <= 100; i++) {
//         if ( i % 2 != 0) {
//             console.log(i);
//         }
// }
// }

//printOdds();
// Exercise 2 Section

console.log("EXERCISE 2:\n==========\n");

function checkAge (age = 15) {
    let aboveSixteen = "You can drive!";
    let belowSixteen = "Sorry, but you need to wait until you're 16";
    
    if(age <16) {
        console.log (belowSixteen);
    }
        else if (age > 16) {
            console.log (aboveSixteen);
        }
}


    checkAge(20)

    /*function checkAge (age = 15, name = "Tyler Perry") {
        let aboveSixteen = `Congrats ${name}, you can drive`;
        let belowSixteen = `Sorry ${name}, but you are not old enough yet and will need to wait until you are sixteen`;
        if (age > 16) {console.log (aboveSixteen);
        } else (age < 16) {console.log (belowSixteen);
        }
    }

    do {var userAge = prompt ("Please enter a number", 100);
} while (userAge <= 0);

checkAge(46, "Tyler Perry");
*/
