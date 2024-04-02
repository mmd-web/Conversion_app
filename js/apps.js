let $ = document;

let inputBox = $.getElementById ("converter");
let descriptionText = $.getElementById ("Description");
let degreesF = $.getElementById ("F");
let degreesC = $.getElementById ("C");
let outputF = $.getElementById ("Fdg");
let outputC = $.getElementById ("Cdg");
let errorText = $.getElementById ("error_text");
let outputText = $ .getElementById ("output");
let changeBtn = $.getElementById ("change");
let resetBtn = $.getElementById ("reset");
let convertBtn = $.getElementById ("convert");

let flagChange = true;
let saveValueInp = 0;

descriptionText.innerHTML = 'Converter '+degreesC.innerHTML+' to '+degreesF.innerHTML;
// outputText.innerHTML = outputC.innerHTML + ' C to ' + outputC.innerHTML + ' F';

changeBtn.addEventListener ("click" , () => {
    if (flagChange) {
        inputBox.setAttribute ("placeholder" , "F");
        descriptionText.innerHTML = 'Converter '+degreesF.innerHTML+' to '+degreesC.innerHTML;
        // outputText.innerHTML = outputF.innerHTML + ' F to ' + outputC.innerHTML + ' C';
        flagChange = false;
    }else {
        inputBox.setAttribute ("placeholder" , "C");
        descriptionText.innerHTML = 'Converter '+degreesC.innerHTML+' to '+degreesF.innerHTML;
        // outputText.innerHTML = outputC.innerHTML + ' C to ' + outputF.innerHTML + ' F';
        flagChange = true;
    }
})

resetBtn.addEventListener ("click" , () => {
    inputBox.value = "";
    outputText.style.display = "none";
    inputBox.setAttribute ("placeholder" , "C");
    descriptionText.innerHTML = 'Converter '+degreesC.innerHTML+' to '+degreesF.innerHTML;
    flagChange = true;
})

convertBtn.addEventListener ("click" , () => {
    if (flagChange) {
        saveValueInp = +inputBox.value;
        let formulaC = outputC.innerHTML = (saveValueInp * 9.5) + 32;
        outputText.style.display = "flex";
        outputText.innerHTML = saveValueInp + ' C to ' + formulaC + ' F';
    }else {
        saveValueInp = +inputBox.value;
        let formulaF = outputF.innerHTML = (saveValueInp - 32) * 5.9;
        outputText.style.display = "flex";
        outputText.innerHTML = saveValueInp + ' F to ' + formulaF + ' C';
    }
})