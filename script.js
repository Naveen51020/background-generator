var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector("#gradient");
var button = document.querySelector("button");

setGradient();

function setGradient() {
	body.style.background = 
		"linear-gradient(to right," 
		+ color1.value 
		+ ", " 
		+ color2.value 
		+ ")";

	css.textContent = body.style.background + ";";
}

button.addEventListener("click", function() {
	color1.value = "#" + Math.floor((Math.random() * 16777216)).toString(16);
	color2.value = "#" + Math.floor((Math.random() * 16777216)).toString(16);
	setGradient();
})

color1.addEventListener("input", setGradient)
color2.addEventListener("input", setGradient)
