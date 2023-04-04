var u = [],
  heo = [];
var play_thang = [],
  play_nhac = 0,
  may0 = [],
  may1 = [],
  may2 = [],
  may3 = [],
  boluot = [],
  thang = [],
  thang1 = 0,
  layer0 = [],
  test1 = [],
  huongsai = [],
  huongsai2 = [],
  v_err = [],
  v_err_1 = [],
  v_err_2 = [],
  lkt = "",
  roundId = 1,
  numberBot = 4;
$(document).ready(function () {
  $("#mm0").text("Bot1");
  $("#mm1").text("Bot2");
  $("#mm2").text("Bot3");
  $("#mm3").text("Bot4");
  document.getElementById("btnSendMessage").disabled = true;
  document.getElementById("btnboluot").disabled = true;
  $(document).on("click", ".image", function () {
    $("#tai_truoc8").trigger("play");

    sound.onwaiting = function () {};
    sound.onplaying = function () {};

    function timxoa(u, ac, l1) {
      for (var i = 0; i < l1; i++) if (u[i] == ac) return i; //Tìm thấy x tại vị trí thứ i
      return -1; //Không tìm thấy x trong mảng
    }

    if ($(this).css("top") == "100px") {
      $(this).css("top", "70px");
      flag = 0;
    } else {
      $(this).css("top", "100px");
      flag = 1;
    }
    ac = $(this).attr("value");
    l1 = u.length;
    if (flag == 0) {
      u.push(ac);
    } else if (flag == 1) {
      var vt = timxoa(u, ac, l1); //Tìm vị trí x de xoa trong mảng
      u.splice(vt, 1); //xoa vi tri khi la bai keo xuong
    }
    u = sapxep(u);
  });
  $("#btnbatdau").click(function () {
    startRound();
  });

  $("#btntieptuc").click(function () {
    continueClick();
  });

  $("#thang").click(function () {
    //nguoi danh
    Logger.logWinner(thang);
    if (thang.length <= 3 && play_nhac == 0) {
      play_nhac = 1;
      if (thang[0] == "0") $("#tai_truoc10").trigger("play");
      else if (thang[1] == "0") $("#tai_truoc11").trigger("play");
      else if (thang[2] == "0") $("#tai_truoc12").trigger("play");
      else $("#tai_truoc13").trigger("play");
    } else if (thang.length == 1 && v_err == "") {
      if (thang[0] == "0") $("#tai_truoc14").trigger("play");
      else $("#tai_truoc13").trigger("play");
    }

    if (thang.indexOf("0") >= 0) $("#mm0").css("backgroundColor", "blue");
    if (thang.indexOf("1") >= 0) $("#mm1").css("backgroundColor", "blue");
    if (thang.indexOf("2") >= 0) $("#mm2").css("backgroundColor", "blue");
    if (thang.indexOf("3") >= 0) $("#mm3").css("backgroundColor", "blue");
    thang1 = thang[0];
    u = [];
    heo = [];
    may0 = [];
    may1 = [];
    may2 = [];
    may3 = [];
    boluot = [];
    thang = [];
    layer0 = [];
    test1 = [];
    huongsai = [];
    huongsai2 = [];
    hs = 0;
    endRound();
  });

  $("#m0").click(function () {
    const remainingCards = runBot(0, may0);
    if (remainingCards !== null) {
      may0 = remainingCards;
    }
  });
  $("#m1").click(function () {
    const remainingCards = runBot(1, may1);
    if (remainingCards !== null) {
      may1 = remainingCards;
    }
  });
  $("#m2").click(function () {
    const remainingCards = runBot(2, may2);
    if (remainingCards !== null) {
      may2 = remainingCards;
    }
  });
  $("#m3").click(function () {
    const remainingCards = runBot(3, may3);
    if (remainingCards !== null) {
      may3 = remainingCards;
    }
  });
  $("#showHideLog").click(function () {
    const wrapper = document.getElementById("wrapper");
    const logs = document.getElementById("them_vao1");
    wrapper.classList.toggle("show-logs");
    logs.classList.toggle("show-logs");
  });
});
