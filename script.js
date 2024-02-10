var forms = document.querySelectorAll(".form");

forms[0].style.display = "block";

document.querySelector(".btn-1").addEventListener("click", function () {
  forms[0].style.display = "none";
  forms[1].style.display = "block";
  document.querySelector(".st-2").classList.add("current");
});
document.querySelector(".btn-2").addEventListener("click", function () {
  forms[1].style.display = "none";
  forms[2].style.display = "block";
  document.querySelector(".st-3").classList.add("current");
});
document.querySelector(".btn-3").addEventListener("click", function () {
  alert("Details have been submitted successfully, Click ok to start again");
  forms[1].style.display = "none";
  forms[2].style.display = "none";
  forms[0].style.display = "block";
  document.querySelector(".st-2").classList.remove("current");
  document.querySelector(".st-3").classList.remove("current");
});
document.querySelector(".prevBtn-1").addEventListener("click", function () {
  forms[1].style.display = "none";
  forms[0].style.display = "block";
  document.querySelector(".st-2").classList.remove("current");
  document.querySelector(".st-3").classList.remove("current");
});
document.querySelector(".prevBtn-2").addEventListener("click", function () {
  forms[2].style.display = "none";
  forms[1].style.display = "block";
  document.querySelector(".st-3").classList.remove("current");
});
