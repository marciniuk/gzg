if (window.location.pathname === "/") {
	let deadline = new Date("Jan 20, 2020 00:00:00").getTime();
	let x = setInterval(()=> {
		let now = new Date().getTime();
		let t = deadline - now;
		let days = Math.floor(t / (1000 * 60 * 60 * 24));
		let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		let minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
		document.querySelector("#timer").innerHTML = days + "d " + hours + "h " + minutes + "m";
		if (t < 0) {
			clearInterval(x);
			document.querySelector("#timer").innerHTML = '<a href="https://zrzutka.pl/gramy-pomagamy">ZAKOŃCZONA!</a>';
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

function fillMail(address, fillElement) {
	document.querySelectorAll(`${fillElement}`).forEach(element => {
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
	return new Promise(resolve => setTimeout(resolve, ms));
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
			"/assets/img/layout/IMG_4460.jpg"
		],
		"#shop-slideshow"
	);
}
