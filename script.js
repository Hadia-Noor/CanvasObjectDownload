/*INCLUDES:
Lea Verou's color contrast:
https://codepen.io/enxaneta/pen/729bdb57bcace876689066ba81417fc7
hsl to rgb to hex: 
https://codepen.io/enxaneta/pen/15d04eb1b8b68c95cd5298b46b2eabb8
*/
function init()
{
    let imgInput = document.getElementById('imageInput');
    imgInput.addEventListener('change', function(e) 
    {
    if(e.target.files) 
    {
      let imageFile = e.target.files[0];
      var reader = new FileReader();
      reader.readAsDataURL(imageFile);
      reader.onloadend = function (e) 
      {
        var myImage = new Image();
        myImage.src = e.target.result; 
        myImage.onload = function(ev) 
        {
          var myCanvas = document.getElementById("myCanvas"); 
          var myContext = myCanvas.getContext("2d"); 
          var canvasStyle = getComputedStyle(myCanvas);
          var canvasWidth = canvasStyle.width.replace("px", "");
          var imageRatio = myImage.width/myImage.height;
          var canvasHeight = canvasWidth/imageRatio;
          myCanvas.style.height = canvasHeight+"px";
          myCanvas.width = canvasWidth;
          myCanvas.height = canvasHeight; 
          myContext.drawImage(myImage, 0, 0, canvasWidth, canvasHeight);
        }
      }
    }
    });}
function Write_text(){
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.font = "15px Arial";
    ctx.fillStyle = 'rgb(0,0,0,0.6)';
    var header = document.getElementById("in").value;
    var footer = document.getElementById("in2").value;
    ctx.textAlign = 'center';
    ctx.fillText(header,  150, 20);
    ctx.fillText(footer, 150,210)
}
function download_image()
{
    var canvas = document.getElementById("myCanvas");
    image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
    var link = document.createElement('a');
    link.download = "my-image.png";
    link.href = image;
    link.click();
}
function clear_Canvas()
{
    window.location.reload();
}
