// JavaScript to change background color
const button1 = document.getElementById("red");
const button2 = document.getElementById("green");
const button3 = document.getElementById("blue");
const button4 = document.getElementById("random")
const colors = ['red', 'green', 'blue'];
const clickCountSpan = document.getElementById("clickCount");
const clickCountSpan1 = document.getElementById("clickCount1");
const clickCountSpan2 = document.getElementById("clickCount2");
const clickCountSpan3 = document.getElementById("clickCount3");

let clickCount = 0;
let clickCount1= 0;
let clickCount2= 0;
let clickCount3= 0;

function changeColor(color) {
    document.body.style.backgroundColor =  color
}
// Add a click event listener to the button
button1.addEventListener("click", () => {
    changeColor('red');
    clickCount++;
    clickCountSpan.textContent = clickCount;
});
button2.addEventListener("click", () => {
    changeColor("green");
    clickCount1++;
    clickCountSpan1.textContent = clickCount1;
});
button3.addEventListener("click", () => {
    changeColor('blue');
    clickCount2++;
    clickCountSpan2.textContent = clickCount2;
});
button4.addEventListener("click", () => {
    let color = colors[Math.floor(Math.random()*colors.length)];
    changeColor(color)
    clickCount3++;
    clickCountSpan3.textContent = clickCount3;
});