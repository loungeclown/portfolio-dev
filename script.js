$(window).on("load", function () {
  $(".loader").fadeOut(1000);
});

const checkbox = document.getElementById("checkbox");
checkbox.addEventListener("change", () => {
  document.querySelector("body").classList.toggle("dark");
});
