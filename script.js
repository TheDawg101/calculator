let buttons = document.querySelectorAll('button');
let displayTop = document.getElementById('output1');
let displayBottom = document.getElementById('output2');
let formulaArray = [];
let entries = 0;
let newOperator;
let newNumber;
let newDigit;
let newDigitArray = [];

buttons.forEach(btn => {
    btn.addEventListener('click', e => {
        if (e.target.textContent == "=") {
            displayBottom.textContent = "result";
            formulaArray = [];
            entries = 0;
            newDigit = "";
            newNumber = "";
            newDigitArray = [];
        } else if (e.target.textContent == "DELETE") {
            formulaArray.splice(-1);
            displayTop.textContent = formulaArray.join(' ');
            entries -= 1;
        } else if (e.target.textContent == "CLEAR") {
            displayTop.textContent = "";
            displayBottom.textContent = "0";
            formulaArray = [];
            newDigit = "";
            newNumber = "";
            newDigitArray = [];
            newOperator = "";
            entries = 0;
        } else if (e.target.textContent == ".") {
                newDigit = e.target.textContent;
                newDigitArray.push(newDigit);
                newNumber = newDigitArray.join(''); 
                displayTop.textContent = formulaArray.join(' ') + " " + newNumber;
        } else if (isNaN(Number(e.target.textContent))) {
                newOperator = e.target.textContent;
                formulaArray.push(newNumber);
                formulaArray.push(newOperator);
                displayTop.textContent = formulaArray.join(' ');
                entries += 1;
                newDigit = "";
                newNumber = "";
                newDigitArray = [];
        } else {
                newDigit = e.target.textContent;
                newDigitArray.push(newDigit);
                newNumber = newDigitArray.join(''); 
                displayTop.textContent = formulaArray.join(' ') + " " + newNumber;        
        }

    })
})



function result() {

}


let xi = "3";
let yi = "+";
let zi = "4";

let xii = Number(xi);
let zii = Number(zi);
let whatis;

function answer() {
    whatis = (xii + yi + zii);
    console.log(whatis);
}
answer();

