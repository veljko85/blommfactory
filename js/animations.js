var whiteBackground = document.getElementsByClassName("white-background");


document.addEventListener('scroll', animate1);
document.addEventListener('scroll', animate2);
document.addEventListener('scroll', animate3);

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

