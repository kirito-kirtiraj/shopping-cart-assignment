const infoSectionSetup = (title, subtitle) => {
    const infoSection = document.createElement("div");
    infoSection.classList.add("info__text");

    infoSection.innerHTML = `
        <h2 class="info__title text-xl text-bold">${title}</h2>
        <p class="info__subtitle text-lg">${subtitle}</p>
    `;

    return infoSection;
};

export default infoSectionSetup;
