let buttons = document.querySelectorAll('button');
let displayTop = document.getElementById('output1');
let displayBottom = document.getElementById('output2');
let formulaArray = [];
let entries = 0;
let newOperator;
let newNumber;
let newDigit;
let newDigitArray = [];
let total = 0;

buttons.forEach(btn => {
    btn.addEventListener('click', e => {
        if ((e.target.textContent == "DELETE") || (formulaArray.length < 20)) { //this limits entries
            if (e.target.textContent == "=") {
                formulaArray.push(newNumber);
                newNumber = "";
                newDigitArray = [];
                result();
                displayBottom.textContent = total;              
            } else if (e.target.textContent == "DELETE") {
                if (newNumber == "") {
                    formulaArray.splice(-1);
                } else {
                    formulaArray.push(newNumber);
                    formulaArray.splice(-1); 
                }
                displayTop.textContent = formulaArray.join(' ');
                newDigit = "";
                newOperator = "";
                newNumber = "";
                newDigitArray = [];
            } else if (e.target.textContent == "CLEAR") {
                displayTop.textContent = "";
                displayBottom.textContent = "0";
                formulaArray = [];
                newDigit = "";
                newNumber = "";
                newDigitArray = [];
                newOperator = "";
                total = 0;
            } else if (e.target.textContent == ".") {
                if (newDigitArray.includes(".")) { //prevents multiple decimals
                    // nothing happens
                } else {
                    newDigit = e.target.textContent;
                    newDigitArray.push(newDigit);
                    newNumber = newDigitArray.join(''); 
                    displayTop.textContent = formulaArray.join(' ') + " " + newNumber;
                }
            } else if (isNaN(Number(e.target.textContent))) {
                    newOperator = e.target.textContent;
                    formulaArray.push(newNumber);
                    formulaArray.push(newOperator);
                    displayTop.textContent = formulaArray.join(' ');
                    newNumber = "";
                    newDigitArray = [];
            } else {
                    newDigit = e.target.textContent;
                    newDigitArray.push(newDigit);
                    newNumber = newDigitArray.join(''); 
                    displayTop.textContent = formulaArray.join(' ') + " " + newNumber;        
            }
        } else {
            //nothing happens if over 10 entries
        }
    })
})

function result() {
    total = Number(formulaArray[0]);
    for (i = 1; i < formulaArray.length; i++) {
        if ((formulaArray[i] == "÷") && (formulaArray[i+1] == 0)) {
            total = "Only idiots try to divide by zero!";
        } else {
            if (formulaArray[i] == "÷") {
                total /= Number(formulaArray[i+1]);
            } else if (formulaArray[i] == "x") {
                total *= Number(formulaArray[i+1]);
            } else if (formulaArray[i] == "-") {
                total -= Number(formulaArray[i+1]);
            } else if (formulaArray[i] == "+") {
                total += Number(formulaArray[i+1]);
            } else {
                //skip numbers
            }
        }    
    }
    return total;
}