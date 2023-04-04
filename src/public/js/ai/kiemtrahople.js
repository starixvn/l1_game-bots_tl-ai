function ktra_4_heo(a) {
  return a.filter((card) => card.includes("anh/16"));
}

function an(boluot, stt, thang) {
  var t = "";
  if (stt == 0) {
    if (boluot.indexOf("1") < 0) {
      t = "1";
    } else if (boluot.indexOf("1") >= 0 && boluot.indexOf("2") < 0) {
      t = "2";
    } else if (
      boluot.indexOf("1") >= 0 &&
      boluot.indexOf("2") >= 0 &&
      boluot.indexOf("3") < 0
    ) {
      t = "3";
    } else if (
      boluot.indexOf("1") >= 0 &&
      boluot.indexOf("2") >= 0 &&
      boluot.indexOf("3") >= 0 &&
      boluot.indexOf("0") < 0
    ) {
      t = "0"; //hs(thang);
    } else if (
      boluot.indexOf("0") >= 0 &&
      boluot.indexOf("1") >= 0 &&
      boluot.indexOf("2") >= 0 &&
      boluot.indexOf("3") < 0
    ) {
      t = "3";
    } else if (
      boluot.indexOf("0") >= 0 &&
      boluot.indexOf("1") >= 0 &&
      boluot.indexOf("3") >= 0 &&
      boluot.indexOf("2") < 0
    ) {
      t = "2";
    } else if (
      boluot.indexOf("0") >= 0 &&
      boluot.indexOf("3") >= 0 &&
      boluot.indexOf("2") >= 0 &&
      boluot.indexOf("1") < 0
    ) {
      t = "1";
    } else if (
      boluot.indexOf("3") >= 0 &&
      boluot.indexOf("1") >= 0 &&
      boluot.indexOf("0") >= 0 &&
      boluot.indexOf("2") >= 0
    ) {
      t = "9";
      if (thang.length == 1) {
        if (thang[0] == "3") {
          t = "0";
        } else if (thang[0] == "0") {
          t = "1";
        } else if (thang[0] == "1") {
          t = "2";
        } else if (thang[0] == "2") {
          t = "3";
        }
      } else if (thang.length == 2) {
        var b1 = thang[0],
          b2 = thang[1];

        if (b1 == "0" && b2 == "1") {
          t = "2";
        } else if (b1 == "0" && b2 == "2") {
          t = "3";
        } else if (b1 == "0" && b2 == "3") {
          t = "1";
        } else if (b1 == "1" && b2 == "0") {
          t = "2";
        } else if (b1 == "1" && b2 == "2") {
          t = "3";
        } else if (b1 == "1" && b2 == "3") {
          t = "0";
        } else if (b1 == "2" && b2 == "0") {
          t = "1";
        } else if (b1 == "2" && b2 == "1") {
          t = "3";
        } else if (b1 == "2" && b2 == "3") {
          t = "0";
        } else if (b1 == "3" && b2 == "0") {
          t = "1";
        } else if (b1 == "3" && b2 == "1") {
          t = "2";
        } else if (b1 == "3" && b2 == "2") {
          t = "0";
        }
      } //0  1  2  3
    } else if (
      boluot.indexOf("3") >= 0 &&
      boluot.indexOf("0") < 0 &&
      boluot.indexOf("1") < 0 &&
      boluot.indexOf("2") < 0
    ) {
      t = "1";
    } else if (
      boluot.indexOf("3") >= 0 &&
      boluot.indexOf("1") >= 0 &&
      boluot.indexOf("0") < 0 &&
      boluot.indexOf("2") < 0
    ) {
      t = "1";
    } else if (
      boluot.indexOf("3") >= 0 &&
      boluot.indexOf("2") >= 0 &&
      boluot.indexOf("1") < 0 &&
      boluot.indexOf("1") < 0
    ) {
      t = "1";
    } else if (
      boluot.indexOf("3") >= 0 &&
      boluot.indexOf("0") >= 0 &&
      boluot.indexOf("1") < 0 &&
      boluot.indexOf("2") < 0
    ) {
      t = "2";
    }
  } else if (stt == 1) {
    if (boluot.indexOf("2") < 0) {
      t = "2";
    } else if (boluot.indexOf("2") >= 0 && boluot.indexOf("3") < 0) {
      t = "3";
    } else if (
      boluot.indexOf("2") >= 0 &&
      boluot.indexOf("3") >= 0 &&
      boluot.indexOf("0") < 0
    ) {
      t = "0";
    } else if (
      boluot.indexOf("2") >= 0 &&
      boluot.indexOf("3") >= 0 &&
      boluot.indexOf("0") >= 0 &&
      boluot.indexOf("1") < 0
    ) {
      t = "1"; //hs(thang);
    } else if (
      boluot.indexOf("1") >= 0 &&
      boluot.indexOf("0") >= 0 &&
      boluot.indexOf("3") >= 0 &&
      boluot.indexOf("2") < 0
    ) {
      t = "2";
    } else if (
      boluot.indexOf("1") >= 0 &&
      boluot.indexOf("2") >= 0 &&
      boluot.indexOf("3") >= 0 &&
      boluot.indexOf("0") < 0
    ) {
      t = "0";
    } else if (
      boluot.indexOf("1") >= 0 &&
      boluot.indexOf("2") >= 0 &&
      boluot.indexOf("0") >= 0 &&
      boluot.indexOf("3") < 0
    ) {
      t = "3";
    } else if (
      boluot.indexOf("3") >= 0 &&
      boluot.indexOf("1") >= 0 &&
      boluot.indexOf("0") >= 0 &&
      boluot.indexOf("2") >= 0
    ) {
      t = "9";
      if (thang.length == 1) {
        if (thang[0] == "3") {
          t = "0";
        } else if (thang[0] == "0") {
          t = "1";
        } else if (thang[0] == "1") {
          t = "2";
        } else if (thang[0] == "2") {
          t = "3";
        }
      } else if (thang.length == 2) {
        var b1 = thang[0],
          b2 = thang[1];

        if (b1 == "0" && b2 == "1") {
          t = "2";
        } else if (b1 == "0" && b2 == "2") {
          t = "3";
        } else if (b1 == "0" && b2 == "3") {
          t = "1";
        } else if (b1 == "1" && b2 == "0") {
          t = "2";
        } else if (b1 == "1" && b2 == "2") {
          t = "3";
        } else if (b1 == "1" && b2 == "3") {
          t = "0";
        } else if (b1 == "2" && b2 == "0") {
          t = "1";
        } else if (b1 == "2" && b2 == "1") {
          t = "3";
        } else if (b1 == "2" && b2 == "3") {
          t = "0";
        } else if (b1 == "3" && b2 == "0") {
          t = "1";
        } else if (b1 == "3" && b2 == "1") {
          t = "2";
        } else if (b1 == "3" && b2 == "2") {
          t = "0";
        }
      } //0 1 2 3
    } else if (
      boluot.indexOf("0") >= 0 &&
      boluot.indexOf("1") < 0 &&
      boluot.indexOf("2") < 0 &&
      boluot.indexOf("3") < 0
    ) {
      t = "2";
    } else if (
      boluot.indexOf("0") >= 0 &&
      boluot.indexOf("1") >= 0 &&
      boluot.indexOf("2") < 0 &&
      boluot.indexOf("3") < 0
    ) {
      t = "2";
    } else if (
      boluot.indexOf("0") >= 0 &&
      boluot.indexOf("1") < 0 &&
      boluot.indexOf("2") < 0 &&
      boluot.indexOf("3") >= 0
    ) {
      t = "2";
    } else if (
      boluot.indexOf("0") >= 0 &&
      boluot.indexOf("1") < 0 &&
      boluot.indexOf("2") >= 0 &&
      boluot.indexOf("3") < 0
    ) {
      t = "3";
    }
  } else if (stt == 2) {
    //0  1  2  3
    if (boluot.indexOf("3") < 0) {
      t = "3";
    } else if (boluot.indexOf("3") >= 0 && boluot.indexOf("0") < 0) {
      t = "0";
    } else if (
      boluot.indexOf("3") >= 0 &&
      boluot.indexOf("0") >= 0 &&
      boluot.indexOf("1") < 0
    ) {
      t = "1";
    } else if (
      boluot.indexOf("3") >= 0 &&
      boluot.indexOf("0") >= 0 &&
      boluot.indexOf("1") >= 0 &&
      boluot.indexOf("2") < 0
    ) {
      t = "2"; //	t=hs(thang);
    } else if (
      boluot.indexOf("2") >= 0 &&
      boluot.indexOf("1") >= 0 &&
      boluot.indexOf("2") >= 0 &&
      boluot.indexOf("3") < 0
    ) {
      t = "3";
    } else if (
      boluot.indexOf("0") >= 0 &&
      boluot.indexOf("1") >= 0 &&
      boluot.indexOf("3") >= 0 &&
      boluot.indexOf("2") < 0
    ) {
      t = "2";
    } else if (
      boluot.indexOf("0") >= 0 &&
      boluot.indexOf("3") >= 0 &&
      boluot.indexOf("2") >= 0 &&
      boluot.indexOf("1") < 0
    ) {
      t = "1";
    } else if (
      boluot.indexOf("3") >= 0 &&
      boluot.indexOf("1") >= 0 &&
      boluot.indexOf("0") >= 0 &&
      boluot.indexOf("2") >= 0
    ) {
      t = "9";
      if (thang.length == 1) {
        if (thang[0] == "3") {
          t = "0";
        } else if (thang[0] == "0") {
          t = "1";
        } else if (thang[0] == "1") {
          t = "2";
        } else if (thang[0] == "2") {
          t = "3";
        }
      } else if (thang.length == 2) {
        var b1 = thang[0],
          b2 = thang[1];

        if (b1 == "0" && b2 == "1") {
          t = "2";
        } else if (b1 == "0" && b2 == "2") {
          t = "3";
        } else if (b1 == "0" && b2 == "3") {
          t = "1";
        } else if (b1 == "1" && b2 == "0") {
          t = "2";
        } else if (b1 == "1" && b2 == "2") {
          t = "3";
        } else if (b1 == "1" && b2 == "3") {
          t = "0";
        } else if (b1 == "2" && b2 == "0") {
          t = "1";
        } else if (b1 == "2" && b2 == "1") {
          t = "3";
        } else if (b1 == "2" && b2 == "3") {
          t = "0";
        } else if (b1 == "3" && b2 == "0") {
          t = "1";
        } else if (b1 == "3" && b2 == "1") {
          t = "2";
        } else if (b1 == "3" && b2 == "2") {
          t = "0";
        }
      } //0  1  2  3
    } else if (
      boluot.indexOf("1") >= 0 &&
      boluot.indexOf("2") < 0 &&
      boluot.indexOf("3") < 0 &&
      boluot.indexOf("0") < 0
    ) {
      t = "3";
    } else if (
      boluot.indexOf("1") >= 0 &&
      boluot.indexOf("0") >= 0 &&
      boluot.indexOf("2") < 0 &&
      boluot.indexOf("3") < 0
    ) {
      t = "3";
    } else if (
      boluot.indexOf("1") >= 0 &&
      boluot.indexOf("2") >= 0 &&
      boluot.indexOf("3") < 0 &&
      boluot.indexOf("0") < 0
    ) {
      t = "3";
    } else if (
      boluot.indexOf("1") >= 0 &&
      boluot.indexOf("2") < 0 &&
      boluot.indexOf("3") >= 0 &&
      boluot.indexOf("0") < 0
    ) {
      t = "0";
    }
  } else if (stt == 3) {
    if (boluot.indexOf("0") < 0) {
      t = "0";
    } else if (boluot.indexOf("0") >= 0 && boluot.indexOf("1") < 0) {
      t = "1";
    } else if (
      boluot.indexOf("0") >= 0 &&
      boluot.indexOf("1") >= 0 &&
      boluot.indexOf("2") < 0
    ) {
      t = "2";
    } else if (
      boluot.indexOf("0") >= 0 &&
      boluot.indexOf("1") >= 0 &&
      boluot.indexOf("2") >= 0 &&
      boluot.indexOf("3") < 0
    ) {
      t = "3"; //hs(thang);
    } else if (
      boluot.indexOf("3") >= 0 &&
      boluot.indexOf("1") >= 0 &&
      boluot.indexOf("2") >= 0 &&
      boluot.indexOf("0") < 0
    ) {
      t = "0";
    } else if (
      boluot.indexOf("3") >= 0 &&
      boluot.indexOf("0") >= 0 &&
      boluot.indexOf("2") >= 0 &&
      boluot.indexOf("1") < 0
    ) {
      t = "1";
    } else if (
      boluot.indexOf("3") >= 0 &&
      boluot.indexOf("1") >= 0 &&
      boluot.indexOf("0") >= 0 &&
      boluot.indexOf("2") < 0
    ) {
      t = "2";
    } else if (
      boluot.indexOf("3") >= 0 &&
      boluot.indexOf("1") >= 0 &&
      boluot.indexOf("0") >= 0 &&
      boluot.indexOf("2") >= 0
    ) {
      t = "9";
      if (thang.length == 1) {
        if (thang[0] == "3") {
          t = "0";
        } else if (thang[0] == "0") {
          t = "1";
        } else if (thang[0] == "1") {
          t = "2";
        } else if (thang[0] == "2") {
          t = "3";
        }
      } else if (thang.length == 2) {
        var b1 = thang[0],
          b2 = thang[1];

        if (b1 == "0" && b2 == "1") {
          t = "2";
        } else if (b1 == "0" && b2 == "2") {
          t = "3";
        } else if (b1 == "0" && b2 == "3") {
          t = "1";
        } else if (b1 == "1" && b2 == "0") {
          t = "2";
        } else if (b1 == "1" && b2 == "2") {
          t = "3";
        } else if (b1 == "1" && b2 == "3") {
          t = "0";
        } else if (b1 == "2" && b2 == "0") {
          t = "1";
        } else if (b1 == "2" && b2 == "1") {
          t = "3";
        } else if (b1 == "2" && b2 == "3") {
          t = "0";
        } else if (b1 == "3" && b2 == "0") {
          t = "1";
        } else if (b1 == "3" && b2 == "1") {
          t = "2";
        } else if (b1 == "3" && b2 == "2") {
          t = "0";
        }
      } //0 1 2 3
    } else if (
      boluot.indexOf("2") >= 0 &&
      boluot.indexOf("1") < 0 &&
      boluot.indexOf("3") < 0 &&
      boluot.indexOf("0") < 0
    ) {
      t = "0";
    } else if (
      boluot.indexOf("2") >= 0 &&
      boluot.indexOf("3") >= 0 &&
      boluot.indexOf("0") < 0 &&
      boluot.indexOf("1") < 0
    ) {
      t = "0";
    } else if (
      boluot.indexOf("2") >= 0 &&
      boluot.indexOf("1") >= 0 &&
      boluot.indexOf("3") < 0 &&
      boluot.indexOf("0") < 0
    ) {
      t = "0";
    } else if (
      boluot.indexOf("2") >= 0 &&
      boluot.indexOf("0") >= 0 &&
      boluot.indexOf("1") < 0 &&
      boluot.indexOf("3") < 0
    ) {
      t = "1";
    }
  }
  return t;
}

