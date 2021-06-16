var countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("countdownwedding").innerHTML = days + "Days " + hours + "Hours "
  + minutes + "Minutes " + seconds + "Seconds";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

$(document).ready(function() {
	$(".countdown").countdown({until: new Date("Mar 17 2018 16:00:00 +1100"), compact: true}).show().before("(").after(")");

	$("#location").click(function() {
		$("#location iframe").css("pointer-events", "auto");
	});

	$("#location").mouseleave(function() {
		$("#location iframe").css("pointer-events", "none");
	});

	$(".nav-toggle").click(function() {
		$(".nav-toggle,.nav-menu").toggleClass("is-active");
	});

	$("a[href*=\\#]").on("click", function(event){
		event.preventDefault();
		$(".nav-toggle,.nav-menu").removeClass("is-active");
		$("html,body").animate({scrollTop:$(this.hash).offset().top}, 500);
	});

	$(".slider-container").ikSlider({
		speed: 500,
		caption : false,
		autoPlay: true
	});

	particlesJS("particles", {
		"particles": {
			"number": {
				"value": 160,
				"density": {
					"enable": true,
					"value_area": 800
				}
			},
			"color": {
				"value": "#ffffff"
			},
			"shape": {
				"type": "circle",
				"stroke": {
					"width": 0,
					"color": "#000000"
				},
				"polygon": {
					"nb_sides": 5
				}
			},
			"opacity": {
				"value": 1,
				"random": true,
				"anim": {
					"enable": true,
					"speed": 1,
					"opacity_min": 0,
					"sync": false
				}
			},
			"size": {
				"value": 4,
				"random": true,
				"anim": {
					"enable": false,
					"speed": 4,
					"size_min": 0.3,
					"sync": false
				}
			},
			"line_linked": {
				"enable": false,
				"distance": 150,
				"color": "#00d1b2",
				"opacity": 0,
				"width": 0
			},
			"move": {
				"enable": true,
				"speed": 1,
				"direction": "none",
				"random": true,
				"straight": false,
				"out_mode": "out",
				"bounce": false,
				"attract": {
					"enable": false,
					"rotateX": 600,
					"rotateY": 600
				}
			}
		},
		"retina_detect": true
	});
});