import buildImgUrl from "../utils/buildImgUrl";

import "./Category.scss";

const createCategorySection = (
    imageFirst,
    { imageUrl, name, description, key }
) => {
    const categoryElement = document.createElement("section");
    categoryElement.setAttribute(
        "class",
        `category ${!imageFirst && "category--alternate"}`
    );

    const imgHTML = `<img class="category__image" src="${buildImgUrl(
        imageUrl
    )}" alt="${name}" />`;

    const infoHTML = `
            <div class="category__info">
                <h3 class="text-xl text-bold category__title">${name}</h3>
                <p class="text-md text-medium category__description">${description}</p>
                <a class="category__button" href="${key}">Explore ${name}</a>
            </div>
        `;

    categoryElement.innerHTML = `
            ${imageFirst ? imgHTML : infoHTML}
            ${imageFirst ? infoHTML : imgHTML}
        `;

    return categoryElement;
};

export default createCategorySection;
