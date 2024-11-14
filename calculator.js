let number1 = 0;
let number2 = 0;
let operation = '';

document.getElementById("button-clear").addEventListener("click", () => {
    logButtonPressed("CLEAR");
});

document.getElementById("button-sign").addEventListener("click", () => {
    logButtonPressed("SIGN");
});

document.getElementById("button-percent").addEventListener("click", () => {
    logButtonPressed("PERCENT");
});

document.getElementById("button-divide").addEventListener("click", () => {
    logButtonPressed("DIVIDE");
});

document.getElementById("button-seven").addEventListener("click", () => {
    logButtonPressed("SEVEN");
});

document.getElementById("button-eight").addEventListener("click", () => {
    logButtonPressed("EIGHT");
});

document.getElementById("button-nine").addEventListener("click", () => {
    logButtonPressed("NINE");
});

document.getElementById("button-multiply").addEventListener("click", () => {
    logButtonPressed("MULTIPLY");
});

document.getElementById("button-four").addEventListener("click", () => {
    logButtonPressed("FOUR");
});

document.getElementById("button-five").addEventListener("click", () => {
    logButtonPressed("FIVE");
});

document.getElementById("button-six").addEventListener("click", () => {
    logButtonPressed("SIX");
});

document.getElementById("button-subtract").addEventListener("click", () => {
    logButtonPressed("SUBTRACT");
});

document.getElementById("button-one").addEventListener("click", () => {
    logButtonPressed("ONE");
});

document.getElementById("button-two").addEventListener("click", () => {
    logButtonPressed("TWO");
});

document.getElementById("button-three").addEventListener("click", () => {
    logButtonPressed("THREE");
});

document.getElementById("button-plus").addEventListener("click", () => {
    logButtonPressed("PLUS");
});

document.getElementById("button-zero").addEventListener("click", () => {
    logButtonPressed("ZERO");
});

document.getElementById("button-modulus").addEventListener("click", () => {
    logButtonPressed("MODULUS");
});

document.getElementById("button-decimal").addEventListener("click", () => {
    logButtonPressed("DECIMAL");
});

document.getElementById("button-equal").addEventListener("click", () => {
    logButtonPressed("EQUAL");
});


function logButtonPressed(buttonName) {
    console.log(`Button Pressed: ${buttonName}`);
}

function addNumberToString(charInput) {
    document.getElementById("textInputArea").textContent = document.getElementById("textInputArea").textContent + `${charInput}`;
}