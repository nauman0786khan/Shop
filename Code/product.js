


// fatch product

let v = fetch("Code/product.json");
v.then((vv)=>{

return vv.json();


}).then((rr)=>{

console.log(rr);
// data fecth
let clothes = rr.filter(rr =>rr.category.name =="Clothes");
let Electronics = rr.filter(rr =>rr.category.name =="Electronics");
let Furniture = rr.filter(rr =>rr.category.name =="Furniture");
let Shoes = rr.filter(rr =>rr.category.name =="Shoes");
console.log(clothes);


// clothes data fetch
let clo=""
clothes.map((cl)=>{
    // console.log(pp);
    clo+=`<div class="item"><img src="${cl.images}" class="imc" height="250px" alt="${cl.id}" width="250px"><p >${cl.title}</p><button  id="${cl.id}" onClick="getcartid(this.id)" class="btn">Add to Cart</button></div></div>
         </div>
        
        `;
    
    });
    
    


// Electronics data fetch
let Elc=""
Electronics.map((EE)=>{
// console.log(pp);
     Elc+=`<div class="item"><img src="${EE.images}" class="imc" alt="${EE.id}" height="250px" width="250px"><p >${EE.title}</p><button  id="${EE.id}" onClick="getcartid(this.id)" class="btn">Add to Cart</button></div>

        
     </div>
    
    `;

});
// Furniture data fetch
let Fur=""
Furniture.map((fr)=>{
    // console.log(pp);
    Fur+=`<div class="item"><img src="${fr.images}" height="250px" alt="${fr.id}" width="250px"><p >${fr.title}</p><button  id="${fr.id}" onClick="getcartid(this.id)" class="btn">Add to Cart</button></div>
         </div>
        
        `;
    
    });

    // Shoes data fetch
let Sho=""
Shoes.map((Sh)=>{
    // console.log(pp);
    Sho+=`<div class="item"><img src="${Sh.images}" class="imc" height="250px" alt="${Sh.id}" width="250px"><p >${Sh.title}</p><button  id="${Sh.id}" onClick="getcartid(this.id)" class="btn">Add to Cart</button></div>
         </div>
        
        `;
    
    });
    

document.getElementById("Electronics").innerHTML = Elc;
document.getElementById("Clothes").innerHTML = clo;
document.getElementById("Furniture").innerHTML = Fur;
document.getElementById("Shoes").innerHTML = Sho;
$(document).ready(function(){
   
  $(".scan").on("keyup", function() {
    $("#mains").addClass("active");
    document.getElementById("Electronics").innerHTML = Elc;
    document.getElementById("Clothes").innerHTML = clo;
    document.getElementById("Furniture").innerHTML = Fur;
    document.getElementById("Shoes").innerHTML = Sho;
var ff1 = $(this).val().toLowerCase();
if(ff1 == ""){
$("#mains").removeClass("active");
}
else if(ff1 != null){
$("#mains .filter , #mains .item").filter(function() {
  $(this).toggle($(this).text().toLowerCase().indexOf(ff1) > -1)
});
}
  });
});
});
// header data fetch
let  hh = fetch("header.html")
 hh.then((header)=>{

return header.text();

}).then((value)=>{

console.log(value)
document.getElementById("header").innerHTML=value;

});


