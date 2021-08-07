import infoSectionSetup from "../InfoSection";
import formSetup from "../FormSection";

import "./register.scss";

const RegisterSetup = () => {
    const RegisterSection = document.createElement("div");
    RegisterSection.classList.add("register");

    RegisterSection.appendChild(
        infoSectionSetup(
            "Register",
            "We do not share your personal details with anyone."
        )
    );

    RegisterSection.appendChild(
        formSetup(
            [
                { type: "text", placeholder: "First Name" },
                { type: "text", placeholder: "Last Name" },
                { type: "email", placeholder: "Email" },
                { type: "password", placeholder: "Password" },
                { type: "password", placeholder: "Confirm password" },
            ],
            "Register"
        )
    );

    const main = document.querySelector("main");
    main.appendChild(RegisterSection);

    const firstInput = main.querySelector(".form__input");
    firstInput.focus();
};

export default RegisterSetup;
