// logic for dynamically updating the live feed

//onclick event
$("#add-report").on("click", function(postReport) {
	event.preventDefault();

	// set variables for data
	// parse crime type
	var crimeTypeOrg = $("input[type=radio][name=crimeType]:checked").val();
	var crimeType = crimeTypeOrg.split('-').join(' ');
	console.log(crimeType);

	var situation = $("#report").val().trim();
	console.log(situation);

	// create timestamp with momentjs
	var date = moment();
	var parseDate = "[" + date._d + "]";
	console.log(parseDate);

	// prepend data to feed
	$(".live-feed").prepend("<div class='new-entry'>" + "<b>" + " " + crimeType + ": " + "</b>" + situation + " " + "<i>" + parseDate + "</i>" + "</div>");


	// empty reporting form
	$("input[type=radio][name=crimeType]:checked").attr("checked", false);
	$("#report").val("");


});