/*-------------- Constants -------------*/

let drivers = ['Verstappen' , 'Hamilton' , 'Alonso' 
    , 'Vettel' , 'NORRIS' , 'Leclerc' , 'Sainz' ,
    ,  'GAZLY', 'OCON' , 'PEREZ' ]

let randomDriverIndex;
let randomDriverName =[];
let arrayWithOutComma=[];
let count = 0;
let maxCount = 6;


/*---------- Variables (state) ---------*/


/*----- Cached Element References  -----*/

const letters = document.querySelectorAll('.letter-button')
const display = document.querySelector('.display')
const chances = document.querySelector('.chances')
const gameStatus = document.querySelector('.game-status')


/*-------------- Functions -------------*/

const getRandomDriver = ()=>{
    randomDriverIndex = Math.floor(Math.random() * drivers.length)
    randomDriverName = drivers[randomDriverIndex].split('');
    arrayOfUnderScores = new Array(randomDriverName.length).fill('_')
    const arrayWithSpaces = arrayOfUnderScores.join(' ');
    display.innerHTML = arrayWithSpaces;
    return randomDriverName;
}

const spotLetterGuessed = (letterGuessed) =>{
    let found = false;
    for(i = 0; i < randomDriverName.length; i++){
        if(randomDriverName[i].toLowerCase() === letterGuessed.toLowerCase()){
            arrayOfUnderScores[i] = letterGuessed;
            found = true;
        }
    }
    if(!found){
        count++
        chances.innerHTML = `You have ${count} / ${maxCount} chances left`;

    }
    console.log(count)
    const arrayWithSpaces = arrayOfUnderScores.join(' ');
    display.innerHTML = arrayWithSpaces;
}

const checkWinner = ()=>{
      if(count < maxCount){
        gameStatus.innerHTML = `You have ${count}/${maxCount} left`
    }else if(count === maxCount){
        gameStatus.innerHTML = `You have lost the game`
    }else if(randomDriverName === arrayOfUnderScores && count < maxCount){
        gameStatus.innerHTML = `Congrats You've wonn`
    }
}

 
console.log(getRandomDriver())

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


