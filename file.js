// This script will run when the page is loaded
window.onload = () => {
  let result = countWords();
  console.log(result);
};

function countWords() {
  // The text variable contains the long string of words
  let text =
    "Some of the biggest and most expensive transportation projects in the world have involved building bridges. Bridges are crucial links that carry cars, trucks and trains across bodies of water, mountain gorges or other roads. As a result, they are one of the most important aspects of civil engineering and are subject to intense scrutiny, especially when they collapse. Bridge collapses can be tragic events, leading to loss of life and serious property damage. That is why bridge engineers, designers and builders must always take their jobs very seriously. The best way for them to prevent these accidents is to understand why bridges collapse in the first place. Understanding bridge collapses can lead to major changes in the design, construction and safety of future building projects. The following are main reasons why bridges fall.";

  // TODO: add code here to remove the periods and commas and transform all words to lowercase letters
  text = text.replace(/[, . ]/g, ' ');
  text = text.toLowerCase();
  console.log(text);
  // The wordArray array will contains a key value pair for words and their occurences in the text
  const wordArray = text.split(" ");
  console.log(wordArray);

  // This loop goes through the wordArray and creates the key value pair objects
  const wordCount = {};
  wordArray.forEach((item) => {
    if (wordCount[item] == null) wordCount[item] = 1;
    else {
      wordCount[item] += 1;
    }
    if (item === '') wordCount[item] = 0;
  });

  // Turn objects into an array of arrays
  let myArray = Object.entries(wordCount);
  console.log(myArray);

  // TODO: sort the arrays based on the count number and store the result in a variable called bArray
  let bArray = myArray.sort(function (a, b) { return b[0] - a[0] });


  // return the first three most common words.
  bArray = bArray.slice(0, 3)
  return bArray;
}


//don't change this line
if (typeof module !== "undefined") {
  module.exports = countWords;
}
