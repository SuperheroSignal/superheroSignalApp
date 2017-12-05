$(document).ready(function() {

	$(".loginForm").hide();
	$(".dummyData").show();

	$(".homeButton").on("click", goHome);

	function goHome() {
		$(".loginForm").hide();
		$(".dummyData").show();
	}

	$(".regForm").on("click", regNew);

	function regNew() {
		$(".loginForm").show();
		$(".dummyData").hide();
	}

});