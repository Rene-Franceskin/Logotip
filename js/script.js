const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const colorPicker = document.getElementById("colorPicker");

function drawLogo() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    ctx.save(); 
    ctx.scale(0.25, 0.25);
    
    ctx.fillStyle = colorPicker.value; 
    ctx.strokeStyle = colorPicker.value;

    ctx.beginPath();
    ctx.moveTo(251, 204);
    ctx.bezierCurveTo(256, 109, 338, 112, 368, 148);
    ctx.bezierCurveTo(369, 149, 396, 142, 410, 132);
    ctx.bezierCurveTo(411, 140, 404, 148, 397, 160);
    ctx.bezierCurveTo(396, 163, 418, 160, 419, 156);
    ctx.bezierCurveTo(412, 182, 388, 193, 389, 193);
    ctx.bezierCurveTo(399, 224, 341, 472, 107, 370);
    ctx.bezierCurveTo(140, 362, 154, 363, 184, 335);
    ctx.bezierCurveTo(164, 328, 143, 311, 132, 284);
    ctx.bezierCurveTo(131, 288, 152, 282, 148, 283);
    ctx.bezierCurveTo(109, 261, 109, 214, 113, 217);
    ctx.bezierCurveTo(108, 218, 129, 223, 131, 222);
    ctx.bezierCurveTo(126, 215, 96, 176, 124, 137);
    ctx.bezierCurveTo(140, 156, 180, 209, 251, 204);
    
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    ctx.restore();
}
drawLogo();

colorPicker.addEventListener("input", drawLogo);

window.addEventListener("load", () => {

    const loader = document.getElementById("loading-screen");
    const path = document.getElementById("twitterPath");

    if (!loader || !path) return;

    // Izračun dolžine poti za animacijo
    const length = path.getTotalLength();
    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;

    // Fill efekt po risanju
    setTimeout(() => {
        path.style.transition = "fill 0.8s ease-in";
        path.style.fill = "#1DA1F2";
    },2000); // po koncu draw animacije

    // Skrij loading screen
    setTimeout(() => {
        loader.classList.add("hidden");
    }, 3500); // po fill animaciji
});