class Category extends HTMLElement {
    constructor() {
        super();
        let shadow = this.attachShadow({ mode: "open" });
        let section = document.createElement("section");
    }
}
