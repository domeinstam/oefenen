const TOPICS = [
  { code: "china", name: "China", num: 1, cat: 1, labelX: 471.1, labelY: 263.0, fill: "#ffd21f" },
  { code: "india", name: "India", num: 2, cat: 2, labelX: 317.3, labelY: 314.6, fill: "#2fc3e8" },
  { code: "kazachstan", name: "Kazachstan", num: 3, cat: 5, labelX: 264.0, labelY: 181.0, fill: "#b07cf0", alt: ["Kazakhstan", "Kazakstan"] },
  { code: "saoedi-arabie", name: "Saoedi-Arabië", num: 4, cat: 4, labelX: 143.5, labelY: 309.8, fill: "#ff8a3d", alt: ["Saudi-Arabië", "Soedi-Arabië"] },
  { code: "indonesie", name: "Indonesië", num: 5, cat: 3, labelX: 495.7, labelY: 433.5, fill: "#5fd35f" },
  { code: "iran", name: "Iran", num: 6, cat: 4, labelX: 197.4, labelY: 264.6, fill: "#5fd35f" },
  { code: "mongolie", name: "Mongolië", num: 7, cat: 1, labelX: 448.2, labelY: 193.7, fill: "#ff8a3d" },
  { code: "pakistan", name: "Pakistan", num: 8, cat: 2, labelX: 256.6, labelY: 286.9, fill: "#ff6fa8" },
  { code: "turkije", name: "Turkije", num: 9, cat: 4, labelX: 82.3, labelY: 229.2, fill: "#4f8ff7" },
  { code: "myanmar", name: "Myanmar", num: 10, cat: 3, labelX: 402.7, labelY: 318.2, fill: "#ff8a3d", alt: ["Birma"] },
  { code: "afghanistan", name: "Afghanistan", num: 11, cat: 2, labelX: 253.5, labelY: 253.3, fill: "#e0b04a" },
  { code: "oekraine", name: "Oekraïne", num: 12, cat: 6, labelX: 84.6, labelY: 179.2, fill: "#2fc3e8" },
  { code: "thailand", name: "Thailand", num: 13, cat: 3, labelX: 430.7, labelY: 349.6, fill: "#4f8ff7" },
  { code: "turkmenistan", name: "Turkmenistan", num: 14, cat: 5, labelX: 212.5, labelY: 225.3, fill: "#ff8a3d" },
  { code: "papoea-nieuw-guinea", name: "Papoea-Nieuw-Guinea", num: 15, cat: 3, labelX: 642.9, labelY: 456.8, fill: "#ffd21f", alt: ["Papua-Nieuw-Guinea"] },
  { code: "oezbekistan", name: "Oezbekistan", num: 16, cat: 5, labelX: 240.1, labelY: 217.0, fill: "#ffd21f", alt: ["Uzbekistan"] },
  { code: "irak", name: "Irak", num: 17, cat: 4, labelX: 133.1, labelY: 258.9, fill: "#2fc3e8", alt: ["Iraq"] },
  { code: "japan", name: "Japan", num: 18, cat: 1, labelX: 625.4, labelY: 240.6, fill: "#b07cf0" },
  { code: "maleisie", name: "Maleisië", num: 19, cat: 3, labelX: 493.8, labelY: 415.9, fill: "#b07cf0" },
  { code: "vietnam", name: "Vietnam", num: 20, cat: 3, labelX: 450.9, labelY: 318.0, fill: "#ff6fa8" },
  { code: "filipijnen", name: "Filipijnen", num: 21, cat: 3, labelX: 532.5, labelY: 342.0, fill: "#ff6fa8", alt: ["Filippijnen"] },
  { code: "laos", name: "Laos", num: 22, cat: 3, labelX: 436.6, labelY: 328.4, fill: "#5fd35f" },
  { code: "kirgizie", name: "Kirgizië", num: 23, cat: 5, labelX: 293.9, labelY: 215.6, fill: "#e0b04a", alt: ["Kirgizstan", "Kirgistan"] },
  { code: "syrie", name: "Syrië", num: 24, cat: 4, labelX: 108.1, labelY: 249.8, fill: "#e0b04a" },
  { code: "cambodja", name: "Cambodja", num: 25, cat: 3, labelX: 446.2, labelY: 364.2, fill: "#ffd21f", alt: ["Cambodia"] },
  { code: "nepal", name: "Nepal", num: 26, cat: 2, labelX: 331.9, labelY: 280.8, fill: "#b07cf0" },
  { code: "tadzjikistan", name: "Tadzjikistan", num: 27, cat: 5, labelX: 284.7, labelY: 233.0, fill: "#5fd35f", alt: ["Tadjikistan", "Tajikistan"] },
  { code: "bangladesh", name: "Bangladesh", num: 28, cat: 2, labelX: 371.0, labelY: 304.7, fill: "#ff6fa8" },
  { code: "noord-korea", name: "Noord-Korea", num: 29, cat: 1, labelX: 558.3, labelY: 225.1, fill: "#4f8ff7" },
  { code: "zuid-korea", name: "Zuid-Korea", num: 30, cat: 1, labelX: 567.0, labelY: 243.1, fill: "#ff8a3d" },
  { code: "azerbeidzjan", name: "Azerbeidzjan", num: 31, cat: 4, labelX: 160.5, labelY: 221.9, fill: "#b07cf0", alt: ["Azerbaijan"] },
  { code: "georgie", name: "Georgië", num: 32, cat: 4, labelX: 129.9, labelY: 212.4, fill: "#ffd21f" },
  { code: "sri-lanka", name: "Sri Lanka", num: 33, cat: 2, labelX: 325.6, labelY: 392.1, fill: "#4f8ff7" },
  { code: "bhutan", name: "Bhutan", num: 34, cat: 2, labelX: 372.2, labelY: 288.3, fill: "#4f8ff7" },
  { code: "taiwan", name: "Taiwan", num: 35, cat: 1, labelX: 529.5, labelY: 309.0, fill: "#e0b04a" },
  { code: "armenie", name: "Armenië", num: 36, cat: 4, labelX: 141.6, labelY: 221.9, fill: "#2fc3e8" },
  { code: "israel", name: "Israël", num: 37, cat: 4, labelX: 101.6, labelY: 270.9, fill: "#5fd35f" },
  { code: "koeweit", name: "Koeweit", num: 38, cat: 4, labelX: 165.2, labelY: 278.4, fill: "#e0b04a", alt: ["Kuwait"] },
  { code: "singapore", name: "Singapore", num: 39, cat: 3, labelX: 453.4, labelY: 421.7, fill: "#2fc3e8" },
  { code: "rusland", name: "Rusland", num: 40, cat: 6, labelX: 395.9, labelY: 104.0, fill: "#f3bcc8" },
];

