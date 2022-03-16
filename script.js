const button = document.querySelector("#toggleOptions");

button.addEventListener("click", () => {
	const variants = document.querySelector("#variants");

	if (variants.style.visibility === "hidden") {
		variants.style.visibility = "visible";
	} else {
		variants.style.visibility = "hidden";
	}
});
