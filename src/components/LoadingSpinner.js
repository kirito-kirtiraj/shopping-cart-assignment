import LoadingIcon from "../../static/cog.svg";

import "./LoadingSpinner.scss";

export const startSpinner = (targetElement) => {
    const icon = document.createElement("img");
    icon.setAttribute("class", "loading-icon");
    icon.setAttribute("src", LoadingIcon);

    targetElement.appendChild(icon);
    targetElement.appendChild(icon);
};

export const stopSpinner = () => {
    const icon = document.querySelector(".loading-icon");
    icon.setAttribute("class", "loading-icon--hidden");
};
