import questions from "../data/questions";
import answers from "../data/answers.json";
import changePage from "./common/changePage";
import createQuestions from "./markup/createQuestions";
import refs from "./common/refs";

let count = 0;
let page = 1;

const createMarkup = (data) => {
  data.reverse().map((item) => {
    const markup = createQuestions(item);

    refs.carousel.insertAdjacentHTML("afterbegin", markup);
  });

  changePage(data, page);

  const firstSlide = document.querySelector(".js-carousel-item");
  firstSlide.classList.add("active");
  const isFirstSlide = data.some((item) => item.id === firstSlide.id);

  if (isFirstSlide) {
    refs.backBtn.classList.add("visually-hidden");
  }
};

const onHidenQuizAndPushData = () => {
  const allInputsRadio = document.querySelectorAll(
    "input.js-form-check-input:checked"
  );

  const allInputsRadioArr = [...allInputsRadio];

  allInputsRadioArr.map((input, idx) => {
    const data = {
      question: idx + 1,
      answer: input.value,
    };
    answers.push(data);
  });

  refs.carouselContainer.classList.add("d-none");
  refs.boxForm.classList.remove("d-none");
};

const updateNextBtn = (e, data) => {
  if (e.currentTarget.textContent === "Complete") {
    onHidenQuizAndPushData();
    const stringifyAnswers = JSON.stringify(answers);
    refs.inputHidden.value = stringifyAnswers;
    return;
  }

  count += 1;
  page += 1;

  changePage(data, page);

  if (count > 0) {
    refs.backBtn.classList.remove("visually-hidden");
  }

  if (count === data.length - 1) {
    e.currentTarget.textContent = "Complete";
  }
};

const updateBackBtn = (data) => {
  count -= 1;
  page -= 1;

  changePage(data, page);

  if (count === 0) {
    refs.backBtn.classList.add("visually-hidden");
  }

  if (count !== data.length - 1) {
    refs.nextBtn.textContent = "Next";
  }
};

refs.nextBtn.addEventListener("click", (e) => updateNextBtn(e, questions));
refs.backBtn.addEventListener("click", () => updateBackBtn(questions));

createMarkup(questions);
