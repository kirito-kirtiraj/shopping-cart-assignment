const addTemplateImage = (imgID, img) => {
    const imgElement = document.querySelector(`#${imgID}`);
    imgElement.setAttribute("src", img);
};

export default addTemplateImage;
