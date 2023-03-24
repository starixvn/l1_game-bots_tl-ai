function sound1(src) {
  this.sound1 = document.createElement("audio");
  this.sound1.src = src;
  this.sound1.muted = true;
  this.sound1.setAttribute("preload", "auto");
  this.sound1.setAttribute("controls", "none");
  this.sound1.style.display = "none";
  document.body.appendChild(this.sound1);
  this.play = function () {
    this.sound1.play();
  };
  this.stop = function () {
    this.sound1.pause();
  };
}

$(document).ready(function () {
  $("#btnbatdau").show();
  $("#loading").hide();
});