function hs1(boluot) {
  var t = "";
  if (
    boluot.indexOf("0") >= 0 &&
    boluot.indexOf("1") >= 0 &&
    boluot.indexOf("2") >= 0 &&
    boluot.indexOf("3") < 0
  ) {
    t = "3";
  } else if (
    boluot.indexOf("0") >= 0 &&
    boluot.indexOf("1") >= 0 &&
    boluot.indexOf("3") >= 0 &&
    boluot.indexOf("2") < 0
  ) {
    t = "2";
  } else if (
    boluot.indexOf("0") >= 0 &&
    boluot.indexOf("3") >= 0 &&
    boluot.indexOf("2") >= 0 &&
    boluot.indexOf("1") < 0
  ) {
    t = "1";
  } else if (
    boluot.indexOf("3") >= 0 &&
    boluot.indexOf("1") >= 0 &&
    boluot.indexOf("2") >= 0 &&
    boluot.indexOf("0") < 0
  ) {
    t = "0";
  }
  return t.toString();
}
function loc_anh(a) {
  var b = [];
  var k = "";
  k = a[Math.floor(Math.random() * a.length)];
  b.push(k);
  for (var i = 0; i < 12; ) {
    if (b.indexOf(k) < 0) {
      b.push(k);
      i++;
    } else {
      k = a[Math.floor(Math.random() * a.length)];
    }
  }

  return b;
}

