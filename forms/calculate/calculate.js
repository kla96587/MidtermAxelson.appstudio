let number1 = parseInt(prompt("Please input a number"))
let number2 = parseInt(prompt("Please input another number"))
let number3 = parseInt(prompt("Please input a final number"))
let answer = ""

function calcAvgSquare(num1, num2, num3) {
    let answer = (((num1 + num2 + num3)/3) *math.pow(num1))
    return answer
}


console.log(`The answer is ${answer}.`)