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
  $("#btnbatdau").hide();
  $("#loading").hide();

  $("#loading1").click(function () {
    $("#loading1").hide();
    $("#loading").show();
    $(".a12").trigger("load");

    setTimeout(function () {
      $("#tai_truoc1").trigger("play");
      var myAudio = document.getElementById("tai_truoc1");

      if (myAudio.duration > 0 && !myAudio.paused) {
      } else {
        $("#tai_truoc1").trigger("play");
      }
    }, 4000);
    setTimeout(function () {
      $("#loading").hide();
      $("#btnbatdau").show();
      $("#tai_truoc16").trigger("play");
    }, 8000);
  });

  //$("#loading").hide();$("#btnbatdau").show();
  //setTimeout(function(){$("#loading").hide();$("#btnbatdau").show();}, 5000);
});
