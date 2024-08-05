function getAverageOfElementsAtProperty(obj, key) {
  // your code here
  let contador = 0;
  let elementos = 0;

  if (Array.isArray(obj[key]) && obj[key].length != 0 ) {
    for (let i=0; i < obj[key].length ; i++) {
      contador += obj[key][i];
      elementos ++;
    };
    return contador/elementos
  } else {
    return 0
  }

}
let obj = {
  key: []
};
let output = getAverageOfElementsAtProperty(obj, 'key');
console.log(output); // --> 2  