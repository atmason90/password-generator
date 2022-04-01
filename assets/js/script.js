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
    else if(hasUpperCase && hasLowerCase && hasNumbers) {
      userCharChoices = upperCase.concat(lowerCase, numbers);
    }
    else if(hasUpperCase && hasLowerCase && hasSpecialChar) {
      userCharChoices = upperCase.concat(lowerCase, specialChar);
    }
    else if(hasUpperCase && hasNumbers && hasSpecialChar) {
      userCharChoices = upperCase.concat(numbers, specialChar);
    }
    else if(hasLowerCase && hasNumbers && hasSpecialChar) {
      userCharChoices = lowerCase.concat(numbers, specialChar);
    }
    //2 confirms
    else if(hasUpperCase && hasLowerCase) {
      userCharChoices = upperCase.concat(lowerCase);
    }
    else if(hasUpperCase && hasSpecialChar) {
      userCharChoices = upperCase.concat(specialChar);
    }
    else if(hasUpperCase && hasNumbers) {
      userCharChoices = upperCase.concat(numbers);
    }
    else if(hasLowerCase && hasSpecialChar) {
      userCharChoices = lowerCase.concat(specialChar);
    }
    else if(hasLowerCase && hasNumbers) {
      userCharChoices = lowerCase.concat(numbers);
    }
    else if(hasSpecialChar && hasNumbers) {
      userCharChoices = specialChar.concat(numbers);
    }
    //1 confirm
    else if(hasUpperCase) {
      userCharChoices = upperCase;
    }
    else if(hasLowerCase) {
      userCharChoices = lowerCase;
    }
    else if(hasSpecialChar) {
      userCharChoices = specialChar;
    }
    else if(hasNumbers) {
      userCharChoices = numbers;
    };

    //create variable for final password
    var finalPassword = [];

    //for loop to randomly generate password based on user inputs
    for(var i = 0; i < passwordLength; i++) {
      var randomOutput = userCharChoices[Math.floor(Math.random() * userCharChoices.length)];
      finalPassword.push(randomOutput);
    }

    var password = finalPassword.join("");
    return password;

};


