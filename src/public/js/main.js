// Constants (from contants.js)
// ... copy contents of contants.js here ...

// Cards logic (from cards.js)
// ... copy contents of cards.js here ...

// Validation logic (from kiemtrahople.js)
// ... copy contents of kiemtrahople.js here ...

// Processing logic (from xuly.js)
// ... copy contents of xuly.js here ...

// Data loading (from load_data.js)
// ... copy contents of load_data.js here ...

// AI logic (from ai.js)
// ... copy contents of ai.js here ...

// Bot logic (from bot.js)
// ... copy contents of bot.js here ...

// Logger (from logger.js)
// ... copy contents of logger.js here ...

// Utilities (from ultilities.js)
// ... copy contents of ultilities.js here ...

// UI logic (from ui.js)
// ... copy contents of ui.js here ...

// Download functionality (from dowload.js)
// ... copy contents of dowload.js here ...

// Function to load script in order
function loadScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = resolve;
    script.onerror = reject;
    document.body.appendChild(script);
  });
}

// List of scripts to load in order
const scripts = [
  "js/ai/contants.js",
  "js/ai/cards.js",
  "js/ai/kiemtrahople.js",
  "js/ai/xuly.js",
  "js/ai/load_data.js",
  "js/ai/ai.js",
  "js/ai/bot.js",
  "js/ai/logger.js",
  "js/ai/ultilities.js",
  "js/ai/ui.js",
  "js/ai/dowload.js",
];

// Load scripts sequentially
async function loadAllScripts() {
  for (const script of scripts) {
    await loadScript(script);
  }

  // Initialize dynamic elements after all scripts are loaded
  initializeDynamicElements();
}

// Initialize dynamic elements
function initializeDynamicElements() {
  // Audio initialization
  const audioFiles = {
    tai_truoc1: "sound/TienLenGSN.mp3",
    tai_truoc2: "sound/ThuaDiCung.mp3",
    tai_truoc3: "sound/MayHaBuoi.mp3",
    tai_truoc4: "sound/ChetMayNe.mp3",
    tai_truoc5: "sound/DoDi.mp3",
    tai_truoc6: "sound/HaiNe.mp3",
    tai_truoc7: "sound/BatDauGame.mp3",
    tai_truoc8: "sound/Chon_bai.mp3",
    tai_truoc9: "sound/DanhBai.mp3",
    tai_truoc10: "sound/Nhat.mp3",
    tai_truoc11: "sound/Nhi.mp3",
    tai_truoc12: "sound/Ba.mp3",
    tai_truoc13: "sound/Bet.mp3",
    tai_truoc14: "sound/ToiTrang.mp3",
    tai_truoc15: "sound/Button_Click.mp3",
  };

  // Create audio elements dynamically
  Object.entries(audioFiles).forEach(([id, src]) => {
    const audio = document.createElement("audio");
    audio.id = id;
    audio.hidden = true;
    audio.className = "a12";
    audio.controls = true;
    if (id === "tai_truoc1") {
      audio.loop = true;
    } else {
      audio.preload = "none";
    }

    const source = document.createElement("source");
    source.src = src;
    source.type = "audio/mp3";

    audio.appendChild(source);
    document.body.appendChild(audio);
  });

  // Create card images dynamically
  const suits = ["a", "b", "c", "d"];
  const ranks = [
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
    "13",
    "14",
    "16",
  ];

  suits.forEach((suit) => {
    ranks.forEach((rank) => {
      const img = document.createElement("img");
      img.hidden = true;
      img.className = "a1";
      img.src = `anh/${rank}${suit}.png`;
      document.body.appendChild(img);
    });
  });
}

// Start loading scripts when document is ready
$(document).ready(loadAllScripts);
