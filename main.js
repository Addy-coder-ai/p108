//ps i wanted to use the old names so i did
pr1="";
pr2="";

Webcam.set({
    width:350,
    height:350,
    image_format:'png',
    png_quality:90
});
 camera=document.getElementById("camera");
 Webcam.attach('#camera');

 function Shoot() {
     Webcam.snap(function(data_uri)
     {
         document.getElementById("resulti").innerHTML='<img id="captured_img" src="'+data_uri+'"/>';
        
     });
 }

 console.log('ml5 version',ml5.version);

 var Classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/xtTLAvlGs/model.json',modelLoaded);

 function modelLoaded() {
     console.log("model loaded");
 }
 function speak(){
     var synth=window.speechSynthesis;
     spData1="the first prediction is" + pr1;
     spData2="the second prediction is" + pr2;
     utterThis=new SpeechSynthesisUtterance(spData1+spData2);
     synth.speak(utterThis);

 }

 function CHECK(){
    img = document.getElementById("captured_img");
    Classifier.classify(img,gotResult);
   }

   function gotResult(error,results){
       if (error) {
           console.error("There is an error THERE IS AN ERRORRRR:error is:",error);
       } else {
         console.log(results);  
         document.getElementById("resulynameb").innerHTML=results[0].label;
         document.getElementById("resulynameb2").innerHTML=results[1].label;
         pr1=results[0].label;
         pr2=results[1].label;
         speak();

         if (results[0].label=="nice") {
             document.getElementById("FBIopenUP").innerHTML="&#128076";
         }

         if (results[0].label=="good") {
           document.getElementById("FBIopenUP").innerHTML="&#128077";
       }
       if (results[0].label=="bad") {
           document.getElementById("FBIopenUP").innerHTML="&#128078";
       }
       if (results[0].label=="win") {
           document.getElementById("FBIopenUP").innerHTML="&#129304";
       }




       if (results[1].label=="nice") {
           document.getElementById("FBIopenUpNOW").innerHTML="&#128076";
       }

       if (results[1].label=="good") {
         document.getElementById("FBIopenUpNOW").innerHTML="&#128077";
     }
     if (results[1].label=="bad") {
         document.getElementById("FBIopenUpNOW").innerHTML="&#128078";
     }
     if (results[1].label=="win") {
         document.getElementById("FBIopenUpNOW").innerHTML="&#129304";
     }
       }
   }
