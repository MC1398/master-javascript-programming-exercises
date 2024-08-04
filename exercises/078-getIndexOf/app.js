function getIndexOf(char, str) {
    for (let i=0; str.length > i; i++) {console.log(str[i])
        if (str[i] == char) {
            return i
        }               
    }
    return -1
}
let output = getIndexOf('a', 'I am a hacker');
console.log(output); // --> 2