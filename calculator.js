let number1 = {data: null, decimalCount: 0};
let number2 = {data: null, decimalCount: 0};
let operation = {data: null, locationOfOperationInTextContent: null};
let answer = null;
let decimalCount = 0;

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
    setOperator("/");
});

document.getElementById("button-seven").addEventListener("click", () => {
    logButtonPressed("SEVEN");
    addToDisplay("7");
});

document.getElementById("button-eight").addEventListener("click", () => {
    logButtonPressed("EIGHT");
    addToDisplay("8");
});

document.getElementById("button-nine").addEventListener("click", () => {
    logButtonPressed("NINE");
    addToDisplay("9");
});

document.getElementById("button-multiply").addEventListener("click", () => {
    logButtonPressed("MULTIPLY");
    setOperator("x");
});

document.getElementById("button-four").addEventListener("click", () => {
    logButtonPressed("FOUR");
    addToDisplay("4");
});

document.getElementById("button-five").addEventListener("click", () => {
    logButtonPressed("FIVE");
    addToDisplay("5");
});

document.getElementById("button-six").addEventListener("click", () => {
    logButtonPressed("SIX");
    addToDisplay("6");
});

document.getElementById("button-subtract").addEventListener("click", () => {
    logButtonPressed("SUBTRACT");
    setOperator("-");
});

document.getElementById("button-one").addEventListener("click", () => {
    logButtonPressed("ONE");
    addToDisplay("1");
});

document.getElementById("button-two").addEventListener("click", () => {
    logButtonPressed("TWO");
    addToDisplay("2");
});

document.getElementById("button-three").addEventListener("click", () => {
    logButtonPressed("THREE");
    addToDisplay(3);
});

document.getElementById("button-plus").addEventListener("click", () => {
    logButtonPressed("PLUS");
    setOperator("+");
});

document.getElementById("button-zero").addEventListener("click", () => {
    logButtonPressed("ZERO");
    addToDisplay("0");
});

document.getElementById("button-modulus").addEventListener("click", () => {
    logButtonPressed("MODULUS");
    setOperator("MOD");
});

document.getElementById("button-decimal").addEventListener("click", () => {
    logButtonPressed("DECIMAL");
});

document.getElementById("button-equal").addEventListener("click", () => {
    logButtonPressed("EQUAL");
    getAnswer();
});

function logButtonPressed(buttonName) {
    console.log(`Button Pressed: ${buttonName}`);
}

function addToDisplay(charInput) {
    document.getElementById("textInputArea").textContent = document.getElementById("textInputArea").textContent + `${charInput}`;
}

function setOperator(operatorInput) {
    if (operation.data == null) {

        operation.data = operatorInput;
        setFirstNumber();
    
        document.getElementById("textInputArea").textContent = document.getElementById("textInputArea").textContent + ` ${operatorInput} `;

        const text = document.getElementById("textInputArea").textContent;
        operation.locationOfOperationInTextContent = text.indexOf(operatorInput);

        console.log("current location of operator is " + index);
    } else {
        setFirstNumber();
    }
}

function setFirstNumber() {
    if (number1.data == null) {
        number1.data = Number(document.getElementById("textInputArea").textContent);
    }

    console.log("number1.data is " + number1.data);
}

function getAnswer() {
    const fullText = document.getElementById("textInputArea").textContent
    const textAfterOperator = fullText.substring((operation.locationOfOperationInTextContent + 2));

    number2.data = Number(textAfterOperator);
    console.log("number2.data: " + number2.data);

    switch(operation.data) {
        case "+":
            answer = number1.data + number2.data;
            break;
        
        case "-":
            answer = number1.data - number2.data;
            break;

        case "x":
            answer = number1.data * number2.data;
            break;

        case "/":
            answer = number1.data / number2.data;
            break;
    }

    document.getElementById("textInputArea").textContent = document.getElementById("textInputArea").textContent + " = " + answer;
}