function runBot(handId, cards) {
  const timeout = $("#timeout").val();
  const originalCards = [...cards];
  let _d_f = AI(layer0, cards); //0  1  2  3
  const nextHandId = ((handId + 1) % 4).toString();
  const oppositeHandId = ((handId + 2) % 4).toString();
  const previousHandId = ((handId + 3) % 4).toString();
  const handIdString = handId.toString();
  let remainingCards = null;

  if (huongsai != "") {
    remainingCards = huongsaiBot(handId, _d_f, originalCards, cards);
  } else {
    if (_d_f != "") {
      remainingCards = dropBotCard(handId, _d_f, cards);
    } else {
      boluot.push(handIdString);
      remainingCards = originalCards;
    }
    logTurn(handId, _d_f, originalCards);

    if (boluot.indexOf(nextHandId) < 0) {
      if (boluot.length >= 3 && huongsai == "") {
        resetNewTurn();
      } else if (boluot.length >= 4 && huongsai != "") {
        resetNewTurn();
        huongsai = [];
      }
      if (thang.length == 3) {
        document.getElementById("thang").click();
      } else {
        setBackgroundHand(nextHandId);
        setTimeout(function () {
          document.getElementById(`m${nextHandId}`).click();
        }, timeout); //0 1 2 3
      }
    } else if (
      boluot.indexOf(nextHandId) >= 0 &&
      boluot.indexOf(oppositeHandId) < 0
    ) {
      if (boluot.length >= 3 && huongsai == "") {
        resetNewTurn();
      }
      if (thang.length == 3) {
        document.getElementById("thang").click();
      } else {
        setBackgroundHand(oppositeHandId);
        setTimeout(function () {
          document.getElementById(`m${oppositeHandId}`).click();
        }, timeout); //0 1 2 3
      }
    } else if (
      boluot.indexOf(nextHandId) >= 0 &&
      boluot.indexOf(oppositeHandId) >= 0 &&
      boluot.indexOf(previousHandId) < 0
    ) {
      if (boluot.length >= 3 && huongsai == "") {
        resetNewTurn();
      }
      if (thang.length == 3) {
        document.getElementById("thang").click();
      } else {
        setBackgroundHand(previousHandId);
        setTimeout(function () {
          document.getElementById(`m${oppositeHandId}`).click();
        }, timeout);
      }
    } else if (boluot.indexOf(handId.toString()) < 0) {
      resetNewTurn();

      _d_f = AI(layer0, cards);
      if (_d_f != "") {
        remainingCards = dropBotCard(handId, _d_f, cards);
      }
      logTurn(handId, _d_f, originalCards);

      if (thang.length == 3) {
        document.getElementById("thang").click();
      } else {
        setBackgroundHand(handIdString);
        setTimeout(function () {
          document.getElementById(`m${handId}`).click();
        }, timeout);
      }
    }
  }

  return remainingCards;
}

function huongsaiBot(handId, _d_f, originalCards, cards) {
  const timeout = $("#timeout").val();
  let nextTurn = "";
  const handIdString = handId.toString();

  if (_d_f == "") {
    boluot.push(handIdString);
    nextTurn = an(boluot, handId, thang);
    logTurn(handId, _d_f, originalCards);

    if (boluot.length >= 4 && huongsai != "") {
      resetNewTurn();
      huongsai = [];
    }
    if (thang.length == 3) {
      document.getElementById("thang").click();
    } else {
      setBackgroundHand(nextTurn);
      setTimeout(function () {
        if (nextTurn == "9") {
          $("#btntieptuc").show();
        } else document.getElementById("m" + nextTurn).click();
      }, timeout); //0 1 2 3
    }
    return cards;
  } else {
    const remainingCards = dropBotCard(handId, _d_f, cards);
    logTurn(handId, _d_f, originalCards);

    nextTurn = an(boluot, handId, thang);

    if (nextTurn == handIdString) {
      resetNewTurn();
      if (thang.length == 3) {
        endRound();
      }
    }
    if (boluot.length >= 4 && huongsai != "") {
      resetNewTurn();
      huongsai = [];
    }

    if (thang.length == 3) {
      document.getElementById("thang").click();
    } else {
      setBackgroundHand(nextTurn);
      setTimeout(function () {
        if (nextTurn == "9") {
          $("#btntieptuc").show();
        } else document.getElementById("m" + nextTurn).click();
      }, timeout); //0 1 2 3
    }

    return remainingCards;
  }
}

function dropBotCard(handId, _d_f, cards) {
  const handIdString = handId.toString();

  huongsai = [];
  const s1 = giaomang(cards, _d_f);
  const remainingCards = sapxep(s1);

  if (remainingCards == "") {
    thang.push(handIdString);
    boluot.push(handIdString);
    huongsai.push(handId);
  }
  hien(remainingCards, `bot${handId}`);
  hien2(_d_f);
  layer0 = _d_f;
  return remainingCards;
}

function endRound() {
  const autoNewRound = $("#autoContinue").is(":checked");
  autoNewRound ? $("#btntieptuc").click() : $("#btntieptuc").show();
}

function resetNewTurn() {
  boluot = [];
  boluot = giaomang1(thang);
  layer0 = [];
  hien2("");
  $("#them_vao1").prepend("<hr />");
}
