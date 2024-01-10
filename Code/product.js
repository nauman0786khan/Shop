



let v = fetch("https://api.escuelajs.co/api/v1/products");
v.then((vv)=>{

return vv.json();


}).then((rr)=>{

console.log(rr);
// data fecth
let clothes = rr.filter(rr =>rr.category.name =="Clothesssss");
let Electronics = rr.filter(rr =>rr.category.name =="Electronics");
let Furniture = rr.filter(rr =>rr.category.name =="Furniture");
let Shoes = rr.filter(rr =>rr.category.name =="Shoes");
console.log(clothes);


// clothes data fetch
let clo=""
clothes.map((cl)=>{
    // console.log(pp);
    clo+=`<div class="item"><img src="${cl.images}" height="250px" alt="${cl.id}" width="250px"><p >${cl.title}</p></div>
         </div>
        
        `;
    
    });
    
    


// Electronics data fetch
let Elc=""
Electronics.map((EE)=>{
// console.log(pp);
     Elc+=`<div class="item"><img src="${EE.images}" alt="${EE.id}" height="250px" width="250px"><p >${EE.title}</p></div>

        
     </div>
    
    `;

});
// Furniture data fetch
let Fur=""
Furniture.map((fr)=>{
    // console.log(pp);
    Fur+=`<div class="item"><img src="${fr.images}" height="250px" alt="${fr.id}" width="250px"><p >${fr.title}</p></div>
         </div>
        
        `;
    
    });

    // Shoes data fetch
let Sho=""
Shoes.map((Sh)=>{
    // console.log(pp);
    Sho+=`<div class="item"><img src="${Sh.images}" height="250px" alt="${Sh.id}" width="250px"><p >${Sh.title}</p></div>
         </div>
        
        `;
    
    });
    

document.getElementById("Electronics").innerHTML = Elc;
document.getElementById("Clothes").innerHTML = clo;
document.getElementById("Furniture").innerHTML = Fur;
document.getElementById("Shoes").innerHTML = Sho;

});

let hh =fetch("header.html")
hh.then((header)=>{

return header.text();

}).then((value)=>{

console.log(value)
   document.getElementById("header").innerHTML=value;

})