const GROUPS = [
  { label: "Oost-Azië", cat: 1, color: "#ffd21f" },
  { label: "Zuid-Azië", cat: 2, color: "#2fc3e8" },
  { label: "Zuidoost-Azië", cat: 3, color: "#b07cf0" },
  { label: "Midden-Oosten en Kaukasus", cat: 4, color: "#ff8a3d" },
  { label: "Centraal-Azië", cat: 5, color: "#5fd35f" },
  { label: "Rusland en Oekraïne", cat: 6, color: "#ff6fa8" },
];

const APP_VERSION = "1.3.2";
const SVG_NS = "http://www.w3.org/2000/svg";
const STORAGE_KEY = "azie-landen-selectie";
const LABELS_STORAGE_KEY = "azie-landen-nummers";
const PLAYER_STORAGE_KEY = "azie-landen-speler";
const MODE_STORAGE_KEY = "azie-landen-modus";
const HARD_TOPICS_STORAGE_KEY = "azie-landen-moeilijk";

const sortedTopics = [...TOPICS].sort((a, b) => a.name.localeCompare(b.name, "nl"));
const topicByCode = Object.fromEntries(TOPICS.map((topic) => [topic.code, topic]));
const batches = GROUPS.map((group) => ({
  ...group,
  codes: TOPICS.filter((topic) => topic.cat === group.cat).map((topic) => topic.code),
}));

const ui = {
  batchGrid: document.querySelector("#batchGrid"),
  clearBtn: document.querySelector("#clearBtn"),
  exitFullscreenBtn: document.querySelector("#exitFullscreenBtn"),
  exitFullscreenProgress: document.querySelector("#exitFullscreenProgress"),
  labelToggle: document.querySelector("#labelToggle"),
  mapGrid: document.querySelector("#mapGrid"),
  nameGate: document.querySelector("#nameGate"),
  nameGateForm: document.querySelector("#nameGateForm"),
  nameGateInput: document.querySelector("#nameGateInput"),
  nameGateSkip: document.querySelector("#nameGateSkip"),
  toast: document.querySelector("#toast"),
  playerForm: document.querySelector("#playerForm"),
  playerGreeting: document.querySelector("#playerGreeting"),
  playerNameInput: document.querySelector("#playerNameInput"),
  practiceModeInputs: document.querySelectorAll('input[name="practiceMode"]'),
  progressText: document.querySelector("#progressText"),
  promptText: document.querySelector("#promptText"),
  repeatBtn: document.querySelector("#repeatBtn"),
  roundLabel: document.querySelector("#roundLabel"),
  scoreText: document.querySelector("#scoreText"),
  searchInput: document.querySelector("#searchInput"),
  selectAllBtn: document.querySelector("#selectAllBtn"),
  selectedCount: document.querySelector("#selectedCount"),
  selectedTags: document.querySelector("#selectedTags"),
  selectionText: document.querySelector("#selectionText"),
  shuffleBtn: document.querySelector("#shuffleBtn"),
  startBtn: document.querySelector("#startBtn"),
  stateList: document.querySelector("#stateList"),
  streakText: document.querySelector("#streakText"),
  typedAnswer: document.querySelector("#typedAnswer"),
  typingForm: document.querySelector("#typingForm"),
  typingMessage: document.querySelector("#typingMessage"),
  typingSubmit: document.querySelector("#typingSubmit"),
};

