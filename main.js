 
 function startClassification()
 {
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/0lliC5V3c/model.json',modelReady);
 }

 function modelReady(){
    classifier.classify(gotResults);
 }

  Dog = 0;
  Cat = 0;
  Lion = 0;

 function gotResults(error, results)
 {
    if(error){
      console.error(error);
    }

    else{
      console.log(results);

      r = Math.floor(Math.random()*255)+1;
      g = Math.floor(Math.random()*255)+1;
      b = Math.floor(Math.random()*255)+1;

      document.getElementById("result_accuracy").innerHTML = "I can hear - "+results[0].label;
      document.getElementById("result_label").innerHTML = 'Accuracy - '+(results[0].confidence*100).toFixed(2)+'%';
      document.getElementById("result_label").style.color = "rgb("+r+","+g+","+b+")";
      document.getElementById("result_accuracy").style.color = "rgb("+r+","+g+","+b+")";

      img = document.getElementById("ear");
       
      if (results[0].label == 'Roaring') {
         img.src = 'lion.jpeg';
         Lion = Lion +1

      }
      else if(results[0].label == 'Barking') {
         img.src = 'dog.png';
         Dog = Dog +1

      }
      else if(results[0].label == 'Meowing') {
         img.src = 'cat.png';
         Cat = Cat+1

      }
      else if(results[0].label == 'Background Noise'){
         img.src = 'ear.png';
      }
      else{
         img.src = 'ear.png';
      }
    }
 }