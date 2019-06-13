var logo = document.getElementById("logo");
var cliWid = document.body.clientWidth;
var hamBut = document.getElementById("ham-but");
var firLin = document.getElementById("first-line");
var secLin = document.getElementById("second-line");
var thiLin = document.getElementById("third-line");
var nav = document.getElementById("nav");
var heading = document.getElementById("heading");
var whiteBackground = document.getElementsByClassName("white-background");



if (document.body.clientWidth < 768){
	logo.style.marginLeft = cliWid / 2 - 110 + "px";
}

hamBut.onclick = () => {

		if (secLin.style.display == "none") {
			firLin.classList.remove("change1");
			secLin.style.display = "block";
			thiLin.classList.remove("change2");

		}	else	{
			firLin.classList.add("change1");
			secLin.style.display = "none";
			thiLin.classList.add("change2");
		}

		if (document.body.clientWidth < 768){
			if (nav.style.width == "100%") {
					nav.style.width = "0";
			} else	{
				nav.style.width = "100%";
			}
		}
}

window.onscroll = () => {
	if (cliWid < 768){
		  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
		    heading.style.height = "90px";
		    logo.style.width = "70px";
		    hamBut.style.marginTop = "35.5px"
		    logo.style.marginLeft = cliWid / 2 - 90 + "px";
		    nav.style.marginTop = "97px";
		    logo.src = "img/blommblack1.png"
		  } else {
		  	heading.style.height = "130px";
		    logo.style.width = "110px";
		    hamBut.style.marginTop = "55.5px"
		    logo.style.marginLeft = cliWid / 2 - 110 + "px";
		    nav.style.marginTop = "137px";
		    logo.src = "img/blommwhite1.png"
		  }
		}
}
