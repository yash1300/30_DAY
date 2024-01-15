const passwordBox = document.getElementById('password');
const length = 12
const upperCase = "QWERTYUIOPLKJHGFDSAZXCVBNM"
const lowerCase = "qwertyuioplkjhgfdsazxcvbnm"
const number = "0123456789"
const symbol = "!@#$~%^&*()_+=-:;<>.,?/|\`";

const allchars = number + upperCase + lowerCase + symbol;


function createPassword(){
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];
    password += number[Math.floor(Math.random() * number.length)];

    while(length > password.length){
        password += allchars[Math.floor(Math.random() * allchars.length)];
    }
    passwordBox.value = password;
}