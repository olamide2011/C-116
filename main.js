function preload() {

}
function setup() {
    canvas=createCanvas(400,400);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    tint="";
}
function draw() {
    image(video,0,0,400,400);
    tint(tint);
}
function filter() {
    tint=document.getElementByid("color").value;
}

