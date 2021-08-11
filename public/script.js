var temp = document.querySelector(".header");
var btn = document.querySelector(".btn-mobile-nav");

btn.addEventListener("click", function () {
  temp.classList.toggle("nav-open");
});

var anch = document.querySelectorAll("a:link");

anch.forEach(function (link) {
  link.addEventListener("click", function (e) {
    // e.preventDefault();
    console.log(link);
    if (link.classList.contains("main-nav-link")) {
      temp.classList.toggle("nav-open");
    }
  });
});

var hs = document.querySelector(".hero");

var obs = new IntersectionObserver(
  function (e) {
    const ent = e[0];
    if (ent.isIntersecting == false) {
      temp.classList.add("sticky");
    }
    if (ent.isIntersecting == true) {
      temp.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-180px",
  }
);

obs.observe(hs);
