function getNthElementOfProperty(obj, key, n) {
    if (Array.isArray(obj[key])) {
        return obj[key][n]
    } else {
        return undefined
    }
}