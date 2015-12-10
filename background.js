$(document).ready(function() {
	var chance = Math.floor(Math.random() * 100);
	if(chance == 69) {
		gachify();
	}
});

var generateHTML = function() {
	var html = "<video autoplay loop style='height: 100vh; width: 100vw'><source src='https://raw.githubusercontent.com/HairyDan/Gachify/master/GACHIGASM.webm' type='video/webm'><source src='https://raw.githubusercontent.com/HairyDan/Gachify/master/GACHIGASM.mp4' type='video/mp4'></video>";
	return html;
};

var gachify = function() {
	setTimeout(function() { // Wait 3 seconds before gachi attack
		var html = generateHTML();
		$('body').html(html);
		document.body.style.backgroundColor = "black";
		setTimeout(function() { // Wait 20 seconds for spring time to finish
			window.location.replace(document.URL);
		}, 20000);
	}, 3000);
};
