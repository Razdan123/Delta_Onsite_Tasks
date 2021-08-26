const RANDOM_QUOTE = "http://api.quotable.io/random";
const contentDisplay = document.getElementById("contentDisplay");
const contentInput = document.getElementById("contentInput");
var timetaken = document.getElementById("timetaken");

//a func defined to get data from the API json
function getRandom() {
  return fetch(RANDOM_QUOTE)
    .then((response) => response.json())
    .then((data) => data.content);
}

async function newContent() {
  const content = await getRandom();
  contentDisplay.innerHTML = "";
  console.log(content.split(""));

  //storing each char in a span to match

  var splitstring = content.split("");
  var stringlength = splitstring.length;
  console.log(stringlength);
  for (let i = 0; i < stringlength; i++) {
    const charSpan = document.createElement("span");
    charSpan.innerHTML = splitstring[i];
    contentDisplay.appendChild(charSpan);
  }
  contentInput.value = null;
}

newContent();

contentInput.addEventListener("input", pressed);
function pressed() {
  const splitcontent = contentDisplay.querySelectorAll("span");
  const splitinput = contentInput.value.split("");
  //var split = splitcontent.innerHTML;
  //console.log(contentInput.value);
  //console.log(contentDisplay.innerText);

  if (contentInput.value == contentDisplay.innerText) {
    clearInterval(myVar);
    //console.log('done');
  }
  var contentLength = splitinput.length;

  // console.log(contentLength);
  //console.log(charSpan);
  // console.log(splitinput[0]);

  for (let i = 0; i <= contentLength; i++) {
    if (splitinput[i] == null) {
      splitcontent[i].style.color = "black";
      splitcontent[i].style.textDecoration = "none";
    } else if (splitinput[i] == splitcontent[i].innerHTML) {
      splitcontent[i].style.color = "blue";
      splitcontent[i].style.textDecoration = "none";
    } else {
      //console.log("incorrect");
      splitcontent[i].style.color = "red";
      splitcontent[i].style.textDecoration = "underline";
    }
  }
  countWords();
}
const startingMinutes = 0;
let time = startingMinutes * 60;
var seconds = 0;

const countdownEl = document.getElementById("timer");

var myVar = setInterval(updateCountdown, 1000);
function updateCountdown() {
  const minutes = Math.floor(time / 60);
  seconds = time % 60;

  countdownEl.innerHTML = `${minutes}:${seconds}`;
  timetaken.innerHTML = `${minutes}:${seconds}`;
  time++;
}

function countWords() {
  var text = contentInput.value;

  var numWords = 0;

  for (var i = 0; i < text.length; i++) {
    var currentCharacter = text[i];

    // Check if the character is a space
    if (currentCharacter == " ") {
      numWords += 1;
    }
  }

  document.getElementById("show").innerHTML = numWords;
}
