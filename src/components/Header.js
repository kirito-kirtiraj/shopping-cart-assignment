import addTemplateImage from "../utils/addTemplateImage";
import { getObjectFromLocalStorage } from "../utils/useLocalStorage";
import { createCart, updateCart } from "./Cart";

import SiteLogo from "../../static/images/logo.png";
import CartIcon from "../../static/images/cart.svg";

const cartUpdatedCallback = () => {
    const cartItems = getObjectFromLocalStorage("cart");
    if (cartItems) {
        const cartCount = document.querySelector(".header__items-count");
        cartCount.textContent = cartItems.length;
        updateCart(cartItems);
    }
};

const headerSetup = () => {
    addTemplateImage("logo", SiteLogo);
    addTemplateImage("cart-icon", CartIcon);

    const header = document.querySelector("header");
    createCart();
    cartUpdatedCallback();
    const cartButton = header.querySelector(".header__link--cart");
    cartButton.onclick = () => {
        const cartContainer = header.querySelector(".cart__container");
        cartContainer.classList.add("cart__container--open");
    };
    header.addEventListener("cart", cartUpdatedCallback, false);
};

export default headerSetup;
