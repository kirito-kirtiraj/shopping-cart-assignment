import { startSpinner, stopSpinner } from "../LoadingSpinner";
import createProductCard from "./ProductCard";
import createSidebar from "./Sidebar";
import APICall from "../../APIs/API";

import "./Products.scss";

const setupProductsPage = () => {
    const main = document.querySelector("main");

    const productsPage = document.createElement("div");
    productsPage.setAttribute("class", "products-page");
    main.appendChild(productsPage);

    const categoriesResponse = APICall.getData("/categories");
    categoriesResponse
        .then((categories) => {
            const sidebar = createSidebar(categories);
            productsPage.appendChild(sidebar);
        })
        .then(() => {
            const productsList = document.createElement("div");
            productsList.setAttribute("class", "products-list");
            productsPage.appendChild(productsList);

            const response = APICall.getData("/products");

            response.then((products) => {
                products.map((product) => {
                    if (!product.stock) return false;
                    productsList.appendChild(createProductCard(product));
                });
            });
        });
};

export default setupProductsPage;
