function getEvenLengthWordsAtProperty(obj, key) {
    // your code here
    if (Array.isArray(obj[key])) {
      return obj[key].filter(elem => elem.length % 2 == 0);
  } else {
      return []
  }
}

let obj = {
  key: ['a', 'long', 'game']
};
let output = getEvenLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['long', 'game']
