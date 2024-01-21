const passwordShowcase = document.querySelector("input");
const generateBtn = document.querySelector("button");
const copyPasswordBtn = document.querySelector("i");
const confirmationAlert = document.querySelector(".popup")

generateBtn.onclick = () => {
    generateBtn.innerHTML = '<div class="animation"><div></div><div></div><div></div></div>';


    setTimeout(() => {
        const generateRandomChar = (charSet) => {
            const randomIndex = Math.floor(Math.random() * charSet.length);
            return charSet[randomIndex];
        };

        const capitalAlphabets = Array.from({ length: 26 }, (_, index) => String.fromCharCode(65 + index));
        const smallAlphabets = Array.from({ length: 26 }, (_, index) => String.fromCharCode(97 + index));
        const numbers = Array.from({ length: 10 }, (_, index) => index.toString());
        const symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '+', '=', '[', ']', '{', '}', '|', ';', ':', ',', '.', '<', '>', '/', '?'];

        const getRandomChar = () => {
            const charSets = [capitalAlphabets, smallAlphabets, numbers, symbols];
            const randomCharSet = charSets[Math.floor(Math.random() * charSets.length)];
            return generateRandomChar(randomCharSet);
        };

        const generatePassword = (length) => {
            let newPassword = '';
            for (let i = 0; i < length; i++) {
                newPassword += getRandomChar();
            }
            return newPassword;
        };

        const newPassword = generatePassword(12); // You can adjust the length as needed
        passwordShowcase.value = newPassword;
        generateBtn.innerHTML = "<span class=\"fa-solid fa-bolt\"></span> Generate Another";
    }, 1000);
};

copyPasswordBtn.onclick = () => {
    passwordShowcase.select();
    navigator.clipboard.writeText(passwordShowcase.value);
    confirmationAlert.style.transform = "translate(-50%, -50%) scale(1)";
    confirmationAlert.style.top = "50%";
}

document.addEventListener("click", (event) => {
    if (!copyPasswordBtn.contains(event.target)) {
        if(!confirmationAlert.contains(event.target)) {
            confirmationAlert.style.transform = "translate(-50%, -50%) scale(0)";
            confirmationAlert.style.top = "0";
        }
    } 
});