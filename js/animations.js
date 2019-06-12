var whiteBackground = document.getElementsByClassName("white-background");
var van = document.getElementById("van");
var freeDel = document.getElementById("free-del");
var galHomeImg = document.getElementsByClassName("home-gal-img");
var galHome = document.getElementById("galerija-home");
var galHomeNas = document.getElementById("galerija-home-naslov");

document.addEventListener('scroll', animate1);
document.addEventListener('scroll', animate2);
document.addEventListener('scroll', animate3);
document.addEventListener('scroll', animate4);
document.addEventListener('scroll', vanRide);
document.addEventListener('scroll', galImgMove1);
document.addEventListener('scroll', galImgMove2);
document.addEventListener('scroll', galImgMove3);

function inView(element) {

	var elementHeight = element.clientHeight;
	var windowHeight = window.innerHeight;
	var scrollY = window.scrollY || window.pageYOffset;
	var scrollPosition = scrollY + windowHeight;
	var elementPosition = element.getBoundingClientRect().top + scrollY + elementHeight;
			  
	if (scrollPosition > elementPosition) {
		return true;
	} else {
		return false;
	}
}

function animate1() {
	if (inView(whiteBackground[0])) {
		whiteBackground[0].classList.add("white-background-animation");
		whiteBackground[0].children[0].classList.add("main-content-animation");
		}
}

function animate2() {
	if (inView(whiteBackground[1])) {
		whiteBackground[1].classList.add("white-background-animation");
		whiteBackground[1].children[0].classList.add("main-content-animation");
		}
}

function animate3() {
	if (inView(whiteBackground[2])) {
		whiteBackground[2].classList.add("white-background-animation");
		whiteBackground[2].children[0].classList.add("main-content-animation");
		}
}

function animate4() {
	if (inView(whiteBackground[3])) {
		whiteBackground[3].classList.add("white-background-animation");
		whiteBackground[3].children[0].classList.add("main-content-animation");
		}
}

function vanRide() {
	if (inView(freeDel)) {
		van.classList.add("van-ride");
		}
}

function galImgMove1() {
	if (inView(galHome)) {
		galHomeImg[3].classList.add("img-in-side");
		galHomeNas.style.opacity = "1";
		}
}

function galImgMove2() {
	if (inView(galHome)) {
		galHomeImg[4].classList.add("img-in-side");
		}
}

function galImgMove3() {
	if (inView(galHome)) {
		galHomeImg[5].classList.add("img-in-side");
		}
}

