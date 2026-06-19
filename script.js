const items = [
{img:"images/5.png", name:"Рикардо Милос", chance:5},
{img:"images/35.png", name:"Школьник серый", chance:10},
{img:"images/36.png", name:"Школьник синий", chance:10},
{img:"images/47.png", name:"Чёрный Адик", chance:8},
{img:"images/51.png", name:"Качок", chance:12},

{img:"images/103.png", name:"Донат", chance:3},
{img:"images/115.png", name:"Модник", chance:7},
{img:"images/116.png", name:"Араб", chance:7},

{img:"images/15414.png", name:"Супер сус", chance:1},
{img:"images/15490.png", name:"Тедди", chance:4},

{img:"images/icon-gold-vip.png", name:"VIP Gold", chance:1},
{img:"images/icon-platinum-vip.png", name:"VIP Platinum", chance:0.5},
{img:"images/icon-silver-vip.png", name:"VIP Silver", chance:2}
];

const strip = document.getElementById("strip");

let canSpin = true;

// ===== создаём ленту ОДИН РАЗ =====
function buildStrip(){
strip.innerHTML = "";

for(let i=0;i<200;i++){
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

// ===== выбираем победителя =====
function getWinIndex(){
let pool = [];

items.forEach((item, index)=>{
let weight = Math.floor(item.chance * 20);

for(let i=0;i<weight;i++){
pool.push(index);
}
});

return pool[Math.floor(Math.random()*pool.length)];
}

// ===== SPIN =====
function spin(){

if(!canSpin) return;
canSpin = false;

document.getElementById("result").innerText = "КРУТИМ...";

// ❗ ВАЖНО: НЕ СТИРАЕМ ЛЕНТУ
if(strip.childElementCount === 0){
buildStrip();
}

// фиксируем старт
strip.style.transition = "none";
strip.style.transform = "translateX(0px)";

// даём браузеру РЕНДЕР (ВАЖНО!)
requestAnimationFrame(()=>{

requestAnimationFrame(()=>{

strip.style.transition = "transform 6s cubic-bezier(.12,.8,.12,1)";

let winIndex = getWinIndex();

let cardWidth = 150;
let centerPosition = window.innerWidth / 2;

let target = winIndex * cardWidth;

let offset = centerPosition - target;

strip.style.transform = `translateX(${offset}px)`;

// результат (ТОЧНО ТОТ ЖЕ)
let win = items[winIndex];

setTimeout(()=>{

document.getElementById("result").innerHTML =
"🎉 Выпало: <b>"+win.name+"</b><br><img src='"+win.img+"' width='120'>";

canSpin = true;

},6000);

});

});
}
