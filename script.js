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

{img:"images/15501.png", name:"Босс", chance: 3},
{img:"images/15519.png", name:"Майрс", chance: 3},

{img:"images/15736.png", name:"Ёлка", chance: 2},
{img:"images/15738.png", name:"Сноуборд", chance: 2},
{img:"images/15739.png", name:"Багажник", chance: 2},
{img:"images/15740.png", name:"Круг", chance: 2},

{img:"images/15851.png", name:"Сумка Bape", chance: 2},
{img:"images/15888.png", name:"Кобура Gucci", chance: 1},

{img:"images/15902.png", name:"Гоночный шлем", chance: 2},

{img:"images/16224.png", name:"Кепка с ушками", chance: 3},

{img:"images/16463.png", name:"Скейт", chance: 5},
{img:"images/16464.png", name:"Скейт", chance: 5},
{img:"images/16465.png", name:"Скейт", chance: 5},

{img:"images/16600.png", name:"Рука", chance: 2},
{img:"images/16608.png", name:"Рюкзак фиолет", chance: 3},

{img:"images/16665.png", name:"Меч красный", chance: 2},
{img:"images/16678.png", name:"Скейт череп", chance: 2},
{img:"images/16679.png", name:"Скейт фиолет", chance: 2},
{img:"images/16682.png", name:"Меч синий", chance: 2},

{img:"images/16774.png", name:"Топор", chance: 2},
{img:"images/16779.png", name:"Плащ", chance: 3},

{img:"images/16866.png", name:"Бампер", chance: 2},

{img:"images/17249.png", name:"Рюкзак Bape", chance: 2},
{img:"images/17250.png", name:"Бита", chance: 3},
{img:"images/17251.png", name:"Очки Prada", chance: 3},
{img:"images/17255.png", name:"Наушники", chance: 3},
{img:"images/17256.png", name:"Bearbrick", chance: 1},
{img:"images/17273.png", name:"Мини гелик", chance: 1},

{img:"images/17976.png", name:"Венок", chance: 2},
{img:"images/17996.png", name:"Ушанка LV корич", chance: 2},
{img:"images/17997.png", name:"Ушанка LV синяя", chance: 2},

{img:"images/18203.png", name:"Киса", chance: 1},

{img:"images/18895.png", name:"Лошадь", chance: 1},

{img:"images/19.png", name:"Баба", chance: 3},
{img:"images/194.png", name:"Хищник", chance: 2},
{img:"images/206.png", name:"Пацан", chance: 3},

{img:"images/269.png", name:"Жиробас", chance: 10},
{img:"images/270.png", name:"Шоколадка", chance: 8},

{img:"images/35.png", name:"Школьник серый", chance: 10},
{img:"images/36.png", name:"Школьник синий", chance: 10},
{img:"images/43.png", name:"Опер", chance: 6},
{img:"images/47.png", name:"Чёрный Адик", chance: 8},
{img:"images/48.png", name:"Подтяжки", chance: 7},
{img:"images/5.png", name:"Рикардо Милос", chance: 5},
{img:"images/51.png", name:"Качок", chance: 12},
{img:"images/79.png", name:"OffWhite", chance: 4},

{img:"images/8599.png", name:"Василич", chance: 3},
{img:"images/8793.png", name:"Броник OffWhite", chance: 2},
{img:"images/94.png", name:"Рубашка", chance: 6},

{img:"images/icon-gold-vip.png", name:"VIP Gold", chance: 1},
{img:"images/icon-platinum-vip.png", name:"VIP Platinum", chance: 0.5},
{img:"images/icon-silver-vip.png", name:"VIP Silver", chance: 2}
];

const strip = document.getElementById("strip");
let canSpin = true;

function buildStrip(){
strip.innerHTML = "";

for(let i=0;i<40;i++){
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

function getWin(){
let pool = [];

items.forEach(i=>{
let count = Math.floor(i.chance * 10);
for(let j=0;j<count;j++){
pool.push(i);
}
});

return pool[Math.floor(Math.random()*pool.length)];
}

function spin(){

if(!canSpin) return;
canSpin = false;

document.getElementById("result").innerText = "КРУТИМ...";

buildStrip();

let win = getWin();

let offset = -(Math.floor(Math.random()*25)+20)*140;
strip.style.transform = `translateX(${offset}px)`;

setTimeout(()=>{
document.getElementById("result").innerHTML =
"🎉 Выпало: <b>"+win.name+"</b><br><img src='"+win.img+"' width='120'>";
canSpin = true;
},5000);

}
