const Divide   = require ('./Divide');
const Multiply = require('./Multiply');
const Koa      = require('koa');
const app      = new Koa();    

class Calculator {
        calculate(operator, firstNumber, secondNumber) {
            return operator.operate(firstNumber, secondNumber);
    }
}

const theFirstNumber = (async (firstNumber, next) => {
        if (theFirstNumber === "") {
                 
                parseInt(firstNumber);    
        
        }

                await next();

});

const theSecondNumber = (async (secondNumber) => {
        if (theSecondNumber === "") {

                parseInt(secondNumber);
        
        }

                return secondNumber;

}); 

        
        
const run = new Calculator();

console.log(run.calculate(new Multiply(), process.argv[2], process.argv[3]));
console.log(run.calculate(new Divide(), process.argv[2], process.argv[3]));


try {
        console.log(run.calculate(new Divide(), process.argv[2], process.argv[3]));
} 
catch (e) {
        console.log(e);
}

app.use(theFirstNumber);

app.use(theSecondNumber);

app.listen(4000)