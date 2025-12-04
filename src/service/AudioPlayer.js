import trackList from "../pages/Home.js";

class AudioPlayer {
    updateListIcons() {
    const icons = document.querySelectorAll(".play-icon i");

    icons.forEach((icn, index) => {
        if (index === this.currentTrackIndex) {
            icn.classList.replace("fa-play", "fa-pause");
            icn.parentElement.style.opacity = "1";
        } else {
            icn.classList.replace("fa-pause", "fa-play");
            icn.parentElement.style.opacity = "0";
        }
    });
    }

    constructor() {
        this.isShuffle = false;
        this.repeatMode = "off";
        this.audio = null;
        this.currentTrackIndex = 0;

        this.isSeeking = false;
        this.seekToTime = 0;

        this.playIcon = null;
        this.prevBtn = null;
        this.nextBtn = null;

        this.seekbar = null;
        this.seekProgress = null;
        this.seekThumb = null;

        this.curTimeText = null;
        this.durTimeText = null;

        this.volumeSlider = null;
        
    }

    init() {
        this.audio = document.getElementById("audio-player");
        this.audio = document.getElementById("audio-player");
        this.playIcon = document.getElementById("play-icon");
        this.prevBtn = document.querySelector(".prev-track");
        this.nextBtn = document.querySelector(".next-track");
        this.audio.addEventListener("ended", () => this.handleTrackEnd()); 
        this.seekbar = document.getElementById("seekbar");
        this.seekProgress = document.getElementById("seekbar-progress");
        this.seekThumb = document.getElementById("seekbar-thumb");
        this.audio.volume = 0.5;
        this.curTimeText = document.getElementById("current-time");
        this.durTimeText = document.getElementById("duration-time");
        this.volumeSlider.value = 0.5;
        this.volumeSlider = document.getElementById("volume-slider");

        this.shuffleBtn = document.getElementById("shuffle-btn");
this.repeatBtn = document.getElementById("repeat-btn");

this.shuffleBtn.addEventListener("click", () => this.toggleShuffle());
this.repeatBtn.addEventListener("click", () => this.toggleRepeat());

        this.audio = document.getElementById("audio-player");
        this.audio.addEventListener("ended", () => this.handleTrackEnd());



        this.prevBtn.addEventListener("click", () => this.prevTrack());
        this.nextBtn.addEventListener("click", () => this.nextTrack());
        this.playIcon.parentElement.addEventListener("click", () => this.playpauseTrack());

        this.volumeSlider.addEventListener("input", (e) => this.changeVolume(e));

        this.seekThumb.addEventListener("mousedown", (e) => this.startSeek(e));
        this.seekbar.addEventListener("mousedown", (e) => this.startSeek(e));

        document.addEventListener("mousemove", (e) => this.moveSeek(e));
        document.addEventListener("mouseup", () => this.endSeek());

        this.audio.addEventListener("loadedmetadata", () => {
            this.durTimeText.textContent = this.formatTime(this.audio.duration);
        });

        this.audio.addEventListener("timeupdate", () => this.updateSeekBar());

        this.audio.volume = 0.5;
        this.volumeSlider.value = 0.5;
        window.addEventListener("keydown", (e) => {
        if (["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) return;

        if (e.code === "Space") {   
        e.preventDefault();
        this.playpauseTrack();
        }
        });
        this.audio.addEventListener("ended", () => {
    this.currentTrackIndex++;
    if (this.currentTrackIndex >= trackList.length) {
        this.currentTrackIndex = 0;
    }
    this.playThisTrack(trackList[this.currentTrackIndex]);
});

    }
    
    toggleShuffle() {
    this.isShuffle = !this.isShuffle;

    if (this.isShuffle) {
        this.shuffleBtn.classList.add("text-white");
    } else {
        this.shuffleBtn.classList.remove("text-white");
    }
}

handleTrackEnd() {
     if (this.repeatMode === "one") {
            this.audio.currentTime = 0;
            this.audio.play();
            return;
        }

        if (this.isShuffle) {
            let newIndex;
            do {
                newIndex = Math.floor(Math.random() * trackList.length);
            } while (newIndex === this.currentTrackIndex);

            this.currentTrackIndex = newIndex;
            this.playThisTrack(trackList[this.currentTrackIndex]);
            return;
        }

        this.nextTrack(); 
}


    toggleRepeat() {
    if (this.repeatMode === "off") {
        this.repeatMode = "all";
        this.repeatBtn.classList.add("text-white");
        this.repeatBtn.classList.remove("fa-repeat-1");
    }
    else if (this.repeatMode === "all") {
        this.repeatMode = "one";
        this.repeatBtn.classList.add("fa-repeat-1");
    }
    else {
        this.repeatMode = "off";
        this.repeatBtn.classList.remove("text-white");
        this.repeatBtn.classList.remove("fa-repeat-1");
    }
}

    playThisTrack(track) {
    this.audio.src = track.src;
    this.audio.play();

    const footer = document.querySelector("footer");
    if (footer && footer.classList.contains("hidden")) {
        footer.classList.remove("hidden");
    }

    this.audio.onended = () => this.handleTrackEnd();

    this.playIcon.classList.replace("fa-play", "fa-pause");
    
}

    playpauseTrack() {
        if (!this.audio.src) return;

        if (this.audio.paused) {
            this.audio.play();
            this.playIcon.classList.replace("fa-play", "fa-pause");
        } else {
            this.audio.pause();
            this.playIcon.classList.replace("fa-pause", "fa-play");
        }
    }

    nextTrack() {
    this.currentTrackIndex = (this.currentTrackIndex + 1) % trackList.length;
    this.playThisTrack(trackList[this.currentTrackIndex]);
}


    prevTrack() {
    this.currentTrackIndex = (this.currentTrackIndex - 1 + trackList.length) % trackList.length;
        this.playThisTrack(trackList[this.currentTrackIndex]);
    }

    startSeek(e) {
        this.isSeeking = true
        if (e) this.updateSeekFromEvent(e)
    }

    moveSeek(e) {
        if (!this.isSeeking) return
        this.updateSeekFromEvent(e)
    }

    endSeek() {
        if (this.isSeeking) {
            this.audio.currentTime = this.seekToTime
            this.isSeeking = false
        }
    }

    updateSeekFromEvent(e) {
        const rect = this.seekbar.getBoundingClientRect()
        let percent = (e.clientX - rect.left) / rect.width
        percent = Math.max(0, Math.min(1, percent))

        this.seekToTime = percent * this.audio.duration
        this.seekProgress.style.width = percent * 100 + "%"
        this.seekThumb.style.left = percent * 100 + "%"
        this.curTimeText.textContent = this.formatTime(this.seekToTime)
    }

    updateSeekBar() {
        if (!this.audio.duration || this.isSeeking) return

        const percent = (this.audio.currentTime / this.audio.duration) * 100
        this.seekProgress.style.width = percent + "%"
        this.seekThumb.style.left = percent + "%"
        this.curTimeText.textContent = this.formatTime(this.audio.currentTime)
    }

    changeVolume(e) {
        this.audio.volume = e.target.value
    }

    formatTime(sec) {
        if (!sec || isNaN(sec)) return "0:00"
        const m = Math.floor(sec / 60)
        const s = Math.floor(sec % 60).toString().padStart(2, "0")
        return `${m}:${s}`
    }
    
}

export default new AudioPlayer()
