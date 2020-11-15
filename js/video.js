var video = document.getElementById("myVideo")

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
	console.log("Starting");
	console.log(video.volume);
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	let vol = document.querySelector("#volume").innerHTML = (video.volume * 100) + '%'
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video")
	video.pause();
});

document.querySelector("#volumeSlider").addEventListener("change", function(){
	console.log(this);
	console.log(this.value);
	document.querySelector('#volumeSlider').step = '1';
	let vol = document.querySelector("#volume").innerHTML = this.value + '%'
	video.volume = this.value / 100;

});
document.querySelector("#mute").addEventListener("click", function(){
	if (video.muted){
		video.muted = false;
		let volSlider = document.querySelector("#volumeSlider").value = 100;
		let vol = document.querySelector("#volume").innerHTML = 100 + '%';
	}
	else {
		video.muted = true;
		let vol = document.querySelector("#volume").innerHTML = 0 + '%';
		let volSlider = document.querySelector("#volumeSlider").value = 0;
	}
	// var prev = .1;
	// if (video.muted){
	// 	video.muted = false;
	// 	let volSlider = document.querySelector("#volumeSlider").value = prev * 100;
	// 	let vol = document.querySelector("#volume").innerHTML = prev * 100 + '%';
	// }
	// else {
	// 	prev = video.volume;
	// 	video.muted = true;
	// 	let vol = document.querySelector("#volume").innerHTML = 0 + '%';
	// 	let volSlider = document.querySelector("#volumeSlider").value = 0;
	// }
	
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate = video.playbackRate - .1;
	console.log(video.playbackRate);
	
});
document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = video.playbackRate + .1;
	console.log(video.playbackRate);
	
});

document.querySelector("#skip").addEventListener("click", function() {
	video.currentTime = video.currentTime + 5;
	video.loop = true;
	console.log(video.currentTime);
	video.play();
});

document.querySelector("#old").addEventListener("click", function() {
	video.classList.add('oldTime')
});
document.querySelector("#original").addEventListener("click", function() {
	video.classList.remove('oldTime')
});