function hs(thang) {
  var t = "";
  if (thang.length == 1) {
    if (thang[0] == "3") {
      t = "0";
    } else if (thang[0] == "0") {
      t = "1";
    } else if (thang[0] == "1") {
      t = "2";
    } else if (thang[0] == "2") {
      t = "3";
    }
  } else if (thang.length == 2) {
    var b1 = thang[0],
      b2 = thang[1];

    if (b1 == "0" && b2 == "1") {
      t = "2";
    } else if (b1 == "0" && b2 == "2") {
      t = "3";
    } else if (b1 == "0" && b2 == "3") {
      t = "1";
    } else if (b1 == "1" && b2 == "0") {
      t = "2";
    } else if (b1 == "1" && b2 == "2") {
      t = "3";
    } else if (b1 == "1" && b2 == "3") {
      t = "0";
    } else if (b1 == "2" && b2 == "0") {
      t = "1";
    } else if (b1 == "2" && b2 == "1") {
      t = "3";
    } else if (b1 == "2" && b2 == "3") {
      t = "0";
    } else if (b1 == "3" && b2 == "0") {
      t = "1";
    } else if (b1 == "3" && b2 == "1") {
      t = "2";
    } else if (b1 == "3" && b2 == "2") {
      t = "0";
    }
  }
  //document.getElementById("demo").innerHTML = t;
  return t.toString();
}
function sapxep(a) {
  var ppp = [];
  var tg;

  var i;
  var j;
  var j1, j2, j3, i1, i2, i3, t, t1, q1, q2;
  for (i = 0; i < a.length; i++) {
    for (j = i + 1; j < a.length; j++) {
      i1 = a[j].substring(4, 7); //16a
      i2 = i1.substring(0, 2);
      i3 = i1.substring(2);
      //////////////////////
      j1 = a[i].substring(4, 7); //16a
      j2 = j1.substring(0, 2);
      j3 = j1.substring(2);
      // alert(j2);

      if (i3 == "a") {
        t = 0.1;
      } else if (i3 == "b") {
        t = 0.2;
      } else if (i3 == "c") {
        //
        t = 0.3;
      } else if (i3 == "d") {
        t = 0.4;
      }
      //////////
      if (j3 == "a") {
        t1 = 0.1;
      } else if (j3 == "b") {
        t1 = 0.2;
      } else if (j3 == "c") {
        t1 = 0.3;
      } else if (j3 == "d") {
        t1 = 0.4;
      }

      q1 = parseInt(i2) + t;
      q2 = parseInt(j2) + t1;
      //alert(q1);
      if (q1 < q2) {
        //<------
        tg = a[i];
        a[i] = a[j];
        a[j] = tg;
      }
    }
  }
  for (j = 0; j < a.length; j++) {
    ppp.push(a[j]);
  }
  return ppp;
}

