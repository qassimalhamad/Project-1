/*-------------- Constants -------------*/

let drivers = ['Verstappen' , 'Hamilton' , 'Alonso' 
    , 'Vettel' , 'Norris' , 'Leclerc' , 'Sainz' ,
    ,  'Gazly', 'Ocon' , 'Perez' ]

let randomDriverIndex;


/*---------- Variables (state) ---------*/


/*----- Cached Element References  -----*/

const letters = document.querySelectorAll('.letter-button')
const display = document.querySelector('.display')


/*-------------- Functions -------------*/

const getRandomDriver = ()=>{
    randomDriverIndex = Math.floor(Math.random() * drivers.length)
    const randomDriverName = drivers[randomDriverIndex];//used to have split
    const arrayOfUnderScores = new Array(randomDriverName.length).fill('_')
    const arrayWithOutComma = arrayOfUnderScores.join(' ');
    display.innerHTML = arrayWithOutComma;
    return randomDriverName;
}



console.log(getRandomDriver())

/*----------- Event Listeners ----------*/

letters.forEach( letter => {
    letter.addEventListener('click' , (event)=>{
        const letterGuessed = event.target.innerHTML;
        console.log(letter.innerHTML)
        letter.disabled = true;
     } )
})


