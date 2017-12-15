$(document).foundation();
	
//Get URL query string
function getQueryVariable(variable) {
	var query = window.location.search.substring(1);
	var vars = query.split("&");
	for (var i = 0; i < vars.length; i++) {
		var pair = vars[i].split("=");
		if (pair[0] == variable) { return pair[1]; }
	}
	return (false);
}

// Toggle visibility of content based on date
$("[data-show-date], [data-hide-date]").each(function () {
	var showDateValue = $(this).data("show-date");
	var hideDateValue = $(this).data("hide-date");
	var showDate = new Date(showDateValue);
	var hideDate = new Date(hideDateValue);
	var today = new Date();
	// Hide all elements with data-show-date and data-hide-date attributes
	$(this).hide();
	// If element only has show-date attribute
	if ($(this).attr('data-show-date')) {
		if (today >= showDate) {
			$(this).show().css('display', 'block');
			$(this).removeClass('hide');
		} else {
			$(this).remove();
		}
	}
	// If element only has hide-date attribute
	if ($(this).attr('data-hide-date')) {
		if (today <= hideDate) {
			$(this).removeClass('hide');
			$(this).show().css('display', 'block');
		} else {
			$(this).remove();
		}
	}
	// If element has show-date and hide-date attribute
	if ($(this).attr('data-show-date') && $(this).attr('data-hide-date')) {
		if (today >= showDate && today <= hideDate) {
			$(this).removeClass('hide');
			$(this).show().css('display', 'block');
		} else {
			$(this).remove();
		}
	}
});