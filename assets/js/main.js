// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

let loaded = false;

var coll = document.getElementsByClassName("collapsible");
var i;
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = "100%";
    }
  });
}

document.querySelectorAll(".loading").forEach(async (element) => {
  let rotate = 180;
  do {
    element.style.transform = `rotate(${rotate}deg)`;
    await sleep(1200);
    rotate += 180;
  } while (loaded !== true);
  document.querySelector(".loading-container").style.display = "none";
  document.querySelectorAll(".loaded").forEach((element) => {
    element.style.display = "flex";
  });
  await sleep(1800);
  document.querySelectorAll(".loaded").forEach((element) => {
    element.style.display = "none";
  });
});

if (window.location.pathname === "/") {
  let deadline = new Date("Aug 15, 2020 19:00:00 GMT+0200").getTime();
  let x = setInterval(() => {
    let now = new Date().getTime();
    let t = deadline - now;
    let days = Math.floor(t / (1000 * 60 * 60 * 24));
    let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((t % (1000 * 60)) / (1000));
    document.querySelector("#GZGPL").innerHTML =
      days + "d " + hours + "h " + minutes + "m " + seconds + "s";
    if (t < 0) {
      clearInterval(x);
      document.querySelector("#GZGPL").innerHTML =
        '0d 0h 0m 0d';
    }
  }, 1000);
}

if (window.location.pathname === "/") {
  let deadline = new Date("Aug 5, 2020 19:00:00 GMT+0200").getTime();
  let x = setInterval(() => {
    let now = new Date().getTime();
    let t = deadline - now;
    let days = Math.floor(t / (1000 * 60 * 60 * 24));
    let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((t % (1000 * 60)) / (1000));
    document.querySelector("#FinalIC").innerHTML =
      days + "d " + hours + "h " + minutes + "m " + seconds + "s";
    if (t < 0) {
      clearInterval(x);
      document.querySelector("#FinalIC").innerHTML =
        '0d 0h 0m 0d';
    }
  }, 1000);
}

if (window.location.pathname === "/") {
  let deadline = new Date("Aug 2, 2020 19:15:00 GMT+0200").getTime();
  let x = setInterval(() => {
    let now = new Date().getTime();
    let t = deadline - now;
    let days = Math.floor(t / (1000 * 60 * 60 * 24));
    let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((t % (1000 * 60)) / (1000));
    document.querySelector("#tHL").innerHTML =
      days + "d " + hours + "h " + minutes + "m " + seconds + "s";
    if (t < 0) {
      clearInterval(x);
      document.querySelector("#tHL").innerHTML =
        '0d 0h 0m 0d';
    }
  }, 1000);
}

if (window.location.pathname === "/happy-tags/") {
  let deadline = new Date("Aug 9, 2020 22:00:00 GMT+0200").getTime();
  let x = setInterval(() => {
    let now = new Date().getTime();
    let t = deadline - now;
    let days = Math.floor(t / (1000 * 60 * 60 * 24));
    let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((t % (1000 * 60)) / (1000));
    document.querySelector("#timer2").innerHTML =
      days + "d " + hours + "h " + minutes + "m " + seconds + "s";
    if (t < 0) {
      clearInterval(x);
      document.querySelector("#timer2").innerHTML =
        '0d 0h 0m 0s';
    }
  }, 1000);
}

if (window.location.pathname === "/") {
  let deadline = new Date("Jan 20, 2020 00:00:00 GMT+0200").getTime();
  let x = setInterval(() => {
    let now = new Date().getTime();
    let t = deadline - now;
    let days = Math.floor(t / (1000 * 60 * 60 * 24));
    let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    document.querySelector("#timer1").innerHTML =
      days + "d " + hours + "h " + minutes + "m";
    if (t < 0) {
      clearInterval(x);
      document.querySelector("#timer1").innerHTML =
        '<a href="https://zrzutka.pl/gramy-pomagamy">ZAKOŃCZONA!</a>';
    }
  }, 1000);
}

function toggleNav() {
  navRight = document.querySelector("#nav-right");
  if (navRight.className.includes("nav-hidden")) {
    navRight.classList.remove("nav-hidden");
    navRight.classList.add("nav-down");
    navRight.classList.remove("nav-up");
  } else {
    navRight.classList.add("nav-hidden");
    navRight.classList.add("nav-up");
    navRight.classList.remove("nav-down");
  }
}
document.querySelector("#hamburger").addEventListener("click", toggleNav);

fillMail(["domgzg", "@", "grand", "zone", "gaming", ".com"], ".domgzg-mail");
fillMail(["ceogzg", "@", "grand", "zone", "gaming", ".com"], ".ceogzg-mail");
fillMail(["sklep", "@", "grand", "zone", "gaming", ".com"], ".sklep-mail");
fillMail(["kontakt", "@", "grand", "zone", "gaming", ".com"], ".kontakt-mail");

function fillMail(address, fillElement) {
  document.querySelectorAll(`${fillElement}`).forEach((element) => {
    element.textContent = "";
    for (i = 0; i < address.length; i++) {
      element.innerHTML += `<span>${address[i]}</span>`;
    }
  });
}

function submitForm() {
  let tournament = document.querySelector("#form-tournament").value;
  if (window.localStorage.getItem(tournament) === null) {
    window.localStorage.setItem(tournament, "p");
    return true;
  } else if (window.localStorage.getItem(tournament) === "p") {
    window.location = "/wyslane/";
    return false;
  }
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function slideshow(imageSrc, element) {
  for (i = 0; i < imageSrc.length; i++) {
    document.querySelector(element).src = imageSrc[i];
    await sleep(2000);
    if (i === imageSrc.length - 1) i = -1;
  }
}

if (window.location.pathname === "/sklep/koszulka-gzg") {
  slideshow(
    [
      "/assets/img/layout/IMG_4447-Edit.jpg",
      "/assets/img/layout/IMG_4448.jpg",
      "/assets/img/layout/IMG_4451-Edit.jpg",
      "/assets/img/layout/IMG_4454.jpg",
      "/assets/img/layout/IMG_4456-Edit.jpg",
      "/assets/img/layout/IMG_4460.jpg",
    ],
    "#shop-slideshow"
  );
}
