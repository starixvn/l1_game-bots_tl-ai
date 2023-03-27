function setBackgroundHand(turn) {
  $("#mm1").css("background-color", "transparent");
  $("#mm2").css("background-color", "transparent");
  $("#mm3").css("background-color", "transparent");
  $("#mm0").css("background-color", "transparent");
  if (turn == "0") $("#mm0").css("backgroundColor", "yellow");
  else if (turn == "1") $("#mm1").css("backgroundColor", "yellow");
  else if (turn == "2") $("#mm2").css("backgroundColor", "yellow");
  else if (turn == "3") $("#mm3").css("backgroundColor", "yellow");
  if (boluot.indexOf("0") >= 0) $("#mm0").css("backgroundColor", "blue");
  if (boluot.indexOf("1") >= 0) $("#mm1").css("backgroundColor", "blue");
  if (boluot.indexOf("2") >= 0) $("#mm2").css("backgroundColor", "blue");
  if (boluot.indexOf("3") >= 0) $("#mm3").css("backgroundColor", "blue");
}

function logTurn(handId, droppedCards, originalCards) {
  const name = $(`#mm${handId}`).text().split("(")[0];
  const textContent = document
    .getElementById(`mm${handId}`)
    .textContent.split("(")[0];
  v_err_1 = [];
  v_err_1.push(
    `${name} đánh: ${chuyen_bai(droppedCards)} *** (${chuyen_bai(
      originalCards
    )})<br>`
  );
  $(`#mm${handId}`).text(
    textContent + "(" + (originalCards.length - droppedCards.length) + ")"
  );
  $("#them_vao1").prepend(v_err_1);
}

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
