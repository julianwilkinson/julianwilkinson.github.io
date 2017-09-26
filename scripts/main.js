function cardSwitch(on_screen, off_screen, direction) {
	if (direction === "right") {
		on_screen_transform = "translateX(var(--card-offscreen-right))";
		off_screen_transform = "translateX(0)";
	}
	else if (direction === "left") {
		on_screen_transform = "translateX(var(--card-offscreen-left))";
		off_screen_transform = "translateX(0)";
	}

	on_screen.style.transform = on_screen_transform;
	off_screen.style.transform = off_screen_transform;
}

function cardRoute(button) {
	carousel_unit = $(button).parents(".carousel-unit")[0];
	if (button.id.slice(0,4) === "back") {
		off_screen = $("#about-card-main-carousel-unit")[0];
		direction = "right";
	}
	else if (button.id === "academics-button") {
		off_screen = $("#academics-card-carousel-unit")[0];
		direction = "left";
	}
	else if (button.id === "volunteering-button") {
		off_screen = $("#volunteering-card-carousel-unit")[0];
		direction = "left";
	}

	console.log(carousel_unit);
	console.log(off_screen);
	cardSwitch(carousel_unit, off_screen, direction);
	return false;
}
