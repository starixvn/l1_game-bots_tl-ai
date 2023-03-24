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
  lkt = "";
$(document).ready(function () {
  var ten_N_N = [
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
  function giao_ten(a, b) {
    var c = [];
    for (var i = 0; i < a.length; i++) {
      if (a[i] != b) {
        c.push(a[i]);
      }
    }
    return c;
  }
  var ten_1 = loc_ten(ten_N_N);
  var ten_2_tam = giao_ten(ten_N_N, ten_1);
  var ten_2 = loc_ten(ten_2_tam);
  var ten_3_tam = giao_ten(ten_2_tam, ten_2);
  var ten_3 = loc_ten(ten_3_tam);
  $("#mm0").text("Tôi");
  $("#mm1").text(ten_1);
  $("#mm2").text(ten_2);
  $("#mm3").text(ten_3);
  var mm_0 = document.getElementById("mm0").textContent;
  var mm_1 = document.getElementById("mm1").textContent;
  var mm_2 = document.getElementById("mm2").textContent;
  var mm_3 = document.getElementById("mm3").textContent;
  document.getElementById("btnSendMessage").disabled = true;
  document.getElementById("btnboluot").disabled = true;
  $("#tn").hide();
  $(document).on("click", ".image", function () {
    //var mySound = new sound("./sound/Chon_bai.mp3");
    // mySound.play();
    $("#tai_truoc8").trigger("play");

    sound.onwaiting = function () {
      //alert(1);
    };
    sound.onplaying = function () {};

    function timxoa(u, ac, l1) {
      for (var i = 0; i < l1; i++) if (u[i] == ac) return i; //Tìm thấy x tại vị trí thứ i
      return -1; //Không tìm thấy x trong mảng
    }

    //alert(2);
    //document.getElementById('btnSendMessage').value="";
    if ($(this).css("top") == "100px") {
      $(this).css("top", "50px");
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
    //$('.play').trigger("play");
    // mySound.play();
    play_nhac = 0;
    $("#tn").hide();
    /*x1=["anh/03a.png", "anh/04b.png", "anh/06c.png", "anh/08a.png","anh/08a.png",//may 
	   "anh/10d.png","anh/10c.png","anh/12d.png","anh/12a.png","anh/13d.png","anh/14c.png","anh/14c.png","anh/16c.png"];
		x2=["anh/04a.png", "anh/05b.png", "anh/06d.png", "anh/07a.png","anh/08d.png",
		    "anh/09a.png","anh/10b.png","anh/10c.png","anh/11b.png","anh/12b.png","anh/13a.png","anh/14d.png","anh/14b.png"];//nguoi*/

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

    /*may0=["anh/14d.png","anh/16a.png"];
		 may1=["anh/03b.png", "anh/03c.png", "anh/03d.png"];
		 may2=["anh/04b.png", "anh/04c.png", "anh/04d.png"];
		 may3=["anh/16b.png"];*/
    hien(may0, "a");
    hien(may1, "bot1");
    hien(may2, "bot2");
    hien(may3, "bot3");
    //thang=["1","2"];
    // hien3(may1);

    // var button = document.getElementById('btntieptuc');
    //setTimeout(function(){ document.getElementById('btntieptuc').click(); }, 2000);

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
    //alert(doi_thong1);
    if (doi0.length == 12) {
      hien2(doi0);
      hien("", "a");
      thang.push("0");
      setTimeout(function () {
        document.getElementById("thang").click();
      }, 2000);
    } else if (doi1.length == 12) {
      hien2(doi1);
      hien("", "a");
      thang.push("1");
      setTimeout(function () {
        document.getElementById("thang").click();
      }, 2000);
    } else if (doi2.length == 12) {
      hien2(doi2);
      hien("", "a");
      thang.push("2");
      setTimeout(function () {
        document.getElementById("thang").click();
      }, 2000);
    } else if (doi3.length == 12) {
      hien2(doi3);
      hien("", "a");
      thang.push("3");
      setTimeout(function () {
        document.getElementById("thang").click();
      }, 2000);
    } else if (kiemtrahople(doi_thong0) == "5doithong") {
      hien2(doi_thong0);
      hien("", "a");
      thang.push("0");
      setTimeout(function () {
        document.getElementById("thang").click();
      }, 2000);
    } else if (kiemtrahople(doi_thong1) == "5doithong") {
      hien2(doi_thong1);
      hien("", "a");
      thang.push("1");
      setTimeout(function () {
        document.getElementById("thang").click();
      }, 2000);
    } else if (kiemtrahople(doi_thong2) == "5doithong") {
      hien2(doi_thong2);
      hien("", "a");
      thang.push("2");
      setTimeout(function () {
        document.getElementById("thang").click();
      }, 2000);
    } else if (kiemtrahople(doi_thong3) == "5doithong") {
      hien2(doi_thong3);
      hien("", "a");
      thang.push("3");
      setTimeout(function () {
        document.getElementById("thang").click();
      }, 2000);
    } else if (heo40.length == 4) {
      hien2(heo40);
      hien("", "a");
      thang.push("0");
      setTimeout(function () {
        document.getElementById("thang").click();
      }, 2000);
    } else if (heo41.length == 4) {
      hien2(heo41);
      hien("", "a");
      thang.push("1");
      setTimeout(function () {
        document.getElementById("thang").click();
      }, 2000);
    } else if (heo42.length == 4) {
      hien2(heo42);
      hien("", "a");
      thang.push("2");
      setTimeout(function () {
        document.getElementById("thang").click();
      }, 2000);
    } else if (heo43.length == 4) {
      hien2(heo43);
      hien("", "a");
      thang.push("3");
      setTimeout(function () {
        document.getElementById("thang").click();
      }, 2000);
    } else if (sanh0.length == 12) {
      hien2(sanh0);
      hien("", "a");
      thang.push("0");
      setTimeout(function () {
        document.getElementById("thang").click();
      }, 2000);
    } else if (sanh1.length == 12) {
      hien2(sanh1);
      hien("", "a");
      thang.push("1");
      setTimeout(function () {
        document.getElementById("thang").click();
      }, 2000);
    } else if (sanh2.length == 12) {
      hien2(sanh2);
      hien("", "a");
      thang.push("2");
      setTimeout(function () {
        document.getElementById("thang").click();
      }, 2000);
    } else if (sanh3.length == 12) {
      hien2(sanh3);
      hien("", "a");
      thang.push("3");
      setTimeout(function () {
        document.getElementById("thang").click();
      }, 2000);
    } else {
      if (thang1 == 0) {
        document.getElementById("btnSendMessage").disabled = false;
        document.getElementById("btnboluot").disabled = false;

        $("#mm0").css("backgroundColor", "yellow");
      } else if (thang1 == 1) {
        $("#mm1").css("backgroundColor", "yellow");

        setTimeout(function () {
          document.getElementById("m1").click();
        }, 1000);
      } else if (thang1 == 2) {
        $("#mm2").css("backgroundColor", "yellow");
        setTimeout(function () {
          document.getElementById("m2").click();
        }, 1000);
      } else if (thang1 == 3) {
        $("#mm3").css("backgroundColor", "yellow");
        setTimeout(function () {
          document.getElementById("m3").click();
        }, 1000);
      }
    }
  });

  $("#btntieptuc").click(function () {
    hien2("");
    //document.getElementById("btntieptuc").onclick();//ach su dung khong can jquery
    $("#them_vao1").prepend(`============================== <br />`);

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
    if (kiemtrahople(u) != "khonghople" && u != "") {
      if (layer0 == "") {
        document.getElementById("btnSendMessage").disabled = true;
        document.getElementById("btnboluot").disabled = true;
        var n1 = may0;
        //var n2 = n1.split(",");
        var xoa = giaomang(n1, u);
        may0 = xoa;
        hien(may0, "a");

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
        }, 1);
      } else {
        if (ktra_ng_danh(layer0, u) == "hople") {
          document.getElementById("btnSendMessage").disabled = true;
          document.getElementById("btnboluot").disabled = true;
          var n1 = may0;
          //var n2 = n1.split(",");
          var xoa = giaomang(n1, u);
          may0 = xoa;
          hien(may0, "a");

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
    }, 1);
  });
  $("#thang").click(function () {
    //nguoi danh
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

    $("#btntieptuc").show();
  });
  function chuyen_bai(a) {
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

  $("#m0").click(function () {
    //var res = str.split("@");
    if (thang.indexOf("0") >= 0 && off_tuanhanh == 0) $("#tn").show();
    else $("#tn").hide();

    if (huongsai != "") {
      if (boluot.indexOf("0") >= 0) {
        var pi1 = "";

        pi1 = an(boluot, 0, thang);
        // lkt=pi1;
        v_err = [];
        v_err_1 = [];
        v_err_2 = [];
        console.log(may0.length + " M0 đánh " + test1 + "---" + boluot);
        v_err.push(
          "M0 còn lại:" +
            may0.length +
            "--bl:" +
            boluot +
            "--t:" +
            thang +
            "<br>"
        );
        v_err_1.push("M0 đánh: " + chuyen_bai(test1) + "<br>");
        v_err_2.push("M0 con lai:" + chuyen_bai(may0) + "<br>");

        //$("#mm0").text(mm_0+"("+may0.length+")");

        $("#them_vao").append(v_err);
        $("#them_vao1").prepend(v_err_1);
        $("#them_vao2").append(v_err_2);
        if (boluot.length >= 4 && huongsai != "") {
          boluot = [];
          boluot = giaomang1(thang);
          layer0 = [];

          huongsai = [];
          hien2("");
        }
        if (thang.length == 3) {
          document.getElementById("thang").click();
        } else {
          $("#mm1").css("background-color", "transparent");
          $("#mm2").css("background-color", "transparent");
          $("#mm3").css("background-color", "transparent");
          $("#mm0").css("background-color", "transparent");
          if (pi1 == "0") {
            $("#mm0").css("backgroundColor", "yellow");
          } else if (pi1 == "1") {
            $("#mm1").css("backgroundColor", "yellow");
          } else if (pi1 == "2") {
            $("#mm2").css("backgroundColor", "yellow");
          } else if (pi1 == "3") {
            $("#mm3").css("backgroundColor", "yellow");
          }
          if (boluot.indexOf("0") >= 0)
            $("#mm0").css("backgroundColor", "blue");
          if (boluot.indexOf("1") >= 0)
            $("#mm1").css("backgroundColor", "blue");
          if (boluot.indexOf("2") >= 0)
            $("#mm2").css("backgroundColor", "blue");
          if (boluot.indexOf("3") >= 0)
            $("#mm3").css("backgroundColor", "blue");

          if (pi1 == "0") {
            document.getElementById("btnSendMessage").disabled = false;
            document.getElementById("btnboluot").disabled = false;
          } else
            setTimeout(function () {
              if (pi1 == "9") {
                $("#btntieptuc").show();
              } else document.getElementById("m" + pi1).click();
            }, tuanhanh); //0 1 2 3
        }
      } else {
        var pi1 = "";
        pi1 = an(boluot, 0, thang);
        // lkt=pi1;
        if (pi1 == "0") {
          boluot = [];
          boluot = giaomang1(thang);
          layer0 = [];

          if (thang.length == 3) {
            $("#btntieptuc").show();
          }
          //huongsai=[];
          hien2("");
        }
        v_err = [];
        v_err_1 = [];
        v_err_2 = [];
        console.log(may0.length + " M0 đánh " + test1 + "---" + boluot);
        v_err.push(
          "M0:" + may0.length + "--bl:" + boluot + "--t:" + thang + "<br>"
        );
        v_err_1.push("M0 đánh: " + chuyen_bai(test1) + "<br>");
        v_err_2.push("M0 còn lại:" + chuyen_bai(may0) + "<br>");
        //$("#mm0").text(mm_0+"("+may0.length+")");
        $("#them_vao").append(v_err);
        $("#them_vao1").prepend(v_err_1);
        $("#them_vao2").append(v_err_2);

        if (boluot.length >= 4 && huongsai != "") {
          boluot = [];
          boluot = giaomang1(thang);
          layer0 = [];

          if (thang.length == 3) {
            $("#btntieptuc").show();
          }
          huongsai = [];
          hien2("");
        }

        if (pi1 == "0") {
          setTimeout(function () {
            document.getElementById("btnSendMessage").disabled = false;
            document.getElementById("btnboluot").disabled = false;
          }, 1000); //0 1 2 3
        } else {
          if (thang.length == 3) {
            document.getElementById("thang").click();
          } else {
            $("#mm1").css("background-color", "transparent");
            $("#mm2").css("background-color", "transparent");
            $("#mm3").css("background-color", "transparent");
            $("#mm0").css("background-color", "transparent");
            if (pi1 == "0") {
              $("#mm0").css("backgroundColor", "yellow");
            } else if (pi1 == "1") {
              $("#mm1").css("backgroundColor", "yellow");
            } else if (pi1 == "2") {
              $("#mm2").css("backgroundColor", "yellow");
            } else if (pi1 == "3") {
              $("#mm3").css("backgroundColor", "yellow");
            }
            if (boluot.indexOf("0") >= 0)
              $("#mm0").css("backgroundColor", "blue");
            if (boluot.indexOf("1") >= 0)
              $("#mm1").css("backgroundColor", "blue");
            if (boluot.indexOf("2") >= 0)
              $("#mm2").css("backgroundColor", "blue");
            if (boluot.indexOf("3") >= 0)
              $("#mm3").css("backgroundColor", "blue");

            if (pi1 == "0") {
              document.getElementById("btnSendMessage").disabled = false;
              document.getElementById("btnboluot").disabled = false;
            } else
              setTimeout(function () {
                if (pi1 == "9") {
                  $("#btntieptuc").show();
                } else document.getElementById("m" + pi1).click();
              }, tuanhanh); //0 1 2 3
          }
        }
      }
    } else if (boluot.indexOf("1") < 0) {
      //0 1 2 3
      v_err = [];
      v_err_1 = [];
      v_err_2 = [];
      console.log(may0.length + " M0 đánh " + test1 + "--" + boluot);
      v_err.push(
        "M0:" + may0.length + "--bl:" + boluot + "--t:" + thang + "<br>"
      );
      v_err_1.push("M0 đánh: " + chuyen_bai(test1) + "<br>");
      v_err_2.push("M0 còn lại:" + chuyen_bai(may0) + "<br>");

      //$("#mm0").text(mm_0+"("+may0.length+")");
      $("#them_vao").append(v_err);
      $("#them_vao1").prepend(v_err_1);
      $("#them_vao2").append(v_err_2);

      if (may0 == "") {
        thang.push("0");
        boluot.push("0");
        huongsai.push(0);
      }

      if (boluot.length >= 3 && huongsai == "") {
        boluot = [];
        boluot = giaomang1(thang);

        hien2("");
        layer0 = [];
      }

      if (thang.length == 3) {
        document.getElementById("thang").click();
      } else {
        $("#mm1").css("background-color", "transparent");
        $("#mm2").css("background-color", "transparent");
        $("#mm3").css("background-color", "transparent");
        $("#mm0").css("background-color", "transparent");
        if (boluot.indexOf("0") >= 0) $("#mm0").css("backgroundColor", "blue");
        if (boluot.indexOf("1") >= 0) $("#mm1").css("backgroundColor", "blue");
        if (boluot.indexOf("2") >= 0) $("#mm2").css("backgroundColor", "blue");
        if (boluot.indexOf("3") >= 0) $("#mm3").css("backgroundColor", "blue");
        $("#mm1").css("backgroundColor", "yellow");

        setTimeout(function () {
          document.getElementById("m1").click();
        }, tuanhanh); //0 1 2 3
      }
    } else if (boluot.indexOf("1") >= 0 && boluot.indexOf("2") < 0) {
      if (may0 == "") {
        thang.push("0");
        boluot.push("0");

        huongsai.push(0);
      }
      v_err = [];
      v_err_1 = [];
      v_err_2 = [];
      console.log(may0.length + " M0 đánh" + test1 + "--" + boluot);
      v_err.push(
        "M0:" + may0.length + "--bl:" + boluot + "--t:" + thang + "<br>"
      );
      v_err_1.push("M0 đánh: " + chuyen_bai(test1) + "<br>");
      v_err_2.push("M0 còn lại:" + chuyen_bai(may0) + "<br>");
      //$("#mm0").text(mm_0+"("+may0.length+")");
      $("#them_vao").append(v_err);
      $("#them_vao1").prepend(v_err_1);
      $("#them_vao2").append(v_err_2);
      if (boluot.length >= 3 && huongsai == "") {
        boluot = [];
        boluot = giaomang1(thang);

        hien2("");
        layer0 = [];
      }
      if (thang.length == 3) {
        document.getElementById("thang").click();
      } else {
        $("#mm1").css("background-color", "transparent");
        $("#mm2").css("background-color", "transparent");
        $("#mm3").css("background-color", "transparent");
        $("#mm0").css("background-color", "transparent");
        if (boluot.indexOf("0") >= 0) $("#mm0").css("backgroundColor", "blue");
        if (boluot.indexOf("1") >= 0) $("#mm1").css("backgroundColor", "blue");
        if (boluot.indexOf("2") >= 0) $("#mm2").css("backgroundColor", "blue");
        if (boluot.indexOf("3") >= 0) $("#mm3").css("backgroundColor", "blue");
        $("#mm2").css("backgroundColor", "yellow");

        setTimeout(function () {
          document.getElementById("m2").click();
        }, 1000); //0 1 2 3
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
      v_err = [];
      v_err_1 = [];
      v_err_2 = [];
      console.log(may0.length + " M0 đánh " + test1 + "--" + boluot);
      v_err.push(
        "M0:" + may0.length + "--bl:" + boluot + "--t:" + thang + "<br>"
      );
      v_err_1.push("M0 đánh: " + chuyen_bai(test1) + "<br>");
      v_err_2.push("M0 còn lại:" + chuyen_bai(may0) + "<br>");
      //$("#mm0").text(mm_0+"("+may0.length+")");
      $("#them_vao").append(v_err);
      $("#them_vao1").prepend(v_err_1);
      $("#them_vao2").append(v_err_2);
      if (boluot.length >= 3 && huongsai == "") {
        boluot = [];
        boluot = giaomang1(thang);
        hien2("");
        layer0 = [];
      }
      if (thang.length == 3) {
        document.getElementById("thang").click();
      } else {
        $("#mm1").css("background-color", "transparent");
        $("#mm2").css("background-color", "transparent");
        $("#mm3").css("background-color", "transparent");
        $("#mm0").css("background-color", "transparent");
        if (boluot.indexOf("0") >= 0) $("#mm0").css("backgroundColor", "blue");
        if (boluot.indexOf("1") >= 0) $("#mm1").css("backgroundColor", "blue");
        if (boluot.indexOf("2") >= 0) $("#mm2").css("backgroundColor", "blue");
        if (boluot.indexOf("3") >= 0) $("#mm3").css("backgroundColor", "blue");
        $("#mm3").css("backgroundColor", "yellow");

        setTimeout(function () {
          document.getElementById("m3").click();
        }, tuanhanh); //0 1 2 3
      }
    } else if (boluot.indexOf("0") < 0) {
      if (may0 == "") {
        thang.push("0");
        boluot.push("0");
        huongsai.push(0);
      }
      v_err = [];
      v_err_1 = [];
      v_err_2 = [];
      console.log(may0.length + " M0 đánh " + test1 + "--" + boluot);
      v_err.push(
        "M0:" + may0.length + "--bl:" + boluot + "--t:" + thang + "<br>"
      );
      v_err_1.push("M0 đánh: " + chuyen_bai(test1) + "<br>");
      v_err_2.push("M0 còn lại:" + chuyen_bai(may0) + "<br>");
      //$("#mm0").text(mm_0+"("+may0.length+")");
      $("#them_vao").append(v_err);
      $("#them_vao1").prepend(v_err_1);
      $("#them_vao2").append(v_err_2);
      if (boluot.length >= 3 && huongsai == "") {
        boluot = [];
        boluot = giaomang1(thang);
        hien2("");
        layer0 = [];
      }
      if (thang.length == 3) {
        document.getElementById("thang").click();
      } else {
        $("#mm1").css("background-color", "transparent");
        $("#mm2").css("background-color", "transparent");
        $("#mm3").css("background-color", "transparent");
        $("#mm0").css("background-color", "transparent");
        if (boluot.indexOf("0") >= 0) $("#mm0").css("backgroundColor", "blue");
        if (boluot.indexOf("1") >= 0) $("#mm1").css("backgroundColor", "blue");
        if (boluot.indexOf("2") >= 0) $("#mm2").css("backgroundColor", "blue");
        if (boluot.indexOf("3") >= 0) $("#mm3").css("backgroundColor", "blue");
        $("#mm0").css("backgroundColor", "yellow");
        document.getElementById("btnSendMessage").disabled = false;
      }
    }
  });
  $("#m1").click(function () {
    const originalCards = [...may1];
    var _d_f = AI(layer0, may1); //0  1  2  3
    //_d_f="";

    if (huongsai != "") {
      if (_d_f == "") {
        boluot.push("1");
        var pi1 = "";

        pi1 = an(boluot, 1, thang);

        v_err_1 = [];
        console.log(may1.length + " M1 đánh" + _d_f + "---" + boluot);
        v_err_1.push(
          "M1 đánh: " +
            chuyen_bai(_d_f) +
            " *** (" +
            chuyen_bai(originalCards) +
            ")<br>"
        );
        $("#mm1").text(mm_1 + "(" + may1.length + ")");
        $("#them_vao1").prepend(v_err_1);

        if (boluot.length >= 4 && huongsai != "") {
          boluot = [];
          boluot = giaomang1(thang);
          layer0 = [];

          huongsai = [];
          hien2("");
        }
        if (thang.length == 3) {
          document.getElementById("thang").click();
        } else {
          $("#mm1").css("background-color", "transparent");
          $("#mm2").css("background-color", "transparent");
          $("#mm3").css("background-color", "transparent");
          $("#mm0").css("background-color", "transparent");
          if (pi1 == "0") $("#mm0").css("backgroundColor", "yellow");
          else if (pi1 == "1") $("#mm1").css("backgroundColor", "yellow");
          else if (pi1 == "2") $("#mm2").css("backgroundColor", "yellow");
          else if (pi1 == "3") $("#mm3").css("backgroundColor", "yellow");
          if (boluot.indexOf("0") >= 0)
            $("#mm0").css("backgroundColor", "blue");
          if (boluot.indexOf("1") >= 0)
            $("#mm1").css("backgroundColor", "blue");
          if (boluot.indexOf("2") >= 0)
            $("#mm2").css("backgroundColor", "blue");
          if (boluot.indexOf("3") >= 0)
            $("#mm3").css("backgroundColor", "blue");

          if (pi1 == "0") {
            document.getElementById("btnSendMessage").disabled = false;
            document.getElementById("btnboluot").disabled = false;
          } else
            setTimeout(function () {
              if (pi1 == "9") {
                $("#btntieptuc").show();
              } else document.getElementById("m" + pi1).click();
            }, tuanhanh); //0 1 2 3
        }
      } else {
        huongsai = [];
        var s1 = giaomang(may1, _d_f);

        var ss = sapxep(s1);
        may1 = ss;

        if (may1 == "") {
          thang.push("1");
          boluot.push("1");
          huongsai.push(1);
        }
        if (_d_f != "") {
          hien(may1, "bot1");
          hien2(_d_f);
          layer0 = _d_f;
        }
        var pi1 = "";

        pi1 = an(boluot, 1, thang);
        v_err_1 = [];
        console.log(may1.length + " M1 đánh" + _d_f + "---" + boluot);
        v_err.push(
          "M1:" + may1.length + "--bl:" + boluot + "--t:" + thang + "<br>"
        );
        v_err_1.push(
          "M1 đánh: " +
            chuyen_bai(_d_f) +
            " *** (" +
            chuyen_bai(originalCards) +
            ")<br>"
        );
        $("#mm1").text(mm_1 + "(" + may1.length + ")");
        $("#them_vao1").prepend(v_err_1);
        if (pi1 == "1") {
          boluot = [];
          boluot = giaomang1(thang);
          layer0 = [];

          if (thang.length == 3) {
            $("#btntieptuc").show();
          }
          //huongsai=[];
          hien2("");
        }
        if (boluot.length >= 4 && huongsai != "") {
          boluot = [];
          boluot = giaomang1(thang);
          layer0 = [];

          huongsai = [];
          hien2("");
        }

        if (pi1 == "0") {
          setTimeout(function () {
            document.getElementById("btnSendMessage").disabled = false;
            document.getElementById("btnboluot").disabled = false;
          }, 1000); //0 1 2 3
        } else {
          if (thang.length == 3) {
            document.getElementById("thang").click();
          } else {
            $("#mm1").css("background-color", "transparent");
            $("#mm2").css("background-color", "transparent");
            $("#mm3").css("background-color", "transparent");
            $("#mm0").css("background-color", "transparent");
            if (pi1 == "0") $("#mm0").css("backgroundColor", "yellow");
            else if (pi1 == "1") $("#mm1").css("backgroundColor", "yellow");
            else if (pi1 == "2") $("#mm2").css("backgroundColor", "yellow");
            else if (pi1 == "3") $("#mm3").css("backgroundColor", "yellow");
            if (boluot.indexOf("0") >= 0)
              $("#mm0").css("backgroundColor", "blue");
            if (boluot.indexOf("1") >= 0)
              $("#mm1").css("backgroundColor", "blue");
            if (boluot.indexOf("2") >= 0)
              $("#mm2").css("backgroundColor", "blue");
            if (boluot.indexOf("3") >= 0)
              $("#mm3").css("backgroundColor", "blue");
            if (pi1 == "0") {
              document.getElementById("btnSendMessage").disabled = false;
            } else
              setTimeout(function () {
                if (pi1 == "9") {
                  $("#btntieptuc").show();
                } else document.getElementById("m" + pi1).click();
              }, tuanhanh); //0 1 2 3
          }
        }
      }
    } else if (boluot.indexOf("2") < 0) {
      if (_d_f != "") {
        huongsai = [];
        var s1 = giaomang(may1, _d_f);

        var ss = sapxep(s1);
        may1 = ss;
        if (may1 == "") {
          thang.push("1");
          boluot.push("1");
          huongsai.push(1);
        }
        if (_d_f != "") {
          hien(may1, "bot1");
          hien2(_d_f);
          layer0 = _d_f;
        }
      } else {
        boluot.push("1");
      }
      v_err_1 = [];
      console.log(may1.length + " M1 đánh" + _d_f + "---" + boluot);
      v_err_1.push(
        "M1 đánh: " +
          chuyen_bai(_d_f) +
          " *** (" +
          chuyen_bai(originalCards) +
          ")<br>"
      );
      $("#mm1").text(mm_1 + "(" + may1.length + ")");
      $("#them_vao1").prepend(v_err_1);

      if (boluot.length >= 3 && huongsai == "") {
        boluot = [];
        boluot = giaomang1(thang);
        layer0 = [];

        hien2("");
      } else if (boluot.length >= 4 && huongsai != "") {
        boluot = [];
        boluot = giaomang1(thang);
        layer0 = [];

        huongsai = [];
        hien2("");
      }
      if (thang.length == 3) {
        document.getElementById("thang").click();
      } else {
        $("#mm1").css("background-color", "transparent");
        $("#mm2").css("background-color", "transparent");
        $("#mm3").css("background-color", "transparent");
        $("#mm0").css("background-color", "transparent");
        if (boluot.indexOf("0") >= 0) $("#mm0").css("backgroundColor", "blue");
        if (boluot.indexOf("1") >= 0) $("#mm1").css("backgroundColor", "blue");
        if (boluot.indexOf("2") >= 0) $("#mm2").css("backgroundColor", "blue");
        if (boluot.indexOf("3") >= 0) $("#mm3").css("backgroundColor", "blue");

        $("#mm2").css("backgroundColor", "yellow");
        setTimeout(function () {
          document.getElementById("m2").click();
        }, tuanhanh); //0 1 2 3
      }
    } else if (boluot.indexOf("2") >= 0 && boluot.indexOf("3") < 0) {
      if (_d_f != "") {
        huongsai = [];
        var s1 = giaomang(may1, _d_f);

        var ss = sapxep(s1);
        may1 = ss;
        if (may1 == "") {
          thang.push("1");
          boluot.push("1");

          huongsai.push(1);
        }
        hien(may1, "bot1");
        hien2(_d_f);
        layer0 = _d_f;
      } else {
        boluot.push("1");
      }
      v_err_1 = [];
      console.log(may1.length + " M1 đánh" + _d_f + "---" + boluot);
      v_err_1.push(
        "M1 đánh: " +
          chuyen_bai(_d_f) +
          " *** (" +
          chuyen_bai(originalCards) +
          ")<br>"
      );
      $("#mm1").text(mm_1 + "(" + may1.length + ")");
      $("#them_vao1").prepend(v_err_1);
      if (boluot.length >= 3 && huongsai == "") {
        boluot = [];
        boluot = giaomang1(thang);

        hien2("");
        layer0 = [];
      }
      if (thang.length == 3) {
        document.getElementById("thang").click();
      } else {
        $("#mm1").css("background-color", "transparent");
        $("#mm2").css("background-color", "transparent");
        $("#mm3").css("background-color", "transparent");
        $("#mm0").css("background-color", "transparent");
        if (boluot.indexOf("0") >= 0) $("#mm0").css("backgroundColor", "blue");
        if (boluot.indexOf("1") >= 0) $("#mm1").css("backgroundColor", "blue");
        if (boluot.indexOf("2") >= 0) $("#mm2").css("backgroundColor", "blue");
        if (boluot.indexOf("3") >= 0) $("#mm3").css("backgroundColor", "blue");
        $("#mm3").css("backgroundColor", "yellow");

        setTimeout(function () {
          document.getElementById("m3").click();
        }, tuanhanh); //0 1 2 3
      }
    } else if (
      boluot.indexOf("2") >= 0 &&
      boluot.indexOf("3") >= 0 &&
      boluot.indexOf("0") < 0
    ) {
      if (_d_f != "") {
        hs = 4;
        huongsai = [];
        var s1 = giaomang(may1, _d_f);

        var ss = sapxep(s1);
        may1 = ss;
        if (may1 == "") {
          thang.push("1");
          boluot.push("1");

          huongsai.push(1);
        }
        hien(may1, "bot1");
        hien2(_d_f);
        layer0 = _d_f;
      } else {
        boluot.push("1");
      }
      v_err_1 = [];
      console.log(may1.length + " M1 đánh" + _d_f + "---" + boluot);
      v_err_1.push(
        "M1 đánh: " +
          chuyen_bai(_d_f) +
          " *** (" +
          chuyen_bai(originalCards) +
          ")<br>"
      );
      $("#mm1").text(mm_1 + "(" + may1.length + ")");
      v_err_1.unshift("<hr>");
      $("#them_vao1").prepend(v_err_1);
      console.log("--------------------------------");
      if (boluot.length >= 3 && huongsai == "") {
        boluot = [];
        boluot = giaomang1(thang);

        hien2("");
        layer0 = [];
      }
      if (thang.length == 3) {
        document.getElementById("thang").click();
      } else {
        $("#mm1").css("background-color", "transparent");
        $("#mm2").css("background-color", "transparent");
        $("#mm3").css("background-color", "transparent");
        $("#mm0").css("background-color", "transparent");
        if (boluot.indexOf("0") >= 0) $("#mm0").css("backgroundColor", "blue");
        if (boluot.indexOf("1") >= 0) $("#mm1").css("backgroundColor", "blue");
        if (boluot.indexOf("2") >= 0) $("#mm2").css("backgroundColor", "blue");
        if (boluot.indexOf("3") >= 0) $("#mm3").css("backgroundColor", "blue");
        $("#mm0").css("backgroundColor", "yellow");
        if (layer0 == "") {
          document.getElementById("btnSendMessage").disabled = false;
        } else {
          document.getElementById("btnSendMessage").disabled = false;
          document.getElementById("btnboluot").disabled = false;
        }
      }
    } else if (boluot.indexOf("1") < 0) {
      boluot = [];
      boluot = giaomang1(thang);

      hien2("");
      layer0 = [];
      _d_f = AI(layer0, may1); //0  1  2  3
      if (_d_f != "") {
        huongsai = [];
        var s1 = giaomang(may1, _d_f);

        var ss = sapxep(s1);
        may1 = ss;
        if (may1 == "") {
          thang.push("1");
          boluot.push("1");

          huongsai.push(1);
        }
        hien(may1, "bot1");
        hien2(_d_f);
        layer0 = _d_f;
      }
      v_err_1 = [];
      console.log(may1.length + " M1 đánh" + _d_f + "---" + boluot);
      v_err_1.push(
        "M1 đánh: " +
          chuyen_bai(_d_f) +
          " *** (" +
          chuyen_bai(originalCards) +
          ")<br>"
      );
      $("#mm1").text(mm_1 + "(" + may1.length + ")");
      $("#them_vao1").prepend(v_err_1);
      if (thang.length == 3) {
        document.getElementById("thang").click();
      } else {
        $("#mm1").css("background-color", "transparent");
        $("#mm2").css("background-color", "transparent");
        $("#mm3").css("background-color", "transparent");
        $("#mm0").css("background-color", "transparent");
        if (boluot.indexOf("0") >= 0) $("#mm0").css("backgroundColor", "blue");
        if (boluot.indexOf("1") >= 0) $("#mm1").css("backgroundColor", "blue");
        if (boluot.indexOf("2") >= 0) $("#mm2").css("backgroundColor", "blue");
        if (boluot.indexOf("3") >= 0) $("#mm3").css("backgroundColor", "blue");
        $("#mm1").css("backgroundColor", "yellow");
        setTimeout(function () {
          document.getElementById("m1").click();
        }, tuanhanh); //0 1 2 3
      }
    }
  });
  $("#m2").click(function () {
    //alert(k);
    const originalCards = [...may2];
    var _d_f = AI(layer0, may2);

    if (huongsai != "") {
      if (_d_f == "") {
        boluot.push("2");

        var pi1 = "";

        pi1 = an(boluot, 2, thang);
        //lkt=pi1;
        v_err_1 = [];

        console.log(may2.length + " M2 đánh" + _d_f + "---" + boluot);
        v_err_1.push(
          "M2 đánh: " +
            chuyen_bai(_d_f) +
            " *** (" +
            chuyen_bai(originalCards) +
            ")<br>"
        );
        $("#mm2").text(mm_2 + "(" + may2.length + ")");
        $("#them_vao1").prepend(v_err_1);
        if (boluot.length >= 4 && huongsai != "") {
          boluot = [];
          boluot = giaomang1(thang);
          layer0 = [];

          huongsai = [];
          hien2("");
        }
        if (thang.length == 3) {
          document.getElementById("thang").click();
        } else {
          $("#mm1").css("background-color", "transparent");
          $("#mm2").css("background-color", "transparent");
          $("#mm3").css("background-color", "transparent");
          $("#mm0").css("background-color", "transparent");
          if (pi1 == "0") $("#mm0").css("backgroundColor", "yellow");
          else if (pi1 == "1") $("#mm1").css("backgroundColor", "yellow");
          else if (pi1 == "2") $("#mm2").css("backgroundColor", "yellow");
          else if (pi1 == "3") $("#mm3").css("backgroundColor", "yellow");
          if (boluot.indexOf("0") >= 0)
            $("#mm0").css("backgroundColor", "blue");
          if (boluot.indexOf("1") >= 0)
            $("#mm1").css("backgroundColor", "blue");
          if (boluot.indexOf("2") >= 0)
            $("#mm2").css("backgroundColor", "blue");
          if (boluot.indexOf("3") >= 0)
            $("#mm3").css("backgroundColor", "blue");
          // v_err_2.push("M2 con lai:"+chuyen_bai(may2));
          if (pi1 == "0") {
            document.getElementById("btnSendMessage").disabled = false;
            document.getElementById("btnboluot").disabled = false;
          } else
            setTimeout(function () {
              if (pi1 == "9") {
                $("#btntieptuc").show();
              } else document.getElementById("m" + pi1).click();
            }, tuanhanh); //0 1 2 3
        }
      } else {
        huongsai = [];
        var s1 = giaomang(may2, _d_f);

        var ss = sapxep(s1);
        may2 = ss;
        if (may2 == "") {
          thang.push("2");
          boluot.push("2");
          huongsai.push(2);
        }
        if (_d_f != "") {
          hien(may2, "bot2");
          hien2(_d_f);
          layer0 = _d_f;
        }
        var pi1 = "";

        pi1 = an(boluot, 2, thang);
        v_err_1 = [];
        console.log(may2.length + " M2 đánh" + _d_f + "---" + boluot);
        v_err_1.push(
          "M2 đánh: " +
            chuyen_bai(_d_f) +
            " *** (" +
            chuyen_bai(originalCards) +
            ")<br>"
        );
        $("#mm2").text(mm_2 + "(" + may2.length + ")");
        $("#them_vao1").prepend(v_err_1);
        if (pi1 == "2") {
          boluot = [];
          boluot = giaomang1(thang);
          layer0 = [];

          if (thang.length == 3) {
            $("#btntieptuc").show();
          }
          //huongsai=[];
          hien2("");
        }
        if (boluot.length >= 4 && huongsai != "") {
          boluot = [];
          boluot = giaomang1(thang);
          layer0 = [];

          huongsai = [];
          hien2("");
        }

        if (pi1 == "0") {
          setTimeout(function () {
            document.getElementById("btnSendMessage").disabled = false;
            document.getElementById("btnboluot").disabled = false;
          }, 1000); //0 1 2 3
        } else {
          if (thang.length == 3) {
            document.getElementById("thang").click();
          } else {
            $("#mm1").css("background-color", "transparent");
            $("#mm2").css("background-color", "transparent");
            $("#mm3").css("background-color", "transparent");
            $("#mm0").css("background-color", "transparent");
            if (pi1 == "0") $("#mm0").css("backgroundColor", "yellow");
            else if (pi1 == "1") $("#mm1").css("backgroundColor", "yellow");
            else if (pi1 == "2") $("#mm2").css("backgroundColor", "yellow");
            else if (pi1 == "3") $("#mm3").css("backgroundColor", "yellow");
            if (boluot.indexOf("0") >= 0)
              $("#mm0").css("backgroundColor", "blue");
            if (boluot.indexOf("1") >= 0)
              $("#mm1").css("backgroundColor", "blue");
            if (boluot.indexOf("2") >= 0)
              $("#mm2").css("backgroundColor", "blue");
            if (boluot.indexOf("3") >= 0)
              $("#mm3").css("backgroundColor", "blue");
            // v_err_2.push("M2 con lai:"+chuyen_bai(may2));
            if (pi1 == "0") {
              document.getElementById("btnSendMessage").disabled = false;
            } else
              setTimeout(function () {
                if (pi1 == "9") {
                  $("#btntieptuc").show();
                } else document.getElementById("m" + pi1).click();
              }, tuanhanh); //0 1 2 3
          }
        }
      }
    } else if (boluot.indexOf("3") < 0) {
      if (_d_f != "") {
        hs = 4;
        huongsai = [];
        var s1 = giaomang(may2, _d_f);

        var ss = sapxep(s1);
        may2 = ss;
        if (may2 == "") {
          thang.push("2");
          boluot.push("2");

          huongsai.push(2);
        }
        hien(may2, "bot2");
        hien2(_d_f);
        layer0 = _d_f;
      } else {
        boluot.push("2");
      }
      v_err_1 = [];
      console.log(may2.length + " M2 đánh" + _d_f + "---" + boluot);
      v_err_1.push(
        "M2 đánh: " +
          chuyen_bai(_d_f) +
          " *** (" +
          chuyen_bai(originalCards) +
          ")<br>"
      );
      $("#mm2").text(mm_2 + "(" + may2.length + ")");
      $("#them_vao1").prepend(v_err_1);

      if (boluot.length >= 3 && huongsai == "") {
        boluot = [];
        boluot = giaomang1(thang);

        hien2("");
        layer0 = [];
      }
      if (thang.length == 3) {
        document.getElementById("thang").click();
      } else {
        $("#mm1").css("background-color", "transparent");
        $("#mm2").css("background-color", "transparent");
        $("#mm3").css("background-color", "transparent");
        $("#mm0").css("background-color", "transparent");
        if (boluot.indexOf("0") >= 0) $("#mm0").css("backgroundColor", "blue");
        if (boluot.indexOf("1") >= 0) $("#mm1").css("backgroundColor", "blue");
        if (boluot.indexOf("2") >= 0) $("#mm2").css("backgroundColor", "blue");
        if (boluot.indexOf("3") >= 0) $("#mm3").css("backgroundColor", "blue");
        $("#mm3").css("backgroundColor", "yellow");
        setTimeout(function () {
          document.getElementById("m3").click();
        }, tuanhanh); //0 1 2 3
      }
    } else if (boluot.indexOf("3") >= 0 && boluot.indexOf("0") < 0) {
      if (_d_f != "") {
        hs = 4;
        huongsai = [];
        var s1 = giaomang(may2, _d_f);

        var ss = sapxep(s1);
        may2 = ss;
        if (may2 == "") {
          thang.push("2");
          boluot.push("2");

          huongsai.push(2);
        }
        hien(may2, "bot2");
        hien2(_d_f);
        layer0 = _d_f;
      } else {
        boluot.push("2");
      }
      v_err_1 = [];
      console.log(may2.length + " M2 đánh" + _d_f + "---" + boluot);
      v_err_1.push(
        "M2 đánh: " +
          chuyen_bai(_d_f) +
          " *** (" +
          chuyen_bai(originalCards) +
          ")<br>"
      );
      $("#mm2").text(mm_2 + "(" + may2.length + ")");
      v_err_1.unshift("<hr>");
      $("#them_vao1").prepend(v_err_1);
      console.log("--------------------------------");
      if (boluot.length >= 3 && huongsai == "") {
        boluot = [];
        boluot = giaomang1(thang);

        hien2("");
        layer0 = [];
      }
      if (thang.length == 3) {
        document.getElementById("thang").click();
      } else {
        $("#mm1").css("background-color", "transparent");
        $("#mm2").css("background-color", "transparent");
        $("#mm3").css("background-color", "transparent");
        $("#mm0").css("background-color", "transparent");
        if (boluot.indexOf("0") >= 0) $("#mm0").css("backgroundColor", "blue");
        if (boluot.indexOf("1") >= 0) $("#mm1").css("backgroundColor", "blue");
        if (boluot.indexOf("2") >= 0) $("#mm2").css("backgroundColor", "blue");
        if (boluot.indexOf("3") >= 0) $("#mm3").css("backgroundColor", "blue");
        $("#mm0").css("backgroundColor", "yellow");
        if (layer0 == "") {
          document.getElementById("btnSendMessage").disabled = false;
        } else {
          document.getElementById("btnSendMessage").disabled = false;
          document.getElementById("btnboluot").disabled = false;
        }
      }
      // setTimeout(function(){document.getElementById('m0').click();}, 2000);
    } else if (
      boluot.indexOf("3") >= 0 &&
      boluot.indexOf("0") >= 0 &&
      boluot.indexOf("1") < 0
    ) {
      //0  1  2  3

      if (_d_f != "") {
        huongsai = [];
        var s1 = giaomang(may2, _d_f);

        var ss = sapxep(s1);
        may2 = ss;
        if (may2 == "") {
          thang.push("2");
          boluot.push("2");

          huongsai.push(2);
        }
        hien(may2, "bot2");
        hien2(_d_f);
        layer0 = _d_f;
      } else {
        boluot.push("2");
      }
      v_err_1 = [];
      console.log(may2.length + " M2 đánh" + _d_f + "---" + boluot);
      v_err_1.push(
        "M2 đánh: " +
          chuyen_bai(_d_f) +
          " *** (" +
          chuyen_bai(originalCards) +
          ")<br>"
      );
      $("#mm2").text(mm_2 + "(" + may2.length + ")");
      $("#them_vao1").prepend(v_err_1);

      if (boluot.length >= 3 && huongsai == "") {
        boluot = [];
        boluot = giaomang1(thang);

        hien2("");
        layer0 = [];
      }
      if (thang.length == 3) {
        document.getElementById("thang").click();
      } else {
        $("#mm1").css("background-color", "transparent");
        $("#mm2").css("background-color", "transparent");
        $("#mm3").css("background-color", "transparent");
        $("#mm0").css("background-color", "transparent");
        if (boluot.indexOf("0") >= 0) $("#mm0").css("backgroundColor", "blue");
        if (boluot.indexOf("1") >= 0) $("#mm1").css("backgroundColor", "blue");
        if (boluot.indexOf("2") >= 0) $("#mm2").css("backgroundColor", "blue");
        if (boluot.indexOf("3") >= 0) $("#mm3").css("backgroundColor", "blue");
        $("#mm1").css("backgroundColor", "yellow");
        setTimeout(function () {
          document.getElementById("m1").click();
        }, tuanhanh); //0 1 2 3
      }
    } else if (boluot.indexOf("2") < 0) {
      boluot = [];
      boluot = giaomang1(thang);

      hien2("");
      layer0 = [];
      _d_f = AI(layer0, may1); //0  1  2  3
      if (_d_f != "") {
        huongsai = [];
        var s1 = giaomang(may2, _d_f);

        var ss = sapxep(s1);
        may2 = ss;
        if (may2 == "") {
          thang.push("2");
          boluot.push("2");

          huongsai.push(2);
        }
        hien(may2, "bot2");
        hien2(_d_f);
        layer0 = _d_f;
      }
      v_err = [];
      v_err_1 = [];
      v_err_2 = [];
      console.log(may2.length + " M2 đánh" + _d_f + "---" + boluot);
      v_err.push(
        "M2:" + may2.length + "--bl:" + boluot + "--t:" + thang + "<br>"
      );
      v_err_1.push(
        "M2 đánh: " +
          chuyen_bai(_d_f) +
          " *** (" +
          chuyen_bai(originalCards) +
          ")<br>"
      );
      v_err_2.push("M2 còn lại:" + chuyen_bai(may2) + "<br>");
      $("#mm2").text(mm_2 + "(" + may2.length + ")");
      $("#them_vao").append(v_err);
      $("#them_vao1").prepend(v_err_1);
      $("#them_vao2").append(v_err_2);
      if (thang.length == 3) {
        document.getElementById("thang").click();
      } else {
        $("#mm1").css("background-color", "transparent");
        $("#mm2").css("background-color", "transparent");
        $("#mm3").css("background-color", "transparent");
        $("#mm0").css("background-color", "transparent");
        if (boluot.indexOf("0") >= 0) $("#mm0").css("backgroundColor", "blue");
        if (boluot.indexOf("1") >= 0) $("#mm1").css("backgroundColor", "blue");
        if (boluot.indexOf("2") >= 0) $("#mm2").css("backgroundColor", "blue");
        if (boluot.indexOf("3") >= 0) $("#mm3").css("backgroundColor", "blue");
        $("#mm2").css("backgroundColor", "yellow");
        //v_err_2.push("M2 con lai:"+chuyen_bai(may2));
        setTimeout(function () {
          document.getElementById("m2").click();
          //v_err_2.push("M2 con lai:"+chuyen_bai(may2)+"<br>");
        }, tuanhanh); //0 1 2 3
      }
    }
  });
  $("#m3").click(function () {
    const originalCards = [...may3];
    var _d_f = AI(layer0, may3);
    if (huongsai != "") {
      if (_d_f == "") {
        boluot.push("3");
        var pi1 = "";

        pi1 = an(boluot, 3, thang);
        //lkt=pi1;
        v_err = [];
        v_err_1 = [];
        v_err_2 = [];

        console.log(may3.length + " M3 đánh " + _d_f + "---" + boluot);
        v_err.push(
          "M3:" + may3.length + "--bl:" + boluot + "--t:" + thang + "<br>"
        );
        v_err_1.push(
          "M3 đánh: " +
            chuyen_bai(_d_f) +
            " *** (" +
            chuyen_bai(originalCards) +
            ")<br>"
        );
        v_err_2.push("M3 còn lại:" + chuyen_bai(may3) + "<br>");
        $("#mm3").text(mm_3 + "(" + may3.length + ")");
        $("#them_vao").append(v_err);
        $("#them_vao1").prepend(v_err_1);
        $("#them_vao2").append(v_err_2);

        if (boluot.length >= 4 && huongsai != "") {
          boluot = [];
          boluot = giaomang1(thang);
          layer0 = [];

          huongsai = [];
          hien2("");
        }
        if (thang.length == 3) {
          document.getElementById("thang").click();
        } else {
          $("#mm1").css("background-color", "transparent");
          $("#mm2").css("background-color", "transparent");
          $("#mm3").css("background-color", "transparent");
          $("#mm0").css("background-color", "transparent");
          if (pi1 == "0") $("#mm0").css("backgroundColor", "yellow");
          else if (pi1 == "1") $("#mm1").css("backgroundColor", "yellow");
          else if (pi1 == "2") $("#mm2").css("backgroundColor", "yellow");
          else if (pi1 == "3") $("#mm3").css("backgroundColor", "yellow");
          if (boluot.indexOf("0") >= 0)
            $("#mm0").css("backgroundColor", "blue");
          if (boluot.indexOf("1") >= 0)
            $("#mm1").css("backgroundColor", "blue");
          if (boluot.indexOf("2") >= 0)
            $("#mm2").css("backgroundColor", "blue");
          if (boluot.indexOf("3") >= 0)
            $("#mm3").css("backgroundColor", "blue");
          // v_err_2.push("M3 con lai:"+chuyen_bai(may3));
          if (pi1 == "0") {
            document.getElementById("btnSendMessage").disabled = false;
            document.getElementById("btnboluot").disabled = false;
          } else
            setTimeout(function () {
              if (pi1 == "9") {
                $("#btntieptuc").show();
                alert(1);
              } else document.getElementById("m" + pi1).click();
            }, tuanhanh); //0 1 2 3
        }
      } else {
        huongsai = [];
        var s1 = giaomang(may3, _d_f);

        var ss = sapxep(s1);
        may3 = ss;
        if (may3 == "") {
          thang.push("3");
          boluot.push("3");
          huongsai.push(3);
        }
        if (_d_f != "") {
          hien(may3, "bot3");
          hien2(_d_f);
          layer0 = _d_f;
        }
        var pi1 = "";

        pi1 = an(boluot, 3, thang);
        v_err = [];
        v_err_1 = [];
        v_err_2 = [];
        console.log(may3.length + " M3 đánh " + _d_f + "---" + boluot);
        v_err.push(
          "M3:" + may3.length + "--bl:" + boluot + "--t:" + thang + "<br>"
        );
        v_err_1.push(
          "M3 đánh: " +
            chuyen_bai(_d_f) +
            " *** (" +
            chuyen_bai(originalCards) +
            ")<br>"
        );
        v_err_2.push("M3 còn lại:" + chuyen_bai(may3) + "<br>");
        $("#mm3").text(mm_3 + "(" + may3.length + ")");
        $("#them_vao").append(v_err);
        $("#them_vao1").prepend(v_err_1);
        $("#them_vao2").append(v_err_2);
        if (pi1 == "3") {
          boluot = [];
          boluot = giaomang1(thang);
          layer0 = [];

          if (thang.length == 3) {
            $("#btntieptuc").show();
          }
          //huongsai=[];
          hien2("");
        }

        if (boluot.length >= 4 && huongsai != "") {
          boluot = [];
          boluot = giaomang1(thang);
          layer0 = [];

          huongsai = [];
          hien2("");
        }

        if (pi1 == "0") {
          setTimeout(function () {
            document.getElementById("btnSendMessage").disabled = false;
            document.getElementById("btnboluot").disabled = false;
          }, 1000); //0 1 2 3

          $("#mm1").css("background-color", "transparent");
          $("#mm2").css("background-color", "transparent");
          $("#mm3").css("background-color", "transparent");
          $("#mm0").css("background-color", "transparent");
          $("#mm0").css("backgroundColor", "yellow");
        } else {
          if (thang.length == 3) {
            document.getElementById("thang").click();
          } else {
            $("#mm1").css("background-color", "transparent");
            $("#mm2").css("background-color", "transparent");
            $("#mm3").css("background-color", "transparent");
            $("#mm0").css("background-color", "transparent");
            if (pi1 == "0") $("#mm0").css("backgroundColor", "yellow");
            else if (pi1 == "1") $("#mm1").css("backgroundColor", "yellow");
            else if (pi1 == "2") $("#mm2").css("backgroundColor", "yellow");
            else if (pi1 == "3") $("#mm3").css("backgroundColor", "yellow");
            if (boluot.indexOf("0") >= 0)
              $("#mm0").css("backgroundColor", "blue");
            if (boluot.indexOf("1") >= 0)
              $("#mm1").css("backgroundColor", "blue");
            if (boluot.indexOf("2") >= 0)
              $("#mm2").css("backgroundColor", "blue");
            if (boluot.indexOf("3") >= 0)
              $("#mm3").css("backgroundColor", "blue");
            //v_err_2.push("M3 con lai:"+chuyen_bai(may3)+"<br>");
            if (pi1 == "0") {
              document.getElementById("btnSendMessage").disabled = false;
            } else
              setTimeout(function () {
                if (pi1 == "9") {
                  $("#btntieptuc").show();
                } else document.getElementById("m" + pi1).click();
              }, tuanhanh); //0 1 2 3
          }
        }
      }
    } else if (boluot.indexOf("0") < 0) {
      if (_d_f != "") {
        huongsai = [];
        var s1 = giaomang(may3, _d_f);

        var ss = sapxep(s1);
        may3 = ss;
        if (may3 == "") {
          thang.push("3");
          boluot.push("3");
          huongsai.push(3);
        }
        hien(may3, "bot3");
        hien2(_d_f);
        layer0 = _d_f;
      } else {
        boluot.push("3");
      }
      v_err = [];
      v_err_1 = [];
      v_err_2 = [];
      console.log(may3.length + " M3 đánh " + _d_f + "---" + boluot);
      v_err.push(
        "M3:" + may3.length + "--bl:" + boluot + "--t:" + thang + "<br>"
      );
      v_err_1.push(
        "M3 đánh: " +
          chuyen_bai(_d_f) +
          " *** (" +
          chuyen_bai(originalCards) +
          ")<br>"
      );
      v_err_2.push("M3 còn lại:" + chuyen_bai(may3) + "<br>");
      $("#mm3").text(mm_3 + "(" + may3.length + ")");

      v_err.unshift("<hr>");
      v_err_1.unshift("<hr>");
      v_err_2.unshift("<hr>");
      $("#them_vao").append(v_err);
      $("#them_vao1").prepend(v_err_1);
      $("#them_vao2").append(v_err_2);
      console.log("--------------------------------");
      if (boluot.length >= 3 && huongsai == "") {
        boluot = [];
        boluot = giaomang1(thang);

        hien2("");
        layer0 = [];
      }

      // setTimeout(function(){document.getElementById('m1').click();}, 2000); //0 1 2 3
      if (thang.length == 3) {
        document.getElementById("thang").click();
      } else {
        $("#mm1").css("background-color", "transparent");
        $("#mm2").css("background-color", "transparent");
        $("#mm3").css("background-color", "transparent");
        $("#mm0").css("background-color", "transparent");
        if (boluot.indexOf("0") >= 0) $("#mm0").css("backgroundColor", "blue");
        if (boluot.indexOf("1") >= 0) $("#mm1").css("backgroundColor", "blue");
        if (boluot.indexOf("2") >= 0) $("#mm2").css("backgroundColor", "blue");
        if (boluot.indexOf("3") >= 0) $("#mm3").css("backgroundColor", "blue");
        $("#mm0").css("backgroundColor", "yellow");
        //v_err_2.push("M3 con lai:"+chuyen_bai(may3));
        if (layer0 == "") {
          document.getElementById("btnSendMessage").disabled = false;
        } else {
          document.getElementById("btnSendMessage").disabled = false;
          document.getElementById("btnboluot").disabled = false;
        }
      }

      // setTimeout(function(){document.getElementById('m0').click();}, 2000); //0 1 2 3
    } else if (boluot.indexOf("0") >= 0 && boluot.indexOf("1") < 0) {
      if (_d_f != "") {
        huongsai = [];
        var s1 = giaomang(may3, _d_f);

        var ss = sapxep(s1);
        may3 = ss;
        if (may3 == "") {
          thang.push("3");
          boluot.push("3");

          huongsai.push(3);
        }

        hien(may3, "bot3");
        hien2(_d_f);
        layer0 = _d_f;
      } else {
        boluot.push("3");
      }
      v_err = [];
      v_err_1 = [];
      v_err_2 = [];
      console.log(may3.length + " M3 đánh " + _d_f + "---" + boluot);
      v_err.push(
        "M3:" + may3.length + "--bl:" + boluot + "--t:" + thang + "<br>"
      );
      v_err_1.push(
        "M3 đánh: " +
          chuyen_bai(_d_f) +
          " *** (" +
          chuyen_bai(originalCards) +
          ")<br>"
      );
      v_err_2.push("M3 còn lại:" + chuyen_bai(may3) + "<br>");
      $("#mm3").text(mm_3 + "(" + may3.length + ")");
      $("#them_vao").append(v_err);
      $("#them_vao1").prepend(v_err_1);
      $("#them_vao2").append(v_err_2);

      if (boluot.length >= 3 && huongsai == "") {
        boluot = [];
        boluot = giaomang1(thang);

        hien2("");
        layer0 = [];
      }
      if (thang.length == 3) {
        document.getElementById("thang").click();
      } else {
        $("#mm1").css("background-color", "transparent");
        $("#mm2").css("background-color", "transparent");
        $("#mm3").css("background-color", "transparent");
        $("#mm0").css("background-color", "transparent");
        if (boluot.indexOf("0") >= 0) $("#mm0").css("backgroundColor", "blue");
        if (boluot.indexOf("1") >= 0) $("#mm1").css("backgroundColor", "blue");
        if (boluot.indexOf("2") >= 0) $("#mm2").css("backgroundColor", "blue");
        if (boluot.indexOf("3") >= 0) $("#mm3").css("backgroundColor", "blue");
        $("#mm1").css("backgroundColor", "yellow");
        //v_err_2.push("M3 con lai:"+chuyen_bai(may3));
        setTimeout(function () {
          document.getElementById("m1").click();
          //v_err_2.push("M3 con lai:"+chuyen_bai(may3)+"<br>");
        }, tuanhanh); //0 1 2 3
      }
    } else if (
      boluot.indexOf("0") >= 0 &&
      boluot.indexOf("1") >= 0 &&
      boluot.indexOf("2") < 0
    ) {
      //0  1  2  3

      if (_d_f != "") {
        huongsai = [];
        var s1 = giaomang(may3, _d_f);

        var ss = sapxep(s1);
        may3 = ss;
        if (may3 == "") {
          thang.push("3");
          boluot.push("3");

          huongsai.push(3);
        }

        hien(may3, "bot3");
        hien2(_d_f);
        layer0 = _d_f;
      } else {
        boluot.push("3");
      }
      v_err = [];
      v_err_1 = [];
      v_err_2 = [];
      console.log(may3.length + " M3 đánh " + _d_f + "---" + boluot);
      v_err.push(
        "M3:" + may3.length + "--bl:" + boluot + "--t:" + thang + "<br>"
      );
      v_err_1.push(
        "M3 đánh: " +
          chuyen_bai(_d_f) +
          " *** (" +
          chuyen_bai(originalCards) +
          ")<br>"
      );
      v_err_2.push("M3 còn lại:" + chuyen_bai(may3) + "<br>");
      $("#mm3").text(mm_3 + "(" + may3.length + ")");
      $("#them_vao").append(v_err);
      $("#them_vao1").prepend(v_err_1);
      $("#them_vao2").append(v_err_2);

      if (boluot.length >= 3 && huongsai == "") {
        boluot = [];
        boluot = giaomang1(thang);

        hien2("");
        layer0 = [];
      }
      if (thang.length == 3) {
        document.getElementById("thang").click();
      } else {
        $("#mm1").css("background-color", "transparent");
        $("#mm2").css("background-color", "transparent");
        $("#mm3").css("background-color", "transparent");
        $("#mm0").css("background-color", "transparent");
        if (boluot.indexOf("0") >= 0) $("#mm0").css("backgroundColor", "blue");
        if (boluot.indexOf("1") >= 0) $("#mm1").css("backgroundColor", "blue");
        if (boluot.indexOf("2") >= 0) $("#mm2").css("backgroundColor", "blue");
        if (boluot.indexOf("3") >= 0) $("#mm3").css("backgroundColor", "blue");
        $("#mm2").css("backgroundColor", "yellow");
        //v_err_2.push("M3 con lai:"+chuyen_bai(may3)+"<br>");
        setTimeout(function () {
          document.getElementById("m2").click();
        }, tuanhanh); //0 1 2 3
      }
    } else if (boluot.indexOf("3") < 0) {
      boluot = [];
      boluot = giaomang1(thang);

      hien2("");
      layer0 = [];
      _d_f = AI(layer0, may3); //0  1  2  3
      if (_d_f != "") {
        huongsai = [];
        var s1 = giaomang(may3, _d_f);

        var ss = sapxep(s1);
        may3 = ss;
        if (may3 == "") {
          thang.push("3");
          boluot.push("3");

          huongsai.push(3);
        }

        hien(may3, "bot3");
        hien2(_d_f);
        layer0 = _d_f;
        v_err = [];
        v_err_1 = [];
        v_err_2 = [];
        console.log(may3.length + " M3 đánh " + _d_f + "---" + boluot);
        v_err.push(
          "M3:" + may3.length + "--bl:" + boluot + "--t:" + thang + "<br>"
        );
        v_err_1.push(
          "M3 đánh: " +
            chuyen_bai(_d_f) +
            " *** (" +
            chuyen_bai(originalCards) +
            ")<br>"
        );
        v_err_2.push("M3 còn lại:" + chuyen_bai(may3) + "<br>");
        $("#mm3").text(mm_3 + "(" + may3.length + ")");
        $("#them_vao").append(v_err);
        $("#them_vao1").prepend(v_err_1);
        $("#them_vao2").append(v_err_2);
      }
      if (thang.length == 3) {
        document.getElementById("thang").click();
      } else {
        $("#mm1").css("background-color", "transparent");
        $("#mm2").css("background-color", "transparent");
        $("#mm3").css("background-color", "transparent");
        $("#mm0").css("background-color", "transparent");
        if (boluot.indexOf("0") >= 0) $("#mm0").css("backgroundColor", "blue");
        if (boluot.indexOf("1") >= 0) $("#mm1").css("backgroundColor", "blue");
        if (boluot.indexOf("2") >= 0) $("#mm2").css("backgroundColor", "blue");
        if (boluot.indexOf("3") >= 0) $("#mm3").css("backgroundColor", "blue");
        $("#mm3").css("backgroundColor", "yellow");
        //v_err_2.push("M3 con lai:"+chuyen_bai(may3)+"<br>");
        setTimeout(function () {
          document.getElementById("m3").click();
        }, 2000); //0 1 2 3
      }
    }
  });
});
