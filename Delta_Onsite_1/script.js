// C4
const C4Key = document.querySelector(".C4-key");
const playC4 = () => {
  document.getElementById('C4').play();
  C4Key.classList.add("active");
  setTimeout(() => C4Key.classList.remove("active"), 200);
};
C4Key.addEventListener("click", playC4);

// Db4
const Db4Key = document.querySelector(".Db4-key");
const playDb4 = () => {
  document.getElementById('Db4').play();
  Db4Key.classList.add("active");
  setTimeout(() => Db4Key.classList.remove("active"), 200);
};
Db4Key.addEventListener("click", playDb4);

// D4
const D4Key = document.querySelector(".D4-key");
const playD4 = () => {
  document.getElementById('D4').play();
  D4Key.classList.add("active");
  setTimeout(() => D4Key.classList.remove("active"), 200);
};
D4Key.addEventListener("click", playD4);

// Eb4
const Eb4Key = document.querySelector(".Eb4-key");
const playEb4 = () => {
  document.getElementById('Eb4').play();
  Eb4Key.classList.add("active");
  setTimeout(() => Eb4Key.classList.remove("active"), 200);
};
Eb4Key.addEventListener("click", playEb4);

// E4
const E4Key = document.querySelector(".E4-key");
const playE4 = () => {
  document.getElementById('E4').play();
  E4Key.classList.add("active");
  setTimeout(() => E4Key.classList.remove("active"), 200);
};
E4Key.addEventListener("click", playE4);

// F4
const F4Key = document.querySelector(".F4-key");
const playF4 = () => {
  document.getElementById('F4').play();
  F4Key.classList.add("active");
  setTimeout(() => F4Key.classList.remove("active"), 200);
};
F4Key.addEventListener("click", playF4);

// Gb4
const Gb4Key = document.querySelector(".Gb4-key");
const playGb4 = () => {
  document.getElementById('Gb4').play();
  Gb4Key.classList.add("active");
  setTimeout(() => Gb4Key.classList.remove("active"), 200);
};
Gb4Key.addEventListener("click", playGb4);

// G4
const G4Key = document.querySelector(".G4-key");
const playG4 = () => {
  document.getElementById('G4').play();
  G4Key.classList.add("active");
  setTimeout(() => G4Key.classList.remove("active"), 200);
};
G4Key.addEventListener("click", playG4);

// Ab4
const Ab4Key = document.querySelector(".Ab4-key");
const playAb4 = () => {
  document.getElementById('Ab4').play();
  Ab4Key.classList.add("active");
  setTimeout(() => Ab4Key.classList.remove("active"), 200);
};
Ab4Key.addEventListener("click", playAb4);

// A4
const A4Key = document.querySelector(".A4-key");
const playA4 = () => {
  document.getElementById('A4').play();
  A4Key.classList.add("active");
  setTimeout(() => A4Key.classList.remove("active"), 200);
};
A4Key.addEventListener("click", playA4);

// Bb4
const Bb4Key = document.querySelector(".Bb4-key");
const playBb4 = () => {
  document.getElementById('Bb4').play();
  Bb4Key.classList.add("active");
  setTimeout(() => Bb4Key.classList.remove("active"), 200);
};
Bb4Key.addEventListener("click", playBb4);

// B4
const B4Key = document.querySelector(".B4-key");
const playB4 = () => {
  document.getElementById('B4').play();
  B4Key.classList.add("active");
  setTimeout(() => B4Key.classList.remove("active"), 200);
};
B4Key.addEventListener("click", playB4);

// C5
const C5Key = document.querySelector(".C5-key");
const playC5 = () => {
  document.getElementById('C5').play();
  C5Key.classList.add("active");
  setTimeout(() => C5Key.classList.remove("active"), 200);
};
C5Key.addEventListener("click", playC5);

// Db5
const Db5Key = document.querySelector(".Db5-key");
const playDb5 = () => {
  document.getElementById('Db5').play();
  Db5Key.classList.add("active");
  setTimeout(() => Db5Key.classList.remove("active"), 200);
};
Db5Key.addEventListener("click", playDb5);

// D5
const D5Key = document.querySelector(".D5-key");
const playD5 = () => {
  document.getElementById('D5').play();
  D5Key.classList.add("active");
  setTimeout(() => D5Key.classList.remove("active"), 200);
};
D5Key.addEventListener("click", playD5);

// Eb5
const Eb5Key = document.querySelector(".Eb5-key");
const playEb5 = () => {
  document.getElementById('Eb5').play();
  Eb5Key.classList.add("active");
  setTimeout(() => Eb5Key.classList.remove("active"), 200);
};
Eb5Key.addEventListener("click", playEb5);

// E5
const E5Key = document.querySelector(".E5-key");
const playE5 = () => {
  document.getElementById('Eb5').play();
  E5Key.classList.add("active");
  setTimeout(() => E5Key.classList.remove("active"), 200);
};
E5Key.addEventListener("click", playE5);

window.addEventListener("keydown", ({ keyCode }) => {
  // Press Q
  if (keyCode === 81) {
    document.getElementById('C4').play();
  };

  // Press 2
  if (keyCode === 50) {
    document.getElementById('Db4').play();
  };

  // Press W
  if (keyCode === 87) {
    document.getElementById('D4').play();
  };

  // Press 3
  if (keyCode === 51){
    document.getElementById('Eb4').play();
  };

  // Press E
  if (keyCode === 69) {
    document.getElementById('E4').play();
  };
  // Press R
  if (keyCode === 82) {
    document.getElementById('F4').play();
  };

  // Press 5
  if (keyCode === 53){
    document.getElementById('Gb4').play();
  };

  // Press T
  if (keyCode === 84){
    document.getElementById('G4').play();
  };

  // Press 6
  if (keyCode === 54){
    document.getElementById('Ab4').play();
  };

  // Press Y
  if (keyCode === 89){
    document.getElementById('A4').play();
  };

  // Press 7
  if (keyCode === 55) {
    document.getElementById('Bb4').play();
  };

  // Press U
  if (keyCode === 85){
    document.getElementById('B4').play();
  };

  // Press I
  if (keyCode === 73){
    document.getElementById('C5').play();
  };

  // Press 9
  if (keyCode === 57){
    document.getElementById('Db5').play();
  };

  // Press O
  if (keyCode === 79){
    document.getElementById('D5').play();
  };

  // Press 0 
  if (keyCode === 48){
    document.getElementById('Eb5').play();
  };

  // Press P
  if (keyCode === 80){
    document.getElementById('E5').play();
  };
}); 