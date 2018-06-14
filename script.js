var questionAndAnswers = [
    {question: 'How many plantets are there?', answer: '8'},
    {question: 'Whats my name', answer: 'Robby'},
    {question: 'How old am I', answer: '24'},
    {question: 'Favourite Food', answer: 'Steak'},
    {question: 'Girfriends Name', answer: 'Cristina'},
    {question: 'Cats name', answer: 'Mingy'},
    {question: 'Last Name ', answer: 'Anderson'},
];

let questionDisplay = document.getElementById('question');
let answerDisplay = document.getElementById('answer');
let checkButton = document.getElementById('checkButton');
let scoreShow = document.getElementById('scoreShow');

function random() {
  return Math.floor((Math.random() * questionAndAnswers.length) );
}

let question;
let answer;
let response;
let score = 0;


function newQuestion() {
  var randomNumber = random();
  question = questionAndAnswers[randomNumber].question;
  answer = questionAndAnswers[randomNumber].answer;
  questionDisplay.innerHTML = question;


}

function checkAnswer() {
  response = prompt();
  if(answer == response){
    score ++;
    scoreShow.innerHTML = 'Score : ' + score;
  }
  else {
    console.log('nope');
    scoreShow.innerHTML = 'Score : ' + score;
  }
}



//Thanks
/********* To do tommorow :
  Finish this quiz game app that displays a random question to page
  Then user inputs question
  score is recorded on page
  Make sure you understand arrays and objects

  Also look at the 'this' keyword in JS see link :
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this

*********/
