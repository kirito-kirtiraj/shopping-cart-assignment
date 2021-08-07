import "./FormSection.scss";

const formSetup = (inputs, submitText) => {
    const form = document.createElement("form");
    form.classList.add("form");

    inputs.map((input) => {
        const inputElement = document.createElement("input");
        inputElement.classList.add("form__input");
        inputElement.setAttribute("type", input.type);
        inputElement.setAttribute("placeholder", input.placeholder);

        form.appendChild(inputElement);
    });

    const submitElement = document.createElement("button");
    submitElement.classList.add("form__submit", "text-bold");
    submitElement.textContent = submitText;
    form.appendChild(submitElement);

    return form;
};

export default formSetup;
