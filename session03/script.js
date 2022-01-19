//console.log("hey, I am an external file")

const doc = document.documentElement //loading your html doc in js to modify it
//console.log(doc);

doc.style.fontFamily = "monospace";
doc.style.background = "lightgray"
doc.style.color = "white"


//ACCESS ELEMENTS FROM THE DOC

const titlebar = document.documentElement.querySelector("#child-1")
//This allows you to chose an element within the html
//and reference it as a constant you can play with
//Not necessary to write the documentElement part in this case.

console.log(titlebar); //gets the full code
console.log(titlebar.innerHTML); //gets what's inside the code, text in the console

//changes the actual title!!!
titlebar.innerHTML = "This is my website's titlebar";
titlebar.style.fontSize = "20px";

//add elements into the site
//appendChild gets things into the website
let resetButton = document.createElement("button");
titlebar.appendChild(resetButton); //place the button in the text box
resetButton.innerHTML = "Reset Button"; //naming the button
resetButton.style.float = "right"; //placing the button

//assign an event (functionality) to my button
resetButton.addEventListener("click", doSomething);

function doSomething(){
    console.log("button has been pressed")

}

const mainText = document.querySelector("p")
//This allows you to chose an element within the html
mainText.innerHTML = ""

//re-calling the child-2 box as sidebar for future coding
const sidebar = document.querySelector("#child-2");

//CREATE A FORM (user input) TO FILL THE PARAGRAPH
//WHAT'S WRITTEN AND SUBMITTED IN BLUE BOX SHOWS IN GREEN BOX
let input = document.createElement("input"); //type of element created

sidebar.appendChild(input);
//placing newly created input in sidebar (former child-2)

//Create button for submission
let submitButton = document.createElement("button");
submitButton.innerHTML = "Submit"; //text in button
sidebar.appendChild(submitButton); //place button in sidebar

//making the button act over the written text
let val = submitButton.addEventListener("click", submitText);

//function to place the text inthe green box - not sure how it works
function submitText(){
    let inputText = input.value;
    mainText.innerHTML += inputText + " ";
    input.value = "";

}