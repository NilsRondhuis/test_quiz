import { nanoid } from "nanoid";

const createQuestions = (data) => {
  const { id, question, img, alt, options } = data;

  return `
    <div id="${id}" class="carousel-item js-carousel-item">
    <div class="box rounded-2 p-3 pb-5">
        <h2 class="d-flex justify-content-center mb-4">
            Answer the questions
        </h2>
        <p>${question}</p>
        <div class="d-flex justify-content-center mb-4">
            <img
                src="${img}"
                class="img-thumbnail"
                width="250px"
                height="250px"
                alt="${alt}"
            />
        </div>
        <form>
            ${options
              .map((item) => {
                const id = nanoid();
                return `
                    <div class="form-check">
                        <input
                            class="form-check-input js-form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="${id}"
                            value="${item.answer}"
                        />
                        <label class="form-check-label" for="${id}">
                            ${item.answer}
                        </label>
                    </div>`;
              })
              .join("")}
        </form>
    </div>
    </div>
    `;
};

export default createQuestions;
