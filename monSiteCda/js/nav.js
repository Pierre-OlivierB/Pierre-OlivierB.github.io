let nav = window.location.href.split("/")[5].split(".")[0];
let title;
switch (nav) {
  case "presentation":
    title = "Présentation";
    break;
  case "realisations":
    title = "Réalisations";
    break;
  case "veille":
    title = "Veille";
    break;
  case "contact":
    title = "Contact";
    break;
  case "boite_a_idees":
    title = "Boîte à idées";
    break;

  default:
    break;
}
header.innerHTML = `
<nav id="top_nav" class="black">
<a href="../index.html" class="web_title">Bienvenue sur mon site CDA</a>
<div class="page_title">${title}</div>
<div class="three_right_buttons">
    <div class="nav_card_link"><a href="https://www.linkedin.com/in/pierre-olivier-baudino-5a49511a3/"
            class="nav_redirec_contact" target="_blank" rel="noopener noreferrer"><img src="./img/linkdin_button.png" alt="linkedin website"></a></div>
    <div class="nav_card_twit"><a href="https://github.com/Pierre-OlivierB" class="nav_redirec_contact"
            target="_blank" rel="noopener noreferrer"><img src="./img/github_button.png" alt="git hub website"></a></div>
    <div class="nav_card_gitH"><a href="./warning.html" class="nav_redirec_contact" target="_blank"
            rel="noopener noreferrer"><img src="./img/warning_button.png" alt="tools box"></a></div>
</div>
</nav>

<!-- <nav></nav> -->
<ul id="slide-out" class="sidenav backgroundc_olive">
<li>
    <div class="user-view orga_nav">
        <a href="#user"><img class="circle picture_nav" src="../PXL_20211002_133200807.MP.jpg"></a>
        <a href="#name"><span class="white-text name text_align_cent border_white">Pierre-Olivier <br>
                BAUDINO</span></a>
    </div>
</li>
<li><a class="waves-effect text_align_cent inactive_a_white" href="../index.html">Accueil</a></li>
<li ${
  nav.includes("presentation") ? "class='active active_li_white'" : ""
}><a class="waves-effect text_align_cent ${
  nav.includes("presentation") ? "active_a_white" : "inactive_a_white"
}"
        href="presentation.html">Présentation</a></li>
<li ${
  nav.includes("realisations") ? "class='active active_li_white'" : ""
}><a class="waves-effect text_align_cent ${
  nav.includes("realisations") ? "active_a_white" : "inactive_a_white"
}" href="realisations.html">Réalisations</a></li>
<li ${
  nav.includes("veille") ? "class='active active_li_white'" : ""
}><a class="waves-effect text_align_cent ${
  nav.includes("veille") ? "active_a_white" : "inactive_a_white"
}" href="veille.html">Veille</a></li>
<li ${
  nav.includes("contact") ? "class='active active_li_white'" : ""
}><a class="waves-effect text_align_cent ${
  nav.includes("contact") ? "active_a_white" : "inactive_a_white"
}" href="contact.html">Contact</a></li>

</ul>
<a href="#" data-target="slide-out" class="sidenav-trigger" id='nav_target'><img src="./img/nav_button.png"
    class="nav_position"></a>

 `;
document.addEventListener("DOMContentLoaded", function () {
  let side = document.querySelectorAll(".sidenav");
  M.Sidenav.init(side);
  let elems = document.querySelectorAll(".collapsible");
  let instances = M.Collapsible.init(elems, {
    accordion: false,
  });
});

{
  /* <li ${
  nav.includes("boite_a_idees") ? "class='active active_li_white'" : ""
}><a class="waves-effect text_align_cent ${
  nav.includes("boite_a_idees") ? "active_a_white" : "inactive_a_white"
}" href="boite_a_idees.html">Boîte à idées</a>
</li>
<li class="no-padding">
    <ul class="collapsible collapsible-accordion">
        <li>
            <a class="collapsible-header text_align_cent inactive_a_white">Articles<i
                    class="material-icons">arrow_drop_down</i></a>
            <div class="collapsible-body">
                <ul>
                    <li><a href=""
                            class="background_collapse text_align_cent">GIT:
                            Article
                            du 14/01/21</a></li>
                </ul>
            </div>
        </li>
    </ul>
</li> */
}
