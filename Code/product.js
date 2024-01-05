let v = fetch("https://api.escuelajs.co/api/v1/products");
v.then((vv)=>{

return vv.json();


}).then((rr)=>{

console.log(rr);

let clothes = rr.filter(rr =>rr.category.name =="new category2")
let Electronics = rr.filter(rr =>rr.category.name =="Electronics")
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
     Elc+=`<div class="item"><img src="${EE.images}" height="250px" width="250px"><p >${EE.title}</p></div>

        
     </div>
    
    `;

});

document.getElementById("Electronics").innerHTML = Elc;
document.getElementById("Clothes").innerHTML = clo;

});

let hh =fetch("header.html")
hh.then((header)=>{

return header.text();

}).then((value)=>{

console.log(value)
   document.getElementById("header").innerHTML=value;

})