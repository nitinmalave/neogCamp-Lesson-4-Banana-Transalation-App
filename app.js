var userInputText = document.querySelector('#input-area');

var translateButton = document.querySelector('#btn-translate');

var outputBox = document.querySelector('#translate-output');

translateButton.addEventListener('click', displayInput);

var clearButton = document.querySelector('#btn-clear');

var externalServerURL = "https://api.funtranslations.com/translate/minion.json"

clearButton.addEventListener('click', clearInputBox);

function displayInput() {
    var inputText = userInputText.value;
    var finalURL = getServerURL(inputText);
    fetch(finalURL).then(
        response => response.json()).then(
            result => {
                outputBox.innerText = result.contents.translated;
            })
            .catch(()=> alert('Unknown error occured at server, Please try again after some time!'));
}

function getServerURL(inputText){
    return `${externalServerURL}?text=${inputText}`;
}

function clearInputBox(){
    console.log('hii');
    userInputText.value = "";
    outputBox.innerText = "";
}