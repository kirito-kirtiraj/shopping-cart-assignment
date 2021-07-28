import "./styles/main.scss";

import headerSetup from "./components/Header";
import createCategorySection from "./components/Category";
import APICall from "./APIs/API";

headerSetup();

const main = document.querySelector("main");
const response = APICall.getData("/categories");
response.then((categories) => {
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
