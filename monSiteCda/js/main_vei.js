// window.onload = listeners();
const article_1 = `
<h1>Materialize css.</h1>
      <article class="" id="article-presentation">
          <h3>31/10/2021</h3>
          <p>In research about progress in development, frameworks show up as sources of good ideas it's not new. But
              today i will show you a little piece of framework that can be helpful to have a really good looking
              website. Its name is : <strong>Materialize</strong>. <br> <br>
              <b>First of all, what are the basics of this framework ?</b> <br><br>
              Based on : Material Design -> <a href="https://material.io/" target="_blank"
                  rel="noopener noreferrer">https://material.io/</a><br></p>

          <p> <b>What that :</b> Css language, inspired by nature , physical and texture.</br>
              <b>What for ?</b> Transform some brutal aspects of fluid and beautiful looks.</br>
              <b>How ?</b> Material Components are interactive building blocks for example for smartphones.</p>
          <p> <b>Ok, now we can begin :</b> </br>Second : How to use it ? <br>To <strong>install Materialize</strong>
              there are two possibilities : <br>
              <b>Download</b>
              OR
              <b>Compile</b> .</p>
          <p><b>Download :</b></br>
              To download you need to go to <strong>materializecss.com</strong> then click « Get started » and the
              green
              button.</br></br>
              <b>Compiled :</b></br>
              If you just want to compile Materialize on your website you have to write this on your HTML :
              <br>
              Compiled and minified CSS :
              <br>
              < link rel="stylesheet"
                  href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
                  <br>
                  Compiled and minified JavaScript :
                  <br>
                  < script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js">
                      </script>
                      </br>
                      <br>
                      <b>For beginners be carefull :</b> <br>
                      Link is on the Head !
                      Script is at the Body's end !

          </p>
          <p>Is it ok ? <br> Now we can finally use it ! <br> <br> <b>To understand the structure of this framework :
                  <br></b>
              <br>
              You want a stylish website ? <br> Certainly, but not in the void. <br> Materialize is based on grid. So
              keep
              it in
              mind to fully manipulate it.</p>
          <p>With this you can manipulate elements : <br>
              Colors, forms, navbarre, icons and style. <br> <br> Plus, you can also access to Material style in
              Materialize.
              The goal here is to simplify the dev's work, you can use tools like text-center or hide elements to
              simplify tasks.</p>
          <p> <b>Is it really a good framework ?</b> <br>
              Yes, but in some case, it's a good way to flood your code with a lot of words. Especially when you want
              a background color, text color or effects in general. Otherwise if you look demos at materializecss.com
              you will see masterpieces on how to use this framework.</p>
          <p> <b>To finish, my feelings :</b> <br>
              It's time to end this article. <br> This <strong>framework</strong> brings some fluidity experiences.
              The navigation with
              <b>Materialize</b> gives really good feedback experiences'.</p>
      </article>
`;

let articles = document.querySelectorAll(".article");
function article() {
  presentation.innerHTML = article_1;
}
articles.forEach((article) => {
  article.addEventListener("click", (e) => {
    console.log(e.path[1].id);
    let content = e.path[1].id;
    switch (content) {
      case "article_1":
        presentation.innerHTML = article_1;
        break;

      default:
        break;
    }
  });
});
window.onload = article();
