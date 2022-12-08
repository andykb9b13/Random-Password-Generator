
// Creating a random set of characters
let allChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*"
let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let lowerChars = "abcdefghijklmnopqrstuvwxyz"
let numberChars = "1234567890"
let specialChars = "!@#$%^&*"
let charString = "";

function newPassword() {
  let numCharacters = prompt("How many characters would you like your password to be? (Between 8 and 128 characters")
  if (numCharacters >= 8 && numCharacters <= 128) {
    confirm("Your password is: " + numCharacters + " characters long")
  } else if (numCharacters < 8) {
    alert("You password is too SHORT. Must be between 8 and 15 characters")
    return newPassword()
  } else {
    alert("Your password is too LONG. Must be between 8 and 15 characters")
    return newPassword()
  }
  // Ask the user if they want lowercase letters
  let lowercase = confirm("Would you like to use lowercase letters?");
  if (lowercase) {
    alert("Your password will include lowercase letters")
    charString = charString.concat(lowerChars);
    console.log(charString)
  } else {
    alert("Your password will NOT contain lowercase letters")
  }
  // ask the user if they want uppercase letters
  let uppercase = confirm("Would you like to use UPPERCASE letters?");
  if (uppercase) {
    alert("Your password will include UPPERCASE letters")
    charString = charString.concat(upperChars)
    console.log(charString)
  } else {
    alert("Your password will NOT contain UPPERCASE letters")
  }
  // ask the user if they want numbers
  let numbers = confirm("Would you like to use numbers?");
  if (numbers) {
    alert("Your password will include numbers")
    charString = charString.concat(numberChars)
    console.log(charString)
  } else {
    alert("Your password will NOT contain numbers")
  }
  // ask the user if they want special characters
  let special = confirm("Would you like to use special characters? (Ex. $ # % *)");
  if (special) {
    alert("Your password will include special characters")
    charString = charString.concat(specialChars)
    console.log(charString)
  } else {
    alert("Your password will NOT contain special characters")
  }

  // Actually make the password
  function makePassword() {
    let password = ""
    for (let i = 0; i < numCharacters; i++) {
      let charSelector = Math.floor(Math.random() * charString.length);
      let newChar = charString[charSelector];
      password = password.concat(newChar);
      console.log(password);
    }
    return password
  }
  return makePassword()
}

var generateBtn = document.querySelector("#generate");
// !!!!THIS CODE NEEDS TO BE IN THE FUNCTION WRITE PASSWORD so it can be run multiple times!!!!

// Write password to the #password input
function writePassword() {
  var password = newPassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





//  confirm each character type choice (at least one character choice MUST be selected when all prompts have been answered)
// The password generated matches the selected character criteria