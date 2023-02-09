let n1=7;
let n2=3;

/**
 * Restar(num1, num2) takes two numbers as arguments and returns the result of subtracting the second
 * number from the first
 * @param num1 - The first number to subtract.
 * @param num2 - number
 * @returns The result of the subtraction of the two numbers.
 */
function restar(num1, num2){
    let resultado=num1-num2;
    console.log(`el resultao de la resta es ${resultado}`);
    return resultado;
}

restar(n1, n2);