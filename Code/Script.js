let p = fetch("https://api.escuelajs.co/api/v1/categories");
p.then((value)=>{

return value.json();

}).then((data)=>{

console.log(data);
let dd=""
data.map((ff)=>{

     dd+=`<div id="${ff.id}">
    <img src="${ff.image}" height="250px" width="100%" alt="">
    <p>${ff.name}</p2>
    </div>`;

});






document.getElementById("catroot").innerHTML = dd;

});
