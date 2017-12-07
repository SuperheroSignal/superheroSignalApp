$(document).ready(function() {

	// By default, the homepage will display the posts from "newsfeed". Clicking the Login and Register buttons will display the forms for either option and hide everything else.

	$(".loginForm").hide();
	$(".regForm").hide();
	$(".dummyData").show();

	$(".homeButton").on("click", goHome);

	function goHome() {
		$(".loginForm").hide();
		$(".regForm").hide();
		$(".dummyData").show();
	}

	// For example, the Register button will bring up the form to register a new user and hide the "newsfeed" and Login forms.

	$(".regButton").on("click", regNew);

	function regNew() {
		$(".regForm").show();
		$(".dummyData").hide();
		$(".loginForm").hide();
	}

	$(".logButton").on("click", logNew);

	function logNew() {
		$(".regForm").hide();
		$(".dummyData").hide();
		$(".loginForm").show();
	}

	$(".add-user").on("click", function(event) {
		
		event.preventDefault();

		userName = $(".registerUser").val().trim();
		heroName = $(".alterEgo").val().trim();
		userRank = $(".heroRank").val().trim();
		userProfile = $(".profile").val().trim();

		$(".registerUser").val("");
		$(".alterEgo").val("");
		$(".profile").val("");
		
	})

});