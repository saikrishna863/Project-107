Prediction_1 = "";
Prediction_2 = "";

Webcam.set( {
width:350,
height:300,
image_format : 'png',
png_quality:90
});
camera = document.getElementById("camera");
Webcam.attach( '#camera' );


function take_snapshot();
{
Webcam.snap(function(data_uri) {
document.getElementById("result").innerHTML = '<img id="captured_image"src="'+data_uri+'"/>';
});

}

console.log('ml5 version:', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/nHGUS_Z99/model.json',modelLoaded);
function modelLoaded() {
console.log('modelLoaded');
}

function speak(){
var synth = window.speechSynthesis;
speak_data_1 = " Hi now i am going to sayThe first Prediction is " + Prediction_1;
speak_data_2 =" hi now i am going to say The second Prediction is " + Prediction_2;
var utterThis = new.speechSynthesisUtterance(speak_data_1 + speak_data_2);
synth.speak(utterThis);
}