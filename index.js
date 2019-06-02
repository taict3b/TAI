$(document).ready(function() {
	$('.class').slideUp()
	$('.classh2').on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		$(this).next().slideToggle();
	});
});