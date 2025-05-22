export const getQueryParams = () => {
    if (typeof window === 'undefined') {
        return {};
    }
    
    const query = new URLSearchParams(window.location.search);
    const params = {};
    query.forEach((value, key) => {
      params[key] = value;
    });
  
    return params;
}