let p = fetch("https://api.escuelajs.co/api/v1/categories");
p.then((value)=>{

return value.json();

}).then((data)=>{

console.log(data);
let dd=""
data.map((ff)=>{

     dd+=`<div class="owl-carousel owl-theme owl-loaded">
     <div class="owl-stage-outer">
         <div class="owl-stage">
             <div class="owl-item">...</div>
             <div class="owl-item">...</div>
             <div class="owl-item">...</div>
         </div>
     </div>
     <div class="owl-nav">
         <div class="owl-prev">prev</div>
         <div class="owl-next">next</div>
     </div>
     <div class="owl-dots">
         <div class="owl-dot active"><span></span></div>
         <div class="owl-dot"><span></span></div>
         <div class="owl-dot"><span></span></div>
     </div>
 </div>`;

});






document.getElementById("rootcat").innerHTML = dd;
console.log(dd);

});
