var isConverting = false;

document.getElementById("convert-button").addEventListener("click", function () {
    if (!isConverting) {
        isConverting = true;
        var text = document.getElementById("text-input").value;
        var lang = document.getElementById("language-select").value;
        convertTextToSpeech(text, lang);
        setTimeout(function () {
            isConverting = false;
        }, 3000); // وقت الانتظار بالميلي ثانية (هنا 3 ثوانٍ)
    }
});

function convertTextToSpeech(text, lang) {
    var speechSynthesis = window.speechSynthesis;
    var speechUtterance = new SpeechSynthesisUtterance(text);
    speechUtterance.lang = lang;
    speechSynthesis.speak(speechUtterance);
}