import { startSpinner, stopSpinner } from "../LoadingSpinner";
import createProductCard from "./ProductCard";
import createSidebar from "./Sidebar";
import APICall from "../../APIs/API";

import "./Products.scss";

const setupProductsPage = () => {
    let productCards = [];

    const main = document.querySelector("main");

    const productsPage = document.createElement("div");
    productsPage.setAttribute("class", "products-page");
    main.appendChild(productsPage);

    const filterAndRefresh = (categoryID) => {
        let filteredProducts = [];

        if (categoryID === "all") filteredProducts = productCards;
        else {
            filteredProducts = productCards.filter((productCard) => {
                return (
                    productCard.getAttribute("data-categoryid") === categoryID
                );
            });
        }

        const productsList = productsPage.querySelector(".products-list");
        productsList.innerHTML = "";
        filteredProducts.map((product) => productsList.appendChild(product));
    };

    const categoriesResponse = APICall.getData("/categories");
    categoriesResponse
        .then((categories) => {
            const sidebar = createSidebar(categories, filterAndRefresh);
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
                    productCards.push(createProductCard(product));
                });
                filterAndRefresh("all");
            });
        });
};

export default setupProductsPage;
