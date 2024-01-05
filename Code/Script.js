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

document.addEventListener("click", function(gg){
   console.log(gg.target.alt);
   idsave= gg.target.alt;
   localStorage.setItem("proid" , idsave);


  });