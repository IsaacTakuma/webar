
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
	let nsfw = 'safe';
	const safe = document.getElementById('safe');
	const maniax = document.getElementById('maniax');

	safe.addEventListener('click', () => {
		nsfw = 'safe';
		document.getElementById("tap").classList.toggle("maniax");
		document.getElementById("tap").classList.toggle("safe");
	});

	maniax.addEventListener('click', () => {
		nsfw = 'maniax';
		document.getElementById("tap").classList.toggle("maniax");
		document.getElementById("tap").classList.toggle("safe");
	});

	menu.forEach((icon, index) => {
		icon.addEventListener('click', () => {
			vid.pause();
			vid.src = `/assets/videos/${nsfw}/video_${index + 1}.mp4`;
			vid.play();
			vid.currentTime = 0;
			console.log(vid.src);
		});
	});
});
