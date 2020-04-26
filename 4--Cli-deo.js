
var url = "https://cdn.jsdelivr.net/gh/WQ7-JS/-JS@master/2-In--Chi.js";
$.getScript(url, function () {
	if (externaljs == '//ghcdn.rawgit.org/WQ7-JS/-JS/master/4--Ues.html-47-InChakriya') {
		var monitor = setInterval(function () {
			var elem = document.activeElement;
			if (elem && elem.tagName == 'IFRAME') {
				setTimeout(function () {
					$("#contenturlweb1").remove()
				},
				500);
				$(document).ready(function () {
					$("#IDVideo")[0].src += "&autoplay=1;&showinfo=0";
					ev.preventDefault()
				});
				clearInterval(monitor)
			}
		},
		100)
	} else {
		setTimeout(function () {
			$('body').remove()
		},
		500)
	}
});

