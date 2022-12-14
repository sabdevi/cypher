/* 

Write a cipher program to encode a message and output the encoding message

PSEUDOCODE

1.  Accept input from user
2.  Create function to encode the data.
3.  Compare all inputs against the equivilent ASCII values and report back position in a loop
4.      If special character exit do nothing
        else if charctarer is lowercase perform encoding
        else if character is uppercase perform encoding
5. Output message as encoded.

*/

// Request user to input a message

let message = prompt("Please enter a message to be encoded: ");

function cipherCode(myString) {
    myString = myString.split('');
    myString.forEach(character => {
        
        // If special character don't encode - replace with original input

        if (character == character.toUpperCase() && character == character.toLowerCase()) {
            character = myString.splice(myString.indexOf(character), 1, character);
        }

        // Compare Uppercase ASCII is 65-90 and replace character with ASCII equivilent + 15

        else if (character == character.toUpperCase() && character.charCodeAt(0) > 64 && character.charCodeAt(0) < 91) {
            
            // If ASCII value is more than 'Z' (90) then take the difference and add ASCII 64 (A), otherwise just add 15

            if (character.charCodeAt(0)+15 > 90) {                
                character = myString.splice(myString.indexOf(character), 1, (character.charCodeAt(0)+15)%90+64);
            }
            else {
                character = myString.splice(myString.indexOf(character), 1, (character.charCodeAt(0)+15));                
            }
        }

        // Compare Lowercase ASCII is 97-122 and replace character with ASCII equivilent + 15

        else if (character == character.toLowerCase() && character.charCodeAt(0) > 96 && character.charCodeAt(0) < 123) {
            
            // If ASCII value is more than 'z' (122) then take the difference and add ASCII 96 (a), otherwise just add 15
    
            if (character.charCodeAt(0)+15 > 122) {
                character = myString.splice(myString.indexOf(character), 1, (character.charCodeAt(0)+15)%122+96);
            }
            else {
                character = myString.splice(myString.indexOf(character), 1, character.charCodeAt(0)+15);
            }
        }
    });
    
    // Convert ASCII code to the character

    for (i = 0; i < myString.length; i++) {        
        if (!isNaN(myString[i]) && myString[i] !== " " && myString[i] !== "0" && myString[i] !== "1" && myString[i] !== "2" && myString[i] !== "3" && myString[i] !== "4" && myString[i] !== "5" && myString[i] !== "6" && myString[i] !== "7" && myString[i] !== "8" && myString[i] !== "9") {
                myString[i] = String.fromCharCode(myString[i]);
            }
        }

    // Join array together to form a string for output
    
    myString = myString.join('');
    return myString;
}

// Display encoded message to screen

console.log(`
------------------------------------------------------------
Your messsage is : ${message}
------------------------------------------------------------
MESSAGE ENCODING .............................. 
------------------------------------------------------------
Encoded message is : ${cipherCode(message)}
------------------------------------------------------------`);
