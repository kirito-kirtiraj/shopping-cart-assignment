import buildImgUrl from "../../utils/buildImgUrl";
import {
    saveObjectToLocalStorage,
    getObjectFromLocalStorage,
} from "../../utils/useLocalStorage";

import "./ProductCard.scss";

const createProductCard = ({
    name,
    imageURL,
    description,
    price,
    category,
    id,
}) => {
    const card = document.createElement("div");
    card.setAttribute("class", "product-card");
    card.setAttribute("id", id);
    card.setAttribute("data-categoryid", category);

    const cardHTML = `
        <h4 class="text-lg text-bold">${name}</h4>
        <img class="product-card__image" src="${buildImgUrl(
            imageURL
        )}" alt="${name}" />
        <p class="text-sm product-card__description">${description}</p>
        <div class="product-card__footer">
            <p class="text-lg product-card__price">MRP Rs.${price}</p>
            <button class="text-md product-card__buy-button">Buy Now</button>
        </div>
    `;
    card.innerHTML = cardHTML;
    const button = card.querySelector("button");
    button.onclick = () => {
        const product = { name, imageURL, description, price, category, id };
        let cart = getObjectFromLocalStorage("cart");
        if (cart) {
            cart.push({ name, imageURL, description, price, category, id });
        } else {
            cart = [product];
        }
        saveObjectToLocalStorage("cart", cart);
    };

    return card;
};

export default createProductCard;
