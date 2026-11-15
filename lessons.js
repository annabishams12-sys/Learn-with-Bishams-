
const subjects = [
  "English Language", "Mathematics", "Hausa Language",
  "Basic Science", "Physical and Health Education",
  "Islamic Studies", "Christian Religious Studies",
  "Nigerian History", "Social and Citizenship Studies",
  "Cultural and Creative Arts", "Digital Technology", "Agriculture"
];

const subjectGrid = document.getElementById("subject-grid");
const searchInput = document.getElementById("subject-search");
const lessonDetail = document.getElementById("lesson-detail");
const selectedSubject = document.getElementById("selected-subject");
const weekGrid = document.getElementById("week-grid");
const weekStatus = document.getElementById("week-status");
const languageSelect = document.getElementById("lesson-language");
const languageSwitch = document.getElementById("switch-language");
const languageStatus = document.getElementById("language-status");

const lessons = {
  "Mathematics": {
    1: {
      topic: {
        english: "Counting Numbers 1–5",
        hausa: "Ƙirga Lambobi 1–5"
      },
      objectives: {
        english: [
          "Count objects from 1 to 5.",
          "Recognise numbers 1, 2, 3, 4 and 5."
        ],
        hausa: [
          "Ƙirga abubuwa daga 1 zuwa 5.",
          "Gane lambobi 1, 2, 3, 4 da 5."
        ]
      },
      notes: {
        english: "Numbers help us count things. We count: 1 – one, 2 – two, 3 – three, 4 – four, 5 – five. Examples: one book, two pencils and three cups.",
        hausa: "Lambobi suna taimaka mana wajen ƙirga abubuwa. Muna ƙirga: 1 – ɗaya, 2 – biyu, 3 – uku, 4 – huɗu, 5 – biyar. Misalai: littafi ɗaya, fensir biyu da kofuna uku."
      },
      activity: {
        english: "The teacher shows five objects. Pupils count them aloud.",
        hausa: "Malami ya nuna abubuwa guda biyar. Ɗalibai su ƙirga su da murya."
      },
      classwork: {
        english: "1. Count from 1 to 5. 2. Draw 3 circles. 3. Write the number after 4.",
        hausa: "1. Ƙirga daga 1 zuwa 5. 2. Zana da'irori guda 3. 3. Rubuta lambar da ke zuwa bayan 4."
      },
      homework: {
        english: "Count five things at home and say their numbers.",
        hausa: "A gida, ƙirga abubuwa guda biyar kuma ka faɗi adadinsu."
      },
      quiz: [
        {
          english: "Which number comes after 2?",
          hausa: "Wace lamba ce ke zuwa bayan 2?",
          options: ["1", "3", "5"],
          answer: 1
        },
        {
          english: "How many fingers are on one hand?",
          hausa: "Yatsu nawa ne a hannu ɗaya?",
          options: ["3", "4", "5"],
          answer: 2
        },
        {
          english: "Which number means four?",
          hausa: "Wace lamba ce take nufin huɗu?",
          options: ["2", "4", "5"],
          answer: 1
        },
        {
          english: "Count: 1, 2, 3, __.",
          hausa: "Ƙirga: 1, 2, 3, __.",
          options: ["4", "1", "5"],
          answer: 0
        },
        {
          english: "Which is the smallest number?",
          hausa: "Wace ce mafi ƙanƙantar lamba?",
          options: ["5", "1", "3"],
          answer: 1
        }
      ]
    }
  }
};

let preferredLanguage = "english";

try {
  preferredLanguage = localStorage.getItem("lessonLanguage") || "english";
} catch (error) {}

if (!["english", "hausa"].includes(preferredLanguage)) {
  preferredLanguage = "english";
}

let currentLanguage = preferredLanguage;
let activeSubject = "";
let activeWeek = 0;

function saveLanguage() {
  try {
    localStorage.setItem("lessonLanguage", preferredLanguage);
  } catch (error) {}
}

function updateLanguageDisplay() {
  languageSelect.value = preferredLanguage;
  languageStatus.textContent =
    currentLanguage === "english" ? "English selected" : "An zaɓi Hausa";
  languageSwitch.textContent =
    currentLanguage === "english" ? "Switch to Hausa" : "Canza zuwa Turanci";
}

