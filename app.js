const STORAGE_KEY = "lwb_progress_v1";
const defaultState = { lessons: [], quizzes: [], activities: [] };
let state;
try { state = { ...defaultState, ...JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}") }; }
catch { state = { ...defaultState }; }

const subjects = {
  "Digital Technology": {
    title: "Introduction to Digital Technology",
    intro: "Digital technology uses electronic tools and systems to create, store, process and share information.",
    points: ["Digital devices process information using electronic signals.", "Examples include computers, smartphones and digital cameras.", "Digital technology supports learning, communication and work."]
  },
  "Mathematics": {
    title: "Introduction to Mathematics",
    intro: "Mathematics is the study of numbers, quantities, shapes and patterns.",
    points: ["Numbers are used for counting and measuring.", "Addition combines quantities.", "Subtraction finds the difference between quantities."]
  },
  "English Language": {
    title: "Introduction to English Language",
    intro: "English is a language used for speaking, reading, writing and communication.",
    points: ["A sentence expresses a complete thought.", "A noun names a person, place, animal or thing.", "Punctuation helps make writing clear."]
  },
  "Basic Science": {
    title: "Introduction to Basic Science",
    intro: "Basic Science helps us understand the natural world through observation and investigation.",
    points: ["Living things need suitable conditions to survive.", "Matter exists as solid, liquid or gas.", "Observation helps us learn about our environment."]
  },
  "Government": {
    title: "Introduction to Government",
    intro: "Government is the system or group of people responsible for making and enforcing rules in a society.",
    points: ["Government maintains law and order.", "Citizens have rights and responsibilities.", "The three arms of government are the legislature, executive and judiciary."]
  }
};

function save() { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); renderStats(); }
function addActivity(message) {
  state.activities.unshift({ message, date: new Date().toLocaleString() });
  state.activities = state.activities.slice(0, 12);
  save();
}
function showView(name) {
  document.querySelectorAll(".view").forEach(v => v.classList.toggle("active", v.id === `view-${name}`));
  document.querySelectorAll(".nav-link").forEach(b => b.classList.toggle("active", b.dataset.view === name));
  document.getElementById("nav").classList.remove("open");
  if (name === "progress") renderProgress();
  window.scrollTo({ top: 0, behavior: "smooth" });
}
document.querySelectorAll("[data-view]").forEach(b => b.addEventListener("click", () => showView(b.dataset.view)));
document.querySelectorAll("[data-go]").forEach(b => b.addEventListener("click", () => showView(b.dataset.go)));
document.getElementById("menuToggle").addEventListener("click", () => document.getElementById("nav").classList.toggle("open"));

function renderLesson() {
  const subject = document.getElementById("subjectSelect").value;
  const data = subjects[subject];
  document.getElementById("lessonTitle").textContent = data.title;
  document.getElementById("lessonIntro").textContent = data.intro;
  const ul = document.getElementById("lessonPoints");
  ul.innerHTML = "";
  data.points.forEach(point => { const li = document.createElement("li"); li.textContent = point; ul.appendChild(li); });
  document.getElementById("lessonFeedback").textContent = "";
}
document.getElementById("subjectSelect").addEventListener("change", renderLesson);
document.getElementById("lessonLevel").addEventListener("change", () => {
  document.querySelector(".lesson-label").textContent = `SAMPLE LESSON · ${document.getElementById("lessonLevel").value.toUpperCase()}`;
});
document.getElementById("completeLesson").addEventListener("click", () => {
  const subject = document.getElementById("subjectSelect").value;
  if (!state.lessons.includes(subject)) state.lessons.push(subject);
  addActivity(`Completed sample lesson: ${subject}`);
  document.getElementById("lessonFeedback").textContent = "Lesson marked as completed. Well done!";
});

document.getElementById("quizForm").addEventListener("submit", event => {
  event.preventDefault();
  const form = new FormData(event.target);
  const keys = ["q1", "q2", "q3"];
  const unanswered = keys.filter(k => !form.get(k));
  const result = document.getElementById("quizResult");
  if (unanswered.length) {
    result.hidden = false;
    result.innerHTML = `<b>Please answer all ${keys.length} questions.</b> You still have ${unanswered.length} unanswered.`;
    return;
  }
  const correct = ["a", "b", "a"];
  const score = keys.reduce((total, key, i) => total + (form.get(key) === correct[i] ? 1 : 0), 0);
  const percent = Math.round(score / keys.length * 100);
  state.quizzes.push({ score, total: keys.length, percent, date: new Date().toLocaleString() });
  addActivity(`Completed Digital Technology practice quiz: ${score}/${keys.length} (${percent}%)`);
  result.hidden = false;
  result.innerHTML = `<h3>Your score: ${score}/${keys.length} (${percent}%)</h3><p>${percent >= 70 ? "Great work! Keep it up." : "Good attempt. Review the lesson and try again."}</p>`;
  result.scrollIntoView({ behavior: "smooth", block: "nearest" });
});

function renderStats() {
  const best = state.quizzes.length ? Math.max(...state.quizzes.map(q => q.percent)) + "%" : "—";
  document.getElementById("statLessons").textContent = state.lessons.length;
  document.getElementById("statQuizzes").textContent = state.quizzes.length;
  document.getElementById("statBest").textContent = best;
  document.getElementById("progressLessons").textContent = state.lessons.length;
  document.getElementById("progressQuizzes").textContent = state.quizzes.length;
  document.getElementById("progressBest").textContent = best;
}
function renderProgress() {
  renderStats();
  const completed = state.lessons.length + state.quizzes.length;
  const percent = Math.min(100, completed * 10);
  document.getElementById("progressBar").style.width = percent + "%";
  document.getElementById("progressText").textContent = completed ? `${completed} learning activities completed on this device.` : "Complete a lesson or quiz to begin tracking your progress.";
  const list = document.getElementById("activityList");
  list.innerHTML = "";
  if (!state.activities.length) { list.innerHTML = '<p class="muted">No activity yet. Complete a lesson or quiz to see it here.</p>'; return; }
  state.activities.forEach(item => {
    const row = document.createElement("div"); row.className = "activity-item";
    const message = document.createElement("b"); message.textContent = item.message;
    const date = document.createElement("div"); date.className = "muted"; date.textContent = item.date;
    row.append(message, date); list.appendChild(row);
  });
}
document.getElementById("levelSelect").addEventListener("change", e => {
  document.getElementById("greeting").textContent = `Welcome, ${e.target.value} learner! 👋`;
  document.getElementById("lessonLevel").value = e.target.value;
  document.querySelector(".lesson-label").textContent = `SAMPLE LESSON · ${e.target.value.toUpperCase()}`;
});
document.getElementById("year").textContent = new Date().getFullYear();
renderLesson(); renderStats();
if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
  window.addEventListener("load", () => navigator.serviceWorker.register("./service-worker.js").catch(() => {}));
}
