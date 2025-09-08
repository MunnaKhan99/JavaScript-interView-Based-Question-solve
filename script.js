// 1. Button Click Counter Create a button that says "Click me!". Each time it's clicked, change the button text to show how many times it was clicked ("Clicked 1 times", "Clicked 2 times", etc.


let count = 0;
function countClick() {
    count++;
    document.getElementById("clickBtn").innerText = "Clicked " + count + " times"
}

// 2. Text Color Changer Display the text "Hello World" with a button. Each click changes the text color between red, blue, green, and black.

let colors = ['red', 'blue', 'green', 'black'];
let index = 0;
function colorClick() {
    document.getElementById("colorChangeBtn").style.color = colors[index];
    index++;

    if (index >= colors.length) {
        index = 0;
    }
}


// 3. Number Doubler Create an input field and a button. When the button is clicked, take the number from the input and display its double below.

let input = document.getElementById("numInput");
let button = document.getElementById('doubleBtn');

let result = document.getElementById('result');

function makeDouble() {
    let value = input.value; //fetch the value
    let number = Number(value); // string to number 

    result.innerText = "Double: " + (number * 2);
}
// 4. Greeting Generator Have an input field for a name and a button. When clicked, show "Hello [name]!" below the button.
let name = document.getElementById("name");
let Greeting = document.getElementById("Greetings");
function handleGreeting() {
    let value = name.value
    console.log(value);
    Greeting.innerText = "Hello " + value;
}

// 5. Simple On/Off Switch Create a button that toggles between "ON" and "OFF". The button color should be green when ON and red when OFF.
let onOffBtn = document.getElementById("OnOff");
let color = ['green', 'red'];
let btnColorIndex = 0;
// console.log(value);
function handleOnOff() {
    if (onOffBtn.innerText === 'ON') {
        onOffBtn.innerText = 'OFF';
        onOffBtn.style.color = color[btnColorIndex]
    }
    else {
        onOffBtn.innerText = "ON";
        onOffBtn.style.color = color[btnColorIndex]
    }
    btnColorIndex++;
    if (btnColorIndex >= color.length) {
        btnColorIndex = 0;
    }
}
// 6. Text Replacer Display some text and a button. Each click replaces all instances of the word "cat" with "dog" (or vice versa) in the text.

let catDog = document.getElementById('catDog');
let animal = ['Cat','Dog'];
function handleCatDog(){
        if(catDog.innerText === 'Cat'){
            catDog.innerText = "Dog";
        }
        else{
            catDog.innerText = "Cat";
        }
    }