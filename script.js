
let cdr;
let messages;
let score=20



// AGAIN
function changer () {
   cdr=document.querySelector(".number")
   cdr.innerHTML="?"; 
// console.log(cdr)
   messages=document.querySelector(".message")
   messages.innerHTML="Start guessing..."
//  console.log(messages)
   document.querySelector(".score").innerHTML= score 
   document.body.style.background="black";
   generer=Math. floor(Math. random() * 20) + 1;
   return generer
//  console.log(score)
}

 let boutonAgain=document.querySelector(".again")

boutonAgain.addEventListener("click", changer)

// CHECK

let entrer=document.querySelector(".guess")
let generer= Math. floor(Math. random() * 20) + 1
console.log(generer)
function verificateurDeValeur(generer,entrer){
   if (entrer>generer) {
      document.querySelector(".message").innerHTML="TOO HIGH";
      document.querySelector(".score").innerHTML=score--
   } else{
   if (entrer<generer) {
      document.querySelector(".message").innerHTML="TOO LOW";
      document.querySelector(".score").innerHTML=score--
   }else{
       document.querySelector(".message").innerHTML="GREAT,YOU WIN";
       document.body.style.background="green";
       document.querySelector(".number").innerHTML= generer
   }
}
}
 let btnCheck=document.querySelector(".check");
 btnCheck.addEventListener("click",verificateurDeValeur)

