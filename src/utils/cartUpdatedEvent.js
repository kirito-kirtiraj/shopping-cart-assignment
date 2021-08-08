const cartUpdatedEvent = () => {
    const event = new Event("cart");
    const header = document.querySelector("header");
    header.dispatchEvent(event);
};

export default cartUpdatedEvent;
