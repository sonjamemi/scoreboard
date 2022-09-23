score1El=document.getElementById("score1")
score2El=document.getElementById("score2")
newGameEl=document.getElementById("newgame")
let count1=0
let count2=0


function add1to1(){
    console.log("+1 1 clicked")
    count1+=1
    score1El.textContent=count1
}

function add2to1(){
    console.log("+2 1 clicked")
    count1+=2
    score1El.textContent=count1
}

function add3to1(){
    console.log("+3 1 clicked")
    count1+=3
    score1El.textContent=count1
}

function add1to2(){
    console.log("+1 2 clicked")
    count2+=1
    score2El.textContent=count2
}

function add2to2(){
    console.log("+2 2 clicked")
    count2+=2
    score2El.textContent=count2
}

function add3to2(){
    console.log("+3 2 clicked")
    count2+=3
    score2El.textContent=count2
}

function newGame(){
    score1El.textContent=0
    score2El.textContent=0
}
