var btnTranslate = document.querySelector("#btn-translator"); // Selecting button with ID
var txtInput = document.querySelector("#txt-Ip");    // Selecting text-area with ID
/*var btnSuccess = document.querySelector(".btn-success");  // Selecting button with class
var translation = document.querySelector("[name=translated]"); //Selecting text-area with name
console.log(btnSuccess);
console.log(translation); 
console.log(txtInput);  */
var outputDiv = document.querySelector("#output");

function clickHandler() {                    //Call back function
    outputDiv.innerText = "Translated ="+txtInput.value;
};

btnTranslate.addEventListener("click", clickHandler);    //Calling the function after click event