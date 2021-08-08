import buildImgUrl from "../../utils/buildImgUrl";
import {
    saveObjectToLocalStorage,
    getObjectFromLocalStorage,
} from "../../utils/useLocalStorage";
import cartUpdatedEvent from "../../utils/cartUpdatedEvent";

import CloseIcon from "../../../static/close.svg";

import "./Cart.scss";

const changeItemQuantity = (itemId, quantity) => () => {
    const cartList = getObjectFromLocalStorage("cart");
    const requiredItem = cartList.find((product) => product.id === itemId);
    const updatedQuantity = requiredItem.quantity + quantity;
    requiredItem.quantity =
        updatedQuantity > 0 && updatedQuantity < 10
            ? updatedQuantity
            : requiredItem.quantity;
    saveObjectToLocalStorage("cart", cartList);
    cartUpdatedEvent();
};

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
        let checkoutButton = document.querySelector(".cart__checkout");
        checkoutButton && cart.removeChild(checkoutButton);
    } else {
        const noItemsHeading = cart.querySelector(".cart__no-items");
        if (noItemsHeading) cart.removeChild(noItemsHeading);
        let total = 0;
        products.map((product) => {
            const cartCard = document.createElement("div");
            cartCard.setAttribute("class", "cart-card");
            cartCard.innerHTML = `
                    <img class="cart-card__image" src="${buildImgUrl(
                        product.imageURL
                    )}" alt="${product.name}" />
                    <div class="cart-card__summary>
                        <h6 class="text-lg text-bold">${product.name}</h6>
                        <div class="cart-card__quantity">
                            <button type="button" class="cart-card__quantity-minus-button ${
                                product.quantity === 1 &&
                                "cart-card__quantity-minus-button--disabled"
                            } text-xl">-</button>
                            <span class="cart-card__quantity-text">${
                                product.quantity
                            }</span>
                            <button type="button" class="cart-card__quantity-plus-button ${
                                product.quantity === 9 &&
                                "cart-card__quantity-plus-button--disabled"
                            } text-xl">+</button>
                            <span class="cart-card__mrp">x Rs.${
                                product.price
                            }</span>
                        </div>
                    </div>
                    </div>
                    <p class="text-lg cart-card__price">Rs.${
                        product.price * product.quantity
                    }</p>
            `;

            const plusButton = cartCard.querySelector(
                ".cart-card__quantity-plus-button"
            );
            plusButton.onclick = changeItemQuantity(product.id, 1);

            const minusButton = cartCard.querySelector(
                ".cart-card__quantity-minus-button"
            );
            minusButton.onclick = changeItemQuantity(product.id, -1);

            cart.appendChild(cartCard);
            total += product.price * product.quantity;
        });

        let checkoutButton = document.querySelector(".cart__checkout");
        checkoutButton && cart.removeChild(checkoutButton);

        checkoutButton = document.createElement("div");
        checkoutButton.classList.add("cart__checkout");
        checkoutButton.innerHTML = `
            <span class="text-lg text-bold">Checkout</span>
            <span class="text-lg text-bold">Total: Rs.${total}</span>
        `;
        cart.appendChild(checkoutButton);
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