let selected = new Set(loadSelection());
let labelsVisible = loadLabelPreference();
let playerName = loadPlayerName();
let practiceMode = loadPracticeMode();
let hardTopics = new Set(loadHardTopics());
let searchTerm = "";
let feedback = null;
let typingMessage = "";
let session = createEmptySession();
let mapSvg = null;
let mapElements = new Map();
let audioContext = null;

function createEmptySession() {
  return {
    active: false,
    order: [],
    index: 0,
    correct: 0,
    attempts: 0,
    isReview: false,
    streak: 0,
    done: new Set(),
    firstTryCorrect: new Set(),
    missedInRound: new Set(),
    wrongCounts: {},
  };
}

function loadSelection() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    const validCodes = new Set(TOPICS.map((topic) => topic.code));
    const cleaned = saved.filter((code) => validCodes.has(code));

    if (cleaned.length) {
      return cleaned;
    }
  } catch {
    localStorage.removeItem(STORAGE_KEY);
  }

  return TOPICS.filter((topic) => topic.cat === 1).map((topic) => topic.code);
}

function saveSelection() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...selected]));
}

function loadHardTopics() {
  try {
    const saved = JSON.parse(localStorage.getItem(HARD_TOPICS_STORAGE_KEY) || "[]");
    const validCodes = new Set(TOPICS.map((topic) => topic.code));
    return saved.filter((code) => validCodes.has(code));
  } catch {
    localStorage.removeItem(HARD_TOPICS_STORAGE_KEY);
    return [];
  }
}

function saveHardTopics() {
  localStorage.setItem(HARD_TOPICS_STORAGE_KEY, JSON.stringify([...hardTopics]));
}

function selectedHardCodes() {
  return [...hardTopics].filter((code) => selected.has(code));
}

function loadLabelPreference() {
  return localStorage.getItem(LABELS_STORAGE_KEY) !== "off";
}

function saveLabelPreference() {
  localStorage.setItem(LABELS_STORAGE_KEY, labelsVisible ? "on" : "off");
}

function loadPlayerName() {
  return localStorage.getItem(PLAYER_STORAGE_KEY)?.trim() || "";
}

function savePlayerName() {
  if (playerName) {
    localStorage.setItem(PLAYER_STORAGE_KEY, playerName);
  } else {
    localStorage.removeItem(PLAYER_STORAGE_KEY);
  }
}

function loadPracticeMode() {
  return localStorage.getItem(MODE_STORAGE_KEY) === "type" ? "type" : "click";
}

function savePracticeMode() {
  localStorage.setItem(MODE_STORAGE_KEY, practiceMode);
}

function updatePracticeMode() {
  ui.practiceModeInputs.forEach((input) => {
    input.checked = input.value === practiceMode;
  });

  ui.typingForm.classList.toggle("typing-hidden", practiceMode !== "type");
  ui.mapGrid.classList.toggle("typing-mode", practiceMode === "type");
}

function updateLabelVisibility() {
  ui.mapGrid.classList.toggle("labels-hidden", !labelsVisible);

  if (ui.labelToggle) {
    ui.labelToggle.checked = labelsVisible;
  }
}

function renderPlayer() {
  if (ui.playerGreeting) {
    ui.playerGreeting.textContent = playerName
      ? `Veel succes, ${playerName}!`
      : "Wie speelt er vandaag?";
  }

  if (ui.playerNameInput && document.activeElement !== ui.playerNameInput) {
    ui.playerNameInput.value = playerName;
  }
}

function shuffle(items) {
  const copy = [...items];

  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }

  return copy;
}

function getAudioContext() {
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;

  if (!AudioContextClass) {
    return null;
  }

  if (!audioContext) {
    audioContext = new AudioContextClass();
  }

  if (audioContext.state === "suspended") {
    audioContext.resume();
  }

  return audioContext;
}

function playTone({ frequency, start, duration, type = "sine", volume = 0.08 }) {
  const context = getAudioContext();

  if (!context) {
    return;
  }

  const oscillator = context.createOscillator();
  const gain = context.createGain();
  const startTime = context.currentTime + start;
  const endTime = startTime + duration;

  oscillator.type = type;
  oscillator.frequency.setValueAtTime(frequency, startTime);
  gain.gain.setValueAtTime(0.0001, startTime);
  gain.gain.exponentialRampToValueAtTime(volume, startTime + 0.025);
  gain.gain.exponentialRampToValueAtTime(0.0001, endTime);

  oscillator.connect(gain);
  gain.connect(context.destination);
  oscillator.start(startTime);
  oscillator.stop(endTime + 0.02);
}

function playCorrectSound() {
  playTone({ frequency: 587.33, start: 0, duration: 0.11, volume: 0.1 });
  playTone({ frequency: 783.99, start: 0.08, duration: 0.14, volume: 0.11 });
  playTone({ frequency: 1174.66, start: 0.2, duration: 0.22, volume: 0.1 });
}

function playWrongSound() {
  playTone({ frequency: 220, start: 0, duration: 0.22, type: "sawtooth", volume: 0.18 });
  playTone({ frequency: 146.83, start: 0.13, duration: 0.3, type: "triangle", volume: 0.16 });
}

