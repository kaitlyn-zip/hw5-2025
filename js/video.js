var video;

// initialize the video element (page load)
window.addEventListener("load", function() {
	console.log("Good job opening the window")

	// initialize the video element
	video = document.querySelector("#player1");

	// turn off autoplay
	video.autoplay = false;

	// turn off looping
	video.loop = false;

	console.log("Autoplay is set to " + video.autoplay);
	console.log("Looping is set to " + video.loop);
});

// play button
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();

	// update the volume info
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

// Pause button
document.querySelector("#pause").addEventListener("click", function() {
    console.log("Pause Video");
    video.pause();
});

// slow down button
document.querySelector("#slower").addEventListener("click", function() {
    // Slow down by 10%
    video.playbackRate *= 0.9;
    console.log("Speed is " + video.playbackRate);
});

// speed up button
document.querySelector("#faster").addEventListener("click", function() {
    // Speed up by dividing by 0.9 (inverse of slowing down)
    video.playbackRate /= 0.9;
    console.log("Speed is " + video.playbackRate);
});

// skip ahead button
document.querySelector("#skip").addEventListener("click", function() {
    // Skip ahead 10 seconds
    video.currentTime += 10;

    // If we've exceeded the duration, go back to start
    if (video.currentTime >= video.duration) {
        video.currentTime = 0;
    }

    console.log("Current location is " + video.currentTime);
});

// mute button
document.querySelector("#mute").addEventListener("click", function() {
    if (video.muted) {
        // Unmute
        video.muted = false;
        this.innerHTML = "Mute";
    } else {
        // Mute
        video.muted = true;
        this.innerHTML = "Unmute";
    }
});

// volume slider
document.querySelector("#slider").addEventListener("input", function() {
    // Update video volume (slider is 0-100, volume is 0-1)
    video.volume = this.value / 100;

    // Update the volume display
    document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

// styled old school
document.querySelector("#vintage").addEventListener("click", function() {
    video.classList.add("oldSchool");
});

// remove old school
document.querySelector("#orig").addEventListener("click", function() {
    video.classList.remove("oldSchool");
});