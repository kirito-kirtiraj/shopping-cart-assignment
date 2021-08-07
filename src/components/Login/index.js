import infoSectionSetup from "../InfoSection";
import formSetup from "../FormSection";

import "./login.scss";

const LoginSetup = () => {
    const LoginSection = document.createElement("div");
    LoginSection.classList.add("login");

    LoginSection.appendChild(
        infoSectionSetup(
            "Login",
            "Get access to your Orders, Wishlist and Recommendations."
        )
    );

    LoginSection.appendChild(
        formSetup(
            [
                { type: "email", placeholder: "Email" },
                { type: "password", placeholder: "Password" },
            ],
            "Login"
        )
    );

    const main = document.querySelector("main");
    main.appendChild(LoginSection);

    const firstInput = main.querySelector(".form__input");
    firstInput.focus();
};

export default LoginSetup;