function currentCode() {
  return session.order[session.index] || null;
}

function normalizeAnswer(value) {
  return value
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z]/g, "");
}

function typoAllowance(value) {
  if (value.length <= 4) return 1;
  if (value.length <= 7) return 2;
  return 3;
}

function damerauLevenshtein(a, b) {
  const rows = a.length + 1;
  const cols = b.length + 1;
  const matrix = Array.from({ length: rows }, () => Array(cols).fill(0));

  for (let i = 0; i < rows; i += 1) matrix[i][0] = i;
  for (let j = 0; j < cols; j += 1) matrix[0][j] = j;

  for (let i = 1; i < rows; i += 1) {
    for (let j = 1; j < cols; j += 1) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1,
        matrix[i][j - 1] + 1,
        matrix[i - 1][j - 1] + cost
      );

      if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) {
        matrix[i][j] = Math.min(matrix[i][j], matrix[i - 2][j - 2] + 1);
      }
    }
  }

  return matrix[a.length][b.length];
}

function normalizedNames(topic) {
  return [topic.name, ...(topic.alt || [])].map(normalizeAnswer);
}

function distanceToTopic(normalized, topic) {
  return Math.min(...normalizedNames(topic).map((name) => damerauLevenshtein(normalized, name)));
}

function findClosestTopic(value) {
  const normalized = normalizeAnswer(value);

  if (!normalized) {
    return null;
  }

  let best = null;

  TOPICS.forEach((topic) => {
    const distance = distanceToTopic(normalized, topic);

    if (!best || distance < best.distance) {
      best = { topic, distance };
    }
  });

  return best;
}

function isTypedAnswerCorrect(value, targetCode) {
  const normalized = normalizeAnswer(value);
  const target = topicByCode[targetCode];

  if (!normalized || !target) {
    return false;
  }

  const targetNames = normalizedNames(target);

  if (targetNames.includes(normalized)) {
    return true;
  }

  // Typfout mag, maar alleen als het antwoord duidelijk het dichtst bij dit land ligt
  // (anders zou "Irak" goed gerekend worden bij Iran).
  const withinAllowance = targetNames.some((name) => {
    const allowance = typoAllowance(name);
    return (
      damerauLevenshtein(normalized, name) <= allowance &&
      Math.abs(normalized.length - name.length) <= allowance
    );
  });

  if (!withinAllowance) {
    return false;
  }

  const targetDistance = distanceToTopic(normalized, target);
  const closestOther = Math.min(
    ...TOPICS.filter((topic) => topic.code !== targetCode).map((topic) =>
      distanceToTopic(normalized, topic)
    )
  );

  return targetDistance < closestOther;
}

function setSelection(codes) {
  selected = new Set(codes);
  session = createEmptySession();
  feedback = null;
  typingMessage = "";
  saveSelection();
  render();
}

function toggleBatchSelection(codes) {
  const batchIsSelected = codes.every((code) => selected.has(code));

  if (batchIsSelected) {
    codes.forEach((code) => selected.delete(code));
  } else {
    codes.forEach((code) => selected.add(code));
  }

  session = createEmptySession();
  feedback = null;
  typingMessage = "";
  saveSelection();
  render();
}

function toggleTopic(code) {
  if (selected.has(code)) {
    selected.delete(code);
  } else {
    selected.add(code);
  }

  session = createEmptySession();
  feedback = null;
  typingMessage = "";
  saveSelection();
  render();
}

function startSessionWith(codes, isReview = false) {
  const cleanCodes = codes.filter((code) => topicByCode[code]);

  if (!cleanCodes.length) {
    ui.promptText.textContent = "Kies eerst minimaal 1 land.";
    return;
  }

  session = {
    active: true,
    order: shuffle(cleanCodes),
    index: 0,
    correct: 0,
    attempts: 0,
    isReview,
    streak: 0,
    done: new Set(),
    firstTryCorrect: new Set(),
    missedInRound: new Set(),
    wrongCounts: {},
  };
  feedback = null;
  typingMessage = "";
  ui.typedAnswer.value = "";
  render();
  enterMobileFullscreenIfNeeded();
  updateMapView();
  window.requestAnimationFrame(() => {
    scrollMapToCodes(practiceMode === "type" ? [currentCode()] : session.order, "auto");
  });

  if (practiceMode === "type" && !window.matchMedia("(max-width: 760px)").matches) {
    ui.typedAnswer?.focus();
  }
}

function enterMobileFullscreenIfNeeded() {
  if (window.matchMedia("(max-width: 760px)").matches) {
    document.body.classList.add("round-fullscreen");
  }
}

function exitMobileFullscreen() {
  document.body.classList.remove("round-fullscreen");
  updateMapView();
}

// Op smalle schermen is de kaart breder dan het scherm: schuif het juiste stuk in beeld.
function scrollMapToCodes() {}

const FULL_VIEW = { x: 0, y: 0, width: 900, height: 500 };
const bboxCache = new Map();

