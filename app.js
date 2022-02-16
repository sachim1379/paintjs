const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");

canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 2.5;

let painting = false;

function stopPainting(){
    painting = false;
}

function startPainting(){
    painting = true;
}

function onMouseMove(event){
    const x = event.offsetX;
    const y = event.offsetY;
    if(!painting){ //마우스를 뗀 채로 움직이면
        ctx.beginPath();
        ctx.moveTo(x,y);
    }else{ //마우스를 누른채로 움직이면
        ctx.lineTo(x,y);
        ctx.stroke();
    }
}

function onMouseDown(event){
    stopPainting();
}

function onMouseUp(event){
    painting = false;
}


if(canvas){
    canvas.addEventListener("mousemove",onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup",stopPainting);
    canvas.addEventListener("mouseleave",stopPainting);
}