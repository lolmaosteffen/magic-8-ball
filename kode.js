const app = document.getElementById("app");
let advice = `Shake the magic 8-ball to get an answer`;

const answers = [
    "It is certain", "Ask again later", "Don't count on it", 
    "Yes, definitely", "My sources say no", "Outlook good", 
    "Cannot predict now", "Very doubtful"
];

view();

function view() {
    app.innerHTML = /*HTML*/ `
    <div class="advice-box">${advice}</div>
    <button onclick="randomAdvice()">Shake the Magic 8-Ball</button>
    `;
}

function randomAdvice() {
    let randomNum = Math.floor(Math.random() * answers.length);
    advice = answers[randomNum];
    view();
}

// const app = document.getElementById("app");
// let advice = `you will get random advice here`;


// view()
// function view() {
//     app.innerHTML = /*HTML*/ `
    
//     <div>${advice}</div>
//     <button onclick = "randomAdvice()">Generate random advice</button>
    
    
    
    
//     `;
// }
// function randomAdvice() {
//     let randomNum = Math.floor(Math.random() * 7)
//     if (randomNum === 0) {
//         advice = 's';
//     }
//     else if (randomNum === 1) {
//         advice = 'a';
//     }
//     else if (randomNum === 2) {
//         advice = 'w';
//     }
//     else if (randomNum === 3) {
//         advice = 'sd';
//     }
//     else if (randomNum === 4) {
//         advice = 'f';
//     }
//     else if (randomNum === 5) {
//         advice = 'q';
//     }
//     else if (randomNum === 6) {
//         advice = 'w';
//     }
//     view()
// }