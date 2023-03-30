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
  roundId = 1;
$(document).ready(function () {
  $("#mm0").text("Bot1");
  $("#mm1").text("Bot2");
  $("#mm2").text("Bot3");
  $("#mm3").text("Bot4");
  var mm_0 = document.getElementById("mm0").textContent;
  var mm_1 = document.getElementById("mm1").textContent;
  var mm_2 = document.getElementById("mm2").textContent;
  var mm_3 = document.getElementById("mm3").textContent;
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
    $("#tai_truoc7").trigger("play");
    play_nhac = 0;
    $("#tn").hide();
    Logger.addTurn();
    var img = [
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
    var m1 = [];
    var m2 = [];
    var m3 = [];
    var m4 = [];
    var x0 = loc_anh(img);
    var y1 = giaomang(img, x0);
    var x2 = loc_anh(y1);
    var y2 = giaomang(y1, x2);
    var x3 = loc_anh(y2);
    var y3 = giaomang(y2, x3);
    //m1=sapxep(x1);
    //m2=sapxep(x2);
    //m3=sapxep(x3);
    //m4=sapxep(y3);
    ////////////////////////////////////////

    //var y2=x1.concat(x2);
    //var	y21=y2.concat(x3);
    //var y3=giaomang(img,y21);

    m1 = sapxep(x0);
    m2 = sapxep(x2);
    m3 = sapxep(x3);
    m4 = sapxep(loc_anh(y3));
    //layer0=["anh/03a.png", "anh/03b.png", "anh/04a.png", "anh/04b.png", "anh/05a.png", "anh/05b.png"];
    //
    //boluot=["1"];
    //hien2(layer0);
    may0 = m1;
    may1 = m2;
    may2 = m3;
    may3 = m4;
    Logger.logInitCards(may0, may1, may2, may3);

    hien(may0, "bot0");
    hien(may1, "bot1");
    hien(may2, "bot2");
    hien(may3, "bot3");

    $("#btnbatdau").hide();

    $("#mm1").css("background-color", "transparent");
    $("#mm2").css("background-color", "transparent");
    $("#mm3").css("background-color", "transparent");
    $("#mm0").css("background-color", "transparent");
    $("#mm1").text(mm_1 + "(" + 13 + ")");
    $("#mm2").text(mm_2 + "(" + 13 + ")");
    $("#mm3").text(mm_3 + "(" + 13 + ")");
    var doi1 = AIktra_doi(may1);
    var doi_thong1 = AIktra_doithong(doi1);
    var doi2 = AIktra_doi(may2);
    var doi_thong2 = AIktra_doithong(doi2);
    var doi3 = AIktra_doi(may3);
    var doi_thong3 = AIktra_doithong(doi3);
    var doi0 = AIktra_doi(may0);
    var doi_thong0 = AIktra_doithong(doi0);
    var heo40 = ktra_4_heo(may0);
    var heo41 = ktra_4_heo(may1);
    var heo42 = ktra_4_heo(may2);
    var heo43 = ktra_4_heo(may3);
    var sanh0 = AIktra_sanh(may0);
    var sanh1 = AIktra_sanh(may1);
    var sanh2 = AIktra_sanh(may2);
    var sanh3 = AIktra_sanh(may3);

    if (doi0.length == 12) {
      hien2(doi0);
      hien("", "bot0");
      thang.push("0");
      setTimeout(function () {
        document.getElementById("thang").click();
      }, 2000);
    } else if (doi1.length == 12) {
      hien2(doi1);
      hien("", "bot1");
      thang.push("1");
      setTimeout(function () {
        document.getElementById("thang").click();
      }, 2000);
    } else if (doi2.length == 12) {
      hien2(doi2);
      hien("", "bot2");
      thang.push("2");
      setTimeout(function () {
        document.getElementById("thang").click();
      }, 2000);
    } else if (doi3.length == 12) {
      hien2(doi3);
      hien("", "bot3");
      thang.push("3");
      setTimeout(function () {
        document.getElementById("thang").click();
      }, 2000);
    } else if (kiemtrahople(doi_thong0) == "5doithong") {
      hien2(doi_thong0);
      hien("", "bot0");
      thang.push("0");
      setTimeout(function () {
        document.getElementById("thang").click();
      }, 2000);
    } else if (kiemtrahople(doi_thong1) == "5doithong") {
      hien2(doi_thong1);
      hien("", "bot1");
      thang.push("1");
      setTimeout(function () {
        document.getElementById("thang").click();
      }, 2000);
    } else if (kiemtrahople(doi_thong2) == "5doithong") {
      hien2(doi_thong2);
      hien("", "bot2");
      thang.push("2");
      setTimeout(function () {
        document.getElementById("thang").click();
      }, 2000);
    } else if (kiemtrahople(doi_thong3) == "5doithong") {
      hien2(doi_thong3);
      hien("", "bot3");
      thang.push("3");
      setTimeout(function () {
        document.getElementById("thang").click();
      }, 2000);
    } else if (heo40.length == 4) {
      hien2(heo40);
      hien("", "bot0");
      thang.push("0");
      setTimeout(function () {
        document.getElementById("thang").click();
      }, 2000);
    } else if (heo41.length == 4) {
      hien2(heo41);
      hien("", "bot1");
      thang.push("1");
      setTimeout(function () {
        document.getElementById("thang").click();
      }, 2000);
    } else if (heo42.length == 4) {
      hien2(heo42);
      hien("", "bot2");
      thang.push("2");
      setTimeout(function () {
        document.getElementById("thang").click();
      }, 2000);
    } else if (heo43.length == 4) {
      hien2(heo43);
      hien("", "bot3");
      thang.push("3");
      setTimeout(function () {
        document.getElementById("thang").click();
      }, 2000);
    } else if (sanh0.length == 12) {
      hien2(sanh0);
      hien("", "bot0");
      thang.push("0");
      setTimeout(function () {
        document.getElementById("thang").click();
      }, 2000);
    } else if (sanh1.length == 12) {
      hien2(sanh1);
      hien("", "bot1");
      thang.push("1");
      setTimeout(function () {
        document.getElementById("thang").click();
      }, 2000);
    } else if (sanh2.length == 12) {
      hien2(sanh2);
      hien("", "bot2");
      thang.push("2");
      setTimeout(function () {
        document.getElementById("thang").click();
      }, 2000);
    } else if (sanh3.length == 12) {
      hien2(sanh3);
      hien("", "bot3");
      thang.push("3");
      setTimeout(function () {
        document.getElementById("thang").click();
      }, 2000);
    } else {
      const time = +$(`input[name="speed"]:checked`).val();
      if (thang1 == 0) {
        setTimeout(() => {
          document.getElementById("m0").click();
        }, time);

        $("#mm0").css("backgroundColor", "yellow");
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

  ////////////////////////////////////////////////////////client server

  $("#btnSendMessage").click(function () {
    //nguoi danh
    //var mySound = new sound("./sound/Button_Click.mp3");
    //mySound.play();
    const timeout = +$(`input[name="speed"]:checked`).val();
    if (kiemtrahople(u) != "khonghople" && u != "") {
      if (layer0 == "") {
        document.getElementById("btnSendMessage").disabled = true;
        document.getElementById("btnboluot").disabled = true;
        var n1 = may0;
        //var n2 = n1.split(",");
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
          document.getElementById("m0").click();
        }, timeout);
      } else {
        if (ktra_ng_danh(layer0, u) == "hople") {
          document.getElementById("btnSendMessage").disabled = true;
          document.getElementById("btnboluot").disabled = true;
          var n1 = may0;
          //var n2 = n1.split(",");
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
            off_tuanhanh == 0;
          }

          setTimeout(function () {
            document.getElementById("m0").click();
          }, 1000);
        } else {
          document.getElementById("khl").click();
        }
      }
    } else {
      document.getElementById("khl").click();
    }
  });
  $("#btnboluot").click(function () {
    //nguoi danh
    $("#tai_truoc15").trigger("play");

    document.getElementById("btnSendMessage").disabled = true;
    document.getElementById("btnboluot").disabled = true;
    test1 = [];
    //u=[];
    if (boluot.indexOf("0") < 0) {
      boluot.push("0");
    }
    setTimeout(function () {
      document.getElementById("m0").click();
    }, 1000);
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
});
