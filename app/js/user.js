$(document).ready(function(){
	$('.one-time').slick({
		dots: true,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		adaptiveHeight: true
	});
}); 

$(document).ready(function() {
	$('.menuButton').click(function() {
		$('.menuButton').toggleClass('active');
		$('.menu').toggleClass('active');
	});
});