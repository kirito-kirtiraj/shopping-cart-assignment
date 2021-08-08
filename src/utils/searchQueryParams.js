export const buildUrlWithParams = (url, paramsObject) => {
    let urlWithParams = `${url}?`;
    Object.keys(paramsObject).map((param) => {
        urlWithParams = `${urlWithParams}${param}=${paramsObject[param]}&`;
        return urlWithParams;
    });
    urlWithParams = urlWithParams.substring(0, urlWithParams.length - 1);
    return urlWithParams;
};

export const getQueryParams = (url_string, paramsList) => {
    const url = new URL(url_string);
    let params = {};
    paramsList.map((param) => {
        const value = url.searchParams.get(param);
        if (value) params = Object.assign(params, { [param]: value });
    });
    return params;
};
