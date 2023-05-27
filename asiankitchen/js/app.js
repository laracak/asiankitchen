const menu = [
  {
    id: 1,
    title: "Burger",
    category: "Burger",
    price: 10.99,
    img:
     "https://www.recipetineats.com/wp-content/uploads/2022/08/Stack-of-cheeseburgers.jpg"  ,
    desc: `Fluffy buns and in the middle it had French cheese, tomatoes, picles,sauces.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://omnivorescookbook.com/wp-content/uploads/2017/04/2002_Dan-Dan-Noodles_001.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];

// ALL BUTTON
const btnAll = document.createElement("button")
btnAll.type = "button" 
btnAll.classList.add("btn-item","btn-light","btn-outline-info")
btnAll.textContent = "ALL"
btnAll.id = "all" 

const container1 = document.querySelector(".btn-container") 
container1.appendChild(btnAll) 

 //buton-1
const btnBurger = document.createElement("button")
btnBurger.type = "button"
btnBurger.classList.add("btn-item","btn-light","btn-outline-info")
btnBurger.textContent = "BURGER"
btnBurger.id = "burger"
const container2 = document.querySelector(".btn-container")
container2.appendChild(btnBurger)


const btnChickenRamen = document.createElement("button")
btnChickenRamen.type = "button"
btnChickenRamen.classList.add("btn-item","btn-light","btn-outline-info")
btnChickenRamen.textContent = "CHICKEN-RAMEN"
btnChickenRamen.id = "ChickenRamen"
const container3 = document.querySelector(".btn-container")
container3.appendChild(btnChickenRamen)


const btnBibimbap = document.createElement("button")
btnBibimbap.type = "button"
btnBibimbap.classList.add("btn-item","btn-light","btn-outline-info")
btnBibimbap.textContent = "BIBIMBAP"
btnBibimbap.id = "bibimbap"
const container4 = document.querySelector(".btn-container")
container4.appendChild(btnBibimbap)


const btnDanDanMian = document.createElement("button")
btnDanDanMian.type = "button"
btnDanDanMian.classList.add("btn-item","btn-light","btn-outline-info")
btnDanDanMian.textContent = "DAN-DAN-MIAN"
btnDanDanMian.id = "danDanMian"
const container5 = document.querySelector(".btn-container")
container5.appendChild(btnDanDanMian)


const btnYangzhouFriedRice = document.createElement("button")
btnYangzhouFriedRice.type = "button"
btnYangzhouFriedRice.classList.add("btn-item","btn-light","btn-outline-info")
btnYangzhouFriedRice.textContent = "YANGZHOU-FRIED-RICE"
btnYangzhouFriedRice.id = "yangzhouFriedRice"
const container6 = document.querySelector(".btn-container")
container6.appendChild(btnYangzhouFriedRice)


const btnOnigiri = document.createElement("button")
btnOnigiri.type = "button"
btnOnigiri.classList.add("btn-item","btn-light","btn-outline-info")
btnOnigiri.textContent = "ONIGIRI"
btnOnigiri.id = "onigiri"
const container7 = document.querySelector(".btn-container")
container7.appendChild(btnOnigiri)


const btnJajangmyeon = document.createElement("button")
btnJajangmyeon.type = "button"
btnJajangmyeon.classList.add("btn-item","btn-light","btn-outline-info")
btnJajangmyeon.textContent = "JAJANGMYEON"
btnJajangmyeon.id = "jajangmyeon"
const container8 = document.querySelector(".btn-container")
container8.appendChild(btnJajangmyeon)


const btnMaYiShangShu = document.createElement("button")
btnMaYiShangShu.type = "button"
btnMaYiShangShu.classList.add("btn-item","btn-light","btn-outline-info")
btnMaYiShangShu.textContent = "MA-YI-SHANG-SHU"
btnMaYiShangShu.id = "maYiShangShu"
const container9 = document.querySelector(".btn-container")
container9.appendChild(btnMaYiShangShu)


const btnDoroyaki = document.createElement("button")
btnDoroyaki.type = "button"
btnDoroyaki.classList.add("btn-item","btn-light","btn-outline-info")
btnDoroyaki.textContent = "DOROYAKI"
btnDoroyaki.id = "doroyaki"
const container10 = document.querySelector(".btn-container")
container10.appendChild(btnDoroyaki)

//! Butonu Ekranda Göstermek İçin
let allBtn = document.querySelector("#all")
allBtn.addEventListener("click", menuShow) 
const menu1 = document.querySelector(".section-center") 
menu1.id = "menu" 
function menuShow () { 
    let menuItems = menu.map(item => { 
        return `
        <div class="card bg-light text-white photo">
        <img src="${item.img}" class="img-fluid rounded-start" style="height:400px" ">
            <div class="card-img-overlay">
                <h5 class="card-title"> ${item.title} </h5>
                <p class="card-text"> ${item.desc} </p>
                <div class="badge bg-primary text-wrap" style="width: 6rem;">
                ${item.price}
                </div>
            </div>
        </div> 
` 
    })
    menu1.innerHTML = menuItems 
}
menuShow(); //fonksiyonu bitiriyoruz


let Dandanmianbtn = document.querySelector("#burger")
Burgerbtn.addEventListener("click", burgerMenu)
function burgerMenu () {
let menuItems = menu.map(item => {
if(item.category == "Burger"){ 
return `
<div class="card bg-light text-white photo">
<img src="${item.img}" class="img-fluid rounded-start" style="height:400px" ">
<div class="card-img-overlay">
<h5 class="card-title"> ${item.title} </h5>
<p class="card-text"> ${item.desc} </p>
<div class="badge bg-primary text-wrap" style="width: 6rem;">
${item.price}
</div>
</div>
</div> ` }
})
menu1.innerHTML = menuItems
}

let ChickenRamenbtn = document.querySelector("#ramen")
ChickenRamenbtn.addEventListener("click", ramenMenu)
function ramenMenu () {
let menuItems = menu.map(item => {
if(item.category == "Ramen"){ 
return `
<div class="card bg-light text-white photo">
<img src="${item.img}" class="img-fluid rounded-start" style="height:400px" ">
<div class="card-img-overlay">
<h5 class="card-title"> ${item.title} </h5>
<p class="card-text"> ${item.desc} </p>
<div class="badge bg-primary text-wrap" style="width: 6rem;">
${item.price}
</div>
</div>
</div> ` }
})
menu1.innerHTML = menuItems
}

let Bibimbapbtn = document.querySelector("#bibimbap")
Burgerbtn.addEventListener("click", bibimbapMenu)
function bibimbapMenu () {
let menuItems = menu.map(item => {
if(item.category == "Bibimbap"){ 
return `
<div class="card bg-light text-white photo">
<img src="${item.img}" class="img-fluid rounded-start" style="height:400px" ">
<div class="card-img-overlay">
<h5 class="card-title"> ${item.title} </h5>
<p class="card-text"> ${item.desc} </p>
<div class="badge bg-primary text-wrap" style="width: 6rem;">
${item.price}
</div>
</div>
</div> ` }
})
menu1.innerHTML = menuItems
}

let DanDanMianbtn = document.querySelector("#china")
Burgerbtn.addEventListener("click", chinaMenu)
function chinaMenu () {
let menuItems = menu.map(item => {
if(item.category == "China"){ 
return `
<div class="card bg-light text-white photo">
<img src="${item.img}" class="img-fluid rounded-start" style="height:400px" ">
<div class="card-img-overlay">
<h5 class="card-title"> ${item.title} </h5>
<p class="card-text"> ${item.desc} </p>
<div class="badge bg-primary text-wrap" style="width: 6rem;">
${item.price}
</div>
</div>
</div> ` }
})
menu1.innerHTML = menuItems
}

let YangzhouFriedRicebtn = document.querySelector("#rice")
YangzhouFriedRicebtn.addEventListener("click", riceMenu)
function riceMenu () {
let menuItems = menu.map(item => {
if(item.category == "rice"){ 
return `
<div class="card bg-light text-white photo">
<img src="${item.img}" class="img-fluid rounded-start" style="height:400px" ">
<div class="card-img-overlay">
<h5 class="card-title"> ${item.title} </h5>
<p class="card-text"> ${item.desc} </p>
<div class="badge bg-primary text-wrap" style="width: 6rem;">
${item.price}
</div>
</div>
</div> ` }
})
menu1.innerHTML = menuItems
}

let Onigiribtn = document.querySelector("#onigiri")
Onigiribtn.addEventListener("click", onigiriMenu)
function onigiriMenu () {
let menuItems = menu.map(item => {
if(item.category == "Onigiri"){ 
return `
<div class="card bg-light text-white photo">
<img src="${item.img}" class="img-fluid rounded-start" style="height:400px" ">
<div class="card-img-overlay">
<h5 class="card-title"> ${item.title} </h5>
<p class="card-text"> ${item.desc} </p>
<div class="badge bg-primary text-wrap" style="width: 6rem;">
${item.price}
</div>
</div>
</div> ` }
})
menu1.innerHTML = menuItems
}

let Jajangmyeonbtn = document.querySelector("#korean")
Jajangmyeonbtn.addEventListener("click", koreanMenu)
function koreanMenu () {
let menuItems = menu.map(item => {
if(item.category == "Korean"){ 
return `
<div class="card bg-light text-white photo">
<img src="${item.img}" class="img-fluid rounded-start" style="height:400px" ">
<div class="card-img-overlay">
<h5 class="card-title"> ${item.title} </h5>
<p class="card-text"> ${item.desc} </p>
<div class="badge bg-primary text-wrap" style="width: 6rem;">
${item.price}
</div>
</div>
</div> ` }
})
menu1.innerHTML = menuItems
}

let MaYiShangShubtn = document.querySelector("#china")
MaYiShangShurbtn.addEventListener("click", chinaMenu)
function chinaMenu () {
let menuItems = menu.map(item => {
if(item.category == "China"){ 
return `
<div class="card bg-light text-white photo">
<img src="${item.img}" class="img-fluid rounded-start" style="height:400px" ">
<div class="card-img-overlay">
<h5 class="card-title"> ${item.title} </h5>
<p class="card-text"> ${item.desc} </p>
<div class="badge bg-primary text-wrap" style="width: 6rem;">
${item.price}
</div>
</div>
</div> ` }
})
menu1.innerHTML = menuItems
}

let Doroyakibtn = document.querySelector("#japan")
Doroyakibtn.addEventListener("click", japanMenu)
function japanMenu () {
let menuItems = menu.map(item => {
if(item.category == "Japan"){ 
return `
<div class="card bg-light text-white photo">
<img src="${item.img}" class="img-fluid rounded-start" style="height:400px" ">
<div class="card-img-overlay">
<h5 class="card-title"> ${item.title} </h5>
<p class="card-text"> ${item.desc} </p>
<div class="badge bg-primary text-wrap" style="width: 6rem;">
${item.price}
</div>
</div>
</div> ` }
})
menu1.innerHTML = menuItems
}


