let show_input = document.getElementById('output_one');
let name_box = document.getElementById('input_box');
let name_field = document.getElementById('name_input');
let start_btn = document.getElementById('start_btn');
let ask_box = document.getElementById('quest_box');
let quest_field = document.getElementById('quest_input');
let ask_btn = document.getElementById('ask_btn');
let output_text = document.getElementById('output_two');

const magic_answers = ["It is certain","It is decidedly so","Reply hazy try again",
                        "Cannot predict now","Do not count on it","My sources say no",
                        "Outlook not so good","Signs point to yes","We all would wish so",
                        "That's the meaning of life","We can only hope",
                        "Sorry, I'm not allowed to tell you that","Everybody knows that"]

const answerQuestion = (name, question) => {
    let randomNumber = Math.floor(Math.random() * 13);
    console.log(randomNumber);
    let eightBall = magic_answers[randomNumber];
    /*
    let eightBall;
    switch (randomNumber) {
        case 0: eightBall = "It is certain"; break;
        case 1: eightBall = "It is decidedly so"; break;
        case 2: eightBall = "Reply hazy try again"; break;
        case 3: eightBall = "Cannot predict now"; break;
        case 4: eightBall = "Do not count on it"; break;
        case 5: eightBall = "My sources say no"; break;
        case 6: eightBall = "Outlook not so good"; break;
        case 7: eightBall = "Signs point to yes"; break;
        case 8: eightBall = "We all would wish so"; break;
        case 9: eightBall = "That's the meaning of life"; break;
        case 10: eightBall = "We can only hope"; break;
        case 11: eightBall = "Sorry, I'm not allowed to tell you that"; break;
        default: eightBall = "Everybody knows that";
    }
    if (randomNumber === 0) {eightBall = "It is certain"}
    else if (randomNumber === 1) {eightBall = "It is decidedly so"}
    else if (randomNumber === 2) {eightBall = "Reply hazy try again"}
    else if (randomNumber === 3) {eightBall = "Cannot predict now"}
    else if (randomNumber === 4) {eightBall = "Do not count on it"}
    else if (randomNumber === 5) {eightBall = "My sources say no"}
    else if (randomNumber === 6) {eightBall = "Outlook not so good"}
    else if (randomNumber === 7) {eightBall = "Signs point to yes"}
    else if (randomNumber === 8) {eightBall = "We all would wish so"}
    else if (randomNumber === 9) {eightBall = "That's the meaning of life"}
    else if (randomNumber === 10) {eightBall = "We can only hope";}
    else if (randomNumber === 11) {eightBall = "Sorry, I'm not allowed to tell you that"}
    else {eightBall = "Everybody knows that"}
    */
    userQuestion == undefined || userQuestion == "" ? 
        output = "Please enter your question again" : 
        output = `<span class="name">${name}</span>, your question is: 
            <span class="quest">${question}</span>.
            <br>And my answer is: <span class="answer">${eightBall}</span>.`;
    output_text.innerHTML = output;
    ask_box.style.display = "none";
    name_field.innerText = "";
    name_box.style.display = "flex";
}

const getPrediction = (name) => {
    output = `Hey, <span class="name">${name}</span>. I'm your magic 8 ball!`;
    output_text.innerHTML = output;
    name_box.style.display = "none";
    ask_box.style.display = "flex";

    ask_btn.addEventListener('click', () => {
        answerQuestion(name, userQuestion);
    });
};
let userName;
name_field.addEventListener('input', () => {
    userName = name_field.value;
    console.log(userName);
});
let userQuestion;
quest_field.addEventListener('input', () => {
    userQuestion = quest_field.value;
    console.log(userQuestion);
});
start_btn.addEventListener('click', () => {
    magic_title.innerHTML = `The magic <span>8</span> ball.`;
    userName == undefined || userName == "" ? userName = "Stranger" : userName;
    getPrediction(userName);
});
