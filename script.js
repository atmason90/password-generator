// Assignment Code
var generateBtn = document.querySelector("#generate");

//add char variables as arrays
//number of characters, UPPER, lower, special characters
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialChar = [' ', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~']
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password; //will write password to page
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//function to generate password (){
function generatePassword (){
  //prompt for password length
  var passwordLength = prompt("How many characters would you like your password to be?", "must be between 8 and 128 characters");
      //if not a number, alert
    if(isNaN(passwordLength)){
      alert("You must enter a number between 8 and 128");
      //return to generate password
      return generatePassword();
    
      //if not between 8-128, alert
    } else if(passwordLength < 8 || passwordLength > 128){
      alert("must be between 8 and 128 characters");
      //return to generate password
      return generatePassword();
    } else {
      //ask for character types
      var hasUpperCase = confirm("Do you want to include upper case letters?");
      var hasLowerCase = confirm("Do you want to include lower case letters?");
      var hasSpecialChar = confirm("Do you want to include special characters?");
      var hasNumbers = confirm("Do you want to include numbers?");
    }
  

    //if no confirms
    if (!hasUpperCase && !hasLowerCase && !hasSpecialChar && !hasNumbers) {
      var userCharChoices = alert("You must choose at least one criteria");
    //4 confirms
    } else if (hasUpperCase && hasLowerCase && hasSpecialChar && hasNumbers) {
      userCharChoices = upperCase.concat(lowerCase, specialChar, numbers);
    }
    //3 confirms
}


// THEN I am presented with a series of prompts for password criteria
    //issue prompts to user
      //prompted for the length
        //at least 8 characters and no more than 128 characters
      //asked for character type
        // confirm whether or not to include lowercase, 
        // uppercase, 
        // numeric, 
        // and/or special characters
      //Input should be validated 
        //at least one character type should be selected
      //a password is generated that matches the selected criteria
        //How?
//}

//function issuePrompts(){
  //characterLengthPrompt();
  //asked for character type???
//}

//function characterLengthPrompt(){
  //at least 8 characters and no more than 128 characters???
//}

//function confirmLowercase(){
  // confirm whether or not to include lowercase, ???
//}

//function valideateUserChoice(){
  //make sure that at least one character type should be selected
//}
