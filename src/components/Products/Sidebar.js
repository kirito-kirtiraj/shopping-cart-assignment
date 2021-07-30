import "./Sidebar.scss";

const createSidebar = (categories) => {
    const sidebarElement = document.createElement("aside");
    sidebarElement.setAttribute("class", "product-sidebar");

    const sidebarItem = document.createElement("p");
    sidebarItem.setAttribute("class", "text-sm product-sidebar__item");
    sidebarItem.setAttribute("id", "all");
    sidebarItem.textContent = "All";

    categories.map((category) => {
        if (!category.enabled) return false;

        const sidebarItem = document.createElement("p");
        sidebarItem.setAttribute(
            "class",
            "text-sm text-medium product-sidebar__item"
        );
        sidebarItem.setAttribute("id", category.id);
        sidebarItem.textContent = category.name;
        sidebarElement.appendChild(sidebarItem);
    });

    return sidebarElement;
};

export default createSidebar;
