function ktra_4_heo(a) {
  // Kiểm tra đầu vào
  if (!a || !Array.isArray(a) || a.length === 0) {
    return [];
  }

  // Lấy các lá heo (lá 2) từ bộ bài
  const heoCards = a.filter(
    (card) => card && typeof card === "string" && card.includes("anh/16")
  );

  // Trả về mảng heo nếu đủ 4 lá
  return heoCards.length === 4 ? heoCards : [];
}

/**
 * Xác định người chơi tiếp theo dựa trên trạng thái hiện tại
 * @param {string} skippedPlayers - Chuỗi chứa các người chơi đã bỏ lượt ("0123")
 * @param {number} currentPosition - Vị trí người chơi hiện tại (0-3)
 * @param {string[]} winners - Mảng chứa người chơi đã thắng
 * @returns {string} Vị trí người chơi tiếp theo
 */
function getNextPlayer(skippedPlayers, currentPosition, winners) {
  // Xử lý trường hợp đặc biệt khi tất cả đã bỏ lượt
  if (isAllSkipped(skippedPlayers)) {
    return handleSpecialCase(winners);
  }

  // Xác định người chơi tiếp theo dựa trên vị trí hiện tại
  return findNextAvailablePlayer(skippedPlayers, currentPosition);
}

function isAllSkipped(skippedPlayers) {
  return ["0", "1", "2", "3"].every((player) =>
    skippedPlayers.includes(player)
  );
}

function findNextAvailablePlayer(skippedPlayers, currentPosition) {
  // Thứ tự ưu tiên cho mỗi vị trí
  const nextPlayerOrder = {
    0: ["1", "2", "3", "0"],
    1: ["2", "3", "0", "1"],
    2: ["3", "0", "1", "2"],
    3: ["0", "1", "2", "3"],
  };

  // Tìm người chơi tiếp theo chưa bỏ lượt
  const order = nextPlayerOrder[currentPosition] || [];
  const nextPlayer = order.find((player) => !skippedPlayers.includes(player));

  return nextPlayer || "9";
}

function handleSpecialCase(winners) {
  if (!winners || winners.length === 0) return "9";

  if (winners.length === 1) {
    const winnerMap = {
      3: "0",
      0: "1",
      1: "2",
      2: "3",
    };
    return winnerMap[winners[0]] || "9";
  }

  if (winners.length === 2) {
    const [first, second] = winners;
    const winnerPairMap = {
      "0,1": "2",
      "0,2": "3",
      "0,3": "1",
      "1,0": "2",
      "1,2": "3",
      "1,3": "0",
      "2,0": "1",
      "2,1": "3",
      "2,3": "0",
      "3,0": "1",
      "3,1": "2",
      "3,2": "0",
    };
    return winnerPairMap[`${first},${second}`] || "9";
  }

  return "9";
}

// Giữ lại function gốc để đảm bảo backward compatibility
function an(boluot, stt, thang) {
  return getNextPlayer(boluot, stt, thang);
}

/**
 * Tìm người chơi chưa bỏ lượt khi 3 người khác đã bỏ lượt
 * @param {string} skippedPlayers - Chuỗi chứa các người chơi đã bỏ lượt (vd: "012")
 * @returns {string} Vị trí người chơi chưa bỏ lượt, hoặc chuỗi rỗng nếu không tìm thấy
 */
