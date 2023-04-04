function runBot(handId, cards) {
  const originalCards = [...cards];
  let _d_f = AI(layer0, cards); //0  1  2  3  [""]

  const nextHandId = ((handId + 1) % 4).toString();
  const oppositeHandId = ((handId + 2) % 4).toString();
  const previousHandId = ((handId + 3) % 4).toString();
  const handIdString = handId.toString();
  let remainingCards = null;
  let images = [...$(`#bot${handId} .image`)];

  images.forEach((item) => {
    const itemSrc = item.src.toString();
    for (let card of _d_f) {
      if (itemSrc.includes(card)) {
        $(item).css("top", "70px");
      }
    }
  });

  if (huongsai != "") {
    remainingCards = huongsaiBot(handId, _d_f, originalCards, cards);
  } else {
    if (boluot.indexOf(nextHandId) < 0) {
      if (_d_f != "") {
        remainingCards = dropBotCard(handId, _d_f, cards);
      } else {
        boluot.push(handIdString);
        remainingCards = originalCards;
      }
      logTurn(handId, _d_f, originalCards);
      if (boluot.length >= 3 && huongsai == "") {
        resetNewTurn();
      } else if (boluot.length >= 4 && huongsai != "") {
        resetNewTurn();
        huongsai = [];
      }
      if (thang.length == numberBot - 1) {
        document.getElementById("thang").click();
        return null;
      } else {
        changeTurn(nextHandId);
      }
    } else if (
      boluot.indexOf(nextHandId) >= 0 &&
      boluot.indexOf(oppositeHandId) < 0
    ) {
      if (_d_f != "") {
        remainingCards = dropBotCard(handId, _d_f, cards);
      } else {
        boluot.push(handIdString);
        remainingCards = originalCards;
      }
      logTurn(handId, _d_f, originalCards);
      if (boluot.length >= 3 && huongsai == "") {
        resetNewTurn();
      }
      if (thang.length == numberBot - 1) {
        document.getElementById("thang").click();
        return null;
      } else {
        changeTurn(oppositeHandId);
      }
    } else if (
      boluot.indexOf(nextHandId) >= 0 &&
      boluot.indexOf(oppositeHandId) >= 0 &&
      boluot.indexOf(previousHandId) < 0
    ) {
      if (_d_f != "") {
        remainingCards = dropBotCard(handId, _d_f, cards);
      } else {
        boluot.push(handIdString);
        remainingCards = originalCards;
      }
      logTurn(handId, _d_f, originalCards);
      if (boluot.length >= 3 && huongsai == "") {
        resetNewTurn();
      }
      if (thang.length == numberBot - 1) {
        document.getElementById("thang").click();
        return null;
      } else {
        changeTurn(previousHandId);
      }
    } else if (boluot.indexOf(handIdString) < 0) {
      resetNewTurn();

      _d_f = AI(layer0, cards);
      if (_d_f != "") {
        remainingCards = dropBotCard(handId, _d_f, cards);
      }
      logTurn(handId, _d_f, originalCards);

      if (thang.length == numberBot - 1) {
        document.getElementById("thang").click();
        return null;
      } else {
        changeTurn(handIdString);
      }
    }
  }

  return remainingCards;
}

function huongsaiBot(handId, _d_f, originalCards, cards) {
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
    if (thang.length == numberBot - 1) {
      document.getElementById("thang").click();
      return null;
    } else {
      changeTurn(nextTurn);
    }
    return cards;
  } else {
    const remainingCards = dropBotCard(handId, _d_f, cards);
    logTurn(handId, _d_f, originalCards);

    nextTurn = an(boluot, handId, thang);

    if (nextTurn == handIdString) {
      resetNewTurn();
    }
    if (boluot.length >= 4 && huongsai != "") {
      resetNewTurn();
      huongsai = [];
    }

    if (thang.length == numberBot - 1) {
      document.getElementById("thang").click();
      return null;
    } else {
      changeTurn(nextTurn);
    }

    return remainingCards;
  }
}

function dropBotCard(handId, _d_f, cards) {
  const handIdString = handId.toString();
  const timeout = +$(`input[name="speed"]:checked`).val();

  huongsai = [];
  const s1 = giaomang(cards, _d_f);
  const remainingCards = sapxep(s1);

  if (remainingCards == "") {
    thang.push(handIdString);
    boluot.push(handIdString);
    huongsai.push(handId);
  }
  setTimeout(() => {
    hien(remainingCards, `bot${handId}`);
    hien2(_d_f);
  }, timeout / 2);

  layer0 = _d_f;
  return remainingCards;
}

function changeTurn(handIdString) {
  const timeout = +$(`input[name="speed"]:checked`).val();

  setBackgroundHand(handIdString);
  setTimeout(function () {
    if (handIdString == "9") {
      endRound();
    } else document.getElementById(`m${handIdString}`).click();
  }, timeout); //0 1 2 3
}

function endRound() {
  const code = $("#inputCode").val();
  const hasPlayer = $("#hasPlayer").is(":checked");
  Logger.insertLog(code, hasPlayer).then(() => {
    const autoNewRound = $("#autoContinue").is(":checked");
    const limitRound = $("#limitRound").val();
    autoNewRound && roundId < limitRound
      ? $("#btntieptuc").click()
      : $("#btntieptuc").show();
  });
}

function resetNewTurn() {
  boluot = [];
  boluot = giaomang1(thang);
  layer0 = [];
  hien2("");
  Logger.addTurn();
  $("#them_vao1").prepend("<hr />");
}

function getNumberBot() {
  return +$(`input[name="numberBot"]:checked`).val();
}

function getSkipTurn() {
  switch (numberBot) {
    case 2:
      return ["2", "3"];
    case 3:
      return ["3"];
    default:
      return [];
  }
}
