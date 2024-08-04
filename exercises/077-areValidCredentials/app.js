function areValidCredentials(name, pw) {
    return name.length > 3 && pw.length > 8
}
let output = areValidCredentials('Ritu', 'mylongpassword')
console.log(output); // --> true