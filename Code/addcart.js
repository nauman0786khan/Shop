
let cartarr =[]
let cartfinal=""

function getcartid(carid){
    localStorage.setItem("cartsave" , [cartarr]);
    console.log(carid);
    


        cartarr.push(carid);
     
        console.log(cartarr)
    

   
    let cartsp = fetch("Code/product.json");
    cartsp.then((ct)=>{
return ct.json();

    }).then((ctf)=>{


        let cats=""
cartarr.forEach((item)=>{

   cartfinal= ctf.filter(ctf =>ctf.id==item);
  
   console.log(cartfinal);
   cartfinal.forEach((dd)=>{

    cats+=`<div class="raw flex Padding shadow pluscart">
    <div><img src="${dd.images}" alt="" width="40px" ></div>
    <div><p>${dd.title}</p></div>
    
    </div>`
    localStorage.setItem("carts" , cats);    

   })
   localStorage.setItem("cartn" , [cartarr]);
   document.getElementById("numberpro").innerHTML= cartarr.length;
  
   let crt = localStorage.getItem("carts");
   document.getElementById("cartget").innerHTML= crt;

})


    })
    
}


let dropcart= document.getElementById("dro")
function drodown(){
    console.log(dropcart)
    dropcart.classList.toggle("droactive");

 }


 let cartn = localStorage.getItem("cartn");

    console.log(cartn)
    