function topicBox(code) {
  if (!bboxCache.has(code)) {
    const boxes = (mapElements.get(code) || []).map((element) => element.getBBox());
    if (!boxes.length) return null;
    const x1 = Math.min(...boxes.map((b) => b.x));
    const y1 = Math.min(...boxes.map((b) => b.y));
    const x2 = Math.max(...boxes.map((b) => b.x + b.width));
    const y2 = Math.max(...boxes.map((b) => b.y + b.height));
    bboxCache.set(code, { x1, y1, x2, y2 });
  }
  return bboxCache.get(code);
}

// Tijdens een ronde zoomt de kaart in op de landen die gevraagd worden, zodat alles op het scherm past.
function updateMapView() {
  if (!mapSvg) return;

  let view = FULL_VIEW;
  const codes = session.order.length && (session.active || feedback) ? session.order : [];
  const boxes = codes.map(topicBox).filter(Boolean);

  if (boxes.length) {
    const x1 = Math.min(...boxes.map((b) => b.x1));
    const y1 = Math.min(...boxes.map((b) => b.y1));
    const x2 = Math.max(...boxes.map((b) => b.x2));
    const y2 = Math.max(...boxes.map((b) => b.y2));
    const pad = Math.max(14, Math.max(x2 - x1, y2 - y1) * 0.12);
    const left = Math.max(0, x1 - pad);
    const top = Math.max(0, y1 - pad);
    view = {
      x: left,
      y: top,
      width: Math.min(900, x2 + pad) - left,
      height: Math.min(500, y2 + pad) - top,
    };
  }

  mapSvg.setAttribute("viewBox", `${view.x} ${view.y} ${view.width} ${view.height}`);
  // --ls = kaart-eenheden per schermpixel, zodat nummers en stippen op elk scherm even groot blijven
  const rect = mapSvg.getBoundingClientRect();
  const scale =
    rect.width && rect.height
      ? Math.max(view.width / rect.width, view.height / rect.height)
      : view.width / 900;
  mapSvg.style.setProperty("--ls", String(scale));
  // Nummer nooit groter dan het land zelf: bij kleine landen schaalt het cijfer mee omlaag.
  mapSvg.querySelectorAll(".country-label").forEach((label) => {
    const box = topicBox(label.dataset.code);
    const landSize = box ? Math.sqrt((box.x2 - box.x1) * (box.y2 - box.y1)) : 20;
    const size = Math.min(10 * scale, Math.max(0.42 * landSize, 6.5 * Math.min(scale, 1.3)));
    label.style.fontSize = `${size.toFixed(2)}px`;
    label.style.strokeWidth = `${(size * 0.24).toFixed(2)}px`;
  });
  mapSvg.querySelectorAll("#tiny circle").forEach((circle) => {
    circle.setAttribute("r", String(Math.min(6.5 * scale, 7)));
  });
}

function startSession() {
  startSessionWith([...selected], false);
}

function startReviewSession() {
  const reviewCodes = selectedHardCodes();

  if (!reviewCodes.length) {
    ui.roundLabel.textContent = "Geen herhaalronde nodig";
    ui.promptText.textContent = "Deze gekozen landen zitten er al goed in.";
    return;
  }

  startSessionWith(reviewCodes, true);
}

function nameSuffix() {
  return playerName ? `, ${playerName}` : "";
}

let toastTimer = null;

function showToast(text) {
  if (!ui.toast) return;
  ui.toast.textContent = text;
  ui.toast.classList.add("show");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => ui.toast.classList.remove("show"), 5500);
}

const STREAK_PRAISE = [
  (n) => `Goed bezig${nameSuffix()}! ${n} goed achter elkaar.`,
  (n) => `Top${nameSuffix()}! ${n} op rij goed.`,
  (n) => `Wat knap${nameSuffix()}! Al ${n} achter elkaar.`,
  (n) => `Je bent lekker bezig${nameSuffix()}: ${n} op rij!`,
];

// Eén compliment per antwoord: einde van de ronde, halverwege, een reeks goede, of doorzetten.
function praiseFor(code, hadMistake) {
  const total = session.order.length;

  if (session.done.size >= total) {
    return session.firstTryCorrect.size === total
      ? `Foutloos${nameSuffix()}! Alles in één keer goed.`
      : `Ronde klaar${nameSuffix()}! Mooi gedaan.`;
  }

  if (total >= 6 && session.done.size === Math.floor(total / 2)) {
    return `Al de helft${nameSuffix()}! Ga zo door.`;
  }

  if (session.streak > 0 && session.streak % 3 === 0) {
    const options = STREAK_PRAISE;
    return options[(session.streak / 3 - 1) % options.length](session.streak);
  }

  if (hadMistake && (session.wrongCounts[code] || 0) >= 2) {
    return `Mooi dat je doorzette${nameSuffix()}!`;
  }

  return null;
}

function openNameGate() {
  ui.nameGate.hidden = false;
  document.querySelector(".app-shell").inert = true;
  ui.nameGateInput.focus();
}

function closeNameGate() {
  ui.nameGate.hidden = true;
  document.querySelector(".app-shell").inert = false;
}

