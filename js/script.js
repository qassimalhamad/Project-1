/*-------------- Constants -------------*/

let drivers = ['VERSTAPPEN' , 'HAMILTON' , 'ALONSO' , 'VETTEL' , 'NORRIS' ,'LECLERC' , 'SAINZ','GAZLY','OCON' ,'PEREZ', 'HULKENBURG' , 'RUSSEL', 'BOTTAS', 'WEBBER', 'HILL' , 'RICCIARDO'
    ,'RAIKKONEN']
let circuits = [
        "ALBERTPARK","MONZA","BAHRAIN","HUNGARORING","BARCELONA-CATALUNYA","MONACO",
        "GILLESVILLENEUVE","PAULRICARD","ZANDVOORT","IMOLA","ISTANBULPARK","JEDDAH",
        "MARINABAY","MIAMI", "REDBULLRING","SAKHIR","SEPANG","SHANGHAI","SILVERSTONE",
        "SOCHI","SPA","SUZUKA","CIRCUITOFTHEAMERICAS","YASMARINA","HERMANOSRODRIGUEZ",
        "BAKU","MELBOURNE","NURBURGRING","PORTIMAO", "VLADIVOSTOK" ];

let teams = ['MERCEDES', 'FERRARI', 'REDBULL', 'MCLAREN', 'ASTONMARTIN', 'ALPINE', 'ALPHATAURI', 'HAAS', 'WILLIAMS', 'ALFA_ROMEO'];



let randomWordIndex;
let categorieChosen =[];
let randomWord =[];
let arrayWithOutComma=[];
let arrayOfUnderScores= [];
let count = 0;
let maxCount = 5;


/*---------- Variables (state) ---------*/


/*----- Cached Element References  -----*/

const letters = document.querySelectorAll('.letter-button')
const display = document.querySelector('.display')
const chances = document.querySelector('.chances')
const gameStatus = document.querySelector('.game-status')
const restart = document.querySelector('.restart')
const images = document.querySelector('.images')
const categories = document.querySelectorAll('.categories-buttons')


/*-------------- Functions -------------*/

const restartGame = ()=>{
    count = 0;
    letters.forEach(letter =>{
        letter.disabled =false ;
    })
    
    arrayOfUnderScores =[];
    randomWord = [];
    getRandomWord();
    arrayWithOutComma=[];
    chances.innerHTML = `You have ${maxCount-count} chances left`;
    gameStatus.innerHTML = `You have ${maxCount-count} chances left`
    images.src = `images/projectImage-${count}.jpeg`;



}

const getRandomWord = ()=>{
    if (categorieChosen.length === 0) {
        console.log('CategorieChosen is empty. Please select a category.');
        return;
    }
    randomWordIndex = Math.floor(Math.random() * categorieChosen.length)
    randomWord = categorieChosen[randomWordIndex].split('');
    arrayOfUnderScores = new Array(randomWord.length).fill('_')
    const arrayWithSpaces = arrayOfUnderScores.join(' ');
    display.innerHTML = arrayWithSpaces;
    chances.innerHTML = `You have ${maxCount-count} chances left`;
    return randomWord;
}

const spotLetterGuessed = (letterGuessed) =>{
    let found = false;
    for(i = 0; i < randomWord.length; i++){
        if(randomWord[i] === letterGuessed){
            arrayOfUnderScores[i] = letterGuessed;
            found = true;
        }
    }if(!found){
        count++
        chances.innerHTML = `You have ${maxCount-count} chances left`;
        images.src = `images/projectImage-${count}.jpeg`;

    }
    console.log(count)
    const arrayWithSpaces = arrayOfUnderScores.join(' ');
    display.innerHTML = arrayWithSpaces;
}

const winner = ()=>{
  return arrayOfUnderScores.join('') === randomWord.join('');
}




const checkWinner = ()=>{
      if(winner()){
        gameStatus.innerHTML = `Congratulations you've WON`
        letters.forEach( letter =>{
            letter.disabled = true; 
        })
    }else if(count < maxCount){
        gameStatus.innerHTML = `You have ${maxCount-count} chances left`
    }else{
        gameStatus.innerHTML = `LOST`
    }
}

console.log(getRandomWord())

/*----------- Event Listeners ----------*/

letters.forEach( letter => {
    letter.addEventListener('click' , (event)=>{
        const letterGuessed = event.target.innerHTML;
        console.log(letterGuessed)
        letter.disabled = true;
        spotLetterGuessed(letterGuessed);
        checkWinner();

     } )
})

restart.addEventListener('click' , restartGame )


categories.forEach(categorie =>{
    categorie.addEventListener('click', (event) =>{
        const selectedCategory = event.target.innerHTML;
        if (selectedCategory === 'drivers') {
            categorieChosen = drivers;
        } else if (selectedCategory === 'circuits') {
            categorieChosen = circuits;
        } else if (selectedCategory === 'teams') {
            categorieChosen = teams;
        }
        getRandomWord();

    })
})

