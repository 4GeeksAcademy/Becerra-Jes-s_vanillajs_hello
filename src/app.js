import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

function getRandomValue (){
  const quien = who[Math.floor(Math.random() * who.length)];
  const accion = action[Math.floor(Math.random() * action.length)];
  const que = what[Math.floor(Math.random() * what.length)];
  const cuando = when[Math.floor(Math.random() * when.length)];

  return quien + " " + accion + " " + que + " " + cuando;
}

console.log(getRandomValue());

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  let excuse = getRandomValue()
  document.getElementById("excuse").innerText = excuse
};