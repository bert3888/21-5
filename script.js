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

  document.querySelector(".mainmenu").addEventListener("click", dropDownBitch)
  const dropDown = document.querySelector(".dropdownmenu");


  function dropDownBitch() {
      console.log("dropdownbitch")

      console.log("dropDown")

      if (dropDown.classList.contains("slidedown")) {
          dropDown.classList.remove("slidedown")
          dropDown.classList.add("slideop");

      } else {
          dropDown.classList.remove("slideop");
          dropDown.classList.add("slidedown")
      }

  }

  // Mobile burgermenu

  document.querySelector("#nav_icon").addEventListener("click", onClickMenu);

  function onClickMenu() {
      document.getElementById("nav_icon").classList.toggle("change");
      document.querySelector("header").classList.toggle("bgcolor");

  }