function markCorrect(code) {
  const hadMistake = session.missedInRound.has(code);
  session.attempts += 1;
  session.correct += 1;
  session.streak += 1;
  session.done.add(code);

  if (!hadMistake) {
    session.firstTryCorrect.add(code);
    hardTopics.delete(code);
    saveHardTopics();
  }

  feedback = { code, type: "correct", hintCode: null };
  typingMessage = "Yes, goed.";
  const praise = praiseFor(code, hadMistake);

  if (praise) {
    showToast(praise);
  }

  ui.typedAnswer.value = "";
  playCorrectSound();
  render();

  window.setTimeout(() => {
    session.index += 1;
    feedback = null;
    typingMessage = "";

    if (session.index >= session.order.length) {
      session.active = false;
    }

    render();

    if (session.active && practiceMode === "type") {
      scrollMapToCodes([currentCode()]);
    }
  }, 620);
}

function markWrong(code, target, message = "Bijna. Kijk nog eens goed.") {
  session.attempts += 1;
  session.streak = 0;
  session.missedInRound.add(target);
  hardTopics.add(target);
  saveHardTopics();
  session.wrongCounts[target] = (session.wrongCounts[target] || 0) + 1;
  // Pas na de tweede fout licht het gevraagde land op (en blijft oplichten tot het goed is).
  const showHint = session.wrongCounts[target] >= 2;
  const wrongFeedback = { code: code || null, type: "wrong", hintCode: showHint ? target : null };
  feedback = wrongFeedback;
  typingMessage = showHint && practiceMode === "click" ? "Kijk: het land licht nu op." : message;
  playWrongSound();
  render();

  window.setTimeout(() => {
    if (feedback === wrongFeedback) {
      feedback = null;
      typingMessage = "";
      render();
    }
  }, 1300);
}

function answer(code) {
  if (!session.active) {
    // Op de telefoon tik je al snel per ongeluk een land aan tijdens het scrollen;
    // daar kies je landen alleen via de groepen en de lijst.
    if (!window.matchMedia("(max-width: 760px)").matches) {
      toggleTopic(code);
    }
    return;
  }

  if (practiceMode !== "click") {
    typingMessage = "Je staat op Typen. Gebruik het antwoordveld.";
    renderStatus();
    return;
  }

  const target = currentCode();

  if (!target) {
    return;
  }

  if (code === target) {
    markCorrect(code);
  } else {
    markWrong(code, target);
  }
}

function submitTypedAnswer(event) {
  event.preventDefault();

  if (practiceMode !== "type") {
    typingMessage = "Kies eerst Typen als oefenstand.";
    renderStatus();
    return;
  }

  if (!session.active) {
    typingMessage = "Start eerst een ronde.";
    renderStatus();
    return;
  }

  const target = currentCode();
  const typedValue = ui.typedAnswer.value;
  const closestTopic = findClosestTopic(typedValue)?.topic;

  if (!target || !typedValue.trim()) {
    typingMessage = "Typ eerst iets in.";
    renderStatus();
    return;
  }

  if (isTypedAnswerCorrect(typedValue, target)) {
    markCorrect(target);
    return;
  }

  const closestIsTarget = closestTopic?.code === target;
  const message =
    closestTopic && !closestIsTarget
      ? `Dat is ${closestTopic.name}. Kijk nog eens naar het zwarte land.`
      : "Nog niet goed. Kijk nog eens naar het zwarte land.";
  markWrong(closestIsTarget ? null : closestTopic?.code || null, target, message);
}

function loadRealMap() {
  try {
    mapSvg = ui.mapGrid.querySelector("svg");

    if (!mapSvg) {
      throw new Error("De kaart bevat geen SVG.");
    }

    mapSvg.classList.add("azie-map");
    mapSvg.setAttribute("role", "img");
    mapSvg.setAttribute("aria-label", "Kaart met landen in en rondom Azië");
    mapSvg.setAttribute("preserveAspectRatio", "xMidYMid meet");

    mapElements = new Map();

    TOPICS.forEach((topic) => {
      const elements = [
        ...mapSvg.querySelectorAll(`.cn-${topic.code} path, circle.cn-${topic.code}`),
      ];

      if (!elements.length) {
        return;
      }

      elements.forEach((element, index) => {
        element.classList.add("country", `region-${topic.cat}`);
        element.style.setProperty("--base", topic.fill);
        element.setAttribute("data-code", topic.code);

        // Alleen het eerste vlak per land in de tab-volgorde (eilandenrijken hebben er tientallen).
        if (index === 0) {
          element.setAttribute("tabindex", "0");
          element.setAttribute("role", "button");
          element.setAttribute("aria-label", `Land ${topic.num}`);
        }

        element.addEventListener("click", () => answer(topic.code));
        element.addEventListener("keydown", (event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            answer(topic.code);
          }
        });
      });

      mapElements.set(topic.code, elements);
    });

    addTopicLabels();
    updateLabelVisibility();
    renderMap();
    updateMapView();
  } catch (error) {
    ui.mapGrid.innerHTML = `
      <div class="map-loading">
        De kaart kon niet laden. Herlaad de pagina.
      </div>
    `;
    console.error(error);
  }
}

