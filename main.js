 
 function startClassification()
 {
    navigator.mediaDevices.getUserMedia({audio:true});
    ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/0lliC5V3c/model.json",modelReady);
 }

 function modelReady(){
    classifier.classify(gotResults);
 }

 function gotResults(results, error)
 {
    
 }