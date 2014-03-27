$(document).ready(function () {
	$('.sidebar-toggle').on('click', function() {
		$('body').toggleClass('is-sidebar-expanded');
		return false;
	});

	$('.details-link').on('click', function() {
		$('#content').toggleClass('is-details-expanded');
		return false;
	});
});

$(document).scroll(function () {
    
});