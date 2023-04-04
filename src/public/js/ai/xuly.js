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
  lkt = "",
  originalCards0 = [],
  roundId = 1,
  numberBot = 4;
hasPlayer = true;
$(document).ready(function () {
  const ten_N_N = [
    "Lan",
    "Vinh",
    "Phúc",
    "Nga",
    "Chi",
    "Linh",
    "Ngọc",
    "Nam",
    "Phát",
    "Lộc",
    "Huy",
    "Trang",
    "Khánh",
    "Giang",
  ];
  function loc_ten(a) {
    return a[Math.floor(Math.random() * a.length)];
  }
  const ten_1 = loc_ten(ten_N_N);
  const ten_2 = loc_ten(ten_N_N.filter((ten) => ten != ten_1));
  const ten_3 = loc_ten(ten_N_N.filter((ten) => ten != ten_1 && ten != ten_2));
  $("#mm0").text("Tôi");
  $("#mm1").text(ten_1);
  $("#mm2").text(ten_2);
  $("#mm3").text(ten_3);
  document.getElementById("btnSendMessage").disabled = true;
  document.getElementById("btnboluot").disabled = true;
  $("#showHideLog").click(function () {
    const wrapper = document.getElementById("wrapper");
    const logs = document.getElementById("them_vao1");
    wrapper.classList.toggle("show-logs");
    logs.classList.toggle("show-logs");
  });
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

  $("#btnSendMessage").click(function () {
    if (kiemtrahople(u) != "khonghople" && u != "") {
      if (layer0 == "") {
        document.getElementById("btnSendMessage").disabled = true;
        document.getElementById("btnboluot").disabled = true;
        var n1 = may0;
        originalCards0 = [...may0];
        var xoa = giaomang(n1, u);
        may0 = xoa;
        hien(may0, "bot0");

        hien2(u);

        layer0 = u;
        test1 = u;
        u = [];

        huongsai = [];

        if (may0 == "") {
          thang.push("0");
          boluot.push("0");
          huongsai.push(0);
        }

        setTimeout(function () {
          playerDropCard();
        }, 1);
      } else {
        if (ktra_ng_danh(layer0, u) == "hople") {
          document.getElementById("btnSendMessage").disabled = true;
          document.getElementById("btnboluot").disabled = true;
          var n1 = may0;
          originalCards0 = [...may0];
          var xoa = giaomang(n1, u);
          may0 = xoa;
          hien(may0, "bot0");

          hien2(u);

          layer0 = u;
          test1 = u;
          u = [];

          huongsai = [];

          if (may0 == "") {
            thang.push("0");
            boluot.push("0");
            huongsai.push(0);
          }

          setTimeout(function () {
            playerDropCard();
          }, 1);
        } else {
          document.getElementById("khl").click();
        }
      }
    } else {
      document.getElementById("khl").click();
    }
  });
  $("#btnboluot").click(function () {
    $("#tai_truoc15").trigger("play");

    document.getElementById("btnSendMessage").disabled = true;
    document.getElementById("btnboluot").disabled = true;
    test1 = [];
    if (boluot.indexOf("0") < 0) {
      boluot.push("0");
    }
    setTimeout(function () {
      playerDropCard();
    }, 1);
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
    } else if (thang.length == 1) {
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
    originalCards0 = [];
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
  function renderCardValue(a) {
    var kq = [];
    var kq2 = [];
    var b = {
      "anh/03a.png": "3♠",
      "anh/03b.png": "3♣",
      "anh/03c.png": "3♦",
      "anh/03d.png": "3♥",
      "anh/04a.png": "4♠",
      "anh/04b.png": "4♣",
      "anh/04c.png": "4♦",
      "anh/04d.png": "4♥",
      "anh/05a.png": "5♠",
      "anh/05b.png": "5♣",
      "anh/05c.png": "5♦",
      "anh/05d.png": "5♥",
      "anh/06a.png": "6♠",
      "anh/06b.png": "6♣",
      "anh/06c.png": "6♦",
      "anh/06d.png": "6♥",
      "anh/07a.png": "7♠",
      "anh/07b.png": "7♣",
      "anh/07c.png": "7♦",
      "anh/07d.png": "7♥",
      "anh/08a.png": "8♠",
      "anh/08b.png": "8♣",
      "anh/08c.png": "8♦",
      "anh/08d.png": "8♥",
      "anh/09a.png": "9♠",
      "anh/09b.png": "9♣",
      "anh/09c.png": "9♦",
      "anh/09d.png": "9♥",
      "anh/10a.png": "10♠",
      "anh/10b.png": "10♣",
      "anh/10c.png": "10♦",
      "anh/10d.png": "10♥",
      "anh/11a.png": "J♠",
      "anh/11b.png": "J♣",
      "anh/11c.png": "J♦",
      "anh/11d.png": "J♥",
      "anh/12a.png": "Q♠",
      "anh/12b.png": "Q♣",
      "anh/12c.png": "Q♦",
      "anh/12d.png": "Q♥",
      "anh/13a.png": "K♠",
      "anh/13b.png": "K♣",
      "anh/13c.png": "K♦",
      "anh/13d.png": "K♥",
      "anh/14a.png": "A♠",
      "anh/14b.png": "A♣",
      "anh/14c.png": "A♦",
      "anh/14d.png": "A♥",
      "anh/16a.png": "2♠",
      "anh/16b.png": "2♣",
      "anh/16c.png": "2♦",
      "anh/16d.png": "2♥",
    };
    for (var i = 0; i < a.length; i++) {
      if (b[a[i]].substring(1, 2) == "♦" || b[a[i]].substring(1, 2) == "♥")
        kq.push(
          "<span aria-hidden='true' style='color:red;'>" + b[a[i]] + "</span>"
        );
      else kq.push("<span aria-hidden='true'>" + b[a[i]] + "</span>");
    }

    return kq;
  }

  function playerDropCard() {
    if (huongsai != "") {
      if (boluot.indexOf("0") >= 0) {
        let pi1 = "";

        pi1 = an(boluot, 0, thang);
        Logger.logTurn("Bot0", chuyen_bai(test1), chuyen_bai(originalCards0));
        $("#them_vao1").prepend("Tôi đánh: " + renderCardValue(test1) + "<br>");
        $("#mm0").text(`Tôi(${may0.length})`);
        if (boluot.length >= 4 && huongsai != "") {
          resetNewTurn();
          huongsai = [];
        }
        if (thang.length == numberBot - 1) {
          document.getElementById("thang").click();
        } else {
          changeTurn(pi1);
        }
      } else {
        let pi1 = "";
        pi1 = an(boluot, 0, thang);
        if (pi1 == "0") {
          resetNewTurn();
          if (thang.length == numberBot - 1) {
            endRound();
          }
        }
        Logger.logTurn("Bot0", chuyen_bai(test1), chuyen_bai(originalCards0));
        $("#them_vao1").prepend("Tôi đánh: " + renderCardValue(test1) + "<br>");
        $("#mm0").text(`Tôi(${may0.length})`);
        if (boluot.length >= 4 && huongsai != "") {
          resetNewTurn();
          if (thang.length == numberBot - 1) {
            endRound();
          }
          huongsai = [];
        }

        if (pi1 == "0") {
          setTimeout(function () {
            document.getElementById("m0").click();
          }, 1000); //0 1 2 3
        } else {
          if (thang.length == numberBot - 1) {
            document.getElementById("thang").click();
          } else {
            changeTurn(pi1);
          }
        }
      }
    } else if (boluot.indexOf("1") < 0) {
      Logger.logTurn("Bot0", chuyen_bai(test1), chuyen_bai(originalCards0));
      $("#them_vao1").prepend("Tôi đánh: " + renderCardValue(test1) + "<br>");
      $("#mm0").text(`Tôi(${may0.length})`);

      if (may0 == "") {
        thang.push("0");
        boluot.push("0");
        huongsai.push(0);
      }

      if (boluot.length >= 3 && huongsai == "") {
        resetNewTurn();
      }

      if (thang.length == numberBot - 1) {
        document.getElementById("thang").click();
      } else {
        changeTurn("1");
      }
    } else if (boluot.indexOf("1") >= 0 && boluot.indexOf("2") < 0) {
      if (may0 == "") {
        thang.push("0");
        boluot.push("0");
        huongsai.push(0);
      }
      Logger.logTurn("Bot0", chuyen_bai(test1), chuyen_bai(originalCards0));
      $("#them_vao1").prepend("Tôi đánh: " + renderCardValue(test1) + "<br>");
      $("#mm0").text(`Tôi(${may0.length})`);
      if (boluot.length >= 3 && huongsai == "") {
        resetNewTurn();
      }
      if (thang.length == numberBot - 1) {
        document.getElementById("thang").click();
      } else {
        changeTurn("2");
      }
    } else if (
      boluot.indexOf("1") >= 0 &&
      boluot.indexOf("2") >= 0 &&
      boluot.indexOf("3") < 0
    ) {
      if (may0 == "") {
        thang.push("0");
        boluot.push("0");
        huongsai.push(0);
      }
      Logger.logTurn("Bot0", chuyen_bai(test1), chuyen_bai(originalCards0));
      $("#them_vao1").prepend("Tôi đánh: " + renderCardValue(test1) + "<br>");
      $("#mm0").text(`Tôi(${may0.length})`);
      if (boluot.length >= 3 && huongsai == "") {
        resetNewTurn();
      }
      if (thang.length == numberBot - 1) {
        document.getElementById("thang").click();
      } else {
        changeTurn("3");
      }
    } else if (boluot.indexOf("0") < 0) {
      if (may0 == "") {
        thang.push("0");
        boluot.push("0");
        huongsai.push(0);
      }
      Logger.logTurn("Bot0", chuyen_bai(test1), chuyen_bai(originalCards0));
      $("#them_vao1").prepend("Tôi đánh: " + renderCardValue(test1) + "<br>");
      $("#mm0").text(`Tôi(${may0.length})`);
      if (boluot.length >= 3 && huongsai == "") {
        resetNewTurn();
      }
      if (thang.length == numberBot - 1) {
        document.getElementById("thang").click();
      } else {
        setBackgroundHand("0");
        document.getElementById("btnSendMessage").disabled = false;
      }
    }
  }

  $("#m0").click(function () {
    document.getElementById("btnSendMessage").disabled = false;
    document.getElementById("btnboluot").disabled = false;
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
});
