/**
 * 
 * Control Flow and Error Handling Notes
 */
/**
 * 
 * Scope
 */
// Global Scope
var pollution = 'sucks'; // pollutes the global window object
let globalPollution = 'avoided';

// Block Scope
// Don't use var becuase it doesn't follow the rules
// {
//     var x = 1;
//     {
//       var x = 2;  // same variable!
//       console.log(x);  // 2
//     }
//     console.log(x);  // 2
//   }
  
  let x = 10 // this won't be read by the below becuase it's not in the curly brackets, unless there is no X in the curly brackets, then the yellow curly bracket x will look UP (but not DOWN) in the code to find the this assignment. Had a below had been x, the console log would be 1. 
  {
    let a = 1;
    {
      let x = 2;  // different variable
      console.log(x);  // 2
    }
    console.log(x);  // 10
  }

  // console.log(a); //Reference error because this is already at the tippy top of scope (global) so it wont find the lower more narrow scope in the curly brackets

let foo = 0;
//foo is undefined, which means in boolena its false

// !foo would also work

if (foo) {
    console.log ('foo has a value:)')
}
else {
console.log('foo is NOT a value:(')
  }

  // x++ means to increment the variable 

 

//Nested if else

let age = 18

if (age >= 18) {
    if (age > 120) {
console.log('Are you sure abour that??')
    } else {
console.log('Access Granted')
    }
} else {
    if (age < 5) {
console.log('how are you working a computer. Access Denied')
    } else {
console.log('Access Denied')
    }
}

// Chained If else statement 
if (age>=10) {
    console.log('above 10')
} else if (age > 0) {
console.log('this is between 0 and 10')
} else if (age < 0) {
console.log('this is negative')
} else {
console.log(0)
}

let num = 100

if (num > 0) {
  if (num > 100) {
console.log('number is greated than 100')
  } if (num < 100) {
console.log('number is less than 100')
  }
} if (num = 100) {
    console.log('number is 100')
      }
else {
console.log('number is negative')
  }

  // Switch Statements

  let g = '1'
  switch (g) {
    case '1': console.log('1')
    break;
    case '2':
        console.log('2')
        break;
        default:
            console.log('default')
            break;
  }

  // Ternary Operators - they return automatically

 const tenSize = 10>8 ? 10<20 ? '10 is less than 20' : '10 is greater than 20' : '10 is smaller';
 console.log(tenSize);

 const username = 'John Doe'
 const age1 = 18;
 const displaySentence = `Hello ${username}! Your access is ${age1 >= 18 ? 'granted': 'denied ;('}`
 console.log(displaySentence)


 let x2 = 10;

 try { if (x2<0) {console.log('Negative')} else {throw "Error- I don't know what I'm doing";}} catch (error) {console.log (error)}


 // it wont log the "does this log?" becuase an error was thrown and not caught so nothing logges after below


console.log ('Does this log?')


let x4 = 10;
let isEven;

try {
    if (x4 > 0) {
        isEven = (x4 % 2 == 0) ? false : true;
    } else if (x4 <= 0) {
        throw "Error - Value of 0 or below.";
    }

    console.log(isEven);
} catch (err) {
    console.log(err);
} finally {
    console.log(x4);
}