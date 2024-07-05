/*-------------- Constants -------------*/

let drivers = ['Verstappen' , 'Hamilton' , 'Alonso' 
    , 'Vettel' , 'Norris' , 'Leclerc' , 'Sainz' ,
    ,  'Gazly', 'Ocon' , 'Perez' ]

let randomDriverIndex;
let randomDriverName =[];
let arrayWithOutComma=[];
let found = true;

let count = 0;


/*---------- Variables (state) ---------*/


/*----- Cached Element References  -----*/

const letters = document.querySelectorAll('.letter-button')
const display = document.querySelector('.display')


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
    for(i = 0; i < randomDriverName.length; i++){
        if(randomDriverName[i].toLowerCase() === letterGuessed.toLowerCase()){
            arrayOfUnderScores[i] = letterGuessed;
        }
    }

    const arrayWithSpaces = arrayOfUnderScores.join(' ');
    display.innerHTML = arrayWithSpaces;
}




console.log(getRandomDriver())

/*----------- Event Listeners ----------*/

letters.forEach( letter => {
    letter.addEventListener('click' , (event)=>{
        const letterGuessed = event.target.innerHTML;
        console.log(letterGuessed)
        letter.disabled = true;
        spotLetterGuessed(letterGuessed);
     } )
})


