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

function password() {
  let numCharacters = prompt("How many characters would you like your password to be? (Between 8 and 15 characters")
  if (numCharacters >= 8 && numCharacters <= 15) {
    confirm("Your password is: " + numCharacters + " characters long")
  } else if (numCharacters < 8) {
    alert("You password is too SHORT. Must be between 8 and 15 characters")
  } else {
    alert("Your password is too LONG. Must be between 8 and 15 characters")
  }
  let lowercase = prompt("Would you like to use lowercase letters? Y or N");
  if (lowercase === "Y") {
    confirm("Your password will include lowercase letters")
  } else if (lowercase === "N") {
    confirm("Your password will NOT contain lowercase letters")
  } else {
    alert("Please enter a vaild entry")
  }
  let uppercase = prompt("Would you like to use UPPERCASE letters?");
  if (uppercase === "Y") {
    confirm("Your password will include UPPERCASE letters")
  } else if (uppercase === "N") {
    confirm("Your password will NOT contain UPPERCASE letters")
  } else {
    alert("Please enter a vaild entry")
  }
  let numbers = prompt("would you like to use numbers?");
  if (numbers === "Y") {
    confirm("Your password will include numbers")
  } else if (numbers === "N") {
    confirm("Your password will NOT contain numbers")
  } else {
    alert("Please enter a vaild entry")
  }
  let special = prompt("Would you like to use special characters? (Ex. $ # % *)");
  if (special === "Y") {
    confirm("Your password will include special characters")
  } else if (special === "N") {
    confirm("Your password will NOT contain special characters")
  } else {
    alert("Please enter a vaild entry")
  }
}




//  confirm each character type choice (at least one character choice MUST be selected when all prompts have been answered)
// The password generated matches the selected character criteria