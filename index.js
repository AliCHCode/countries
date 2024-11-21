document.addEventListener("DOMContentLoaded", function() {


async function veriGetir() {
  try {
      
      let yanit = await fetch("https://restcountries.com/v3.1/all");
      
     
      let veri = await yanit.json();
      
      veri.forEach(e => {
        console.log(e.name.common);
        document.write(e.name.common);
      });
      
      
      
      console.log("Veriler başarıyla alındı:", veri);
    } catch (hata) {
      console.error("Hata oluştu:", hata);
    }
  }






  
  var style = document.createElement('style'); 
  style.innerHTML = 
  `
      body{
          background: green;
      }
  `
  ;
  
  document.head.appendChild(style); 
  
  
  // veriGetir();
  
});