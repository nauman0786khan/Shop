let p = fetch("Code/cat.json"); 
 p.then( (value)=>{

return value.json();

}).then((data)=>{

console.log(data);
let dd=""

 data.map((ff)=>{

     dd+=`<div class="item"><img src="${ff.image}" height="auto" width="200px"><p >${ff.name}</p></div>

        
     </div>
    
    `;

});

document.getElementById("rootcat").innerHTML=dd;
 


});
let imgalt = document.getElementById("main");
console.log(imgalt);
imgalt.addEventListener("click", function(gg){
   console.log(gg.target.alt);
 var  idsave= gg.target.alt;

 if(idsave <= 0){

  console.log('no id recived');
  }else if (idsave > 0){
    window.open("singleproductpage.html");
  
  }
  
   localStorage.setItem("proid" , idsave);

   


  });



  