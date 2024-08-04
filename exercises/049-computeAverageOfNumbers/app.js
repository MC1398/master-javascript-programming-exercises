function computeAverageOfNumbers(arr) {
    total = 0
    
    arr.forEach(element => {
        total += element
    });

    if (total != 0) {
        return total / arr.length
    }
    return 0
}