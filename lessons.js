
const subjects = [
  "English Language",
  "Mathematics",
  "Hausa Language",
  "Basic Science",
  "Physical and Health Education",
  "Islamic Studies",
  "Christian Religious Studies",
  "Nigerian History",
  "Social and Citizenship Studies",
  "Cultural and Creative Arts",
  "Digital Technology",
  "Agriculture"
];

const subjectGrid = document.getElementById("subject-grid");
const searchInput = document.getElementById("subject-search");
const lessonDetail = document.getElementById("lesson-detail");
const selectedSubject = document.getElementById("selected-subject");
const weekGrid = document.getElementById("week-grid");
const weekStatus = document.getElementById("week-status");

document.getElementById("year").textContent =
  new Date().getFullYear();

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
    const card = createButton(
      subject,
      "subject-button",
      () => showWeeks(subject)
    );

    subjectGrid.appendChild(card);
  });
}

function showWeeks(subject) {
  selectedSubject.textContent = subject;
  weekGrid.replaceChildren();

  for (let week = 1; week <= 13; week++) {
    const button = createButton(
      "Week " + week,
      "week-button",
      () => showPendingWeek(subject, week)
    );

    weekGrid.appendChild(button);
  }

  weekStatus.textContent =
    "Lesson materials for " + subject +
    " are still being reviewed. Approved notes will appear here.";

  lessonDetail.classList.remove("hidden");
  lessonDetail.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

function showPendingWeek(subject, week) {
  weekStatus.textContent =
    subject + " — Week " + week +
    ": Lesson notes are being prepared and reviewed. They have not been published yet.";
}

searchInput.addEventListener("input", event => {
  showSubjects(event.target.value);
});

showSubjects();
    
