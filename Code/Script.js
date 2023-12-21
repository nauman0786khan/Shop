let p = fetch("https://api.escuelajs.co/api/v1/categories");
p.then((value)=>{

return value.json();

}).then((data)=>{

console.log(data);


});