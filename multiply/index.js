let task = document.getElementById("task");
let answer = document.getElementById("answer");
let checkButton = document.getElementById("check");
let backButton = document.getElementById("back");

function generateNum(){
    let firstNum = Math.floor(Math.random()*100)/100 + Math.floor(Math.random()*100);
    let secondNum = Math.floor(Math.random()*100)/100 + Math.floor(Math.random()*100);
    task.innerHTML = firstNum + " &#183; " + secondNum;
}

generateNum();
