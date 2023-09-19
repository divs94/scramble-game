const msg = document.querySelector(".msg");
const guess = document.querySelector("input");
const btn = document.querySelector(".btn");
let play = false;
let newWords = "";
let randomWords = "";
let sWords = ["Mango", "Colour", "Elephant", "Annonymous", "Design", "Knowladge", "Watch", "Hotspot", "reactjs", "angular",
    "swift", "android", "Sqqurille", "Samsung", "India", "Fox"];


const createNewWords = () => {
    let ranNum = Math.floor(Math.random() * sWords.length);
    let newTempSwords = sWords[ranNum];
    return newTempSwords;
}

const scrambleWords = (arr) => {
    for (let i = arr.length - 1; i >0; i--){
        let temp = arr[i];
        let j = Math.floor(Math.random() * (i + 1));
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}


btn.addEventListener("click", function () {
    if (!play) {
        play = true;
        btn.innerHTML = "Guess";
        guess.classList.toggle("hidden");
        newWords = createNewWords();
       randomWords = scrambleWords(newWords.split("")).join("");  //split method convert a string into array//
        msg.innerHTML = `Guess the Word: ${ randomWords}`;                             // join method joint splitted and scrambled words together//
    }
    else {
        let tempWord = guess.value;
        if (tempWord === newWords) {
            play = false;
            msg.innerHTML = `Awesome You are Correct, It is ${newWords}`;
            btn.innerHTML = "Next";
            guess.classList.toggle("hidden");
            guess.value = "";
        }
        else {
            msg.innerHTML = `OOppss!!! You are Incorrect, It is ${randomWords}`;
            btn.innerHTML = "Try Again";
        }
    }
});