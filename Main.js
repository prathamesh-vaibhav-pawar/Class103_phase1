Webcam.set({
    width:400,
    height:400,
    image_format:"png",
    png_quality:100
})

Webcam.attach("#Camera")

function Click_image(){
    webcam.snap(function(data_uri){
        document.getElementById("capture_image").src = data_uri
    })
}

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/iRLbIvDuW/model.json",model_loaded)

function model_loaded(){
    console.log("Model has been loaded")
}