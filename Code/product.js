let v = fetch("https://api.escuelajs.co/api/v1/products");
v.then((vv)=>{

return vv.json();


}).then((rr)=>{

// console.log(rr);

let clothes = rr.filter(rr =>rr.category.name =="Clothes")
console.log(clothes);
let bb=""

clothes.map((pp)=>{
// console.log(pp);
     bb+=`<div class="item"><img src="${pp.images}" height="250px" width="250px"><p >${pp.title}</p></div>

        
     </div>
    
    `;

});

document.getElementById("productroot").innerHTML = bb;


});
