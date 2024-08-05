function getElementsThatEqual10AtProperty(obj, key) {
    
    if (Array.isArray(obj[key])) {
        return obj[key].filter(elem => elem == 10);
    } else {
        return []
    }

}