function addTopicLabels() {
  const oldLayer = mapSvg.querySelector("#topicLabels");
  oldLayer?.remove();

  const labelLayer = document.createElementNS(SVG_NS, "g");
  labelLayer.setAttribute("id", "topicLabels");

  TOPICS.forEach((topic) => {
    if (!mapElements.has(topic.code)) {
      return;
    }

    const label = document.createElementNS(SVG_NS, "text");
    label.classList.add("country-label", `region-${topic.cat}`);
    label.setAttribute("data-code", topic.code);
    label.setAttribute("x", String(topic.labelX));
    label.setAttribute("y", String(topic.labelY));
    label.textContent = String(topic.num);
    labelLayer.append(label);
  });

  mapSvg.append(labelLayer);
}

function renderBatches() {
  ui.batchGrid.replaceChildren(
    ...batches.map((batch) => {
      const active = batch.codes.every((code) => selected.has(code));
      const button = document.createElement("button");
      button.type = "button";
      button.className = `batch-btn${active ? " active" : ""}`;
      button.innerHTML = `
        <span class="batch-name"><strong>${batch.label}</strong></span>
        <span>${active ? "aan" : batch.codes.length}</span>
      `;
      button.addEventListener("click", () => toggleBatchSelection(batch.codes));
      return button;
    })
  );
}

function renderStateList() {
  const normalized = searchTerm.trim().toLowerCase();
  const rows = sortedTopics
    .filter((topic) => !normalized || topic.name.toLowerCase().includes(normalized))
    .map((topic) => {
      const button = document.createElement("button");
      const isSelected = selected.has(topic.code);
      button.type = "button";
      button.className = `state-row${isSelected ? " selected" : ""}`;
      button.setAttribute("aria-pressed", String(isSelected));
      button.innerHTML = `
        <span class="state-main">
          <strong>${topic.name}</strong>
          <span class="state-code">${topic.num}</span>
        </span>
        <span class="check" aria-hidden="true"></span>
      `;
      button.addEventListener("click", () => toggleTopic(topic.code));
      return button;
    });

  ui.stateList.replaceChildren(...rows);
}

function renderMap() {
  TOPICS.forEach((topic) => {
    const elements = mapElements.get(topic.code);

    if (!elements || !elements.length) {
      return;
    }

    const isSelected = selected.has(topic.code);
    const isDone = session.done.has(topic.code);
    const isFeedback = feedback?.code === topic.code;
    const isHint =
      feedback?.hintCode === topic.code ||
      (session.active &&
        practiceMode === "click" &&
        currentCode() === topic.code &&
        (session.wrongCounts[topic.code] || 0) >= 2 &&
        feedback?.type !== "correct");
    const isTypingTarget =
      session.active && practiceMode === "type" && currentCode() === topic.code;

    elements.forEach((element) => {
      element.classList.toggle("selected", isSelected);
      element.classList.toggle("dimmed", !isSelected && selected.size > 0);
      element.classList.toggle("done", isDone);
      element.classList.toggle("correct", isFeedback && feedback.type === "correct");
      element.classList.toggle("wrong", isFeedback && feedback.type === "wrong");
      element.classList.toggle("hint", isHint);
      element.classList.toggle("typing-target", isTypingTarget);
    });

    const label = mapSvg?.querySelector(`.country-label[data-code="${topic.code}"]`);
    label?.classList.toggle("typing-target-label", isTypingTarget);
    label?.classList.toggle("dimmed-label", !isSelected && selected.size > 0 && !isTypingTarget);
    label?.classList.toggle("done-label", isDone && !isFeedback);
    label?.classList.toggle("correct-label", isFeedback && feedback.type === "correct");
    label?.classList.toggle("wrong-label", (isFeedback && feedback.type === "wrong") || isHint);
  });
}

