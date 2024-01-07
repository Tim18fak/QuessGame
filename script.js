'use strict';
/* query selectors and manipulation */
//  start game selector
// const start =  document.querySelector('.btn')
// const random =  function(){
//  return Math.floor(Math.random * 20) + 1
// }
// start.addEventListener('click',random)

let random = Math.floor(Math.random() * 20) + 1
 

const message =  document.querySelector('.message')
const score = document.querySelector('.score')
const highscore =  document.querySelector('.highscore')
const misteryNum =  document.querySelector('.number')
const quessInput = document.querySelector('.guess')

quessInput.addEventListener('change',function(){
  console.log(quessInput.value)
})

document.querySelector('.btn').addEventListener('click',function() {
  random = Math.floor(Math.random() * 20) + 1
  document.querySelector('body').style.backgroundColor = ''
  document.querySelector('.message').textContent = 'Start guessing...'
  document.querySelector('.number').textContent = '?'
  document.querySelector('.check').style.display = ''
  console.log(document.querySelector('.check').disabled)
  score.textContent = 20
  quessInput.style.display = ''
  quessInput.value = ''
})


document.querySelector('.btn:nth-child(2)').addEventListener('click',function(){
 console.log(random)

 console.log( typeof quessInput.value)
 const input =  Number(quessInput.value) 
 if(input === random){
  document.querySelector('body').style.backgroundColor = 'green'
  document.querySelector('.highscore').textContent = highscore.textContent > score.textContent ? highscore.textContent : score.textContent
  document.querySelector('.message').textContent = 'You won'
  // BUG  CORRECTED
  document.querySelector('.number').textContent = random
  document.querySelector('.check').style.display = 'none'
  console.log(document.querySelector('.check').disabled)
  quessInput.style.display = 'none'

 }
 else if(input > 20){
  document.querySelector('.message').textContent = 'Enter a number btw 1 - 20'
  quessInput.value = ''
 }
 else{
  quessInput.value = ''
  console.log(quessInput)
  document.querySelector('.message').textContent = input < random ? 'Your guess is too low' : 'Your guess is too high'
  document.querySelector('body').style.backgroundColor = ''

  score.textContent = score.textContent -  1
 }

})



// store prev highscore
console.log(highscore,quessInput.value)
// let prevHighscore = highscore.textContent


 /* generate the random number */
 // listen for the user input number
 // compare it with the random generated number
 //  if user input is correct change the .message value to correct
 //  store his score has the value of the highscore and end the game
 // else check if the value is higher or lower than the random number
 //  change the .message content to it
 //  substract the user score by 1 if he/she fails
