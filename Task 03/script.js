let display = document.getElementById('display');
let currentInput = '';
let result = null; 

function addToDisplay(value) {
    if (result !== null) {
        currentInput = ''; 
        result = null; 
    }
    currentInput += value;
    display.value = currentInput;
}

function addOperator(operator) {
    if (currentInput !== '') {
        currentInput += operator;
        display.value = currentInput;
    }
}

function clearDisplay(){
    currentInput ='';
    display.value = '';
}

function calculate () {
    if (currentInput !== ''){
        try {
            result = eval(currentInput);
            display.value = result;
            currentInput = '';
        }
        catch(error){
            display.value = 'Error';
            currentInput ='';
        }
    }
}


