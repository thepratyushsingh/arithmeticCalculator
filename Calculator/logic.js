function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = '';
}

function calculate() {
    try {
        document.getElementById("display").value = eval(document.getElementById("display").value);
    } catch (error) {
        document.getElementById("display").value = 'Error';
    }
}

function calculatePercentage() {
    try {
        const expression = document.getElementById("display").value;
        const result = eval(expression + "/100");
        document.getElementById("display").value = result;
    } catch (error) {
        document.getElementById("display").value = 'Error';
    }
}

function calculateSquareRoot() {
    try {
        const expression = document.getElementById("display").value;
        const result = Math.sqrt(eval(expression));
        document.getElementById("display").value = result;
    } catch (error) {
        document.getElementById("display").value = 'Error';
    }
}

function calculateExponent() {
    try {
        const expression = document.getElementById("display").value;
        const result = eval("Math.pow(" + expression + ")");
        document.getElementById("display").value = result;
    } catch (error) {
        document.getElementById("display").value = 'Error';
    }
}