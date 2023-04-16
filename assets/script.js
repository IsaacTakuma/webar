
let vid;

document.addEventListener("DOMContentLoaded", function () {
	vid = document.getElementById("myVideo");
	document.getElementById("start").addEventListener("click", function () {
		document.getElementById("pre_start").style.display = "none";
		document.getElementById("tap").style.display = "inline-block";

		vid.play();
		vid.currentTime = 0;
	});
});

AFRAME.registerComponent("registerevents", {
	init: function () {
		var marker = this.el;

		marker.addEventListener("markerLost", function () {
			vid.pause();
			vid.currentTime = 0;
		});

		marker.addEventListener("markerFound", function () {
			vid.currentTime = 0;
			vid.play();
		});
	},
});

window.addEventListener('DOMContentLoaded', () => {

	const menu = document.querySelectorAll('.icon');
	console.log(menu);

	menu.forEach((icon, index) => {
		console.log(`/assets/videos/video_${index + 1}.mp4`);
		icon.addEventListener('click', () => {
			vid.pause();
			vid.src = `/assets/videos/video_${index + 1}.mp4`;
			vid.play();
			vid.currentTime = 0;
		});
	});
});