function ktra_h(a) {
  var kq = "noheo";
  if (a != "") {
    const cardValue = Card.getValue(a[0]);
    if (cardValue == card[2] && a.length == 1) {
      kq = rank.heo;
    } else if (cardValue == card[2] && a.length == 2) {
      kq = rank.doiheo;
    } else if (cardValue == card[2] && a.length == 3) {
      kq = rank.baheo;
    } else kq = "noheo";
  } else kq = "noheo";
  return kq;
}

function ktra_ng_danh(a, b) {
  a = hoanvi_all(a);
  b = hoanvi_all(b);
  var _k_q = rank.khonghople,
    tt3 = "",
    ttt3 = "";
  var a1 = a[a.length - 1].substring(4, 7); //16a
  var a2 = a1.substring(0, 2);
  var a3 = a1.substring(2);
  if (a3 == "a") {
    tt3 = 0.1;
  } else if (a3 == "b") {
    tt3 = 0.2;
  } else if (a3 == "c") {
    tt3 = 0.3;
  } else if (a3 == "d") {
    tt3 = 0.4;
  }
  var b1 = b[b.length - 1].substring(4, 7); //16a
  var b2 = b1.substring(0, 2);
  var b3 = b1.substring(2);
  //alert(kiemtrahople(b) + ktra_h(a));
  if (b3 == "a") {
    ttt3 = 0.1;
  } else if (b3 == "b") {
    ttt3 = 0.2;
  } else if (b3 == "c") {
    ttt3 = 0.3;
  } else if (b3 == "d") {
    ttt3 = 0.4;
  }
  if (ktra_h(a) == rank.heo && kiemtrahople(b) == rank.badoithong) {
    _k_q = rank.hople;
  } else if (ktra_h(a) == rank.heo && kiemtrahople(b) == rank.bondoithong) {
    _k_q = rank.hople;
  } else if (ktra_h(a) == rank.heo && kiemtrahople(b) == rank.tuqui) {
    _k_q = rank.hople;
  } else if (ktra_h(a) == rank.doiheo && kiemtrahople(b) == rank.tuqui) {
    _k_q = rank.hople;
  } else if (ktra_h(a) == rank.doiheo && kiemtrahople(b) == rank.bondoithong) {
    _k_q = rank.hople;
  } else if (ktra_h(a) == rank.baheo && kiemtrahople(b) == rank.bondoithong) {
    _k_q = rank.hople;
  } else if (
    kiemtrahople(a) == rank.badoithong &&
    kiemtrahople(b) == rank.tuqui
  ) {
    _k_q = rank.hople;
  } else if (
    kiemtrahople(a) == rank.badoithong &&
    kiemtrahople(b) == rank.bondoithong
  ) {
    _k_q = rank.hople;
  } else if (
    kiemtrahople(a) == rank.tuqui &&
    kiemtrahople(b) == rank.bondoithong
  ) {
    _k_q = rank.hople;
  } else if (b2 > a2 && b.length == a.length) {
    _k_q = rank.hople;
  } else if (b2 == a2 && b.length == a.length) {
    if (ttt3 > tt3) _k_q = rank.hople;
    else _k_q = rank.khonghople;
  } else if (b2 < a2 && b.length == a.length) {
    _k_q = rank.khonghople;
  }

  return _k_q;
}

