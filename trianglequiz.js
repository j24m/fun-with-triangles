const quizForm= document.querySelector(".quiz-form");
const submitAnswerBtn= document.querySelector("#submit-answer-button");
const output = document.querySelector("#output");

const correctAnswers= ["90°","right-angled"];

function calculateScore(){
  score= 0;
  index= 0;
  const formResults= new FormData(quizForm);
  for(let value of formResults.values()){
      if(value === correctAnswers[index]){
          score=score+1;
      }
      index= index+1;
  }
  output.innerText="Your score is : " + score;
  
}

submitAnswerBtn.addEventListener("click", calculateScore);