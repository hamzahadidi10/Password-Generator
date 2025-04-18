const includesUpeercase = document.getElementById("includesUpeercase");
const includesLowercase = document.getElementById("includesLowercase");
const includesDigits = document.getElementById("includesDigits");
const includesSymbols = document.getElementById("includesSymbols");
const generate = document.getElementById("generate");
const passwordLengthInput = document.getElementById("passwordLenght");
const error = document.getElementById("error");
const generatedPass = document.getElementById("generatedPass");

function generatePassword(passwordLength, includesUpeercase, includesLowercase, includesDigits, includesSymbols) {
    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolsChars = "([-_ç_^@)]/*&~.!§?";

    let allowedChars = '';
    let password = '';

    allowedChars+= includesUpeercase.checked ? upperCaseChars : ""
    allowedChars+= includesLowercase.checked ? lowerCaseChars : ""
    allowedChars+= includesDigits.checked ? numberChars : ""
    allowedChars+= includesSymbols.checked ? symbolsChars : ""
    error.textContent = ""
    generatedPass.value = ""

    if (passwordLength <= 0) {
        error.textContent = "Password length must be at least 1";
        return;
    }
    if (allowedChars.length === 0) {
        error.textContent = "At least one set of character needs to be selected";
        return;
    }

    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }
    generatedPass.value = password;


}
generate.addEventListener("click", function() {
    const passwordLength = parseInt(passwordLengthInput.value);
    generatePassword(passwordLength, includesUpeercase, includesLowercase, includesDigits, includesSymbols);
});


