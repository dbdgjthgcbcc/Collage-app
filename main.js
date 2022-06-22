var SpeechRecognition = window.webkitSpeechRecogntion;
var Content;
var recognition = new SpeechRecognition();

function start() {
    recognition.start();
}

recognition.onresult = function (event) {
    console.log(event);

    Content = event.results[0][0].transcript.toLowerCase();
    console.log(Content);
    if (Content == "selfie") {
        speak();
    }

}

function speak() {
    var synth = window.speechSynthesis;
    Webcam.attch(camera);

    speak_data = "Taking your next Selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);


    setTimeout(function () {
        img_id = "selfie1";
        take_snapshot();
        speak_data = "Taking your next selfie in 10 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);

    }, 5000);

    setTimeout(function () {
        img_id = "selfie2";
        take_snapshot();
        speak_data = "Taking your next selfie in 15 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);

    }, 10000);
    
    setTimeout(function () {
        img_id = "selfie3";
        take_snapshot();

    }, 15000)
}