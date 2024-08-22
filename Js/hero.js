// Start Game
const gamePlayNow = document.getElementById('play-game')

gamePlayNow.addEventListener('click', () => {
  window.location.href = 'play.html'
})

//Exit to home page
const exitQuiz = document.getElementById('exit-game')

exitQuiz.addEventListener('click', () => {
  window.location.href = 'app.html'
})