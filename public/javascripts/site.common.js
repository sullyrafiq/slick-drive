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
				var results = [];
				console.log(json);
    			var quotes = json.motorQuotes;
    			
    			for (var i=0; i<quotes.length; i++) {    			    				
    				var quote = quotes[i];

					results.push( "<li class=\"results-row\">" );    				
					results.push( "<ul>" );    				
					results.push( "<li class=\"logo\">" );    				
					results.push( "<img alt=" + quote.coverType + " src=" + quote.logoUrl + " />" );    				
					results.push( "</li>" );
					results.push( "<li class=\"provider\">" + quote.provider + "</li>" );
					results.push( "<li class=\"cover-type\">" + quote.coverType +"</li>" );
					results.push( "<li class=\"price\">" );
					results.push( "<span>£" +  quote.premium +" </span>" );
					results.push( "</li>" );
					results.push( "<li class=\"buy\">" );
					results.push( "<a class=\"button\" href=" + quote.detailsUrl + ">Buy</a>" );
					results.push( "</li>" );
					results.push( "</ul>" );
					results.push( "</li>" );
    			}

				$("div.results-container").html("")
				var content = "<h4 class=\"msm\">Your <strong>MoneySuperMarket</strong> quotes</h3><ol class=\"results-table quotes\">";
				for (var i=0; i<results.length; i++) {  
					content = content + results[i];
				}
				content = content + "</ol>"
				$("div.results-container").append(content)
    		},
    		error: function(e) {
		       alert(e.message);
		    }
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