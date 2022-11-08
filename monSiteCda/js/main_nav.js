document.addEventListener("DOMContentLoaded", function () {
  let side = document.querySelectorAll(".sidenav");
  M.Sidenav.init(side);
  let elems = document.querySelectorAll(".collapsible");
  let instances = M.Collapsible.init(elems, {
    accordion: false,
  });
});
