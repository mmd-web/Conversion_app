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
let saveValueInp ;

descriptionText.innerHTML = 'Converter '+degreesC.innerHTML+' to '+degreesF.innerHTML;

changeBtn.addEventListener ("click" , () => {
    if (flagChange) {
        inputBox.setAttribute ("placeholder" , "F");
        descriptionText.innerHTML = 'Converter '+degreesF.innerHTML+' to '+degreesC.innerHTML;
        flagChange = false;
    }else {
        inputBox.setAttribute ("placeholder" , "C");
        descriptionText.innerHTML = 'Converter '+degreesC.innerHTML+' to '+degreesF.innerHTML;
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
    saveValueInp = +inputBox.value;
    if (inputBox.value === '') {
        outputText.style.display = "none";
        errorText.style.display = "flex";
        errorText.innerHTML = 'Write correct value!';
    }else if (isNaN(saveValueInp)) {
        outputText.style.display = "none";
        errorText.style.display = "flex";
        errorText.innerHTML = 'Worg Value!';
    }else {
        errorText.style.display = "none";
        if (flagChange) {
            let formulaC = outputC.innerHTML = (saveValueInp * 9/5) + 32;
            outputText.style.display = "flex";
            outputText.innerHTML = saveValueInp + ' C to ' + formulaC.toFixed (2) + ' F';
        }else {
            let formulaF = outputF.innerHTML = (saveValueInp - 32) * 5/9;
            outputText.style.display = "flex";
            outputText.innerHTML = saveValueInp + ' F to ' + formulaF.toFixed (2) + ' C';
        }
    }
})