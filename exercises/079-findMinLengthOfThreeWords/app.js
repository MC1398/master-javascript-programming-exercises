function findMinLengthOfThreeWords(p1, p2, p3) {
    return Math.min(p1.length, p2.length, p3.length);
}
let output = findMinLengthOfThreeWords('a', 'be', 'see');
console.log(output)