var btnTranslate = document.querySelector("#btn-translator"); // Selecting button with ID
var txtInput = document.querySelector("#txt-Ip");    // Selecting text-area with ID

/*
var btnSuccess = document.querySelector(".btn-success");  // Selecting button with class
var translation = document.querySelector("[name=translated]"); //Selecting text-area with name
*/

var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(input){
    return serverURL + "?" + "text=" + input;
};

function catchErrors(error){
    console.log("Error Occurred", error);
    alert("Please try agian after some time")
};

function clickHandler() {                   

    var inputTxt = txtInput.value;  //Taking input from user

    // Calling Server for processing
    fetch(getTranslationURL(inputTxt))
    .then(res => res.json())
    .then(json =>{var translated = (json.contents.translated);
         outputDiv.innerText = translated;
    })
    .catch(catchErrors);                     //catchErrors is a callback function
};

btnTranslate.addEventListener("click", clickHandler);    //Calling the function after click event, clickHandler is a callback function