function chuyenchuoi(a) {
  g = [];

  for (var i = 0; i < a.length; i++) {
    g.push(Card.getValue(a[i])); //substring cat chuoi
  }
  return g;
}

function sortNumberAsc(a, b) {
  return a - b;
}

function hien(mr, id) {
  let k = "";
  //var k1=100;
  let k2 = 0;
  let k3 = 0;
  a1 = [];

  a1 = mr;
  //a1=loc_anh(img);
  for (let j = 0; j <= a1.length - 1; j++) {
    /////////anh len xuong

    k2 += 20;
    k3 = 100;
    ////////

    k +=
      "<img class='image animation' id='" +
      j +
      "' src='" +
      a1[j] +
      "'  value='" +
      a1[j] +
      "' style='position:absolute; width: 73;  left: " +
      k2 +
      "; top: " +
      k3 +
      ";height: 100;'></img>";
  }
  //  console.log(a1);
  $(`#${id}`).html(k);
}
function sound(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);
  this.play = function () {
    this.sound.play();
  };
  this.stop = function () {
    this.sound.pause();
  };
}
function hien2(a) {
  var k2 = 0;
  var k3 = 0;
  var html = "";
  var a1 = [];
  a1 = a;

  for (var j = 0; j < a1.length; j++) {
    k2 += 20;
    k3 = 100;
    html +=
      "<img  src='" +
      a1[j] +
      "' value='" +
      a1[j] +
      "'  style='position:absolute;  width: 100;height: 140; left: " +
      k2 +
      "; top: " +
      k3 +
      ";'></img>";
  }
  var k = $("#listMessages").val();
  $("#history2").html($("#listMessages").html());

  $("#listMessages").html("");

  $("#listMessages").html(html);
  if (a1.length == 1 || a1.length == 2 || a1.length == 3) {
    if (
      a1[0] == "anh/16a.png" ||
      a1[0] == "anh/16b.png" ||
      a1[0] == "anh/16c.png" ||
      a1[0] == "anh/16d.png"
    ) {
      $("#tai_truoc6").trigger("play");
    } else if (a.length == 2 && k.length == 2) {
      if (Card.isA(a[0]) && Card.isA(k[0])) {
        var r = [1, 2, 3][Math.floor(Math.random() * 3)];
        if (r == 1) {
          $("#tai_truoc3").trigger("play");
        } else if (r == 2) {
          $("#tai_truoc5").trigger("play");
        } else if (r == 3) {
          $("#tai_truoc4").trigger("play");
        }
      }
    } else if (a.length == 3 && k.length == 3) {
      if (Card.isA(a[a.length - 1]) && Card.isA(k[k.length - 1])) {
        var r = [1, 2, 3][Math.floor(Math.random() * 3)];
        if (r == 1) {
          $("#tai_truoc3").trigger("play");
        } else if (r == 2) {
          $("#tai_truoc5").trigger("play");
        } else if (r == 3) {
          $("#tai_truoc4").trigger("play");
        }
      }
    } else {
      $("#tai_truoc9").trigger("play");
    }
  } else if (a1.length >= 6) {
    if (k.length >= 6) {
      var r = [1, 2][Math.floor(Math.random() * 2)];
      if (r == 1) {
        $("#tai_truoc3").trigger("play");
      } else {
        $("#tai_truoc2").trigger("play");
      }
    } else {
      $("#tai_truoc2").trigger("play");
    }
  } else if (
    a1.length == 4 &&
    k.length == 4 &&
    Card.getValue(a1[0]) != Card.getValue(a1[1])
  ) {
    if (
      Card.getValue(a1[a1.length - 1]) >= card.K &&
      Card.getValue(k[a1.length - 1]) >= card[10]
    ) {
      var r = [1, 2, 3][Math.floor(Math.random() * 3)];
      if (r == 1) {
        $("#tai_truoc3").trigger("play");
      } else if (r == 2) {
        $("#tai_truoc5").trigger("play");
      } else if (r == 3) {
        $("#tai_truoc4").trigger("play");
      }
    } else if (Card.getValue(a1[0]) == Card.getValue(a1[1])) {
      $("#tai_truoc2").trigger("play");
    } else {
      $("#tai_truoc9").trigger("play");
    }
  } else if (a1.length == 5 && k.length == 5) {
    if (
      Card.getValue(a1[a1.length - 1]) >= card.K &&
      Card.getValue(k[a1.length - 1]) >= card[9]
    ) {
      var r = [1, 2, 3][Math.floor(Math.random() * 3)];
      if (r == 1) {
        $("#tai_truoc3").trigger("play");
      } else if (r == 2) {
        $("#tai_truoc5").trigger("play");
      } else if (r == 3) {
        $("#tai_truoc4").trigger("play");
      } else {
        $("#tai_truoc9").trigger("play");
      }
    } else {
      $("#tai_truoc9").trigger("play");
    }
  } else if (a1.length == 4) {
    if (Card.getValue(a1[0]) == Card.getValue(a1[1])) {
      if (k.length == 0) {
        $("#tai_truoc9").trigger("play");
      } else if (k.length == 1) {
        $("#tai_truoc4").trigger("play");
      } else if (k.length > 1) {
        var r = [1, 2][Math.floor(Math.random() * 2)];
        if (r == 1) {
          $("#tai_truoc3").trigger("play");
        } else if (r == 2) {
          $("#tai_truoc5").trigger("play");
        }
      }
    }
  } else if (a1 != []) {
    $("#tai_truoc9").trigger("play");
  }
  //alert(k+"----------------"+a1);
  if (a1.length >= 8 && a1.length <= 11) {
    $("#rong2").show();
    setTimeout(function () {
      $("#rong2").hide();
    }, 1300); //0 1 2 3
  } else if (a1.length4 > 11) {
    $("#rong3").show();
    setTimeout(function () {
      $("#rong3").hide();
    }, 1300); //0 1 2 3
  }
  document.getElementById("listMessages").value = a1;
}

