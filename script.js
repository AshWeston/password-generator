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


// Prompts when "Generate Password" is clicked
function generatePassword() {
  var passwordLength = prompt("Please choose a character length for your password.  It must be greater than 12 but less than 128.");

  var lowerCases = confirm("Do you want to include lowercase letters?");

  var upperCases = confirm("Do you want to include uppercase letters?");

  var numbers = confirm("Do you want to include numbers?");

  var special = confirm("Do you want to include special characters?");
