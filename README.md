# Password Generator

## The Purpose of This Project

The purpose of this project was to create an application that enables a user to generate a random password that meets a set of predefined criteria for number of characters, inclusion of upper case letters, inclusion of lower case letters, inclusion of special characters, and inclusion of numbers. The goal was to write that application so that the user would be required specify a number of characters between 8 and 128, then confirm at least one of the other criteria to be included in their randomly generated password.

Working from starter code that included very basic HTML and CSS files, I used javascript to power the application in the browser. I used a variety of different tools to execute this project including: functions, if/else if/else statements, and for loops.

## Code Examples

This example shows the part of a javascript function that collected user inputs.
```js
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
```

This example shows how I utilized a for loop to generate the random password.
```js
//create variable for final password
    var finalPassword = [];

    //for loop to randomly generate password based on user inputs
    for(var i = 0; i < passwordLength; i++) {
      var randomOutput = userCharChoices[Math.floor(Math.random() * userCharChoices.length)];
      finalPassword.push(randomOutput);
    }

    var password = finalPassword.join("");
    return password;
```

## Demo

![Demo of password generator](assets/demo.gif)

## Links

Deployed Application:
https://atmason90.github.io/password-generator/

GitHub Repository:
https://github.com/atmason90/password-generator

## License

MIT License

Copyright (c) 2022 Andrew Mason

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## References


## Technologies Used

