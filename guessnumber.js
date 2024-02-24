let randomnum = parseInt(Math.random()*100+1)

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessslot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const loworhigh= document.querySelector('.lowOrHi')
const startover=document.querySelector('.resultParas')


const p=document.createElement('p')

let prevgeuss=[]
let numgeuss=1

let playgame=true;

if(playgame){
    submit.addEventListener('click',function (e) {
        
    
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validteGuess(guess);
    });
}

function validteGuess(guess) {
    if(isNaN(guess)){
        alert('please ente a valid number')
    }else if(guess<1){
        alert('please ente a  number more than 1')
    }else if(guess>100){
        alert('please ente a number less than 100')
    }else{
        prevgeuss.push(guess)
        if(numgeuss===11){
            dispalygeuss(guess);
            dispalymessage(`game over,random number is ${randomnum}`)
            endgame()
        }else{
            dispalygeuss(guess)
            checkguess(guess)
        }
    }
}


function checkguess(guess){
if(guess===randomnum){
    dispalymessage(`you guessed it right`)
    endgame()
}else if(guess < randomnum){
    dispalymessage(`number is to low`)
}else if(guess > randomnum){
    dispalymessage(`number is to high`)
}
}

function dispalygeuss(geuss){
 //dom manipulation done here
 userInput.value = ''
 guessslot.innerHTML+=`${geuss}, `
 numgeuss++
 remaining.innerHTML= `${11-numgeuss}`
}

function dispalymessage(message){
   loworhigh.innerHTML= `<h2>${message}</h2>`
}

function newgame(){
const newbut= document.querySelector('#newgame')
newbut.addEventListener('click',function(e){
    randomnum = parseInt(Math.random()*100+1)
    prevgeuss=[]
    numgeuss=1
    guessslot.innerHTML=''
    remaining.innerHTML= `${11-numgeuss}`
    userInput.removeAttribute('disabled')
    startover.removeChild(p)
    playgame=true
})
}

function endgame(){
    userInput.value=''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML=`<h2 id="newgame">start new game</h2>`
    startover.appendChild(p)
    playgame=false
    newgame()
}