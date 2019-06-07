function getMarks() { // asking user  marks
    let marks = [];
    for (let i = 0; i < 5; i++) marks[i] = +prompt('Enter the mark of subject № ' + (i + 1));
    return marks;
}

function calculator() { //
    let a = prompt('Enter first operand', 0);               // input operand
    let b = prompt('Enter second operand', 0);              // input operand
    let c = prompt('Enter the arithmetical operator', "+"); // input operator

    if ((a === "That's all") || (b === "That's all") || (b === "That's all")) { // check exit value
        alert('Thank u for your time');
    }  else {
        Number(a); // make a number
        Number(b); // make a number

        if (!(isNaN(a)) && !(isNaN(b))) { // check NaN after transformation in num type
            alert(eval(a + c + b));    // arithmetic process
            calculator();                 // again turn the func
        } else {
            alert('Введите числовые значения операнд');
            calculator();
        }
    }
}
function showMark() {
   let marks =  getMarks();
    for (let i = 0; i < marks.length; i++){
        (marks[i] > 60) ? alert("Mark № " + (i +1) + " is good mark, value = " + marks[i]) : alert("mark №" + (i + 1) + " is below 60");
    }
    calculator();
}

showMark();