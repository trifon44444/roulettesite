const prizes=[
"Рикардо Милос",
"Школьник серый",
"Cybertruck",
"Bentley",
"VIP Platinum",
"500к виртов",
"1кк виртов"
];

function spin(speed){

let result=
document.getElementById("result");

result.innerHTML=
"КРУТИМ...";

setTimeout(()=>{

let win=
prizes[
Math.floor(
Math.random()*prizes.length
)
];

result.innerHTML=
"ВЫПАЛО:<br><br>"+win;

},

speed==1
?1500
:4000

);

}
