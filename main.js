// fetch("./header.html")
//   .then(response => {
//     return response.text()
//   })
//   .then(data => {
//     document.querySelector("header").innerHTML = data;
//   });

$(function(){
  $("#head").load("header.html"); 
});


//   fetch("./footer.html")
//   .then(response => {
//     return response.text()
//   })
//   .then(data => {
//     document.querySelector("footer").innerHTML = data;
//   });

function goToAnnees(){
    var newUrl = "oeuvres.html";
    window.location.replace(newUrl);
}

function goToTextes(){
  var newUrl = "textes.html";
  window.location.replace(newUrl);
}

function resizeImg2(imgLoc,imgLoc2,ancre){
  document.write("<script src='https://kit.fontawesome.com/554378e727.js' crossorigin='anonymous'></script>")
  document.write("<div style='width:100%;height:100%;display:flex;justify-content:center;'><img style='margin-right:10px;height:90%;width:auto;border-radius:5px;' src='"+imgLoc+"'><img style='margin-left:10px;height:90%;width:auto;border-radius:5px;' src='"+imgLoc2+"'><a href=''textes.html#"+ancre+"' style='margin-left:20px'><i style='color:rgba(19, 18, 18, 0.78)' class='far fa-window-close'></i></a></div>");
} 

function resizeImg(imgLoc,ancre){
  document.write("<script src='https://kit.fontawesome.com/554378e727.js' crossorigin='anonymous'></script>")
  document.write("<div style='width:100%;height:100%;display:flex;justify-content:center;'><img style='height:90%;width:auto;border-radius:5px;' src='"+imgLoc+"'><a href=''textes.html#"+ancre+"' style='margin-left:20px'><i style='color:rgba(19, 18, 18, 0.78)' class='far fa-window-close'></i></a></div>");
}