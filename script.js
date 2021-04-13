import {ruswords} from './words.js';
let Check = document.getElementById('Check');

let myLetters = document.getElementById('P');

let userInput = document.getElementById('userInput');
// let secretWord = 'home';
let words = ['домик', 'котёнок', 'мышь', 'снежок'];
words = ruswords;
let secretWord = getrandom();
let settings = document.getElementById('settings')
let modal = document.getElementsByClassName('modal')[0];

let cypher = document.getElementById('cypher')
cypher.innerHTML='*'.repeat(secretWord.length);
let newGame = document.getElementById('newGame')
let ImageNumber = 0;
let img = document.getElementById('img')
let usedLetters = []
let form = document.getElementById('form')
let multyButton = document.getElementById('multyButton')
let singleButton = document.getElementById('singleButton')
 let wordModal = document.getElementsByClassName('wordModal')[0];
 let wordButton = document.getElementById('wordButton')
 let inputWordModal = document.getElementById('inputWordModal');
let single=true;

function startGame(){

    h1.innerHTML='Виселица'

    cypher.innerHTML='*'.repeat(secretWord.length);
    img.src =  'img/hangman0.png'
    ImageNumber = 0;
    myLetters.innerHTML= 'Введи букву и нажми проверить'
    usedLetters = [];
    userInput.value = '';

    Check.disabled=false;
}



 wordModal.onclick = function(event){
     event.preventDefault();


     h1.innerHTML='Виселица. Мультиплеер'

 }
multyButton.onclick = function(event){
    event.preventDefault();
    console.log('multybutton');
    modal.style.transform='translateY(100%) scale(0)';
    wordModal.style.transform = 'translateY(0) scale(1)'
    h1.innerHTML='Виселица. Мультиплеер'
    single=false;
    
     
}
wordButton.onclick = function(event){
    event.preventDefault();
    wordModal.style.transform='translateY(100%) scale(0)'

    secretWord=inputWordModal.value || getrandom();
    startGame();
    
}

let home = document.getElementById('дом')
let cat = document.getElementById('кот')
let mouse = document.getElementById('мышь')
let snow = document.getElementById('снег')

singleButton.onclick = function(event){
    event.preventDefault();
    modal.style.transform = 'translateY(100%) scale(0)'
    h1.innerHTML= 'Виселица'
    single=true;
    secretWord=getrandom();
    startGame();

}
 
modal.onclick = function(event){
    event.preventDefault();
    modal.style.transform='translateY(100%) scale(0)';
}
modal.children[0].onclick = function(event){
    event.stopPropagation();
}
settings.onclick = function(event){
    event.preventDefault();

    console.log('Настройки')
    modal.style.transform = 'translateY(0) scale(1)';
}


function getrandom(){


    return words[Math.floor(Math.random()*words.length)];

}

newGame.onclick = function(event){
    event.preventDefault();

if(single){
    secretWord=getrandom();
    startGame();
}
else{
    wordModal.style.transform = 'translateY(0) scale(1)';
}
}
Check.onclick = function(event){
    event.preventDefault();
 
    if (secretWord.includes(userInput.value)){

        let newCypher=''
    	for (let i=0;i<secretWord.length;i=i+1){
            if(userInput.value==secretWord[i]){
                newCypher=newCypher+userInput.value
            }
            else{
                newCypher=newCypher+cypher.innerHTML[i]
            }

    	}
        cypher.innerHTML=newCypher
    }
    else{

        ImageNumber=ImageNumber+1;

        img.src='img/hangman'+ImageNumber+'.png'
        if(ImageNumber==6){

            Check.disabled=true;
            h1.innerHTML="Виселица. Ты проиграл. Секретное слово: "+secretWord;

        }
    }

    if(!usedLetters.includes(userInput.value)){
     usedLetters.push(userInput.value)
    }
    if (cypher.innerHTML == secretWord){
        Check.disabled=true;
        h1.innerHTML='Виселица. Победа'
    }

    myLetters.innerHTML=usedLetters;
    userInput.value= '';

}
