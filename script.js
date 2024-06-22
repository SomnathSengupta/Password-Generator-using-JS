let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowercase = "abcdefghijklmnopqrstuvwxyz";
let numbers = "0123456789";
let symbols = "!@#$%^&*()_+";
let password = "";

let button = document.querySelector(".generate");
let display = document.querySelector("#password");
let copy = document.querySelector(".copy");
let len = 12;
let count = 0;

let generatePassword = () => {
    while (count <= len) {
        password += uppercase[Math.floor(Math.random() * uppercase.length)];
        password += lowercase[Math.floor(Math.random() * lowercase.length)];
        password += numbers[Math.floor(Math.random() * numbers.length)];
        password += symbols[Math.floor(Math.random() * symbols.length)];
        count += 4;
    }
    console.log(password);
    display.value = password;
    count = 0;
    password = "";
};

let copyPassword = () => {
    display.select();
    navigator.clipboard.writeText(display.value).then(() => {
        console.log('Password copied to clipboard successfully!');
    }).catch(err => {
        console.error('Failed to copy password: ', err);
    });
};

button.addEventListener("click", () => {
    generatePassword();
});
copy.addEventListener("click", () => {
    copyPassword();
});
