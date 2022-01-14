document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelectorAll('.collapsible');
    let instances = M.Collapsible.init(elems, {
        accordion: false
    });
  });