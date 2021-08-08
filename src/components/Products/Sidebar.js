import "./Sidebar.scss";

const createSidebar = (categories, filterAndRefresh) => {
    const sidebarElement = document.createElement("aside");
    sidebarElement.setAttribute("class", "product-sidebar");

    const appendSidebarItem = (id, name) => {
        const sidebarItem = document.createElement("p");
        sidebarItem.setAttribute(
            "class",
            "text-sm text-medium product-sidebar__item"
        );
        sidebarItem.setAttribute("id", id);
        sidebarItem.textContent = name;
        sidebarItem.onclick = () => filterAndRefresh(id);
        sidebarElement.appendChild(sidebarItem);
    };

    appendSidebarItem("all", "All");

    categories.map((category) => {
        if (!category.enabled) return false;
        appendSidebarItem(category.id, category.name);
    });

    return sidebarElement;
};

export default createSidebar;
