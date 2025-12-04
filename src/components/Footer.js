function Footer() {
    return `
    <footer class="bg-[#211e1e] z-100 bottom-0 left-0 h-13 w-full rounded-b-xl fixed flex flex-col justify-between">
        <div id="seekbar" class="group relative w-full h-2 bg-[#2f2f2f] rounded-full cursor-pointer">
            <div id="seekbar-progress" class="absolute top-0 left-0 h-full bg-linear-to-r from-red-500 to-pink-500 rounded-full" style="width: 0%;"></div>
            <div id="seekbar-thumb" class="absolute top-1/2 cursor-pointer -translate-y-1/2 -translate-x-1/2 bg-red-500 rounded-full w-3 h-3 opacity-0 scale-0 transition-opacity duration-200 ease-out group-hover:opacity-100 group-hover:scale-100" style="left: -6px;"></div>
        </div>
        <div class="flex items-center justify-between mb-1">
            <div id="left" class="flex items-center">
                <div class="flex items-center px-5 gap-4">
                    <div class="prev-track cursor-pointer text-xl">
                        <i class="fa-solid text-white fa-backward-fast"></i>
                    </div>
                    <div id="playpause-track" class="playpause-track cursor-pointer text-2xl">
                        <i id="play-icon" class="text-white fa-solid fa-play"></i>
                    </div>
                    <div class="next-track cursor-pointer text-xl">
                        <i class="fa-solid text-white fa-forward-fast"></i>
                    </div>
                </div>
                <div class="text-sm opacity-90 flex items-center justify-between font-semibold">
                    <span id="current-time" class="text-white font-thin">0:00</span>
                    <span class="text-white font-thin mx-2">/</span>
                    <span id="duration-time" class="text-white font-thin">0:00</span>
                </div>
            </div>
            <div class="flex items-center gap-3 mx-5">
                <i id="shuffle-btn" class="fa-solid fa-shuffle text-gray-300 cursor-pointer hover:text-white"></i>

                <i id="repeat-btn" class="fa-solid fa-repeat text-gray-300 cursor-pointer hover:text-white"></i>

                <input id="volume-slider" type="range" min="0" max="1" step="0.01" class="w-32 h-1 bg-gray-300 rounded-lg cursor-pointer accent-transparent"></input>
            </div>
        </div>
        <audio id="audio-player" class="hidden"></audio>
    </footer>
    `;
}

export default Footer;
