class Divide {
    operate(firstNumber, secondNumber){
        if(secondNumber === 0){
            throw new Error('SecondNumber > 0');
        }else{
            return firstNumber / secondNumber;
        }
    }
}

module.exports = Divide;
