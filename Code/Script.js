let p = fetch("Code/catogery.json"); 
 p.then( (value)=>{

return value.json();

}).then((data)=>{

console.log(data);
let dd=""
 data.map((ff)=>{

     dd+=`<div class="item"><img src="${ff.image}" height="100px" width="100px"><p >${ff.name}</p></div>

        
     </div>
    
    `;

});
 
 document.getElementById("rootcat").innerHTML =dd;


});
let gg = document.getElementsByTagName("img");
console.log(gg);
 document.addEventListener("click", function(gg){
   console.log(gg.target.alt);
 var  idsave= gg.target.alt;

 if(idsave <= 0){

  console.log('no id recived');
  }else if (idsave > 0){
    window.open("https://miniature-space-barnacle-5jx5p6gjp55cp7qx-5501.app.github.dev/singleproductpage.html");
  
  }
  
   localStorage.setItem("proid" , idsave);

   


  });
  
 