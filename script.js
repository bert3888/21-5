  // FOOTER

  document.addEventListener("DOMContentLoaded", startFooter);


  const linkFooter = "http://lauraragnars.dk/21-5/wordpress/wp-json/wp/v2/pages/410"

  let footerData = []

  function startFooter() {
      hentDataFooter();
  }

  async function hentDataFooter() {
      const response = await fetch(linkFooter);
      footerData = await response.json();
      visDataFooter();
  }

  function visDataFooter() {
      document.querySelector(".kontaktinfo").innerHTML = footerData.content.rendered;

  }

  // MENUUUUUUU


  const dropDown = document.querySelector(".dropdownmenu");
  const mainMenu = document.querySelector(".mainmenu")

  mainMenu.addEventListener("click", dropDownBitch)


  function dropDownBitch() {
      console.log("dropdownbitch")


      if (dropDown.classList.contains("slidedown")) {
          dropDown.classList.remove("slidedown");
          dropDown.classList.add("slideop");


      } else if (dropDown.classList.contains("slideop")) {
          dropDown.classList.remove("slideop");
          dropDown.classList.add("slidedown")
      } else {
          dropDown.classList.add("slidedown");
      }



  }



  const boligerne = document.querySelector(".boligerne_mm");
  const destinationer = document.querySelector(".destinationer_mm");
  const konceptet = document.querySelector(".konceptet_mm");
  const okonomi = document.querySelector(".okonomi_mm");
  const omOs = document.querySelector(".omos_mm");
  const kontakt = document.querySelector(".kontakt_mm");



  boligerne.addEventListener("click", activeOrNot);
  destinationer.addEventListener("click", activeOrNot2);
  //  konceptet.addEventListener("click", activeOrNot);
  //  okonomi.addEventListener("click", activeOrNot);
  //  omOs.addEventListener("click", activeOrNot);
  //  kontakt.addEventListener("click", activeOrNot);

  const menuProcess = document.querySelector(".menu_boligerne");
  const menuDestinationer = document.querySelector(".menu_destinationer");
  const menuKonceptet = document.querySelector(".menu_konceptet");
  const menuOkonomi = document.querySelector(".menu_okonomi");
  const menuOmos = document.querySelector(".menu_omos");
  const menuKontakt = document.querySelector(".menu_kontakt");


  function activeOrNot() {
      console.log("activeornot")


      boligerne.classList.remove("inactive");
      boligerne.classList.toggle("active");

      menuProcess.classList.remove("inactive");
      menuProcess.classList.add("active");

      menuDestinationer.classList.add("inactive");
      menuKonceptet.classList.add("inactive");
      menuOkonomi.classList.add("inactive");
      menuOmos.classList.add("inactive");
      menuKontakt.classList.add("inactive");

  }

  function activeOrNot2() {

  }





  //
  // boligerne.classList.remove("active");
  //      destinationer.classList.remove("active");
  //      konceptet.classList.remove("active");
  //      okonomi.classList.remove("active");
  //      omOs.classList.remove("active");
  //      kontakt.classList.remove("active");
  //
  //      boligerne.classList.add("inactive");
  //      destinationer.classList.add("inactive");
  //      konceptet.classList.add("inactive");
  //      okonomi.classList.add("inactive");
  //      omOs.classList.add("inactive");
  //      kontakt.classList.add("inactive");





  // Mobile burgermenu

  document.querySelector("#nav_icon").addEventListener("click", onClickMenu);

  function onClickMenu() {
      document.getElementById("nav_icon").classList.toggle("change");
      document.querySelector("header").classList.toggle("bgcolor");

  }
