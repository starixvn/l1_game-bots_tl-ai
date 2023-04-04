function continueClick() {
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
}

function startRound() {
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
    $(`#mm${thang1}`).css("backgroundColor", "yellow");
    setTimeout(function () {
      document.getElementById(`m${thang1}`).click();
    }, time);
  }
}

function dealCard(handId, images) {
  const x0 = loc_anh(images);
  const cards = sapxep(x0);
  hien(cards, `bot${handId}`);
  const name = $(`#mm${handId}`).text().split("(")[0];
  $(`#mm${handId}`).text(`${name}(13)`);
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
