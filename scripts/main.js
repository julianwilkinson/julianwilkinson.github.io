function cardSwitch(on_screen, off_screen, direction) {
	if (direction === "right") {
		$(off_screen).removeClass("invisible");
		on_screen_transform = "translateX(var(--card-offscreen-right))";
	}
	else if (direction === "left") {
		$(off_screen).removeClass("invisible");
		on_screen_transform = "translateX(var(--card-offscreen-left))";
	}
	off_screen_transform = "translateX(0)";

	on_screen.style.transform = on_screen_transform;
	off_screen.style.transform = off_screen_transform;
	$(off_screen).one("transitionend",
	function() {
		$(on_screen).addClass("invisible")
	});
}

$(document).ready(function() {

});

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
		else if (button.id === "employment-button") {
			off_screen = $("#employment-card-carousel-unit")[0];
			direction = "left";
		}

		cardSwitch(carousel_unit, off_screen, direction);


		// $(off_screen).one("transitionend", function() {
		// 	carousel_unit.style.position = "absolute";
		// 	off_screen.style.position = "relative";
		// 	// if (off_screen.id == "about-card-main-carousel-unit") {
		// 	// 	location.href = "#about";
		// 	// }
		// 	// else {
		// 	// 	location.href = "#" + off_screen.id;
		// 	// }
		// });
	});
	return false;
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
// $(function() {
// 	// //Fix background for mobile
// 	// window.onresize = function() {
// 	// 	document.body.height = window.innerHeight;
// 	// }
// 	// window.onresize();
// 	//
// 	// function calcVH() {
// 	// 	$('.jumbotron').innerHeight( $(this).innerHeight() );
// 	// }
// 	//
// 	// calcVH();
// 	// $(window).on('resize orientationchange', function() {
// 	// 	calcVH();
// 	// });
// })


// function no
// for each carousel {
// 	max_height = 0;
// 	for each carousel unit {
// 		if(max_height < carouselunit.height ) {
// 			max_height = carouselunit.height;
// 	}
// 	for each carousel unit {
// 		if (carouselunit.height != max_height) {
// 			carouselunit.height = max_height;
// 		}
// 	}
// }
