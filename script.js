// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var specialCharacters = "!@#$%^&*()";

// Prompts when "Generate Password" is clicked
function generatePassword() {
  var passwordLength = prompt("Please choose a character length for your password.  It must be greater than 8 but less than 128.");
  console.log (passwordLength);
  if (passwordLength < 8 || passwordLength >128) {
  alert ("Invalid number - Please choose a number between 8 and 128.");
  return;
}

  var lowerCases = confirm("Do you want to include lowercase letters?");

  var upperCases = confirm("Do you want to include uppercase letters?");

  var numbers = confirm("Do you want to include numbers?");

  var special = confirm("Do you want to include special characters?");

 // this is a minimum count for numbers, lowerCases, upperCases & specialCharacters
 var minimumCount = 0;


 // Empty minimums for numbers, lowerCases, upperCases & specialCharacters

 var minimumNumbers = "";
 var minimumLowerCases = "";
 var minimumUpperCases = "";
 var minimumSpecialCharacters = "";

   // Generator functions**
   var functionArray = {
    getNumbers: function() {
      return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
    },

    getLowerCases: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
    },

    getUpperCases: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
    },

    getSpecialCharacters: function() {
      return specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
    }

};

  // Checks to make sure user selected ok for all and uses empty minimums from above

  if (numbers === true) {
    minimumNumbers = functionArray.getNumbers();
    minimumCount++;

  }

  if (lowerCases === true) {
    minimumLowerCases = functionArray.getLowerCases();
    minimumCount++;

  }

  if (upperCases === true) {
    minimumUpperCases = functionArray.getUpperCases();
    minimumCount++;

  }

  if (special === true) {
    minimumSpecialCharacters = functionArray.getSpecialCharacters();
    minimumCount++;

  }

  // empty string variable for the for loop below
  var randomPasswordGenerated = "";

  // loop getting random characters
  for (let i = 0; i < (parseInt(passwordLength) - minimumCount); i++) {
    var randomNumberPicked = Math.floor(Math.random() * 4);

    randomPasswordGenerated += randomNumberPicked;

  }

  // to make sure characters are added to the password
  randomPasswordGenerated += minimumNumbers;
  randomPasswordGenerated += minimumLowerCases;
  randomPasswordGenerated += minimumUpperCases;
  randomPasswordGenerated += minimumSpecialCharacters;
  return randomPasswordGenerated;

}

