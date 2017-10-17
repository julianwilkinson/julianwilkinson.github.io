function cardSwitch(on_screen, off_screen, direction, callback) {
	if (direction === "right") {
		on_screen_transform = "translateX(var(--card-offscreen-right))";
		off_screen_transform = "translateX(0)";
	}
	else if (direction === "left") {
		on_screen_transform = "translateX(var(--card-offscreen-left))";
		off_screen_transform = "translateX(0)";
	}

	if (callback) {
		//fire callback once the off_screen card is back on screen
		$(off_screen).one("transitionend", callback);
	}
	on_screen.style.transform = on_screen_transform;
	off_screen.style.transform = off_screen_transform;
}

function cardRoute(button) {

	animate(button, function() {


		var carousel_unit = $(button).parents(".carousel-unit")[0];
		var page = $(carousel_unit).parents(".page")[0];
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


		cardSwitch(carousel_unit, off_screen, direction, test);
	});
	return false;
}

function test() {
	console.log("heya");
}

function animate(obj, action) {
	$(obj).addClass("animated");
	$(obj).one('animationend', function() {
		$(obj).removeClass("animated");
		action();
	});
}

function cardPeek() {
	$("#academics-button-card").hover(cardPeekIn, cardPeekOut);
	$("#volunteering-button-card").hover(cardPeekIn, cardPeekOut);
}

function cardPeekIn () {
	console.log(this);
	$("#academics-card-carousel-unit")[0].style.transform = "translateX(var(--card-right-side-peek-in))"

}

function cardPeekOut () {
	$("#academics-card-carousel-unit")[0].style.transform = "translateX(var(--card-offscreen-right))"
}

// On Document Ready
$(function() {
	// cardPeek();
})
