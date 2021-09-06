var readLineSync = require('readline-sync');

var userName = readLineSync.question('Enter your username: ');
console.log('Welcome ' + userName + " to Do you know India?");
console.log("-------------------------------------");

var userScore = 0;


function playQuiz(question, answer){
  var userAnswer = readLineSync.question(question);

  if(userAnswer.toLowerCase() === answer.toLowerCase()){
    console.log("Your answer is correct");
    userScore++;
  } else{
    console.log("Sorry wrong answer!")
  }

  console.log("-------------------------------------");

}


var questions = [{
  question: "First independent india induvidual olympic medalist? ",
  answer: "Abhinav Bindra"
}, {
  question: "India's first launched space satellite? ",
  answer: "Aryabhata"
}, {
  question: "First indian to space? ",
  answer: "Rakesh Sharma"
}, {
  question: "Who is the first president of India? ",
  answer: "Rajendra Prasad"
}, {
  question: "When did India won cricket World Cup for the first time? ",
  answer: "1983"
}];


for(let index = 0; index < questions.length; index++){
  playQuiz(questions[index].question, questions[index].answer);
}

console.log("-------------------------------------");
console.log("Congratulations " + userName + " your final score is: " + userScore);