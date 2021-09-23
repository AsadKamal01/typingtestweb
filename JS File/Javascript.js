// Getting Elements from DOM
let message = document.getElementById('message');
let typeWords = document.getElementById('mywords');
let btn = document.getElementById('btn');
let startTime, endTime, totalTime;

// Creating An Array of Words
const setOfWords =
  ["A wonderful serenity has taken possession of my entire soul.",
    "Like these sweet mornings of spring which I enjoy with my whole heart.",
    "Far far away, behind the word mountains.",
    "Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."];


const playGame = () => {

  let randomNumber = Math.floor(Math.random() * setOfWords.length);
  message.innerText = setOfWords[randomNumber];
  let date = new Date();
  startTime = date.getTime();
  btn.innerText = 'Done';

}

const endGame = () => {
  let date = new Date();
  endTime = date.getTime();
  totalTime = ((endTime - startTime) / 1000);
  console.log(totalTime);
  btn.innerText = 'Start';

  let totalWords = typeWords.value;
  let wordCount = wordCounter(totalWords);

  let speed = Math.round(wordCount / totalTime * 60);
  console.log(speed);

  let finalMessage = `Your typed ${wordCount} words in ${totalTime} seconds at ${speed} WPM. `;
  finalMessage += compareWords(message.innerText, totalWords);
  message.innerText = finalMessage;
}

const wordCounter = (words) => {
  let response = words.split(" ").length;
  console.log(response);
  return response;

}

const compareWords = (words1, words2) => {
// Assigning the initial array of words and the array typed by user to the separate variables.
  let str1 = words1.split(" ");
  let str2 = words2.split(" ");
  let count = 0;

  // arrayName then forEach then it will take the whole function with value  and index no of that array
  str1.forEach(function (item, index) {
  if (item == str2[index]) {
    count++;
  }
});

  // For Counting Error words
  let errorWords = (str1.length - count);
  return (`${count} are correct out of ${str1.length} words and the total number of error is ${errorWords}.`);
}

// Adding the whole functionality to the Button by using addEventListener.
btn.addEventListener('click', function () { 

  if (this.innerText == 'Start') {
    typeWords.disabled = false;
    playGame();
  } else if (this.innerText == 'Done') {
    typeWords.disabled = true;
    endGame();
  }

});