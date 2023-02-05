const words=[
    {
        word:"addition",
        hint:"The process of adding numbers"
    },
    {
        word:"exchange",
        hint:"The act of trading"
    },
    {
        word:"garden",
        hint:"nature house"
    },
    {
        word:"meeting",
        hint:"event where people together"
    },

]

const jumbleWord=document.querySelector(".jumble-word")
const hint=document.querySelector(".hint-msg"),
timeText=document.querySelector(".time-text"),
refreshButton=document.querySelector(".refresh-word"),
checkButton=document.querySelector(".check-word"),
userInput=document.querySelector(".user-word");
let correctWord,time

const timer=maxlength=>{
    clearInterval(time);
    time=setInterval(()=>{
        if(maxlength>0){
            maxlength--;
            return timeText.innerText=maxlength;
        }
        clearInterval(time);
        alert("Sorry! TIME UP");
        startGame();
      

    },1000)

}


const startGame=()=>{
    timer(30);
    let randomobj=words[Math.floor(Math.random()*words.length)];
    let wordarray=randomobj.word.split("");
    //console.log(randomobj);
    for(let i=wordarray.length-1;i>0;i--)
    {
        let j=Math.floor(Math.random()*(i+1));
        console.log(i,j);
        [wordarray[i],wordarray[j]]=[wordarray[j],wordarray[i]];
    }
    console.log(wordarray,randomobj.word)
    jumbleWord.innerText=wordarray.join("");
    hint.innerText=randomobj.hint
    correctWord=randomobj.word.toLocaleLowerCase()
    userInput.value="";
}
startGame();


const checkGame=()=>{
    let userWord=userInput.value.toLocaleLowerCase()
    if(correctWord!==userWord)
    {
        alert(`Oops! ${userWord} is wrong answer`)
    }
    else if(!userWord)
    {
        alert(`Oops! plz enter word`)
    }
    else
    alert(`Congrats ${userWord} is Correct answer`)
    startGame();
}

refreshButton.addEventListener("click",startGame)
checkButton.addEventListener("click",checkGame)
