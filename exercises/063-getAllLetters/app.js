function getAllLetters(str) {
    // your code here
    let letras = [];

    for (i=0; i < str.length; i++) {
        letras.push(str[i])
    }

    return letras
}

let output = getAllLetters('Radagast');
console.log(output); // --> ['R', 'a', 'd', 'a', 'g', 'a', 's', 't']
