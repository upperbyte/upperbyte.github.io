let width = window.innerWidth;
const buttonOpen = document.querySelector(".nav-butt");
const buttonClose = document.querySelector(".menu-white-close")



// I'm sorry

if (width < 600) {
  document.getElementsByClassName("navbar-mob")[0].style.display = "flex";
  document.getElementsByClassName("navbar-desk")[0].style.display = "none";
  console.log("small");
}
else {
  console.log("big")
  document.getElementsByClassName("navbar-mob")[0].style.display = "none";
  document.getElementsByClassName("navbar-desk")[0].style.display = "flex";
}


window.addEventListener('resize', function () {

  let width = window.innerWidth;
  if (width < 600) {
    document.getElementsByClassName("navbar-mob")[0].style.display = "flex";
    document.getElementsByClassName("navbar-desk")[0].style.display = "none";
    console.log("small");
  }
  else {
    console.log("big")
    document.getElementsByClassName("navbar-mob")[0].style.display = "none";
    document.getElementsByClassName("navbar-desk")[0].style.display = "flex";
  }
})

buttonOpen.addEventListener("click", function () {
  document.getElementById("back").style.display = "block";
  document.getElementById("sidebar").style.display = "flex";
  console.log("OPEN");
});


buttonClose.addEventListener("click", function () {
  document.getElementById("back").style.display = "none";
  document.getElementById("sidebar").style.display = "none";
  console.log("CLOSE");
});







