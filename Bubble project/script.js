var hitnumber;
var score=0;
function generateBubble(){
    document.querySelector(".bottom-bubble").innerHTML =" ";
    for(var i=0;i<162;i++)
    {
      var rn=(Math.floor(Math.random()*10));
      document.querySelector(".bottom-bubble").innerHTML += `<div class="bubble">${rn}</div>`;
   }
}
function DecreaseTimer(){
  var timer=25;
  setInterval(()=>{
    if(timer>0)
    {
      timer--;
    }
    else
    {
        document.querySelector("#HitDiv").textContent = 0;
        document.querySelector(".bottom-bubble").innerHTML = "<h1>Game Over🥱</h1>";
        document.querySelector(".bottom-bubble h1").style.color = "red";
        if(score >=200)
            document.querySelector(".bottom-bubble").innerHTML+=`<h2>Excellent🤑</h2>`;
        else if(score >= 150) 
            document.querySelector(".bottom-bubble").innerHTML+=`<h2>Very Good🤩</h2>`;
        else if(score >= 100)
            document.querySelector(".bottom-bubble").innerHTML+=`<h2>Good🥳</h2>`;
        else if(score >=10)  
            document.querySelector(".bottom-bubble").innerHTML+=`<h2>Not Bad🥱</h2>`;
        else 
            document.querySelector(".bottom-bubble").innerHTML+=`<h2>Better luck next time 😐</h2>`;  
        document.querySelector(".bottom-bubble").innerHTML += `<h2>Your total Score = ${score}</h2>`;        
    }
    document.querySelector("#TimerDiv").textContent = timer;
  },1000);
}
function hittab(){
     hitnumber=(Math.floor(Math.random()*10));
    document.querySelector("#HitDiv").textContent = hitnumber;
}

function scoreIncre(){
    score+=10;
    document.querySelector("#ScoreDIv").textContent=score;
}
document.querySelector(".bottom-bubble").addEventListener("click",(dets)=>{
        //  console.log(dets.target.textContent); 
        //  console.log(hitnumber);
         if(hitnumber === Number(dets.target.textContent))
          {
              scoreIncre();
              generateBubble();
              hittab();
          }
})


generateBubble();
DecreaseTimer();
hittab();