function renderStatus() {
  const total = session.order.length || selected.size;
  const progress = session.done.size;
  const activeCode = currentCode();
  const activeTopic = activeCode ? topicByCode[activeCode] : null;
  const selectedTopics = sortedTopics.filter((topic) => selected.has(topic.code));
  const firstTry = session.firstTryCorrect.size;
  const needsPractice = selectedHardCodes().length;

  ui.selectedCount.textContent = `${selected.size} gekozen`;
  ui.progressText.textContent = `Gedaan ${progress}/${total}`;
  ui.scoreText.textContent = `Direct goed ${firstTry}`;
  ui.streakText.textContent = `Nog lastig ${needsPractice}`;

  ui.startBtn.textContent = session.active ? "Herstart" : "Start ronde";
  ui.shuffleBtn.disabled = !selected.size;
  ui.repeatBtn.classList.toggle("is-hidden", needsPractice === 0);
  ui.repeatBtn.disabled = session.active || needsPractice === 0;
  ui.repeatBtn.textContent = `Herhaal moeilijke landen${needsPractice ? ` (${needsPractice})` : ""}`;
  ui.typedAnswer.disabled = !session.active || practiceMode !== "type";
  ui.typingSubmit.disabled = !session.active || practiceMode !== "type";
  ui.typingMessage.textContent =
    typingMessage ||
    (session.active && practiceMode === "type"
      ? "Typ de naam van het zwarte land. Spelling mag een beetje afwijken."
      : "");

  if (session.active && activeTopic) {
    const modeLabel = practiceMode === "type" ? "Typen" : "Klikken";
    ui.roundLabel.textContent = `${modeLabel} - ${session.index + 1} van ${session.order.length}`;

    if (ui.exitFullscreenProgress) {
      ui.exitFullscreenProgress.textContent = `${session.index + 1}/${session.order.length}`;
    }

    ui.promptText.textContent =
      practiceMode === "type"
        ? "Welk land is zwart gekleurd?"
        : `Zoek: ${activeTopic.name}`;
  } else if (session.order.length && session.index >= session.order.length) {
    ui.roundLabel.textContent = "Ronde klaar";

    if (ui.exitFullscreenProgress) {
      ui.exitFullscreenProgress.textContent = "klaar";
    }

    if (session.isReview && needsPractice > 0) {
      ui.promptText.textContent = `Nog ${needsPractice} lastige over. Nog een keer?`;
    } else if (session.isReview) {
      ui.promptText.textContent = "Mooi, je hebt er weer een paar gefixt.";
    } else if (needsPractice > 0) {
      ui.promptText.textContent = `Deze landen oefenen we nog even: ${needsPractice}`;
    } else {
      ui.promptText.textContent = `Goed bezig${nameSuffix()}. Alles zit erin.`;
    }
  } else if (selected.size) {
    ui.roundLabel.textContent = "Klaar voor een ronde?";
    ui.promptText.textContent = "Kies klikken of typen en ga ervoor.";
  } else {
    ui.roundLabel.textContent = "Geen landen gekozen";
    ui.promptText.textContent = "Kies een paar landen en bouw je ronde.";
  }

  if (selectedTopics.length) {
    const firstFew = selectedTopics.slice(0, 4).map((topic) => topic.name).join(", ");
    const rest = selectedTopics.length > 4 ? ` +${selectedTopics.length - 4}` : "";
    ui.selectionText.textContent = `Je oefent nu ${selectedTopics.length}: ${firstFew}${rest}.`;
  } else {
    ui.selectionText.textContent = "Nog geen landen in deze set.";
  }

  ui.selectedTags.replaceChildren(
    ...(selectedTopics.length <= 8
      ? selectedTopics.map((topic) => {
          const tag = document.createElement("span");
          tag.className = "tag";
          tag.textContent = String(topic.num);
          tag.title = topic.name;
          return tag;
        })
      : [])
  );
}

function render() {
  updateMapView();
  renderBatches();
  renderStateList();
  renderMap();
  renderPlayer();
  renderStatus();
  updatePracticeMode();
  updateLabelVisibility();
}

ui.startBtn.addEventListener("click", startSession);
ui.shuffleBtn.addEventListener("click", startSession);
ui.repeatBtn.addEventListener("click", startReviewSession);
ui.selectAllBtn.addEventListener("click", () => setSelection(TOPICS.map((topic) => topic.code)));
ui.clearBtn.addEventListener("click", () => setSelection([]));
ui.labelToggle?.addEventListener("change", (event) => {
  labelsVisible = event.target.checked;
  saveLabelPreference();
  updateLabelVisibility();
});
ui.practiceModeInputs.forEach((input) => {
  input.addEventListener("change", (event) => {
    if (!event.target.checked) {
      return;
    }

    practiceMode = event.target.value;
    feedback = null;
    typingMessage = "";
    ui.typedAnswer.value = "";
    savePracticeMode();
    render();

    if (practiceMode === "type" && session.active) {
      ui.typedAnswer.focus();
    }
  });
});
ui.playerForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  playerName = ui.playerNameInput.value.trim();
  savePlayerName();
  renderPlayer();
  ui.startBtn.focus();
});
ui.typingForm?.addEventListener("submit", submitTypedAnswer);
ui.searchInput.addEventListener("input", (event) => {
  searchTerm = event.target.value;
  renderStateList();
});
ui.exitFullscreenBtn?.addEventListener("click", exitMobileFullscreen);
ui.nameGateForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const value = ui.nameGateInput.value.trim();

  if (!value) {
    ui.nameGateInput.focus();
    return;
  }

  playerName = value.slice(0, 24);
  savePlayerName();
  renderPlayer();
  closeNameGate();
  showToast(`Welkom${nameSuffix()}! Kies een regio en druk op Start ronde.`);
});
ui.nameGateSkip?.addEventListener("click", closeNameGate);
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !ui.nameGate.hidden) {
    closeNameGate();
  }
});

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.getRegistrations().then((regs) => regs.forEach((r) => r.unregister()));
}

document.querySelectorAll("#appVersion, #appVersionTop").forEach((el) => {
  el.textContent = `v${APP_VERSION}`;
});

render();
loadRealMap();
window.addEventListener("resize", updateMapView);

if (!playerName) {
  openNameGate();
}
