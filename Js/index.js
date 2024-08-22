// Select all Elemnts
let startBtn = document.getElementById('start-btn')
let container = document.getElementById('container')
let questionContainer = document.getElementById('question-container')
let questionElement = document.getElementById('question')
let options = document.getElementById('options-buttons')
let nextButton = document.getElementById('next-btn')
let message = document.getElementById('message-js')
let currentQuestionIndex = 0;
let score = 0;

// Start Button ('Show container')
startBtn.addEventListener('click', () => {
  startBtn.classList.add('hide')
  container.classList.remove('hide')
  questionContainer.classList.remove('hide')
  startQuiz()
})

// Start quiz
function startQuiz(){
  currentQuestionIndex = 0;
  showQuestion()
}

// Show questions
function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex]
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + '. ' + currentQuestion.question

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerHTML = answer.text;
    button.classList.add('btn')
    options.appendChild(button)

    if(answer.correct){
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)

  })
}

//Select Answer

function selectAnswer(e){
  const selectedButton = e.target;
  const isCorrect = selectedButton.dataset.correct === 'true'
  if(isCorrect){
    selectedButton.classList.add('correct')
    score++;
    console.log('correct')
  }else{
    selectedButton.classList.add('incorrect')
    console.log('incorrect')
  }
  Array.from(options.children).forEach(button => {
    if(button.dataset.correct === 'true'){
      button.classList.add('correct')
    }
    button.disabled = true;
  })
  nextButton.style.display = 'block'
  nextButton.classList.add('next-btn-active')
}

//Reset state
function resetState(){
  nextButton.style.display = 'none';
  nextButton.innerHTML = 'Next';
  message.innerHTML = ''

  while(options.firstChild){
    options.removeChild(options.firstChild)
  }
}

// Show score

function showScore(){
  resetState()
  nextButton.innerHTML = 'Play Again';
  nextButton.style.display = 'block'

  if(score <= 5){
    questionElement.innerHTML = `Your score ${score} out of ${questions.length}☹️`
    message.innerHTML = `You can do it better!😉` 
    
  }else if(score > 5){
    questionElement.innerHTML = `Your score ${score} out of ${questions.length}!😃`
    message.innerHTML = 'You did it great!😁'
  }
}

// Handle Next Button

function handleNextButton(){
  currentQuestionIndex++;
  if(currentQuestionIndex < questions.length){
    showQuestion()
  }else{
    showScore()
  }
}

// Next button
nextButton.addEventListener('click', () => {
  if(currentQuestionIndex < questions.length){
    handleNextButton()
  }else{
    startQuiz()
  }
})
