export const saveObjectToLocalStorage = (key, obj) => {
    localStorage.setItem(key, JSON.stringify(obj));
};

export const getObjectFromLocalStorage = (key) => {
    return JSON.parse(localStorage.getItem(key));
};
