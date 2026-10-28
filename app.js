let gameseq=[];
let userseq=[];
 let started=false;
 let level=0;
let btns=["red","yellow","green","purple"];

 let h2=document.querySelector("h2");
 
 document.addEventListener("keypress",function(){
    if(started == false){
       started=true;
       console.log("game started");
       levelup();
 }});

 function gameflash(btn){
    btn.classList.add('flash');
    setTimeout(function(){
        btn.classList.remove('flash')
    },250);

 }
 
 function userflash(btn){
    btn.classList.add('user');
    setTimeout(function(){
        btn.classList.remove('user')
    },250);

 }
 function levelup(){
   userseq=[];
    level++;
    h2.innerText = `level ${level}`;

    let randinx=Math.floor(Math.random()*3);
    let randcolor=btns[randinx];
    let randbtn=document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor);
    console.log(gameseq);
    gameflash(randbtn);
 }
 function checkans(){
   //console.log( "ciurrent level",level);
   let idx=level-1;
   if(userseq[idx] === gameseq[idx]){
      if(userseq.length == gameseq.length ){
         setTimeout(levelup , 1000);
      }
  }
   else{
      h2.innerText="game over! Press any key to restart"
   }
 }

 function btnpress(){
    console.log(this);
    let btn=this;
    userflash(btn);

    usercolor=btn.getAttribute('id');
    userseq.push(usercolor);
    console.log(userseq);
   checkans(userseq.length -1);

 }

 let allbtns=document.querySelectorAll(".btn");
 for( btn of allbtns){
    btn.addEventListener("click",btnpress);
 }