function hs1(skippedPlayers) {
  // Định nghĩa các pattern bỏ lượt và người chơi tương ứng
  const skipPatterns = [
    { skipped: ["0", "1", "2"], nextPlayer: "3" },
    { skipped: ["0", "1", "3"], nextPlayer: "2" },
    { skipped: ["0", "2", "3"], nextPlayer: "1" },
    { skipped: ["1", "2", "3"], nextPlayer: "0" },
  ];

  // Tìm pattern phù hợp
  const matchedPattern = skipPatterns.find(
    (pattern) =>
      pattern.skipped.every((player) => skippedPlayers.includes(player)) &&
      !skippedPlayers.includes(pattern.nextPlayer)
  );

  // Trả về người chơi tiếp theo hoặc chuỗi rỗng
  return matchedPattern ? matchedPattern.nextPlayer : "";
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

/**
 * Xác định người chơi tiếp theo dựa trên danh sách người thắng
 * @param {string[]} winners - Mảng chứa các người chơi đã thắng
 * @returns {string} Vị trí người chơi tiếp theo
 */
function hs(winners) {
  // Xử lý trường hợp một người thắng
  if (winners.length === 1) {
    const singleWinnerMap = {
      3: "0",
      0: "1",
      1: "2",
      2: "3",
    };
    return singleWinnerMap[winners[0]] || "";
  }

  // Xử lý trường hợp hai người thắng
  if (winners.length === 2) {
    const [firstWinner, secondWinner] = winners;
    const doubleWinnerMap = {
      "0,1": "2",
      "0,2": "3",
      "0,3": "1",
      "1,0": "2",
      "1,2": "3",
      "1,3": "0",
      "2,0": "1",
      "2,1": "3",
      "2,3": "0",
      "3,0": "1",
      "3,1": "2",
      "3,2": "0",
    };
    return doubleWinnerMap[`${firstWinner},${secondWinner}`] || "";
  }

  return "";
}

/**
 * Sắp xếp bài từ nhỏ đến lớn (3->K,A,2)
 * @param {string[]} cards - Mảng các lá bài cần sắp xếp
 * @returns {string[]} Mảng các lá bài đã sắp xếp
 */
function sapxep(cards) {
  if (!cards || !Array.isArray(cards)) {
    return [];
  }

  // Bảng tra cứu giá trị chất bài
  const suitValues = {
    a: 0.1, // ♠
    b: 0.2, // ♣
    c: 0.3, // ♦
    d: 0.4, // ♥
  };

  // Clone mảng để không thay đổi mảng gốc
  const sortedCards = [...cards];

  // Sắp xếp bài
  sortedCards.sort((cardA, cardB) => {
    // Lấy thông tin của lá bài A
    const valueA = cardA.substring(4, 7); // vd: "16a"
    const numberA = parseInt(valueA.substring(0, 2)); // vd: 16
    const suitA = valueA.substring(2); // vd: "a"

    // Lấy thông tin của lá bài B
    const valueB = cardB.substring(4, 7); // vd: "16a"
    const numberB = parseInt(valueB.substring(0, 2)); // vd: 16
    const suitB = valueB.substring(2); // vd: "a"

    // So sánh giá trị trước
    if (numberA !== numberB) {
      return numberA - numberB; // Sắp xếp tăng dần theo giá trị
    }

    // Nếu cùng giá trị, so sánh chất
    return (suitValues[suitA] || 0) - (suitValues[suitB] || 0);
  });

  return sortedCards;
}

/**
 * Kiểm tra các trường hợp đặc biệt của lá heo (lá 2)
 * @param {string[]} cards - Mảng các lá bài cần kiểm tra
 * @returns {string} Loại bài heo (HEO, DOI_HEO, BA_HEO) hoặc "noheo"
 */
function ktra_h(cards) {
  // Kiểm tra đầu vào
  if (!cards || !Array.isArray(cards) || cards.length === 0) {
    return "noheo";
  }

  // Kiểm tra xem bài có phải là lá 2 không (heo)
  if (!isValidCard(cards[0])) {
    return "noheo";
  }

  // Lấy giá trị lá đầu tiên
  const firstCardValue = Card.getValue(cards[0]);

  // Kiểm tra có phải lá heo không (giá trị 16 = lá 2)
  if (firstCardValue !== 16) {
    return "noheo";
  }

  // Kiểm tra tất cả các lá có phải heo không
  const allCardsAreHeo = cards.every(
    (card) => isValidCard(card) && Card.getValue(card) === 16
  );

  if (!allCardsAreHeo) {
    return "noheo";
  }

  // Xác định loại bài heo dựa vào số lượng
  switch (cards.length) {
    case 1:
      return rank.HEO;
    case 2:
      return rank.DOI_HEO;
    case 3:
      return rank.BA_HEO;
    default:
      return "noheo";
  }
}

/**
 * Kiểm tra tính hợp lệ của lá bài
 * @param {string} card - Lá bài cần kiểm tra
 * @returns {boolean} True nếu lá bài hợp lệ
 */
function isValidCard(card) {
  return card && typeof card === "string";
}

function hoanvi_all(a) {
  if (!a || a.length === 0) return [];
  // Create a copy of the array to avoid modifying the original
  const result = [...a];
  // Sort the array (same as sapxep but simpler)
  return sapxep(result);
}

function ktra_ng_danh(a, b, isNewRound) {
  console.log("======= CHECK PLAY VALIDITY =======");
  console.log("Previous cards:", a);
  console.log("Current cards:", b);
  console.log("Is new round:", isNewRound);

  // Kiểm tra nếu bài đánh là sảnh và log để debug
  const isSanh = ktrasanh(b) === 0;
  console.log("Is current hand a straight (sảnh):", isSanh);

  // Nếu bài đánh không hợp lệ, luôn trả về không hợp lệ
  const baiHopLe = kiemtrahople(b);
  console.log("Current cards validity:", baiHopLe);
  console.log("SANH constant value:", rank.SANH);
  console.log("BACAY constant value:", rank.BACAY);

  if (baiHopLe === rank.KHONG_HOP_LE || baiHopLe === "khonghople") {
    console.log("Current hand is invalid, returning KHONG_HOP_LE");
    return rank.KHONG_HOP_LE;
  }

  // Nếu là lượt đầu tiên hoặc lượt mới
  if (
    isNewRound === true ||
    a === undefined ||
    a === null ||
    !Array.isArray(a) ||
    a.length === 0
  ) {
    console.log("New round or first play detected");

    // Trường hợp đặc biệt cho sảnh
    if (isSanh) {
      console.log("Straight (sảnh) on first turn -> HOP_LE (special case)");
      return rank.HOP_LE;
    }

    // Các bài hợp lệ khác
    if (baiHopLe !== rank.KHONG_HOP_LE && baiHopLe !== "khonghople") {
      console.log("Valid hand in first turn -> HOP_LE");
      return rank.HOP_LE;
    } else {
      console.log("Invalid hand -> KHONG_HOP_LE");
      return rank.KHONG_HOP_LE;
    }
  }

  // Trường hợp thông thường - so sánh 2 bộ bài
  a = hoanvi_all(a);
  b = hoanvi_all(b);

  console.log("Sorted previous cards:", a);
  console.log("Sorted current cards:", b);

  var _k_q = rank.KHONG_HOP_LE,
    tt3 = "",
    ttt3 = "";

  // Kiểm tra dữ liệu đầu vào
  if (!a.length || !b.length) {
    console.log("Invalid input data, returning KHONG_HOP_LE");
    return rank.KHONG_HOP_LE;
  }

  // Kiểm tra loại bài giống nhau
  const prevHandType = kiemtrahople(a);
  const currHandType = kiemtrahople(b);
  console.log("Previous hand type:", prevHandType);
  console.log("Current hand type:", currHandType);

  // Kiểm tra các loại bài đặc biệt
  const isSamePrevSanh = prevHandType === rank.SANH || prevHandType === "sanh";
  const isSameCurrSanh = currHandType === rank.SANH || currHandType === "sanh";
  const isSamePrevBacay =
    prevHandType === rank.BACAY ||
    prevHandType === "xamco" ||
    prevHandType === "bacay";
  const isSameCurrBacay =
    currHandType === rank.BACAY ||
    currHandType === "xamco" ||
    currHandType === "bacay";

  // Nếu lượt trước là SANH và lượt này cũng SANH, chỉ cần so sánh giá trị cao nhất
  if (isSamePrevSanh && isSameCurrSanh && a.length === b.length) {
    console.log("Both are SANH with same length, comparing highest cards");
  }

  // Nếu lượt trước là BACAY và lượt này cũng BACAY, chỉ cần so sánh giá trị
  if (isSamePrevBacay && isSameCurrBacay) {
    console.log("Both are BACAY (3 of a kind), comparing values");
  }

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

  console.log("Previous highest card value:", a2, "with modifier:", tt3);
  console.log("Current highest card value:", b2, "with modifier:", ttt3);

  if (b3 == "a") {
    ttt3 = 0.1;
  } else if (b3 == "b") {
    ttt3 = 0.2;
  } else if (b3 == "c") {
    ttt3 = 0.3;
  } else if (b3 == "d") {
    ttt3 = 0.4;
  }

  // So sánh sảnh với sảnh - so sánh giá trị lá cao nhất
  if (isSamePrevSanh && isSameCurrSanh && a.length === b.length) {
    if (b2 > a2) {
      _k_q = rank.HOP_LE;
      console.log("SANH with higher value -> HOP_LE");
    } else if (b2 == a2 && ttt3 > tt3) {
      _k_q = rank.HOP_LE;
      console.log("SANH with same value but higher suit -> HOP_LE");
    } else {
      _k_q = rank.KHONG_HOP_LE;
      console.log("SANH with lower value -> KHONG_HOP_LE");
    }

    console.log("Final result for SANH comparison:", _k_q);
    return _k_q;
  }

  // So sánh bộ 3 với bộ 3
  if (isSamePrevBacay && isSameCurrBacay) {
    // Lấy giá trị của các bộ 3
    const prevValue = Card.getValue(a[0]);
    const currValue = Card.getValue(b[0]);

    if (currValue > prevValue) {
      _k_q = rank.HOP_LE;
      console.log("BACAY with higher value -> HOP_LE");
    } else if (currValue === prevValue) {
      // Kiểm tra chất (suit) cao hơn
      if (ttt3 > tt3) {
        _k_q = rank.HOP_LE;
        console.log("BACAY with same value but higher suit -> HOP_LE");
      } else {
        _k_q = rank.KHONG_HOP_LE;
        console.log("BACAY with same or lower suit -> KHONG_HOP_LE");
      }
    } else {
      _k_q = rank.KHONG_HOP_LE;
      console.log("BACAY with lower value -> KHONG_HOP_LE");
    }

    console.log("Final result for BACAY comparison:", _k_q);
    return _k_q;
  }

  // Các trường hợp đặc biệt khi bài mạnh hơn
  if (
    ktra_h(a) == rank.HEO &&
    (currHandType == rank.BA_DOI_THONG ||
      currHandType == rank.SANH ||
      currHandType == "sanh" ||
      currHandType == rank.BACAY ||
      currHandType == "xamco" ||
      currHandType == "bacay")
  ) {
    _k_q = rank.HOP_LE;
    console.log("Case: HEO vs BA_DOI_THONG/SANH/BACAY -> HOP_LE");
  } else if (ktra_h(a) == rank.HEO && currHandType == rank.BON_DOI_THONG) {
    _k_q = rank.HOP_LE;
    console.log("Case: HEO vs BON_DOI_THONG -> HOP_LE");
  } else if (ktra_h(a) == rank.HEO && currHandType == rank.TUQUI) {
    _k_q = rank.HOP_LE;
    console.log("Case: HEO vs TUQUI -> HOP_LE");
  } else if (ktra_h(a) == rank.DOI_HEO && currHandType == rank.TUQUI) {
    _k_q = rank.HOP_LE;
    console.log("Case: DOI_HEO vs TUQUI -> HOP_LE");
  } else if (ktra_h(a) == rank.DOI_HEO && currHandType == rank.BON_DOI_THONG) {
    _k_q = rank.HOP_LE;
    console.log("Case: DOI_HEO vs BON_DOI_THONG -> HOP_LE");
  } else if (ktra_h(a) == rank.BA_HEO && currHandType == rank.BON_DOI_THONG) {
    _k_q = rank.HOP_LE;
    console.log("Case: BA_HEO vs BON_DOI_THONG -> HOP_LE");
  } else if (
    (prevHandType == rank.BA_DOI_THONG || prevHandType == "badoithong") &&
    currHandType == rank.TUQUI
  ) {
    _k_q = rank.HOP_LE;
    console.log("Case: BA_DOI_THONG vs TUQUI -> HOP_LE");
  } else if (
    (prevHandType == rank.BA_DOI_THONG || prevHandType == "badoithong") &&
    currHandType == rank.BON_DOI_THONG
  ) {
    _k_q = rank.HOP_LE;
    console.log("Case: BA_DOI_THONG vs BON_DOI_THONG -> HOP_LE");
  } else if (
    (prevHandType == rank.TUQUI || prevHandType == "tuqui") &&
    currHandType == rank.BON_DOI_THONG
  ) {
    _k_q = rank.HOP_LE;
    console.log("Case: TUQUI vs BON_DOI_THONG -> HOP_LE");
  } else if (
    isTypesSame(prevHandType, currHandType) &&
    b2 > a2 &&
    b.length == a.length
  ) {
    _k_q = rank.HOP_LE;
    console.log("Same type and length, higher value -> HOP_LE");
  } else if (
    isTypesSame(prevHandType, currHandType) &&
    b2 == a2 &&
    b.length == a.length
  ) {
    if (ttt3 > tt3) {
      _k_q = rank.HOP_LE;
      console.log("Same type, length and value, higher suit -> HOP_LE");
    } else {
      _k_q = rank.KHONG_HOP_LE;
      console.log(
        "Same type, length and value, same or lower suit -> KHONG_HOP_LE"
      );
    }
  } else if (
    isTypesSame(prevHandType, currHandType) &&
    b2 < a2 &&
    b.length == a.length
  ) {
    _k_q = rank.KHONG_HOP_LE;
    console.log("Same type and length, lower value -> KHONG_HOP_LE");
  } else {
    console.log("Different type, length or other case -> KHONG_HOP_LE");
    _k_q = rank.KHONG_HOP_LE;
  }

  console.log("Final result:", _k_q);
  console.log("======= END CHECK =======");
  return _k_q;
}

// Hàm trợ giúp kiểm tra xem hai loại bài có cùng loại không
function isTypesSame(type1, type2) {
  // Kiểm tra phiên bản chuẩn
  if (type1 === type2) return true;

  // Kiểm tra SANH
  if (
    (type1 === rank.SANH || type1 === "sanh") &&
    (type2 === rank.SANH || type2 === "sanh")
  )
    return true;

  // Kiểm tra BACAY
  if (
    (type1 === rank.BACAY || type1 === "xamco" || type1 === "bacay") &&
    (type2 === rank.BACAY || type2 === "xamco" || type2 === "bacay")
  )
    return true;

  // Kiểm tra BA_DOI_THONG
  if (
    (type1 === rank.BA_DOI_THONG || type1 === "badoithong") &&
    (type2 === rank.BA_DOI_THONG || type2 === "badoithong")
  )
    return true;

  // Kiểm tra BON_DOI_THONG
  if (
    (type1 === rank.BON_DOI_THONG || type1 === "bondoithong") &&
    (type2 === rank.BON_DOI_THONG || type2 === "bondoithong")
  )
    return true;

  // Kiểm tra TUQUI
  if (
    (type1 === rank.TUQUI || type1 === "tuqui") &&
    (type2 === rank.TUQUI || type2 === "tuqui")
  )
    return true;

  return false;
}

function chuyenchuoi(data) {
  console.log("Converting card data to values:", data);

  if (!data || !Array.isArray(data) || data.length === 0) {
    console.log("Invalid card data for conversion");
    return [];
  }

  const g = [];
  for (var i = 0; i < data.length; i++) {
    if (data[i] && typeof data[i] === "string") {
      const value = Card.getValue(data[i]);
      console.log(`Card ${data[i]} converted to value: ${value}`);
      g.push(value);
    }
  }
  console.log("Converted values:", g);
  return g;
}

function sortNumberAsc(a, b) {
  return a - b;
}

/**
 * Hiển thị các lá bài lên giao diện
 * @param {string[]} cards - Mảng các lá bài cần hiển thị
 * @param {string} containerId - ID của container chứa bài
 */
function hien(cards, containerId) {
  // Kiểm tra đầu vào
  if (!cards || !Array.isArray(cards) || !containerId) {
    console.warn("Invalid input for hien function");
    return;
  }

  const cardStyles = {
    position: "absolute",
    width: "73px",
    height: "100px",
    baseLeft: 20, // Khoảng cách giữa các lá bài
    top: "100px", // Vị trí top cố định
  };

  const cardElements = cards
    .map((card, index) => {
      const left = index * cardStyles.baseLeft;

      return `
            <img 
                class="image animation" 
                id="${index}" 
                src="${card}" 
                value="${card}" 
                style="
                    position: ${cardStyles.position};
                    width: ${cardStyles.width};
                    height: ${cardStyles.height};
                    left: ${left}px;
                    top: ${cardStyles.top};
                "
            >
        `;
    })
    .join("");

  // Cập nhật DOM
  $(`#${containerId}`).html(cardElements);
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

/**
 * Hiển thị bài và phát âm thanh tương ứng
 * @param {string[]} cards - Mảng các lá bài cần hiển thị
 */
function hien2(cards) {
  // Kiểm tra đầu vào
  if (!cards || !Array.isArray(cards)) {
    console.warn("Invalid input for hien2 function");
    return;
  }

  const cardStyles = {
    position: "absolute",
    width: "100px",
    height: "140px",
    baseLeft: 20, // Khoảng cách giữa các lá bài
    top: "100px", // Vị trí top cố định
  };

  // Tạo HTML cho các lá bài
  const cardElements = cards
    .map((card, index) => {
      const left = (index + 1) * cardStyles.baseLeft;

      return `
            <img 
                src="${card}" 
                value="${card}" 
                style="
                    position: ${cardStyles.position};
                    width: ${cardStyles.width};
                    height: ${cardStyles.height};
                    left: ${left}px;
                    top: ${cardStyles.top};
                "
            >
        `;
    })
    .join("");

  // Lưu trữ bài cũ
  const previousCards = $("#listMessages").val();
  $("#history2").html($("#listMessages").html());

  // Cập nhật bài mới
  $("#listMessages").html(cardElements);

  // Phát âm thanh dựa vào loại bài
  playCardSound(cards, previousCards);

  // Hiển thị hiệu ứng rồng nếu cần
  showDragonEffect(cards.length);
}

/**
 * Phát âm thanh tương ứng với loại bài
 * @param {string[]} currentCards - Bài hiện tại
 * @param {string[]} previousCards - Bài trước đó
 */
function playCardSound(currentCards, previousCards) {
  const isHeo = (card) => card.includes("anh/16");
  const isHighCard = (card) => Card.getValue(card) >= Card.K;

  // Xử lý các trường hợp đặc biệt
  if (currentCards.length <= 3) {
    if (currentCards.length === 1 && isHeo(currentCards[0])) {
      $("#tai_truoc6").trigger("play");
      return;
    }

    if (
      currentCards.length >= 2 &&
      previousCards.length === currentCards.length
    ) {
      if (
        isHighCard(currentCards[currentCards.length - 1]) &&
        isHighCard(previousCards[previousCards.length - 1])
      ) {
        playRandomTaiTruoc([3, 4, 5]);
        return;
      }
    }

    $("#tai_truoc9").trigger("play");
    return;
  }

  // Xử lý bài dài
  if (currentCards.length >= 6) {
    if (previousCards.length >= 6) {
      playRandomTaiTruoc([2, 3]);
    } else {
      $("#tai_truoc2").trigger("play");
    }
    return;
  }

  // Xử lý bài 4 lá
  if (currentCards.length === 4 && previousCards.length === 4) {
    if (Card.getValue(currentCards[0]) !== Card.getValue(currentCards[1])) {
      if (
        isHighCard(currentCards[currentCards.length - 1]) &&
        Card.getValue(previousCards[previousCards.length - 1]) >= 10
      ) {
        playRandomTaiTruoc([3, 4, 5]);
        return;
      }
    }
    if (Card.getValue(currentCards[0]) === Card.getValue(currentCards[1])) {
      $("#tai_truoc2").trigger("play");
      return;
    }
  }

  // Xử lý bài 5 lá
  if (currentCards.length === 5 && previousCards.length === 5) {
    if (
      isHighCard(currentCards[currentCards.length - 1]) &&
      Card.getValue(previousCards[previousCards.length - 1]) >= 9
    ) {
      playRandomTaiTruoc([3, 4, 5]);
      return;
    }
  }

  $("#tai_truoc9").trigger("play");
}

/**
 * Phát ngẫu nhiên một âm thanh từ danh sách
 * @param {number[]} soundNumbers - Mảng số của các âm thanh
 */
function playRandomTaiTruoc(soundNumbers) {
  const randomIndex = Math.floor(Math.random() * soundNumbers.length);
  $(`#tai_truoc${soundNumbers[randomIndex]}`).trigger("play");
}

/**
 * Hiển thị hiệu ứng rồng dựa vào số lượng bài
 * @param {number} cardCount - Số lượng lá bài
 */
function showDragonEffect(cardCount) {
  if (cardCount >= 8 && cardCount <= 11) {
    $("#rong2").show();
    setTimeout(() => $("#rong2").hide(), 1300);
  } else if (cardCount > 11) {
    $("#rong3").show();
    setTimeout(() => $("#rong3").hide(), 1300);
  }
}

/**
 * Hiển thị các lá bài trong container id1
 * @param {string[]} cards - Mảng các lá bài cần hiển thị
 */
function hien3(cards) {
  // Kiểm tra đầu vào
  if (!cards || !Array.isArray(cards)) {
    console.warn("Invalid input for hien3 function");
    return;
  }

  const cardStyles = {
    width: "80px",
    height: "80px",
  };

  const cardElements = cards
    .map(
      (card) => `
        <img 
            src="${card}" 
            value="${card}" 
            style="
                width: ${cardStyles.width};
                height: ${cardStyles.height};
            "
        >
    `
    )
    .join("");

  // Cập nhật DOM
  $("#id1").html(cardElements);
}

/**
 * Kiểm tra bộ bài có phải là sảnh (dây) không
 * @param {string[]} cards - Mảng các lá bài cần kiểm tra
 * @returns {number} 0 nếu là sảnh, 1 nếu không phải
 */
function ktrasanh(cards) {
  console.log("=== CHECKING STRAIGHT (SẢNH) ===");
  console.log("Input array:", cards);

  // Kiểm tra điều kiện cơ bản
  if (!isValidStraightInput(cards)) {
    return 1;
  }

  // Lấy và sắp xếp giá trị các lá bài
  const cardValues = getCardValues(cards);
  if (!cardValues) {
    return 1;
  }

  // Kiểm tra có lá nào trùng nhau không
  if (hasDuplicateValues(cardValues)) {
    return 1;
  }

  // Kiểm tra tính liên tục của dãy bài
  if (!isConsecutive(cardValues)) {
    return 1;
  }

  console.log("Valid straight (SẢNH) detected!");
  return 0;
}

/**
 * Kiểm tra điều kiện đầu vào cơ bản cho sảnh
 */
function isValidStraightInput(cards) {
  if (!cards || !Array.isArray(cards) || cards.length < 3) {
    console.log("Invalid input: not an array or less than 3 cards");
    return false;
  }
  return true;
}

/**
 * Lấy và sắp xếp giá trị các lá bài
 */
function getCardValues(cards) {
  try {
    const values = cards.map((card) => {
      if (!card || typeof card !== "string") {
        throw new Error("Invalid card format");
      }

      const value = Card.getValue(card);
      console.log(`Card value: ${value} from ${card}`);

      if (isNaN(value) || value <= 0) {
        throw new Error("Invalid card value");
      }

      return value;
    });

    values.sort((a, b) => a - b);
    console.log("Sorted card values:", values);
    return values;
  } catch (error) {
    console.log("Error getting card values:", error.message);
    return null;
  }
}

/**
 * Kiểm tra có giá trị nào trùng nhau không
 */
function hasDuplicateValues(values) {
  for (let i = 0; i < values.length - 1; i++) {
    if (values[i] === values[i + 1]) {
      console.log(
        `Duplicate values found: ${values[i]} at positions ${i} and ${i + 1}`
      );
      return true;
    }
  }
  return false;
}

/**
 * Kiểm tra tính liên tục của dãy số
 */
function isConsecutive(values) {
  for (let i = 0; i < values.length - 1; i++) {
    console.log(`Comparing ${values[i]} and ${values[i + 1]}`);

    if (values[i] + 1 !== values[i + 1]) {
      console.log(`Not consecutive: ${values[i]} and ${values[i + 1]}`);
      return false;
    }
  }
  return true;
}

/**
 * Kiểm tra bộ bài có phải là đôi thông không
 * @param {string[]} cards - Mảng các lá bài cần kiểm tra
 * @returns {number} 0 nếu là đôi thông, 1 nếu không phải
 */
function ktradoithong(cards) {
  console.log("=== CHECKING DOI THONG (CONSECUTIVE PAIRS) ===");
  console.log("Input array:", cards);

  // Kiểm tra điều kiện cơ bản
  if (!isValidDoiThongInput(cards)) {
    return 1;
  }

  // Lấy và sắp xếp giá trị các lá bài
  const cardValues = getAndSortCardValues(cards);
  if (!cardValues) {
    return 1;
  }

  // Nhóm thành các cặp và kiểm tra
  const pairs = getPairs(cardValues);
  if (!pairs) {
    return 1;
  }

  // Kiểm tra tính liên tục của các cặp
  if (!areConsecutivePairs(pairs)) {
    return 1;
  }

  console.log("Valid DOI_THONG (consecutive pairs) detected!");
  return 0;
}

/**
 * Kiểm tra điều kiện đầu vào cơ bản cho đôi thông
 */
function isValidDoiThongInput(cards) {
  if (
    !cards ||
    !Array.isArray(cards) ||
    cards.length < 4 ||
    cards.length % 2 !== 0
  ) {
    console.log(
      "Invalid input: not an array, less than 4 cards, or odd number of cards"
    );
    return false;
  }
  return true;
}

/**
 * Lấy và sắp xếp giá trị các lá bài
 */
function getAndSortCardValues(cards) {
  try {
    const values = cards.map((card) => {
      const value = Card.getValue(card);
      console.log(`Card value: ${value} from ${card}`);
      return value;
    });

    values.sort((a, b) => a - b);
    console.log("Sorted card values:", values);
    return values;
  } catch (error) {
    console.log("Error getting card values:", error.message);
    return null;
  }
}

/**
 * Nhóm các lá bài thành cặp và kiểm tra tính hợp lệ
 */
function getPairs(values) {
  const pairs = [];

  for (let i = 0; i < values.length; i += 2) {
    if (i + 1 >= values.length) {
      console.log("Odd number of cards found");
      return null;
    }

    // Kiểm tra xem hai lá có giống nhau không
    if (values[i] === values[i + 1]) {
      console.log(`Found pair of ${values[i]} at positions ${i} and ${i + 1}`);
      pairs.push(values[i]);
    } else {
      console.log(
        `Cards at positions ${i} and ${i + 1} are not a pair: ${values[i]} != ${
          values[i + 1]
        }`
      );
      return null;
    }
  }

  console.log("Pairs found:", pairs);
  return pairs;
}

/**
 * Kiểm tra tính liên tục của các cặp
 */
function areConsecutivePairs(pairs) {
  // Nếu chỉ có 1 cặp, hợp lệ
  if (pairs.length === 1) {
    console.log("Only one pair, valid DOI_THONG");
    return true;
  }

  // Kiểm tra xem các cặp có liên tiếp không
  for (let i = 0; i < pairs.length - 1; i++) {
    if (pairs[i] + 1 !== pairs[i + 1]) {
      console.log(`Pairs not consecutive: ${pairs[i]} and ${pairs[i + 1]}`);
      return false;
    }
  }

  return true;
}

/**
 * Kiểm tra loại bài và tính hợp lệ
 * @param {string[]} cards - Mảng các lá bài cần kiểm tra
 * @returns {string} Loại bài (MOT_LA, DOI, SANH, v.v.)
 */
function kiemtrahople(cards) {
  console.log("=== CHECKING HAND TYPE FOR:", cards, "===");

  // Kiểm tra đầu vào
  if (!isValidInput(cards)) {
    console.log("Invalid input data, returning KHONG_HOP_LE");
    return rank.KHONG_HOP_LE;
  }

  // Xử lý theo số lượng lá bài
  const handCheckers = {
    1: checkSingleCard,
    2: checkPair,
    3: checkThreeCards,
    4: checkFourCards,
    5: checkFiveCards,
    6: checkSixCards,
    8: checkEightCards,
  };

  const checker = handCheckers[cards.length];
  if (!checker) {
    console.log(
      `Unknown hand type with ${cards.length} cards, returning KHONG_HOP_LE`
    );
    return rank.KHONG_HOP_LE;
  }

  return checker(cards);
}

function isValidInput(cards) {
  return cards && Array.isArray(cards) && cards.length > 0;
}

function checkSingleCard(cards) {
  console.log("Single card, returning MOT_LA");
  return rank.MOT_LA;
}

function checkPair(cards) {
  console.log(
    "Two cards with values:",
    Card.getValue(cards[0]),
    Card.getValue(cards[1])
  );

  if (Card.getValue(cards[0]) === Card.getValue(cards[1])) {
    console.log("Pair (DOI), returning DOI");
    return rank.DOI;
  }

  console.log("Two different cards, returning KHONG_HOP_LE");
  return rank.KHONG_HOP_LE;
}

function checkThreeCards(cards) {
  console.log("Three cards, checking combinations");

  const values = cards.map((card) => Card.getValue(card));
  console.log("Card values:", values);

  // Kiểm tra bộ ba
  if (values[0] === values[1] && values[1] === values[2]) {
    console.log("Three of a kind (BACAY), returning BACAY");
    return rank.BACAY;
  }

  // Kiểm tra sảnh
  if (ktrasanh(cards) === 0) {
    console.log("Straight (SANH), returning SANH");
    return rank.SANH;
  }

  console.log("Not a valid three-card hand, returning KHONG_HOP_LE");
  return rank.KHONG_HOP_LE;
}

function checkFourCards(cards) {
  console.log("Four cards, checking combinations");

  const values = cards.map((card) => Card.getValue(card));
  console.log("Card values:", values);

  // Kiểm tra tứ quý
  if (values.every((val) => val === values[0])) {
    console.log("Four of a kind (TUQUI), returning TUQUI");
    return rank.TUQUI;
  }

  // Kiểm tra sảnh
  if (ktrasanh(cards) === 0) {
    console.log("Straight (SANH), returning SANH");
    return rank.SANH;
  }

  // Kiểm tra đôi thông
  if (ktradoithong(cards) === 0) {
    console.log("Two pairs (DOI_THONG), returning DOI_THONG");
    return rank.DOI_THONG;
  }

  console.log("Not a valid four-card hand, returning KHONG_HOP_LE");
  return rank.KHONG_HOP_LE;
}

function checkFiveCards(cards) {
  console.log("Five cards, checking for straight");

  if (ktrasanh(cards) === 0) {
    console.log("Straight (SANH), returning SANH");
    return rank.SANH;
  }

  console.log("Not a valid five-card hand, returning KHONG_HOP_LE");
  return rank.KHONG_HOP_LE;
}

function checkSixCards(cards) {
  console.log("Six cards, checking for BA DOI THONG");

  if (ktradoithong(cards) === 0) {
    console.log(
      "Three consecutive pairs (BA_DOI_THONG), returning BA_DOI_THONG"
    );
    return rank.BA_DOI_THONG;
  }

  console.log("Not a valid six-card hand, returning KHONG_HOP_LE");
  return rank.KHONG_HOP_LE;
}

function checkEightCards(cards) {
  console.log("Eight cards, checking for BON DOI THONG");

  if (ktradoithong(cards) === 0) {
    console.log(
      "Four consecutive pairs (BON_DOI_THONG), returning BON_DOI_THONG"
    );
    return rank.BON_DOI_THONG;
  }

  console.log("Not a valid eight-card hand, returning KHONG_HOP_LE");
  return rank.KHONG_HOP_LE;
}
