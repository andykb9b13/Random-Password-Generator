
// Creating a random set of characters
let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let lowerChars = "abcdefghijklmnopqrstuvwxyz"
let numberChars = "1234567890"
let specialChars = "!@#$%^&*"
let charString = "";

// Function that makes the password using character and length choices
function newPassword() {
  charString = "";
  let numCharacters = prompt("How many characters would you like your password to be? (Between 8 and 128 characters)")
  if (!numCharacters) {
    alert("Whoops! Nevermind...")
    return "I guess you didn't want to make a password after all :( Try again...it's fun!"
  } else if (numCharacters >= 8 && numCharacters <= 128) {
    alert("Your Super-Secret password is: " + numCharacters + " characters long (...now for the fun part)")
  } else if (numCharacters < 8) {
    alert("OH NO!!! You password is too SHORT! Try again. It must be between 8 and 128 characters")
    return newPassword()
  } else if (numCharacters > 128) {
    alert("AHHHHHH!!! Your password is too LONG! Try again. It must be between 8 and 128 characters")
    return newPassword()
  } else {
    alert("Whoa, that's weird! I don't think that was a number. Please enter only a number.")
    return newPassword()
  }
  // Ask the user if they want lowercase letters
  let lowercase = confirm("Would you like to use lowercase letters?");
  if (lowercase) {
    alert("Nice! Your password WILL include lowercase letters (...hooray for the little guys!)")
    // This combines the selected strings into the final charString which will hold all selected character choices
    charString = charString.concat(lowerChars);
    console.log(charString)
  } else {
    alert("No worries. Your password will NOT contain lowercase letters (...they're not my favorite anyways)")
  }
  // ask the user if they want uppercase letters
  let uppercase = confirm("Would you like to use UPPERCASE letters?");
  if (uppercase) {
    alert("Right on!! Your password WILL include UPPERCASE letters (...go BIG or go home, right?!)")
    charString = charString.concat(upperChars)
    console.log(charString)
  } else {
    alert("Ok! Your password will NOT contain UPPERCASE letters (...they'll sit this one out)")
  }
  // ask the user if they want numbers
  let numbers = confirm("Would you like to use numbers?");
  if (numbers) {
    alert("YAY!!! Your password WILL include numbers (...give me a high five!)")
    charString = charString.concat(numberChars)
    console.log(charString)
  } else {
    alert("Cool. Your password will NOT contain numbers (...numbers, schmumbers)")
  }
  // ask the user if they want special characters
  let special = confirm("Would you like to use special characters? (Ex. $ # % *)");
  if (special) {
    alert("YES!!! Your password WILL include special characters (...they're my f@v*r!te)")
    charString = charString.concat(specialChars)
    console.log(charString)
  } else {
    alert("No problem. Your password will NOT contain special characters (...yeah they're weird anyways)")
  }
  if (!lowercase && !uppercase && !numbers && !special) {
    alert("Whoa, wait a second! You must select a type of character for you password. Go back dude!")
    return newPassword()
  }

  // Actually make the password using the selected character and length choices
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

// Write password to the #password input
function writePassword() {
  var password = newPassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
