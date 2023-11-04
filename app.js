let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let specialCar = `!@#$%^&*`;
let number = "1234567890";
let allCar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*1234567890abcdefghijklmnopqrstuvwxyz"

let passBox = document.querySelector('.passbox');
let copy = document.querySelector('.copy');
let generateBtn = document.querySelector('.generate-btn');
let length = 12;

function randomPass(){
    let password = "";
    password += upperCase[Math.floor(Math.random()* upperCase.length)];
    password += specialCar[Math.floor(Math.random()* specialCar.length)];
    password += lowerCase[Math.floor(Math.random()* lowerCase.length)];
    password += number[Math.floor(Math.random()* number.length)];

    while(length > password.length){
        password += allCar[Math.floor(Math.random()* allCar.length)];
    }

    passBox.value = password
}

generateBtn.addEventListener('click',randomPass)

copy.addEventListener('click',()=>{
    passBox.select();
    setTimeout(()=>{
        navigator.clipboard.writeText(passBox.value);
        passBox.value = '';
    },200)
   
})