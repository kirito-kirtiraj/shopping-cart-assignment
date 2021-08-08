import "../styles/main.scss";

import headerSetup from "../components/Header";
import createCategorySection from "../components/Category";
import { startSpinner, stopSpinner } from "../components/LoadingSpinner";
import APICall from "../APIs/API";

headerSetup();

const main = document.querySelector("main");

startSpinner(main);

const response = APICall.getData("/categories");
response.then((categories) => {
    stopSpinner();
    categories.sort((a, b) =>
        a.order > b.order ? 1 : b.order > a.order ? -1 : 0
    );
    let even = true;
    categories.map((category) => {
        if (!category.enabled) return false;
        main.appendChild(createCategorySection(even, category));
        even = !even;
        return even;
    });
});
