// for (var i = 4096; i >= 1; i /= 2) {
//   if (i > 1) {
//     console.log(i);
//   }
// }

// var presidents = ["George Washingoton", "John Adams", "Thomas Jefferson", "James Monroe", "John Quincy Adams"]

// for (var i = 0; i < presidents.length; i++) {
//   if (i < presidents.length) {
//     console.log(presidents[i]);
//   }
// }

// var antSpecies = {
//   argentine: {},
//   army: {},
//   bigHeaded: {},
//   black: {},
//   bull: {},
//   carpenter: {},
//   crazy: {},
//   fire: {},
//   glider: {},
//   honeyPot: {},
//   jackJumper: {}
// }

// for (var key in antSpecies) {
//   if (antSpecies.hasOwnProperty(key)) {
//     console.log(key + " -> " + antSpecies[key]);
//   }
// }



// var antSpecies = {
//   argentine: {},
//   army: {},
//   bigHeaded: {},
//   black: {},
//   bull: {},
//   carpenter: {},
//   crazy: {},
//   fire: {},
//   glider: {},
//   honeyPot: {},
//   jackJumper: {}
// }

// for (var key in antSpecies) {
//     console.log(key);
  
// }





// var letters = "";
// function stackLetters() {
//     for (var i = 0; i < alphabet.length; i++) {
//       if (i%5 === 4) {
//         letters += alphabet[i] + " ";
//       } else {
//         alphabet[i];
//         letters += alphabet[i];
//         }

// 


// first part of the exercise for alphacounterbelow 

// var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// var list = "";
// function stackedLetters() {
//   for (var i = 0; i < letters.length; i++) {
//     list += letters[i];
//     console.log(list);
//   }
//   stackedLetters();





// section part of the exercise //


var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
 "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function stackLetters() {
  var list = ' ';
  var counter = 1; // need the counter to put the space after every 5th letter 
  for (var i = 0; i < letters.length; i++) {
    list += letters[i]; // this builds out the list 
    if (counter === 5) { //this makes sure the counter gets the fifth letter 
      list += ' '; // this adds the space to the list after the fifth letter 
      counter = 0; // this resets the counter so we can keep going 
    }
    counter++; // this get the counter started back and is part of the function 
    console.log(list); // last item of the function // 
  }
}
stackLetters();



