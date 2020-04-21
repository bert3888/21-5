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

  document.querySelector(".mainmenu").addEventListener("click", dropDown)


  function dropDown() {
      document.querySelector(".dropdownmenu").classList.toggle("hide");
  }
