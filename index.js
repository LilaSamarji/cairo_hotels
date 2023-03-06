fetch('http://localhost:3000/')
      .then(response => response.json())
       .then(hotel =>{  
        for(var i=0;i<hotel.length;i++) {
       var option=document.createElement('option');
       option.innerHTML=hotel[i].Name;
       document.getElementById("hotels").appendChild(option);
      
      }   
      
      document.getElementById("hotels").onchange=function displayPrice() {
        document.getElementById("price").innerHTML= " ";
      var selected=document.getElementById('hotels').value;
      for(var i=0;i<hotel.length;i++) {
        
        if(hotel[i].Name==selected) {
         var price_per_night=document.createElement('p');
         price_per_night.setAttribute("id","price");
         
         price_per_night.innerHTML="Price per night: " +hotel[i].Price+"$";
         let styles= `
         color:aliceblue;
        font-size:20px;
         `
         document.getElementById("price").style=styles;
         var div=document.getElementById('price');
         div.appendChild(price_per_night);
         

        }
      } }
        })
   

       
