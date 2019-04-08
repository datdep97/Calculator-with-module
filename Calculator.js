var Divide   = require ('./Divide');
var Multiply = require ('./Multiply');
    
class Calculator {
        calculate(operator, firstNumber, secondNumber) {
            return operator.operate(firstNumber, secondNumber);
    }
}

var run = new Calculator

console.log(run.calculate(new Multiply(), process.argv[2], process.argv[3]));
console.log(run.calculate(new Divide(), process.argv[2], process.argv[3]));


try {
        console.log(run.calculate(new Divide(), process.argv[2], process.argv[3]));
} 
catch (e) {
        console.log(e);
}

