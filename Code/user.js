
let dd=document.getElementById("myform");

dd.addEventListener("submit", function(dd) {
  dd.preventDefault();

  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

 
  let p=fetch("Code/User.json")
  p.then((use)=>{
  
  return use.json();
  
  }).then((us)=>{
    console.log(us);
    let user = us.filter(us =>us.email ==username);
    let pass = us.filter(us =>us.password ==password);
    
 
    if(user == 0){

      document.getElementById("errortext").innerHTML="no user herer"


    }else{

        user.map((finaldata)=>{
      
            
                if(username==finaldata.email && password==finaldata.password){
            
                    document.getElementById("errortext").innerHTML="Login now"
                    
                        }else{
                          document.getElementById("errortext").innerHTML="Password is Wrong"
                    
                        }
            
            
              })


    }


   
 
  
  })

});






