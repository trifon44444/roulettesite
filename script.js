const items = [
{img:"images/5.png", name:"Рикардо", chance: 5},
{img:"images/35.png", name:"Школьник", chance: 10},
{img:"images/36.png", name:"Школьник", chance: 10},
{img:"images/47.png", name:"Адик", chance: 8},
{img:"images/51.png", name:"Качок", chance: 12},

{img:"images/103.png", name:"Донат", chance: 3},
{img:"images/115.png", name:"Модник", chance: 7},
{img:"images/116.png", name:"Араб", chance: 7},

{img:"images/14797.png", name:"Gucci", chance: 2},
{img:"images/14798.png", name:"LV", chance: 2},

{img:"images/15414.png", name:"Супер сус", chance: 1},
{img:"images/15490.png", name:"Тедди", chance: 4},

{img:"images/icon-gold-vip.png", name:"VIP Gold", chance: 1},
{img:"images/icon-platinum-vip.png", name:"VIP Platinum", chance: 0.5},
{img:"images/icon-silver-vip.png", name:"VIP Silver", chance: 2}
];

const strip = document.getElementById("strip");
let canSpin = true;

// 🔥 ДЕЛАЕМ БОЛЬШУЮ БЕСКОНЕЧНУЮ ЛЕНТУ
function buildStrip(){
strip.innerHTML = "";

for(let i=0;i<120;i++){
let item = items[Math.floor(Math.random()*items.length)];

let div = document.createElement("div");
div.className = "card";

div.innerHTML = `
<img src="${item.img}">
<div>${item.name}</div>
`;

strip.appendChild(div);
}
}

function spin(){

if(!canSpin) return;
canSpin = false;

document.getElementById("result").innerText = "КРУТИМ...";

buildStrip();

// 🎰 случайная прокрутка
let offset = -(Math.floor(Math.random()*80)+40) * 140;

strip.style.transform = `translateX(${offset}px)`;

// 🔥 ВАЖНО: берём результат ИЗ ЛЕНТЫ (а не из второго рандома)
setTimeout(()=>{

let cards = document.querySelectorAll(".card");

// центр
let center = Math.floor(cards.length / 2);

let win = cards[center];

let img = win.querySelector("img").getAttribute("src");
let name = win.querySelector("div").innerText;

document.getElementById("result").innerHTML =
"🎉 Выпало: <b>"+name+"</b><br><img src='"+img+"' width='120'>";

canSpin = true;

},5000);
}
