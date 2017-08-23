$(function () {
    //set up on click functionality
    $("#main-picture").click(function(){
        changeImage();
      });
});

function changeImage()
{
  var mainpicture = document.getElementById("main-picture");
  // specify the new image source
  mainpicture.src = "../images/dog.gif";
  // disable the ability to click the image again
  mainpicture.style.pointerEvents = 'none';
  // timeout for ~5 seconds for the gif to play out 
  setTimeout(changeImageBack,5000);
}

function changeImageBack()
{
  var mainpicture = document.getElementById("main-picture");
  mainpicture.src = "../images/me-circle.png";
  // re-enable the ability to click the image
  mainpicture.style.pointerEvents = 'auto';
}
