$(window).load(function() {
  $("#myCarousel").flexisel();
});

$( document ).ready(function() {
	$(function() {
		$('.origin-city').hover(function() {
			$('.pick-new-city').fadeIn();
		},
		function() {
			$('.pick-new-city').fadeOut();
		});
	});
});