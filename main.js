// fetch("./header.html")
//   .then(response => {
//     return response.text()
//   })
//   .then(data => {
//     document.querySelector("header").innerHTML = data;
//   });

$(function () {
  $("#head").load("header.html");
});

//   fetch("./footer.html")
//   .then(response => {
//     return response.text()
//   })
//   .then(data => {
//     document.querySelector("footer").innerHTML = data;
//   });

function goToAnnees() {
  var newUrl = "index.html";
  window.location.replace(newUrl);
}

function goToTextes() {
  var newUrl = "textes.html";
  window.location.replace(newUrl);
}

function resizeImg2(imgLoc, imgLoc2, ancre) {
  document.write(
    "<div style='width:100%;height:100%;display:flex;justify-content:center;'><img style='margin-right:10px;height:90%;width:auto;border-radius:5px;' src='" +
      imgLoc +
      "'><img style='margin-left:10px;height:90%;width:auto;border-radius:5px;' src='" +
      imgLoc2 +
      "'><a href=''textes.html#" +
      ancre +
      "' style='width:20px;height:20px;border-radius:50%;background-color:rgb(170, 157, 152);cursor:pointer;margin-left:20px'></a></div>"
  );
}

function resizeImg(imgLoc) {
  document.write(
    "<img style='height:90%;width:fit-content;border-radius:5px;display:block;margin:auto;' src='" +
      imgLoc +
      "'>"
  );
}
