score1El=document.getElementById("score1")
score2El=document.getElementById("score2")

let count1=0
let count2=0


function add1to1(){
    count1+=1
    score1El.textContent=count1
}

function add2to1(){
    count1+=2
    score1El.textContent=count1
}

function add3to1(){
    count1+=3
    score1El.textContent=count1
}

function add1to2(){
    count2+=1
    score2El.textContent=count2
}

function add2to2(){
    count2+=2
    score2El.textContent=count2
}

function add3to2(){
    count2+=3
    score2El.textContent=count2
}
