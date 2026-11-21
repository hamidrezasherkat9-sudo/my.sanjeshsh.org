// Interactions for the recreated portal.
document.querySelectorAll('a[href="#"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
  });
});

const params = new URLSearchParams(window.location.search);
const type = params.get('type');
const heading = document.getElementById('exam-heading');
if (heading && type === 'master') {
  heading.textContent = 'سامانه جامع کارشناسی ارشد';
}

// انتخاب آزمون در همان صفحه اصلی

const examHeading = document.getElementById("exam-heading");

const examOptions = document.querySelectorAll(".exam-option");

function selectExam(type) {

  if (!examHeading) return;

  if (type === "master") {

    examHeading.textContent =
      "راهنمای انتخاب رشته کارشناسی ارشد";

  } else {

    examHeading.textContent =
      "راهنمای انتخاب رشته آزمون سراسری";

  }

  examOptions.forEach(option => {

    option.classList.toggle(
      "is-selected",
      option.dataset.exam === type
    );

  });

}

// کلیک روی کارت های صفحه اصلی

document.querySelectorAll("[data-target-exam]").forEach(button => {

  button.addEventListener("click", () => {

    selectExam(button.dataset.targetExam);

  });

});

// کلیک روی گزینه های سراسری و ارشد

examOptions.forEach(option => {

  option.addEventListener("click", event => {

    event.preventDefault();

    if (option.dataset.exam) {
      selectExam(option.dataset.exam);
    }

  });

});

// جلوگیری از باز شدن لینک نمونه

const guideButton = document.getElementById("exam-guide-button");

if (guideButton) {

  guideButton.addEventListener("click", event => {
    event.preventDefault();
  });

}
