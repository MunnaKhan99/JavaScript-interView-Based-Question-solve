// Greeting Feature
let nameInput = document.getElementById("name");
let greetingText = document.getElementById("Greetings");

function handleGreeting(){
    let value = nameInput.value;
    if(value.trim() === ""){
        greetingText.innerText = "Please enter your name!";
    } else {
        greetingText.innerText = "Hello " + value;
    }
}

// Mood Tracker
let moodCount = 0;
let colors = ['red','blue','green','black'];
let moodText = document.getElementById("moodText");

function handleMood(){
    moodCount++;
    moodText.innerText = "Mood clicks: " + moodCount;
    moodText.style.color = colors[moodCount % colors.length];
}

// Energy Booster
let input = document.getElementById("energyLevel");
let result = document.getElementById("result");

function handleBooster(){
    let value = input.value;
    let number = Number(value);

    if(isNaN(number) || value.trim() === ""){
        result.innerText = "Please enter a valid number!";
    } else {
        result.innerText = "Boosted Energy: " + (number * 2);
    }
}
