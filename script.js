   document.addEventListener("DOMContentLoaded", start);


   const link = "http://lauraragnars.dk/21-5/wordpress/wp-json/wp/v2/pages/410"

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
       document.querySelector(".kontaktinfo").innerHTML = footerData.content.rendered;

   }
