let angrygrid = document.querySelector(".angry-grid");
let item0 = document.querySelector("#item-0");
let item1 = document.querySelector("#item-1");
let item2 = document.querySelector("#item-2");
let item3 = document.querySelector("#item-3");
let item4 = document.querySelector("#item-4");
let button = document.querySelector(".button ");
let button1 = document.querySelector(".button");
let namefirst = document.querySelector(".name span");
let nameSecond = document.querySelector(".name h1");
let price = document.querySelector(".price span:nth-child(1)");
let discount = document.querySelector(".price sup");
let ChooseColor = document.querySelector(".color");
let ChooseColor1 = document.querySelector(".color");
let faminus = document.querySelector(".fa-minus");
let faplus = document.querySelector(".fa-plus");
let numberofitems = document.querySelector(".numberofitems");
let originalValue = document.querySelector(".originalValue");
let addToCart = document.querySelector(".addToCart");
let paragraph = document.querySelector(".Message");
let number = 1;
let addtocart1 = {
  name: "",
  color: "yellow",
  size: "small",
};
let colorhack = {};
let data = {};
function handleImage(e) {
  console.log(e);
}
async function Data() {
  const response = await fetch(
    "https://cdn.shopify.com/s/files/1/0564/3685/0790/files/singleProduct.json?v=1701948448"
  );
  const { product } = await response.json();
  console.log(product);
  console.log(price);
  price.textContent = product.price;
  let text = "";
  text += `<div id="item-${0}">
  <img src="${product.images[0].src}" alt="">
  
  </div>`;
  nameSecond.textContent = product.title;
  addtocart1 = { ...addtocart1, ["name"]: product.title };
  console.log(name);
  product.images.forEach(({ src }, idx) => {
    text += `<div id="item-${idx + 1}"">
    <img src="${src}" alt="" >
    
    </div>`;
  });
  let x = "";
  namefirst.textContent = product.vendor;
  product.options[0].values.forEach((item, idx) => {
    console.log();
    if (idx == 0) {
      x += `<div style="background-color:${item[Object.keys(item)[0]]}" name="${
        Object.keys(item)[0]
      }" class="colorSelected"></div>`;
      addtocart1.color = Object.keys(item)[0];
    } else {
      x += `<div style="background-color:${item[Object.keys(item)[0]]}" name="${
        Object.keys(item)[0]
      }"></div>`;
    }
  });
  let y = "";
  product.options[1].values.forEach((item, idx) => {
    console.log();
    y += `    <button>
    <i class="fa fa-circle-o" aria-hidden="true"></i>

    <span>${item}</span>
</button>`;
  });
  button.innerHTML = y;
  ChooseColor.innerHTML = x;
  discount.textContent = `${Math.round(
    ((Number(product.compare_at_price.substr(1)) -
      Number(product.price.substr(1))) /
      Number(product.compare_at_price.substr(1))) *
      100
  )}% Off`;
  originalValue.textContent = product.compare_at_price;
  angrygrid.innerHTML = text;
  console.log(product);
  return product;
}
Data();
console.log(data);
console.log(angrygrid);

const handleSize = (e) => {
  console.log(e.target);
  console.log();
  ChooseColor.childNodes.forEach((item, idx) => {
    console.log(item);
    if (item.classList.contains("fa-solid")) {
      // Remove the 'colorSelected' class from the parent element
      item.classList.remove("fa-solid");
    }
  });
  console.log(e);
  addtocart1 = { ...addtocart1, ["color"]: e.target.name };
  e.target.classList.add("fa-solid");
};
const handleColor = (e) => {
  console.log(e.target.parentElement);
  console.log();
  ChooseColor.childNodes.forEach((item, idx) => {
    console.log(item);
    if (item.classList.contains("colorSelected")) {
      // Remove the 'colorSelected' class from the parent element
      item.classList.remove("colorSelected");
    }
  });
  console.log(e);
  addtocart1 = { ...addtocart1, ["color"]: e.target.name };
  e.target.classList.add("colorSelected");
};
button.addEventListener("click", handleSize);
ChooseColor.addEventListener("click", handleColor);
faminus.addEventListener("click", () => {
  if (number <= 0) {
    return;
  }
  number--;
  numberofitems.textContent = number;
});
faplus.addEventListener("click", () => {
  number++;
  numberofitems.textContent = number;
});
numberofitems.textContent = number;

item1.addEventListener("click", (e) => {
  console.log(e.target);
  //   e.target.classList.add("picture");
});
addToCart.addEventListener("click", (e) => {
  console.log(addtocart1);
  paragraph.textContent = `${addtocart1.name}  Size  ${addtocart1["size"]} added to cart`;
  paragraph.classList.add("messagenone");
});
