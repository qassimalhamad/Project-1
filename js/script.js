/*-------------- Constants -------------*/

let drivers = ['VERSTAPPEN' , 'HAMILTON' , 'ALONSO' , 'VETTEL' , 'NORRIS' ,'LECLERC' , 'SAINZ','GAZLY','OCON' ,'PEREZ', 'HULKENBURG' , 'RUSSEL', 'BOTTAS', 'WEBBER', 'HILL' , 'RICCIARDO'
    ,'RAIKKONEN']

let randomDriverIndex;
let randomDriverName =[];
let arrayWithOutComma=[];
let arrayOfUnderScores= [];
let count = 0;
let maxCount = 6;


/*---------- Variables (state) ---------*/


/*----- Cached Element References  -----*/

const letters = document.querySelectorAll('.letter-button')
const display = document.querySelector('.display')
const chances = document.querySelector('.chances')
const gameStatus = document.querySelector('.game-status')
const restart = document.querySelector('.restart')


/*-------------- Functions -------------*/

const restartGame = ()=>{
    count = 0;
    letters.forEach(letter =>{
        letter.disabled =false ;
    })
    
    arrayOfUnderScores =[];
    randomDriverName = [];
    arrayWithOutComma=[];
    getRandomDriver();
    chances.innerHTML = `You have ${count} / ${maxCount} chances left`;
    gameStatus.innerHTML = `You have ${count}/${maxCount} left`


}

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
        if(randomDriverName[i] === letterGuessed){
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

const winner = ()=>{
  return arrayOfUnderScores.join('') === randomDriverName.join('');
}




const checkWinner = ()=>{
      if(winner()){
        gameStatus.innerHTML = `Congratulations you've WON`
        letters.forEach( letter =>{
            letter.disabled = true; 
        })
    }else if(count < maxCount){
        gameStatus.innerHTML = `You have ${count}/${maxCount} left`
    }else{
        gameStatus.innerHTML = `LOST`
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

restart.addEventListener('click' , restartGame )
