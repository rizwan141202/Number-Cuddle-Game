var score=0;
var timer=60;
var hitnum=0;
function scorechange(){
    score += 10;
    document.querySelector("#scoreval").textContent=score;
}

function bubblemaking(){
    let clutter= "";
for(var i=1; i<=168; i++)
{
    var r = Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${r}</div>`;
}
document.querySelector(".panel-bottom").innerHTML=clutter;
}

function timerinterval(){
    var timecount=setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timer").textContent=timer;
        }
        else{
            clearInterval(timecount);
            document.querySelector(".panel-bottom").innerHTML=`<h1 style="font-size:41px ;color:red">Game Over !</h1><h3 style="font-size:30px;color:#0fccd6">Score: ${score}</h3>`
            document.querySelector(".panel-bottom").style.flexDirection='column'
        }
       
    },1000)
}

function hitvalue(){
    hitnum=Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent=hitnum;
}

document.querySelector(".panel-bottom").addEventListener('click',function(a){
    var clickednum = Number(a.target.textContent);
    if(clickednum === hitnum)
    {
        scorechange();
        bubblemaking();
        hitvalue();
    } 
})

function start(){
    bubblemaking();
    hitvalue();
timerinterval();
}


