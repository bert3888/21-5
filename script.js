   document.addEventListener("DOMContentLoaded", start);


   const link = "http://lauraragnars.dk/21-5/wordpress/wp-json/wp/v2/tekst/356"

   let footerData = []

   function start() {
       hentData();
   }

   async function hentData() {
       const response = await fetch(link);
       footerData = await response.json();
       visData();
   }

   function visData() {
       document.querySelector(".navn").textContent = footerData.paragraf1;
       document.querySelector(".adresse").textContent = footerData.paragraf2;
       document.querySelector(".tlf").textContent = footerData.paragraf3;
       document.querySelector(".email").textContent = footerData.paragraf4;
       document.querySelector(".cvr").textContent = footerData.paragraf5;
   }
