$(document).ready(function() {

	$(".loginForm").hide();
	$(".regForm").hide();
	$(".dummyData").show();

	$(".homeButton").on("click", goHome);

	function goHome() {
		$(".loginForm").hide();
		$(".regForm").hide();
		$(".dummyData").show();
	}

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

});