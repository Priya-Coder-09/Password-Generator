const passwordBox = document.getElementById("password");
const copyIcon = document.getElementById("copy-icon");
const copyMsg = document.getElementById("copy-msg");

const length = 16;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*()+_><?|=\\.";

const allChars = upperCase + lowerCase + number + symbol;

function createPassword() {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while (password.length < length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    passwordBox.value = password;
    copyMsg.style.display = "none"; // hide copied message when new password is created
}

function copyPassword() {
    if (passwordBox.value !== "") {
        navigator.clipboard.writeText(passwordBox.value).then(() => {
            copyMsg.style.display = "block";
            setTimeout(() => {
                copyMsg.style.display = "none";
            }, 2000);
        }).catch(err => {
            console.error("Failed to copy: ", err);
        });
    }
}

// Add event listener to image
copyIcon.addEventListener("click", copyPassword);
