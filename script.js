const items = [
{img:"images/5.png", name:"Рикардо Милос"},
{img:"images/35.png", name:"Школьник серый"},
{img:"images/36.png", name:"Школьник синий"},
{img:"images/47.png", name:"Чёрный Адик"},
{img:"images/51.png", name:"Качок"},

{img:"images/103.png", name:"Донат"},
{img:"images/115.png", name:"Модник"},
{img:"images/116.png", name:"Араб"},

{img:"images/15414.png", name:"Супер сус"},
{img:"images/15490.png", name:"Тедди"},

{img:"images/icon-gold-vip.png", name:"VIP Gold"},
{img:"images/icon-platinum-vip.png", name:"VIP Platinum"},
{img:"images/icon-silver-vip.png", name:"VIP Silver"}
];

const strip = document.getElementById("strip");
const result = document.getElementById("result");

let canSpin = true;

const CARD_WIDTH = 150;

// ===== создаём ленту =====
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

// ===== СПИН =====
function spin(){

if(!canSpin) return;
canSpin = false;

result.innerText = "КРУТИМ...";

// если вдруг пусто
if(strip.childElementCount === 0){
buildStrip();
}

// сброс позиции
strip.style.transition = "none";
strip.style.transform = "translateX(0px)";

// ждём отрисовку (фикс пропадания)
requestAnimationFrame(()=>{

// ВЫБОР РЕЗУЛЬТАТА (ОДИН РАЗ)
let winIndex = Math.floor(Math.random() * items.length);
let win = items[winIndex];

// центр экрана
let centerOffset = window.innerWidth / 2;

// куда должен приехать элемент
let target = winIndex * CARD_WIDTH;

// итоговый сдвиг
let offset = centerOffset - target;

strip.style.transition = "transform 5s cubic-bezier(.1,.7,.1,1)";
strip.style.transform = `translateX(${offset}px)`;

// результат = ТОЧНО ТОТ ЖЕ
setTimeout(()=>{

result.innerHTML =
"🎉 Выпало: <b>"+win.name+"</b><br><img src='"+win.img+"' width='120'>";

canSpin = true;

},5000);

});
}

// старт
buildStrip();
