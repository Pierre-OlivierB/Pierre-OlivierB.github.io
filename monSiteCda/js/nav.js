header.innerHTML = `
<nav id="top_nav" class="black">
<a href="../index.html" class="web_title">Bienvenue sur mon site CDA</a>
<div class="page_title">Présentation</div>
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
<li class="active active_li_white"><a class="waves-effect text_align_cent active_a_white"
        href="presentation.html">Présentation</a></li>
<li><a class="waves-effect text_align_cent inactive_a_white" href="realisations.html">Réalisations</a></li>
<li><a class="waves-effect text_align_cent inactive_a_white">Veille (Work in progress)</a></li>
<li><a class="waves-effect text_align_cent inactive_a_white" href="contact.html">Contact</a></li>
<li><a class="waves-effect text_align_cent inactive_a_white" href="boite_a_idees.html">Boîte à idées</a>
</li>
<li class="no-padding">
    <ul class="collapsible collapsible-accordion">
        <li>
            <a class="collapsible-header text_align_cent inactive_a_white">Articles<i
                    class="material-icons">arrow_drop_down</i></a>
            <div class="collapsible-body">
                <ul>
                    <!-- <li><a href="article5_15_01_22.html" class="background_collapse text_align_cent">GIT HUB
                            en MULTI: Conflits</a></li>
                    <li><a href="article4_15_01_22.html" class="background_collapse text_align_cent">GIT HUB
                            en MULTI: Vérifications</a></li>
                    <li><a href="article3_15_01_22.html" class="background_collapse text_align_cent">GIT HUB
                            en MULTI: Installation</a></li>
                    <li><a href="article2_15_01_22.html" class="background_collapse text_align_cent">GIT HUB
                            en SOLO</a></li>
                    <li><a href="article_15_01_22.html" class="background_collapse text_align_cent">GIT HUB
                            la plateforme</a></li> -->
                    <li><a href=""
                            class="background_collapse text_align_cent">GIT:
                            Article
                            du 14/01/21</a></li>
                </ul>
            </div>
        </li>
    </ul>
</li>
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
