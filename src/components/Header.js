import addTemplateImage from "../utils/addTemplateImage";

import SiteLogo from "../../static/images/logo.png";
import CartIcon from "../../static/images/cart.svg";

const headerSetup = () => {
    addTemplateImage("logo", SiteLogo);
    addTemplateImage("cart-icon", CartIcon);
};

export default headerSetup;
