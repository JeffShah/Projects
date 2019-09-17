class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.previousOperandTextElement = currentOperandTextElement
        this.clear()
    }

    clear () {
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined

    }

    delete() {

    }

    appendNumber(number) {

    }

    chooseOperation(operation) {

    }

    compute() {

    }

    updateDisplay() {

    }

} 
 const numberButtons = document.querySelectorAll('[data-number]')
 const operationButtons = document.querySelectorAll('[data-operation]')
 const operationButtons = document.querySelector('[data-equals]')
 const operationButtons = document.querySelector('[data-delete]')
 const operationButtons = document.querySelector('[data-all-clear]')
 const operationButtons = document.querySelector('[data-previous-operand]')
 const operationButtons = document.querySelector('[data-current-operand]')
 