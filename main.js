window.onload = function () {
	/* Register Button Pointed Functions Here */
	var items = document.getElementsByClassName("light-dark-switch");
	for (var i = 0; i < items.length; ++i) {
		items[i].addEventListener("click", SwitchDarkLightMode);
	}

	var items = document.getElementsByClassName("navigation-switch");
	for (var i = 0; i < items.length; ++i) {
		items[i].addEventListener("click", SwitchNavigationDisplay);
	}

	var items = document.getElementsByClassName("option-button");
	for (var i = 0; i < items.length; ++i) {
		items[i].addEventListener("click", ClearLocalStorage);
	}

	UpdateColorScheme(localStorage.getItem("theme"));
}

function SwitchDarkLightMode() {
	if (localStorage.getItem("theme") === "light") {
		localStorage.setItem("theme", "dark")
	} else if (localStorage.getItem("theme") === "dark") {
		localStorage.setItem("theme", "light")
	} else {
		localStorage.setItem("theme", "dark")
	}

	ApplyTheme(localStorage.getItem("theme"));
}

function ApplyTheme(theme) {
	var ec = document.documentElement.classList;
	if (theme === "light") {
		ec.add("theme-light");
		ec.remove("theme-dark");
	}
	else if (theme === "dark") {
		ec.add("theme-dark");
		ec.remove("theme-light");
	}
	else {
		ec.add("theme-light")
		ec.remove("theme-dark");
	}

	UpdateColorScheme(theme);
}

function SwitchNavigationDisplay() {
	var divs = document.getElementsByClassName("navigation");
	for (var i = 0; i < divs.length; ++i) {
		divs[i].classList.toggle("navigation-hide");
	}
	var btns = document.getElementsByClassName("navigation-switch");
	for (var i = 0; i < divs.length; ++i) {
		btns[i].textContent = btns[i].textContent == "\u2630" ? "\u2636" : "\u2630";
	}
}

function ClearLocalStorage() {
	localStorage.clear();
}

function UpdateColorScheme(scheme) {
	if (scheme != "light" && scheme != "dark") {
		scheme = "light";
    }
	document.documentElement.setAttribute("theme", scheme);
}