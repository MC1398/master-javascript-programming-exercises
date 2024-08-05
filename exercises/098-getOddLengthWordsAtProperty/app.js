function getOddLengthWordsAtProperty(obj, key) {
    
    if (Array.isArray(obj[key])) {
        return obj[key].filter(elem => elem.length % 2 != 0);
    } else {
        return []
    }

}