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
  tuanhanh = 2000,
  off_tuanhanh = 0,
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
  $("#tn").hide();
  $(document).on("click", ".image", function () {
    $("#tai_truoc8").trigger("play");

    sound.onwaiting = function () {
      //alert(1);
    };
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
    numberBot = getNumberBot();
    boluot = getSkipTurn();

    $("#tai_truoc7").trigger("play");
    play_nhac = 0;
    $("#tn").hide();
    Logger.addTurn();
    $("#mm0").css("background-color", "transparent");
    $("#mm1").css("background-color", "transparent");
    $("#mm2").css("background-color", "blue");
    $("#mm3").css("background-color", "blue");
    $("#btnbatdau").hide();

    const img = [
      "anh/03a.png",
      "anh/03b.png",
      "anh/03c.png",
      "anh/03d.png",
      "anh/04a.png",
      "anh/04b.png",
      "anh/04c.png",
      "anh/04d.png",
      "anh/05a.png",
      "anh/05b.png",
      "anh/05c.png",
      "anh/05d.png",
      "anh/06a.png",
      "anh/06b.png",
      "anh/06c.png",
      "anh/06d.png",
      "anh/07a.png",
      "anh/07b.png",
      "anh/07c.png",
      "anh/07d.png",
      "anh/08a.png",
      "anh/08b.png",
      "anh/08c.png",
      "anh/08d.png",
      "anh/09a.png",
      "anh/09b.png",
      "anh/09c.png",
      "anh/09d.png",
      "anh/10a.png",
      "anh/10b.png",
      "anh/10c.png",
      "anh/10d.png",
      "anh/11a.png",
      "anh/11b.png",
      "anh/11c.png",
      "anh/11d.png",
      "anh/12a.png",
      "anh/12b.png",
      "anh/12c.png",
      "anh/12d.png",
      "anh/13a.png",
      "anh/13b.png",
      "anh/13c.png",
      "anh/13d.png",
      "anh/14a.png",
      "anh/14b.png",
      "anh/14c.png",
      "anh/14d.png",
      "anh/16a.png",
      "anh/16b.png",
      "anh/16c.png",
      "anh/16d.png",
    ];
    may0 = dealCard(0, img);
    const y1 = giaomang(img, may0);
    may1 = dealCard(1, y1);

    let winningCards0 = getWinningCards(may0);
    let winningCards1 = getWinningCards(may1);
    let winningCards2 = [];
    let winningCards3 = [];

    if (numberBot >= 3) {
      const y2 = giaomang(y1, may1);
      may2 = dealCard(2, y2);
      $("#mm2").css("background-color", "transparent");
      winningCards2 = getWinningCards(may2);
      if (numberBot === 4) {
        const y3 = giaomang(y2, may2);
        may3 = dealCard(3, y3);
        $("#mm3").css("background-color", "transparent");
        winningCards3 = getWinningCards(may3);
      }
    }

    Logger.logInitCards(may0, may1, may2, may3);

    if (winningCards0.length !== 0) {
      showWinningCards(0, winningCards0);
    } else if (winningCards1.length !== 0) {
      showWinningCards(1, winningCards1);
    } else if (numberBot === 3 && winningCards2.length !== 0) {
      showWinningCards(2, winningCards2);
    } else if (numberBot === 4 && winningCards3.length !== 0) {
      showWinningCards(3, winningCards3);
    } else {
      const time = +$(`input[name="speed"]:checked`).val();
      if (thang1 == 0) {
        $("#mm0").css("backgroundColor", "yellow");
        setTimeout(() => {
          document.getElementById("m0").click();
        }, time);
      } else if (thang1 == 1) {
        $("#mm1").css("backgroundColor", "yellow");
        setTimeout(function () {
          document.getElementById("m1").click();
        }, time);
      } else if (thang1 == 2) {
        $("#mm2").css("backgroundColor", "yellow");
        setTimeout(function () {
          document.getElementById("m2").click();
        }, time);
      } else if (thang1 == 3) {
        $("#mm3").css("backgroundColor", "yellow");
        setTimeout(function () {
          document.getElementById("m3").click();
        }, time);
      }
    }
  });

  $("#btntieptuc").click(function () {
    hien2("");
    $("#history2").html("");
    hien("", "bot1");
    hien("", "bot2");
    hien("", "bot3");
    hien("", "bot4");
    roundId++;
    $("#roundId").text("Round: " + roundId);
    $("#them_vao1").prepend(`<hr />============================== <hr />`);

    $("#btntieptuc").hide();

    document.getElementById("btnbatdau").click();

    tuanhanh = 2000;
    $("#tn").hide();
    off_tuanhanh = 0;
  });
  $("#tn").click(function () {
    $("#tn").hide();
    tuanhanh = 100;
    off_tuanhanh = 1;
  });

  function dealCard(handId, images) {
    const x0 = loc_anh(images);
    const cards = sapxep(x0);
    hien(cards, `bot${handId}`);
    $(`#mm${handId}`).text(`Bot${handId}(13)`);
    return cards;
  }

  function getWinningCards(cards) {
    const doi = AIktra_doi(cards);
    const doiThong = AIktra_doithong(doi);
    const heo = ktra_4_heo(cards);
    const sanh = AIktra_sanh(cards);
    if (doi.length == 12) {
      return doi;
    } else if (kiemtrahople(doiThong) == "5doithong") {
      return doiThong;
    } else if (heo.length == 4) {
      return heo;
    } else if (sanh.length == 12) {
      return sanh;
    }
    return [];
  }

  function showWinningCards(handId, cards) {
    hien2(cards);
    hien("", `bot${handId}`);
    thang.push(handId.toString());
    setTimeout(function () {
      document.getElementById("thang").click();
    }, 2000);
  }

  ////////////////////////////////////////////////////////client server

  // $("#btnSendMessage").click(function () {
  //   //nguoi danh
  //   //var mySound = new sound("./sound/Button_Click.mp3");
  //   //mySound.play();
  //   const timeout = +$(`input[name="speed"]:checked`).val();
  //   if (kiemtrahople(u) != "khonghople" && u != "") {
  //     if (layer0 == "") {
  //       document.getElementById("btnSendMessage").disabled = true;
  //       document.getElementById("btnboluot").disabled = true;
  //       var n1 = may0;
  //       //var n2 = n1.split(",");
  //       var xoa = giaomang(n1, u);
  //       may0 = xoa;
  //       hien(may0, "bot0");

  //       hien2(u);

  //       layer0 = u;
  //       test1 = u;
  //       u = [];

  //       huongsai = [];

  //       if (may0 == "") {
  //         thang.push("0");
  //         boluot.push("0");
  //         huongsai.push(0);
  //       }

  //       setTimeout(function () {
  //         document.getElementById("m0").click();
  //       }, timeout);
  //     } else {
  //       if (ktra_ng_danh(layer0, u) == "hople") {
  //         document.getElementById("btnSendMessage").disabled = true;
  //         document.getElementById("btnboluot").disabled = true;
  //         var n1 = may0;
  //         //var n2 = n1.split(",");
  //         var xoa = giaomang(n1, u);
  //         may0 = xoa;
  //         hien(may0, "bot0");

  //         hien2(u);

  //         layer0 = u;
  //         test1 = u;
  //         u = [];

  //         huongsai = [];

  //         if (may0 == "") {
  //           thang.push("0");
  //           boluot.push("0");
  //           huongsai.push(0);
  //           off_tuanhanh == 0;
  //         }

  //         setTimeout(function () {
  //           document.getElementById("m0").click();
  //         }, 1000);
  //       } else {
  //         document.getElementById("khl").click();
  //       }
  //     }
  //   } else {
  //     document.getElementById("khl").click();
  //   }
  // });
  // $("#btnboluot").click(function () {
  //   //nguoi danh
  //   $("#tai_truoc15").trigger("play");

  //   document.getElementById("btnSendMessage").disabled = true;
  //   document.getElementById("btnboluot").disabled = true;
  //   test1 = [];
  //   //u=[];
  //   if (boluot.indexOf("0") < 0) {
  //     boluot.push("0");
  //   }
  //   setTimeout(function () {
  //     document.getElementById("m0").click();
  //   }, 1000);
  // });
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
    off_tuanhanh == 0;

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
