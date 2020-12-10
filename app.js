var text = document.querySelector("#textInput");
var translateButton = document.querySelector("#btnTranslate");
var translatedText = document.querySelector("#output");

//var serverUrl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
var serverUrl = "https://api.funtranslations.com/translate/braille/html.json";

function errorHandler(error)
{
    alert("The limit is exceeded");
}

function clickMe()
{
    console.log("Hello");
    var url = serverUrl + "?text=" + text.value;
    console.log(url);
    
    fetch(url)
    .then(response => response.json())
    .then(json =>  translatedText.innerHTML = json.contents.translated.join(""))
    .catch(errorHandler);
}

translateButton.addEventListener("click", clickMe);

console.log(text.value);