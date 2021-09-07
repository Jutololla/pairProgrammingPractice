//Objetivo: Recibir por consola un numero entero mayor que 0, 
//e imprimir ese numero de digitos de fibonacci.

function generateFibonacciNumbers(inputInt) {
    let aux1 = 0;
    let aux2 = 1;
    let aux3;
    let fibonacciNumbersGenerated = [];
    for (let i = 0; i < inputInt; i++) {
        if(i==0) fibonacciNumbersGenerated.push(0);
        if(i==1) fibonacciNumbersGenerated.push(1);
        if(i>=2){
        aux3 = aux1 + aux2;
        aux1 = aux2;
        aux2 = aux3;
        fibonacciNumbersGenerated.push(aux3)}
    }
    return fibonacciNumbersGenerated;
}

function validateIntInput(inputInt) {
    return (inputInt > 0);
}

function requestIntInput() {
    let auxBoolean = true;
    let valor1;
    while (auxBoolean) {
        valor1 = prompt("Ingrese un numero >0 y entero, porfavor", 0);
        if (validateIntInput(valor1)) {
            break;
        }
        console.log("intente nuevamente");
    }
    return valor1;
}

let inputInt = requestIntInput();
document.getElementById("name").innerHTML = generateFibonacciNumbers(inputInt);