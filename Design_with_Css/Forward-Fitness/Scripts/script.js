// Global Variables
var video = document.getElementById("example");
var videoSource = document.getElementById("vid-src");
var descriptionSource = document.getElementById("despsrc");
video.style.width = "500px";
    video.style.height = "300px"

// Function to display the burpees example videos
function burpees() {
    console.log("Test");
    videoSource.src = "./media/burpees.mp4";
    video.style.display = "block";
    video.load();

}

function Plank() {
    console.log("Test2");
    videoSource.src = "./media/plank.mp4";
    video.style.display = "block";
    video.load();
}

function MountainClimber() {
    console.log("Test3");
    videoSource.src = "./media/climbers.mp4";
    video.style.display = "block";
    video.load();
}