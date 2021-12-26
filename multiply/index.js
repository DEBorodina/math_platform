let task = document.getElementById("task");
let answer = document.getElementById("answer");
let checkButton = document.getElementById("check");
let wrong = document.getElementById("wrong");
let score = document.getElementById("score");
let rightAnswer;

function setLocalStorage(){
    if(localStorage.getItem('multiplyScore')===null){
        localStorage.setItem('multiplyScore', JSON.stringify(1));
        return 1;
    }else{
        let item = JSON.parse(localStorage.getItem('multiplyScore'));
        localStorage.setItem('multiplyScore', JSON.stringify(++item));
        return item;
    }
}

function setLastNums(mass){
    if(localStorage.getItem('multiplyLastNums')===null){
        localStorage.setItem('multiplyLastNums', JSON.stringify(mass));
    }else{
        localStorage.setItem('multiplyLastNums', JSON.stringify(mass));
    }
}

function generateNum(){
    let res, firstNum, secondNum;

    while(true){
        firstNum = Math.floor(Math.random()*100)/100 + Math.floor(Math.random()*10);
        secondNum = Math.floor(Math.random()*100)/100 + Math.floor(Math.random()*10);
        res = firstNum + " &#183; " + secondNum;
        if(res.length<=20){
            break;
        }
    }

    setLastNums([firstNum,secondNum]);

    task.innerHTML=res.replaceAll(".", ",");
    return (firstNum*secondNum).toFixed(4);
}



function App(){
    if(localStorage.getItem('multiplyLastNums')!==null){
        let mass = JSON.parse(localStorage.getItem('multiplyLastNums'));
        task.innerHTML = (mass[0] + " &#183; " + mass[1]).replaceAll(".", ",");
        rightAnswer = (mass[0]*mass[1]).toFixed(4);
    }else{
        rightAnswer = generateNum();
    }    
    score.innerHTML = `Твой счет: ${(localStorage.getItem('multiplyScore')===null)?0:localStorage.getItem('multiplyScore')}`;
    checkButton.addEventListener('click',()=>{
        if(Math.abs((answer.value).replace(",", ".")-rightAnswer)<=0.00001){
            rightAnswer = generateNum();
            answer.value="";
            setLocalStorage();
            score.innerHTML = `Твой счет: ${localStorage.getItem('multiplyScore')}`;
            wrong.innerHTML="";
        }else{
            wrong.innerHTML="Попробуй еще раз!";
        }
    })
}



App();


