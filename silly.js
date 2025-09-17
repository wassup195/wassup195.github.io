const dontClick = document.getElementById("donotclick");
const secondOne = document.getElementById("clickingCounterHtml");
let clickCounter = 0;
let dontClickTest = dontClick.textContent;

dontClick.addEventListener("mouseover", function() {
    console.log("hihover");
    dontClickTest = dontClick.textContent;
    dontClick.textContent = "why"
})
dontClick.addEventListener("click", function() {
    console.log("hi");
    clickCounter++;
    secondOne.textContent = clickCounter;
    if(clickCounter == 1000){
        dontClick.textContent = "a single step taken on the stairway of heaven"
    }
    if(clickCounter == 2000){
        dontClick.textContent = "the year close to America's greatest tragedy"
    }
    if(clickCounter == 3000){
        dontClick.textContent = "the year all humans will be extinct"
    }
    if(clickCounter == 4000){
        dontClick.textContent = "yet so persistant but why?"
    }
    if(clickCounter == 5000){
        dontClick.textContent = "do YOU think there is any point to this?"
    }
    if(clickCounter == 6000){
        dontClick.textContent = "there is no reward, no fame, nothing in exchange for this"
    }
    if(clickCounter == 7000){
        dontClick.textContent = "heh this is really \"click\" bait aint it?"
    }
    if(clickCounter == 8000){
        dontClick.textContent = "but really? is it your curiousity or your ego?"
    }
    if(clickCounter == 9000){
        dontClick.textContent = "well you better stop now or else..."
    }
    if(clickCounter == 10000){
        dontClick.textContent = "what an idiot"
    }
})
dontClick.addEventListener("mouseleave", function() {
    console.log("hiunhover");
    dontClick.textContent = dontClickTest;
})
