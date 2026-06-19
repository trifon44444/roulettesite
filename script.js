const items = [
{img:"images/5.png", name:"Рикардо Милос", chance:5},
{img:"images/35.png", name:"Школьник серый", chance:10},
{img:"images/36.png", name:"Школьник синий", chance:10},
{img:"images/47.png", name:"Чёрный Адик", chance:8},
{img:"images/51.png", name:"Качок", chance:12},

{img:"images/103.png", name:"Донат", chance:3},
{img:"images/115.png", name:"Модник", chance:7},
{img:"images/116.png", name:"Араб", chance:7},

{img:"images/14195.png", name:"Мешок", chance:6},
{img:"images/14196.png", name:"Посох вьюга", chance:2},
{img:"images/14197.png", name:"Посох снежинка", chance:2},

{img:"images/14200.png", name:"Галстук", chance:6},
{img:"images/14202.png", name:"Борода", chance:6},
{img:"images/14206.png", name:"Звёздочки", chance:4},
{img:"images/14207.png", name:"Рюкзак белый", chance:5},

{img:"images/14779.png", name:"Крылья бирюзовые", chance:2},
{img:"images/14780.png", name:"Крылья красные", chance:2},
{img:"images/14781.png", name:"Крылья синие", chance:2},
{img:"images/14797.png", name:"Броня Gucci", chance:2},
{img:"images/14798.png", name:"Броня LV", chance:2},

{img:"images/15320.png", name:"Моргенштерн", chance:3},
{img:"images/15331.png", name:"Янг Харди", chance:3},
{img:"images/15333.png", name:"Барецкий", chance:3},

{img:"images/15414.png", name:"Супер сус", chance:1},
{img:"images/15421.png", name:"Слава Мэрлоу", chance:3},
{img:"images/15490.png", name:"Тедди большой", chance:4},

{img:"images/15501.png", name:"Никита босс", chance:3},
{img:"images/15519.png", name:"Майрс", chance:3},

{img:"images/15736.png", name:"Ёлка авто", chance:2},
{img:"images/15738.png", name:"Сноуборд авто", chance:2},
{img:"images/15739.png", name:"Багажник авто", chance:2},
{img:"images/15740.png", name:"Круг авто", chance:2},

{img:"images/15851.png", name:"Сумка Bape", chance:2},
{img:"images/15888.png", name:"Кобура Gucci", chance:1},

{img:"images/15902.png", name:"Гоночный шлем", chance:2},

{img:"images/16224.png", name:"Кепка с ушками", chance:3},

{img:"images/16463.png", name:"Скейт", chance:5},
{img:"images/16464.png", name:"Скейт", chance:5},
{img:"images/16465.png", name:"Скейт", chance:5},

{img:"images/16600.png", name:"Рука", chance:2},
{img:"images/16608.png", name:"Рюкзак фиолет", chance:3},

{img:"images/16665.png", name:"Меч красный", chance:2},
{img:"images/16678.png", name:"Скейт череп", chance:2},
{img:"images/16679.png", name:"Скейт фиолет", chance:2},
{img:"images/16682.png", name:"Меч синий", chance:2},

{img:"images/16774.png", name:"Топор", chance:2},
{img:"images/16779.png", name:"Плащ", chance:3},

{img:"images/16866.png", name:"Бампер", chance:2},

{img:"images/17249.png", name:"Рюкзак Bape", chance:2},
{img:"images/17250.png", name:"Бита", chance:3},
{img:"images/17251.png", name:"Очки Prada", chance:3},
{img:"images/17255.png", name:"Наушники", chance:3},
{img:"images/17256.png", name:"Bearbrick", chance:1},
{img:"images/17273.png", name:"Мини гелик", chance:1},

{img:"images/175.png", name:"Конор", chance:2},

{img:"images/17976.png", name:"Венок", chance:2},
{img:"images/17996.png", name:"Ушанка LV корич", chance:2},
{img:"images/17997.png", name:"Ушанка LV синяя", chance:2},

{img:"images/18203.png", name:"Киса", chance:1},

{img:"images/18895.png", name:"Лошадь", chance:1},

{img:"images/19.png", name:"Баба", chance:3},
{img:"images/194.png", name:"Хищник", chance:2},
{img:"images/206.png", name:"Пацан", chance:3},

{img:"images/269.png", name:"Жиробас", chance:10},
{img:"images/270.png", name:"Шоколадка", chance:8},

{img:"images/79.png", name:"OffWhite", chance:4},
{img:"images/8599.png", name:"Василич", chance:3},
{img:"images/8793.png", name:"Броник OffWhite", chance:2},
{img:"images/94.png", name:"Рубашка", chance:6},

{img:"images/icon-gold-vip.png", name:"VIP Gold", chance:1},
{img:"images/icon-platinum-vip.png", name:"VIP Platinum", chance:0.5},
{img:"images/icon-silver-vip.png", name:"VIP Silver", chance:2}
];

const strip = document.getElementById("strip");
let canSpin = true;

// 🔥 бесконечная лента
function buildStrip(){
strip.innerHTML = "";

for(let i=0;i<150;i++){
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

// прокрутка
let offset = -(Math.floor(Math.random()*100)+60)*140;
strip.style.transform = `translateX(${offset}px)`;

// результат берём ИЗ ЦЕНТРА (без рассинхрона)
setTimeout(()=>{

let cards = document.querySelectorAll(".card");
let center = Math.floor(cards.length / 2);

let win = cards[center];

let img = win.querySelector("img").getAttribute("src");
let name = win.querySelector("div").innerText;

document.getElementById("result").innerHTML =
"🎉 Выпало: <b>"+name+"</b><br><img src='"+img+"' width='120'>";

canSpin = true;

},5000);
}
