function changeImage()
{
  var mainpicture = document.getElementById("main-picture");
  mainpicture.src = "../images/dog.gif";
  setTimeout(changeImageBack,5000);
}

function changeImageBack()
{
  var mainpicture = document.getElementById("main-picture");
  mainpicture.src = "../images/me-circle.png";
}