function addSection(title, content) {
  const heading = document.createElement("h4");
  heading.textContent = title;

  const paragraph = document.createElement("p");
  paragraph.textContent = content;

  weekStatus.append(heading, paragraph);
}

function renderLesson(subject, week) {
  activeSubject = subject;
  activeWeek = week;
  weekStatus.replaceChildren();

  const lesson = lessons[subject]?.[week];

  if (!lesson) {
    weekStatus.textContent = currentLanguage === "english"
      ? subject + " — Week " + week + ": Lesson notes are being prepared."
      : subject + " — Mako na " + week + ": Ana shirya bayanan darasin.";
    return;
  }

  const lang = currentLanguage;
  const labels = lang === "english"
    ? {
        objectives: "Learning objectives",
        notes: "Lesson notes",
        activity: "Class activity",
        classwork: "Classwork",
        homework: "Homework",
        quiz: "Quick quiz",
        answers: "Answer key"
      }
    : {
        objectives: "Manufofin koyo",
        notes: "Bayanan darasi",
        activity: "Aikin aji",
        classwork: "Aikin aji",
        homework: "Aikin gida",
        quiz: "Ƙaramin gwaji",
        answers: "Amsoshi"
      };

  const title = document.createElement("h3");
  title.textContent = lesson.topic[lang];
  weekStatus.appendChild(title);

  addSection(labels.objectives, lesson.objectives[lang].join(" "));
  addSection(labels.notes, lesson.notes[lang]);
  addSection(labels.activity, lesson.activity[lang]);
  addSection(labels.classwork, lesson.classwork[lang]);
  addSection(labels.homework, lesson.homework[lang]);

  const quizHeading = document.createElement("h4");
  quizHeading.textContent = labels.quiz;
  weekStatus.appendChild(quizHeading);

  lesson.quiz.forEach((item, index) => {
    const question = document.createElement("p");
    question.textContent =
      (index + 1) + ". " + item[lang] + " " +
      item.options.map((option, i) =>
        String.fromCharCode(65 + i) + ". " + option
      ).join("   ");

    weekStatus.appendChild(question);
  });

  const answer = document.createElement("p");
  answer.textContent = labels.answers + ": " +
    lesson.quiz.map((item, i) =>
      (i + 1) + ". " + String.fromCharCode(65 + item.answer)
    ).join("  ");

  weekStatus.appendChild(answer);
}

languageSelect.addEventListener("change", function () {
  preferredLanguage = languageSelect.value;
  currentLanguage = preferredLanguage;
  saveLanguage();
  updateLanguageDisplay();

  if (activeSubject) renderLesson(activeSubject, activeWeek);
});

languageSwitch.addEventListener("click", function () {
  currentLanguage = currentLanguage === "english" ? "hausa" : "english";
  preferredLanguage = currentLanguage;
  saveLanguage();
  updateLanguageDisplay();

  if (activeSubject) renderLesson(activeSubject, activeWeek);
});

updateLanguageDisplay();

document.getElementById("year").textContent = new Date().getFullYear();

function createButton(text, className, action) {
  const button = document.createElement("button");
  button.type = "button";
  button.textContent = text;
  button.className = className;
  button.addEventListener("click", action);
  return button;
}

function showSubjects(filter = "") {
  subjectGrid.replaceChildren();

  const matches = subjects.filter(subject =>
    subject.toLowerCase().includes(filter.toLowerCase())
  );

  if (matches.length === 0) {
    const message = document.createElement("p");
    message.textContent = "No learning area found.";
    subjectGrid.appendChild(message);
    return;
  }

  matches.forEach(subject => {
    subjectGrid.appendChild(
      createButton(subject, "subject-button", () => showWeeks(subject))
    );
  });
}

function showWeeks(subject) {
  selectedSubject.textContent = subject;
  weekGrid.replaceChildren();

  for (let week = 1; week <= 13; week++) {
    weekGrid.appendChild(
      createButton("Week " + week, "week-button",
        () => renderLesson(subject, week))
    );
  }

  weekStatus.textContent = currentLanguage === "english"
    ? "Choose a week to view its lesson."
    : "Zaɓi mako domin ganin darasinsa.";

  lessonDetail.classList.remove("hidden");
  lessonDetail.scrollIntoView({ behavior: "smooth", block: "start" });
}

searchInput.addEventListener("input", event => {
  showSubjects(event.target.value);
});

showSubjects();

