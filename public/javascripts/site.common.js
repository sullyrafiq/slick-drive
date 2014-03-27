var windowsize = $(window).width();

$(document).ready(function () {
	$('a.details-link').on('click', function(e) {

		$('#widgetVehicle').html($(this).parent().find('.vehicle').html());
		$('#widgetPrice').html($(this).parent().find('.price').html());

		$('#widgetImage').prop('src', $(this).parent().find('.logo img').prop('src'));

		if(windowsize <= 767) {
			$('ol.results-table').fadeOut('slow');
		} else {
			$('ol.results-table').fadeIn('slow');
		}
		$('div.details').fadeIn('slow');
		$('.quotes').fadeIn('slow');

		var url = 'http://api.msmeco.co.uk/vehicles/insurance/a1';
		$.ajax({
			type: 'GET',
        	url: url,
        	async: false,
			contentType: "application/json",
    		dataType: 'jsonp',
    		success: function(json) {
    			alert(json)
    		},
    		error: function(e) {
		       alert(e.message);
		    }

			// var results = [];

			// $.each(data, function(i){
			// 	results.push( "<li id='" + i + "'>" + i.coverType + "</li>" );
			// 	alert(key);
			// });



			// $( "<ul/>", {"class": "my-new-list",
			// 	html: items.join( "" )
  	// 		}).appendTo( "div.results-container" );            
		});

		return false;
	})

	$('a.back-to-results').on('click', function(e) {
		$('ol.results-table').fadeIn('slow');
		$('div.details').fadeOut('slow');
	})
});

$(window).resize(function() {
	windowsize = $(window).width();
});