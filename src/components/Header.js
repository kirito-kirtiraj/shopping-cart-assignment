import addTemplateImage from "../utils/addTemplateImage";
import { getObjectFromLocalStorage } from "../utils/useLocalStorage";

import SiteLogo from "../../static/images/logo.png";
import CartIcon from "../../static/images/cart.svg";

const headerSetup = () => {
    addTemplateImage("logo", SiteLogo);
    addTemplateImage("cart-icon", CartIcon);

    const cart = getObjectFromLocalStorage("cart");
    if (cart) {
        const cartCountElement = document.querySelector(".header__items-count");
        cartCountElement.textContent = cart.length;
    }
};

export default headerSetup;
