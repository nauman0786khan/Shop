let p = fetch("https://api.escuelajs.co/api/v1/categories");
p.then((value)=>{

return value.json();

}).then((data)=>{

console.log(data);
let dd=""
data.map((ff)=>{

     dd+=`<div class="item"><img src="${ff.image}" height="100px" width="100px"><p >${ff.name}</p></div>

        
     </div>
    
    `;

});

document.getElementById("rootcat").innerHTML = dd;


});

let image=document.querySelector("img").value();
image.addEventlistener("click" , function({

document.
}))