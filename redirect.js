(function() {
	'use strict';
	
	var count = 15; 
	//this function runs on the page load. It starts fetching book data and sets up
	//an event handler for the onclick of the home button.
	window.onload = function() {
		setInterval(countDown, 1000);	
		$("#link").hide();
		if(getParameterByName('k') == null) {
			window.location = "make.html";
		}
	};

	function countDown () {
		$("#count").html("continue in... " + count);
		count--;
		if (count < 0) {
			$("#count").hide();
			readyLink();
		}
	}

	//takes the fetched book Info data and displays it in the appropriate spot on the page
	function readyLink () {
		var key = getParameterByName('k');
		document.querySelector("#link").href="https://d1izv880y2wb3s.cloudfront.net/" + key;
		$("#link").show();
	}

	function getParameterByName(name, url) {
	    if (!url) url = window.location.href;
	    name = name.replace(/[\[\]]/g, "\\$&");
	    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
	        results = regex.exec(url);
	    if (!results) return null;
	    if (!results[2]) return '';
	    return decodeURIComponent(results[2].replace(/\+/g, " "));
	}


})();

