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
      }

  }



  //  const boligerne = document.querySelector(".boligerne_mm");
  //  const destinationer = document.querySelector(".destinationer_mm");
  //  const konceptet = document.querySelector(".konceptet_mm");
  //  const okonomi = document.querySelector(".okonomi_mm");
  //  const omOs = document.querySelector(".omos_mm");
  //  const kontakt = document.querySelector(".kontakt_mm");
  //
  //
  //  boligerne.addEventListener("click", activeOrNot);
  //  destinationer.addEventListener("click", activeOrNot);
  //  konceptet.addEventListener("click", activeOrNot);
  //  okonomi.addEventListener("click", activeOrNot);
  //  omOs.addEventListener("click", activeOrNot);
  //  kontakt.addEventListener("click", activeOrNot);
  //  const menupunkt = document.querySelector(".menupunkt");

  //  menupunkt.addEventListener("click", activeOrNot);

  function activeOrNot() {
      console.log("activeornot")
      //      boligerne.classList.remove("active");
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

      menupunkt.classList.remove("active");
      menupunkt.classList.add("inactive");


      this.classList.remove("inactive")
      this.classList.add("active");


  }









  // Mobile burgermenu

  document.querySelector("#nav_icon").addEventListener("click", onClickMenu);

  function onClickMenu() {
      document.getElementById("nav_icon").classList.toggle("change");
      document.querySelector("header").classList.toggle("bgcolor");

  }
