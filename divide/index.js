let task = document.getElementById("task");
let answer = document.getElementById("answer");
let checkButton = document.getElementById("check");
let wrong = document.getElementById("wrong");
let score = document.getElementById("score");
let rightAnswer;

function setLocalStorage(){
    if(localStorage.getItem('divideScore')===null){
        localStorage.setItem('divideScore', JSON.stringify(1));
        return 1;
    }else{
        let item = JSON.parse(localStorage.getItem('divideScore'));
        localStorage.setItem('divideScore', JSON.stringify(++item));
        return item;
    }
}

function setLastNums(mass){
    if(localStorage.getItem('divideLastNums')===null){
        localStorage.setItem('divideLastNums', JSON.stringify(mass));
    }else{
        localStorage.setItem('divideLastNums', JSON.stringify(mass));
    }
}

function generateNum(){
    let res, firstNum, secondNum;

    while(true){
        let rand =  Math.round(Math.random()*3-0.5)
        console.log(rand);
        if(rand==0){
            firstNum = Math.floor(Math.random()*10)/10 + Math.floor(Math.random()*10);
            secondNum = Math.floor(Math.random()*10)/10 + Math.floor(Math.random()*10);
        } else if(rand==1){
            firstNum = Math.floor(Math.random()*25);
            secondNum = Math.floor(Math.random()*25);
        } else{
            firstNum = Math.floor(Math.random()*10)/10 + Math.floor(Math.random()*10);
            secondNum = Math.floor(Math.random()*25);
        }
        firstNum = firstNum*secondNum;
        res = firstNum + " : " + secondNum;
        if(res.length<=20 && secondNum!=0){
            break;
        }
    }

    setLastNums([firstNum,secondNum]);

    task.innerHTML=res;
    return (firstNum/secondNum).toFixed(4);
}



function App(){
    if(localStorage.getItem('divideLastNums')!==null){
        let mass = JSON.parse(localStorage.getItem('divideLastNums'));
        task.innerHTML = mass[0] + " : " + mass[1];
        rightAnswer = (mass[0]/mass[1]).toFixed(4);
    }else{
        rightAnswer = generateNum();
    }    
    score.innerHTML = `Твой счет: ${(localStorage.getItem('divideScore')===null)?0:localStorage.getItem('divideScore')}`;
    checkButton.addEventListener('click',()=>{
        if(Math.abs((answer.value).replace(",", ".")-rightAnswer)<=0.00001){
            rightAnswer = generateNum();
            answer.value="";
            setLocalStorage();
            score.innerHTML = `Твой счет: ${localStorage.getItem('divideScore')}`;
            wrong.innerHTML="";
        }else{
            wrong.innerHTML="Попробуй еще раз!";
        }
    })
}



App();


