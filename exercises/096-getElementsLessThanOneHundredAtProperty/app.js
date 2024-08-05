function getElementsLessThan100AtProperty(obj, key) {
    
    if (Array.isArray(obj[key])) {
        return obj[key].filter(elem => elem < 100);
    } else {
        return []
    }

}