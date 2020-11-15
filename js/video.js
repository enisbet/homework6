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
	let vol = document.querySelector("#volume").innerHTML = this.value + '%'
	video.volume = this.value / 100;
	console.log(video.volume);

});
document.querySelector("#mute").addEventListener("click", function(){
	let vol = document.querySelector('#mute').innerHTML;
	if (video.muted){
		video.muted = false;
		vol = "Mute"
		
	}
	else {
		video.muted = true;
		vol = "UnMute"
		
	}
	
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate = video.playbackRate *.9;
	console.log(video.playbackRate);
	
});
document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = video.playbackRate *1.1;
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


