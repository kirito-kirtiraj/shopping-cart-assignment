import buildImgUrl from "../../utils/buildImgUrl";
import { saveObjectToLocalStorage } from "../../utils/useLocalStorage";
import cartUpdatedEvent from "../../utils/cartUpdatedEvent";

import CloseIcon from "../../../static/close.svg";

import "./Cart.scss";

export const updateCart = (products) => {
    const cart = document.querySelector(".cart");
    const oldItems = cart.querySelectorAll(".cart-card");
    oldItems.forEach((item) => {
        cart.removeChild(item);
    });

    if (products.length === 0) {
        if (!cart.querySelector(".cart__no-items")) {
            const noItemsHeading = document.createElement("h4");
            noItemsHeading.classList.add(
                "cart__no-items",
                "text-lg",
                "text-medium"
            );
            noItemsHeading.textContent = "No Items in the cart";
            cart.appendChild(noItemsHeading);
        }
    } else {
        const noItemsHeading = cart.querySelector(".cart__no-items");
        if (noItemsHeading) cart.removeChild(noItemsHeading);
        products.map((product) => {
            const cartCard = document.createElement("div");
            cartCard.setAttribute("class", "cart-card");
            cartCard.innerHTML = `
                    <img class="cart-card__image" src="${buildImgUrl(
                        product.imageURL
                    )}" alt="${product.name}" />
                    <h6 class="text-lg text-bold">${product.name}</h6>
                    <p class="text-lg cart-card__price">Rs.${product.price}</p>
            `;

            cart.appendChild(cartCard);
        });
    }
};

export const createCart = () => {
    const cartContainer = document.createElement("div");
    cartContainer.setAttribute("class", "cart__container");
    const cart = document.createElement("div");
    cart.setAttribute("class", "cart");
    cart.innerHTML = `
        <div class="cart__header">
            <h3 class="text-xl text-bold cart__title">My Cart</h3>
            <img class="cart__close-icon" />
        </div>
        <button class="text-lg text-bold cart__clear-button">Clear cart</button>
    `;

    const clearButton = cart.querySelector(".cart__clear-button");
    clearButton.onclick = () => {
        saveObjectToLocalStorage("cart", []);
        cartUpdatedEvent();
    };

    const closeIcon = cart.querySelector(".cart__close-icon");
    closeIcon.setAttribute("src", CloseIcon);
    closeIcon.onclick = () => {
        const cartContainer = header.querySelector(".cart__container");
        cartContainer.classList.remove("cart__container--open");
    };

    cartContainer.appendChild(cart);
    const header = document.querySelector("header");
    header.appendChild(cartContainer);
};
