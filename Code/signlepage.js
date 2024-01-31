// single product page data fetch
let x = localStorage.getItem("proid");
console.log(x);




let sp = fetch("Code/product.json");
sp.then((ss)=>{

return ss.json();

}).then((si)=>{
    let Singleproduct = si.filter(si =>si.id ==x);

    console.log(Singleproduct)
let SPP= ""

Singleproduct.map((va)=>{
    
console.log(va);
SPP=` <div class="raw padding flex"><div class="wth"><img src="${va.images}" width="100%" alt=""></div>
<div class="wth"><h4 class="textgap">${va.category.name}</h4><h2 class="textgap">${va.title}</h2><h1 class="textgap">
₹${va.price}</h1><ul class="listoffer textgap">
<li>Bank Offer10% instant discount on ICICI Bank Credit Cards, up to ₹300, on orders of ₹2,500 and above</li>
<li>Bank Offer10% off on ICICI Bank Credit Card and EMI Transactions, up to ₹1500, on orders of ₹5,000 and above</li>
<li>Bank Offer10% off on Bank of Baroda Credit Card and EMI Transactions, up to ₹1500 on orders of ₹5000 and above</li>

</ul><p class="textgap">${va.description}</p><button  id="${va.id}" onClick="getcartid(this.id)" class="btn">Buy Now</button></div></div>`
})
document.getElementById("SPPF").innerHTML = SPP;
});

function getcartid(carid){

    console.log(carid);
    let cartsp = fetch("Code/product.json");
    cartsp.then((ct)=>{
return ct.json();

    }).then((ctf)=>{


let cartfilter = ctf.filter(ctf =>ctf.id ==x);
console.log(cartfilter)
let cats=""
cartfilter.map((crt)=>{

cats=`<div class="raw flex Padding shadow pluscart">
<div><img src="${crt.images}" alt="" width="40px" ></div>
<div><p>${crt.title}</p></div>

</div>`

})
document.getElementById("cartget").innerHTML = cats;
    })

}