function hien3(a) {
  var html = "";
  var a1 = [];
  a1 = a;
  //a1=loc_anh(img);

  for (var j = 0; j < a1.length; j++) {
    html +=
      "<img src='" +
      a1[j] +
      "' value='" +
      a1[j] +
      "'  style='  width: 80;height: 80;'></img>";
  }

  $("#id1").html("");
  $("#id1").html(html);
}

function ktrasanh(data) {
  var v = [];
  v = chuyenchuoi(data);
  v.sort(sortNumberAsc); //sap xep mang tang dan

  for (var i = 0; i < v.length - 1; i++) {
    if (v[i] + 1 == v[i + 1]) {
      t = 0;
    } else {
      t = 1;
      break;
    }
  }
  return t;
}

function ktradoithong(data) {
  var v = [];
  v = chuyenchuoi(data);

  v.sort(sortNumberAsc); //sap xep mang tang dan

  for (var i = 0; i < v.length - 2; i += 2) {
    if (v[i] == v[i + 1] && v[i] + 1 == v[i + 2]) {
      //kiem tra ex: 1,2,3,4,5...
      t = 0;
    } else {
      t = 1;
      break;
    }
  }
  return t;
}

function kiemtrahople(data) {
  dem = data.length;
  var g = "";
  if (dem == 1 && data != "") {
    g = rank.coc;
  } else if (dem == 2) {
    c1 = Card.getValue(data[0]);
    c2 = Card.getValue(data[1]);
    if (c1 == c2) {
      g = rank.doi;
    } else {
      g = rank.khonghople;
    }
  } else if (dem > 2) {
    if (ktrasanh(data) == 0) {
      g = "sanh";
    } else {
      if (dem == 3) {
        c1 = Card.getValue(data[0]);
        c2 = Card.getValue(data[1]);
        c3 = Card.getValue(data[2]);
        if (c1 == c2 && c2 == c3) {
          g = rank.bacay;
        } else {
          g = rank.khonghople;
        }
      } else if (dem == 4) {
        c1 = Card.getValue(data[0]);
        c2 = Card.getValue(data[1]);
        c3 = Card.getValue(data[2]);
        c4 = Card.getValue(data[3]);
        if (c1 == c2 && c1 == c3 && c1 == c4) {
          g = rank.tuqui;
        } else {
          g = rank.khonghople;
        }
      } else if (dem == 6) {
        if (ktradoithong(data) == 0) {
          g = rank.badoithong;
        } else {
          g = rank.khonghople;
        }
      } else if (dem == 8) {
        if (ktradoithong(data) == 0) {
          g = rank.bondoithong;
        } else {
          g = rank.khonghople;
        }
      } else if (dem == 10) {
        if (ktradoithong(data) == 0) {
          g = rank.namdoithong;
        } else {
          g = rank.khonghople;
        }
      } else if (dem == 12) {
        if (ktradoithong(data) == 0) {
          g = rank.saudoithong;
        } else {
          g = rank.khonghople;
        }
      } else {
        g = rank.khonghople;
      }
    }
  }
  return g;
}
