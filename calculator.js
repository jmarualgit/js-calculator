let number1 = {data: null, decimalCount: 0};
let number2 = {data: null, decimalCount: 0};
let operation = {data: null, locationOfOperationInTextContent: null};
let answer = null;

document.getElementById("button-clear").addEventListener("click", () => {
    logButtonPressed("CLEAR");
    clear();
});

document.getElementById("button-sign").addEventListener("click", () => {
    logButtonPressed("SIGN");
    changeSign();
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
    addDecimal();
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
    const fullText = document.getElementById("textInputArea").textContent;
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
            if (number2.data == 0) {
                alert("can't divide by 0!")
            } else {
                answer = number1.data / number2.data;
            }
            break;
    }

    document.getElementById("textInputArea").textContent = document.getElementById("textInputArea").textContent + " = " + answer;
}

function clear() {
    document.getElementById("textInputArea").textContent = "";

    number1.data = null;
    number2.data = null;
    number1.decimalCount = 0;
    number2.decimalCount = 0;

    operation.data = null
    operation.locationOfOperationInTextContent = null;
}

function addDecimal() {
    if (number1.decimalCount == 0) {
        number1.decimalCount++;
        document.getElementById("textInputArea").textContent = document.getElementById("textInputArea").textContent + ".";
    } else if (number2.decimalCount == 0) {
        number2.decimalCount++;
        document.getElementById("textInputArea").textContent = document.getElementById("textInputArea").textContent + ".";
    }
}

function changeSign() {

    if (operation.data != null) {
        const text = document.getElementById("textInputArea").textContent;
        const textBeforeOperator = text.substring(0, operation.locationOfOperationInTextContent + 1);
        let textAfterOperator = text.substring(operation.locationOfOperationInTextContent + 2);

        if (textAfterOperator.includes("-") == false) {
            // add a "-" to the beginning
            textAfterOperator = "-" + textAfterOperator;
        } else {
            // take out the "-"
            textAfterOperator = textAfterOperator.substring(1);
        }
        
        document.getElementById("textInputArea").textContent = textBeforeOperator + " " + textAfterOperator;
    } else {
        let text = document.getElementById("textInputArea").textContent;

        if (text.includes("-") == false) {
            // add a "-" to the beginning
            text = "-" + text;
        } else {
            // take out the "-"
            text = text.substring(1);
        }

        document.getElementById("textInputArea").textContent = text;
    }
}