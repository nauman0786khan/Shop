// single product page data fetch
let x = localStorage.getItem("proid");
console.log(x);

let sp = fetch("https://api.escuelajs.co/api/v1/products");
sp.then((ss)=>{

return ss.json();

}).then((si)=>{
    let Singleproduct = si.filter(si =>si.id ==x);
    console.log(Singleproduct)
let SPP= ""

Singleproduct.map((va)=>{
    
console.log(va);
SPP=` <div class="raw padding flex"><div class="wth"><img src="${va.images}" width="100%" alt=""></div>
<div class="wth"><h2 class="textgap">${va.title}</h2><h1 class="textgap">
₹${va.price}</h1><p class="textgap">${va.description}</p><h3 class="textgap">${va.category.name}</h3></div></div>`
})
document.getElementById("SPPF").innerHTML = SPP;
});
