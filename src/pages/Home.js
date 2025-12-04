window.audio = document.getElementById("audio-player");
window.currentTrackIndex = 0;
import AudioPlayer from "../service/AudioPlayer";

window.addEventListener("DOMContentLoaded", () => {
    AudioPlayer.init();
});

import PlaylistTags from "../components/PlaylistTags";
import authSevice from "../service/authSevice";




function Home() {
    const PlaylistTagsName = [
        {
            name: "Tập thể dục",
        },
        {
            name: "Thư giãn",
        },
        {
            name: "Nạp năng lượng",
        },
        {
            name: "Tiệc tùng",
        },
        {
            name: "Vui tươi",
        },
        {
            name: "Buồn",
        },
        {
            name: "Lãng mạn",
        },
        {
            name: "Trên đường đi làm",
        }
    ];
    return `
    <div class="container mt-12">
      <div class="ml-90">
        ${PlaylistTagsName.map((element) => {
            return PlaylistTags(element.name);
        }).join("")}
      </div>
    </div>
    <div class="text-white mt-20 pl-90 pr-40 flex items-center w-full justify-between">
        <h1 class="text-4xl font-bold">Chọn nhanh đài phát</h1>
        <div class="flex items-center">
        <a href="/" class="mx-1 border-[#3e3e3f] border hover:bg-[#2b2b2b] rounded-full p-2 px-5">
        Phát tất cả
        </a>
        <div id="left-btn" class="flex items-center justify-center mx-1 p-2 hover:border-[#3e3e3f] cursor-pointer hover:bg-[#28282b] border rounded-full">
        <i class="fa-solid fa-chevron-left"></i>
        </div>
        <div id="right-btn" class="flex items-center justify-center mx-1 p-2 cursor-pointer hover:border-[#3e3e3f] hover:bg-[#28282b] border rounded-full">
        <i class="fa-solid fa-chevron-right"></i>
        </div>
        </div>
    </div>
        <div id="radio-list" class="text-white w-[70%] ml-65 flex">
            <div id="music-box" class="w-full m-9 ml-25">
                <div class=" h-auto rounded-xl text-white p-3 overflow-x-hidden overflow-y-hidden scrollbar-x-hide">
                       <div id="playlist" class="overflow-x-hidden scrollbar-x-hide"></div>
                </div>
                </div>
            </div>
        </div>

        <div class="text-white mt-20 pl-90 pr-40 relative">
        <div class="flex justify-between">
    <h1 class="text-4xl font-bold mb-5">Đĩa nhạc dành cho bạn</h1>
    <span class="flex justify-between">
    <div id="left-btn-album" class="flex mx-1 items-center justify-center left-0 top-1/2 -translate-y-1/2 h-10 w-10 hover:border-[#3e3e3f] cursor-pointer hover:bg-[#28282b] border rounded-full z-10">
        <i class="fa-solid fa-chevron-left"></i>
    </div>

    <div id="right-btn-album" class="flex mx-1 items-center justify-center right-0 top-1/2 -translate-y-1/2 h-10 w-10 cursor-pointer hover:border-[#3e3e3f] hover:bg-[#28282b] border rounded-full z-10">
        <i class="fa-solid fa-chevron-right"></i>
    </div>
    </span>
        </div>
    <div id="recommended-albums" class="flex gap-5 overflow-x-auto scrollbar-x-hide px-5">
        ${trackList.slice(0, 20).map(track => `
        <div class="album-card min-w-[180px] cursor-pointer rounded-xl relative group">
            <img src="${track.img}" class="w-full h-48 object-cover rounded-xl" />
            <div class="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition flex items-center justify-center rounded-xl">
                <i class="fa-solid fa-play text-3xl text-white opacity-0 group-hover:opacity-100 transition"></i>
            </div>
            <div class="mt-2 font-semibold line-clamp-2">${track.name}</div>
            <div class="text-sm text-gray-400 line-clamp-1">${track.artist}</div>
        </div>
        `).join('')}
    </div>
</div>

      <div class="text-white my-25 w-full">
            <div class="flex items-center w-full ml-90">
                <img id="img" draggable="false" class="style-scope yt-img-shadow" alt="" width="789" src="https://www.youtube.com/img/music/tastebuilder/shelf_thumbnail/v6/US_992_X_304.png">
                <div class="flex flex-col mx-5">
                <p class="text-white font-bold text-2xl">Hãy cho tôi biết bạn thích nghệ sĩ nào</p>
                <p class="text-white font-light text-l">Chúng tôi sẽ tạo trải nghiệm dành riêng cho bạn</p>
                <span class="my-2">
                <button class="items-start cursor-pointer border flex p-2 rounded-full text-black bg-white font-bold">Bắt đầu nào</button>
                </span>
                </div>
            </div>
      <div>      

        
    `;
}

const trackList = [
    {
        name: "An Thần",
        artist: "Low G, Thắng",
        img: "../public/images/An Thần.jpeg",
        src: "../public/music/An Thần.mp3"
    },
    {
        name: "6262",
        artist: "Low G",
        img: "../public/images/6262.jpeg",
        src: "../public/music/6262 (prod. Maiki) _ Low G _ Nhà Hoá Học Đống Đa.mp3"
    },
    {
        name: "Bảo tàng",
        artist: "Low G",
        img: "../public/images/Bảo tàng.jpeg",
        src: "../public/music/Bảo Tàng (prod. Maiki) _ Low G _ Nhà Hóa Học Đống Đa.mp3"
    },
    {
        name: "Pho real",
        artist: "Low G, Anh Phan, bbno$",
        img: "../public/images/Pho real.jpeg",
        src: "../public/music/bbno$, Low G & Anh Phan - pho real.mp3"
    },
    {
        name: "Càng cua",
        artist: "Low G",
        img: "../public/images/Càng cua.jpeg",
        src: "../public/music/Càng Cua _ Low G x Last Fire Crew _ Nhà Hóa Học Đống Đa.mp3"
    },
    {
        name: "Cypher Nhà Làm",
        artist: "Low G, ResQ, Chí, Teddie J",
        img: "../public/images/Cypher nhà làm.jpeg",
        src: "../public/music/Cypher Nhà Làm.mp3"
    },
    {
        name: "Giọng Ta",
        artist: "Daisy Le Garçon, Low G, BeepBeepChild",
        img: "../public/images/Giọng ta.jpeg",
        src: "../public/music/Daisy Le Garçon - Giọng Ta (ft. Low G, BeepBeepChild) _ Official Music Video.mp3"
    },
    {
        name: "Dáng Xấu",
        artist: "Low G",
        img: "../public/images/Dáng xấu.jpeg",
        src: "../public/music/Dáng Xấu _ Low G _ Rap Nhà Làm.mp3"
    },
    {
        name: "Dáng Xinh",
        artist: "Low G, Trungng",
        img: "../public/images/Dáng xinh.jpeg",
        src: "../public/music/Dáng Xinh (prod. Trungng) _ Low G _ Rap Nhà Làm.mp3"
    },
    {
        name: "Cách Tán Gái 101",
        artist: "Low G",
        img: "../public/images/Tán gái 505.jpeg",
        src: "../public/music/Cách Tán Gái 101 (Japan Remix) _ Low G ft. Ska _ Rap Nhà Làm.mp3"
    },
    {
        name: "Tán Gái 202",
        artist: "Low G",
        img: "../public/images/Tán gái 505.jpeg",
        src: "../public/music/Tán Gái 202 _ Low G _ Rap Nhà Làm.mp3"
    },
    {
        name: "Tán Gái 303",
        artist: "Low G",
        img: "../public/images/Tán gái 303.jpeg",
        src: "../public/music/Tán Gái 303 _ Low G _ Rap Nhà Làm.mp3"
    },
    {
        name: "Tán Gái 505",
        artist: "Low G",
        img: "../public/images/Tán gái 505.jpeg",
        src: "../public/music/Tán Gái 505 _ Low G _ Rap Nhà Làm.mp3"
    },
    {
        name: "Tán Gái 606",
        artist: "Low G",
        img: "../public/images/Tán gái 606.jpeg",
        src: "../public/music/Tán Gái 606 _ Low G _ Rap Nhà Làm.mp3"
    },
    {
        name: "FASHION Tán Gái",
        artist: "Low G, Wren Evans",
        img: "../public/images/FASHION Tán Gái.jpeg",
        src: "../public/music/FASHION TÁN GÁI (BECK STAGE CYPHER 2021) - Wren Evans ft Low G.mp3"
    },
    {
        name: "Chán Gái 707",
        artist: "Low G",
        img: "../public/images/Chán gái 707.jpeg",
        src: "../public/music/Chán Gái 707 _ Low G _ Rap Nhà Làm.mp3"
    },
    {
        name: "Simp Gái 808",
        artist: "Low G",
        img: "../public/images/Simp Gái 808.jpeg",
        src: "../public/music/Simp Gái 808 _ Low G _ Rap Nhà Làm.mp3"
    },
    {
        name: "Love Game",
        artist: "Low G, tlinh",
        img: "../public/images/Love game.jpeg",
        src: "../public/music/Low G _ Love Game (ft. tlinh) _ OFFICIAL MUSIC VIDEO.mp3"
    },
    {
        name: "DÂU TẰM",
        artist: "Low G, tlinh",
        img: "../public/images/HOP ON DA SHOW.jpeg",
        src: "../public/music/DÂU TẰM _ Low G x tlinh _ OFFICIAL AUDIO.mp3"
    },
    {
        name: "HOP ON DA SHOW",
        artist: "Low G, tlinh",
        img: "../public/images/HOP ON DA SHOW.jpeg",
        src: "../public/music/HOP ON DA SHOW _ Low G x tlinh x Last Fire Crew _ OFFICIAL MUSIC VIDEO.mp3"
    },
    {
        name: "Đơn Giản",
        artist: "Low G",
        img: "../public/images/Đơn giản.jpeg",
        src: "../public/music/Đơn Giản _ Low G _ Nhà Hóa Học Đống Đa.mp3"
    },
    {
        name: "Flexin  trên Circle K",
        artist: "Low G",
        img: "../public/images/Flexin  trên Circle K.jpeg",
        src: "../public/music/Flexin  trên Circle K _ Low G (Lyric video) _ Rap Nhà Làm.mp3"
    },
    {
        name: "Flexin  trên Circle K 2",
        artist: "Low G",
        img: "../public/images/Flexin trên Circle K 2.jpeg",
        src: "../public/music/Flexin  Trên Circle K 2 _ Low G _ Rap Nhà Làm.mp3"
    },
    {
        name: "Không Thèm",
        artist: "Low G",
        img: "../public/images/Không Thèm.jpeg",
        src: "../public/music/Không Thèm (prod. Maiki) _ Low G _ Nhà Hóa Học Đống Đa.mp3"
    },
    {
        name: "Không Thích",
        artist: "Low G",
        img: "../public/images/Không Thích.jpeg",
        src: "../public/music/Không Thích _ Low G _ Rap Nhà Làm.mp3"
    },
    {
        name: "Không Yêu Em Thì Yêu Ai",
        artist: "Low G, Vũ.",
        img: "../public/images/Không Yêu Em Thì Yêu Ai.jpeg",
        src: "../public/music/Không Yêu Em Thì Yêu Ai  _ Vũ. ft. Low G (từ Album  Bảo Tàng Của Nuối Tiếc ).mp3"
    },
    {
        name: "Đừng Để Tiền Rơi",
        artist: "Low G",
        img: "../public/images/Đừng Để Tiền Rơi.jpeg",
        src: "../public/music/Low G _ Đừng Để Tiền Rơi _ ‘L2K’ The Album.mp3"
    },
    {
        name: "In Love",
        artist: "Low G, JustaTee",
        img: "../public/images/Đừng Để Tiền Rơi.jpeg",
        src: "../public/music/Low G _ In Love (ft. JustaTee) _ ‘L2K’ The Album.mp3"
    },
    {
        name: "Long",
        artist: "Low G",
        img: "../public/images/Đừng Để Tiền Rơi.jpeg",
        src: "../public/music/Low G _ Long _ ‘L2K’ The Album.mp3"
    },
    {
        name: "Nét",
        artist: "Low G",
        img: "../public/images/Nét.jpeg",
        src: "../public/music/Low G _ Nét _ OFFICIAL MUSIC VIDEO.mp3"
    },
    {
        name: "Nhiều Hơn",
        artist: "Low G",
        img: "../public/images/Đừng Để Tiền Rơi.jpeg",
        src: "../public/music/Low G _ Nhiều Hơn _ ‘L2K’ The Album.mp3"
    },
    {
        name: "Peace N’ Love",
        artist: "Low G, My Anh",
        img: "../public/images/Đừng Để Tiền Rơi.jpeg",
        src: "../public/music/Low G _ Peace N’ Love (ft. Mỹ Anh) _ ‘L2K’ The Album.mp3"
    },
    {
        name: "Siêu Sao",
        artist: "Low G",
        img: "../public/images/Đừng Để Tiền Rơi.jpeg",
        src: "../public/music/Low G _ Siêu Sao _ ‘L2K’ The Album.mp3"
    },
    {
        name: "Tràng Thi",
        artist: "Low G",
        img: "../public/images/Đừng Để Tiền Rơi.jpeg",
        src: "../public/music/Low G _ Tràng Thi _ ‘L2K’ The Album.mp3"
    },
    {
        name: "okeokeoke",
        artist: "Low G",
        img: "../public/images/okeokeoke.jpeg",
        src: "../public/music/Okeokeoke.mp3"
    },
    {
        name: "Simple Cypher",
        artist: "Low G",
        img: "../public/images/Simple Cypher.jpeg",
        src: "../public/music/Simple Cypher.mp3"
    },
    {
        name: "Thủ Đô Cypher",
        artist: "Low G, Raptital, RPT Orijinn, RZ Ma$, RPT MCK, RPT Phongkhin",
        img: "../public/images/Thủ Đô Cypher.jpeg",
        src: "../public/music/Thủ Đô Cypher - Beck Stage X Biti s Hunter ( RPT Orijinn, LOW G, RZMas, RPT MCK).mp3"
    },
    {
        name: "Thiên Thần Ác Quỷ",
        artist: "Low G",
        img: "../public/images/Thiên Thần Ác Quỷ.jpeg",
        src: "../public/music/Low G - Thiên Thần Ác Quỷ _ A COLORS SHOW.mp3"
    },
    {
        name: "Có em",
        artist: "Low G, Madihu",
        img: "../public/images/Có em.jpeg",
        src: "../public/music/Madihu - Có em (Feat. Low G) [Official MV].mp3"
    },
    {
        name: "Có Khi",
        artist: "Low G, Madihu",
        img: "../public/images/Có Khi.jpeg",
        src: "../public/music/Madihu - Có Khi (Feat. Low G) _ Official MV.mp3"
    },
    {
        name: "MUỘN PHIỀN",
        artist: "Phương Ly, Low G, VSTRA",
        img: "../public/images/MUỘN PHIỀN.jpeg",
        src: "../public/music/MUỘN PHIỀN – PHƯƠNG LY ft. LOW G _ OFFICIAL MV.mp3"
    },
    {
        name: "NGÂN",
        artist: "tlinh, Low G",
        img: "../public/images/HOP ON DA SHOW.jpeg",
        src: "../public/music/NGÂN _ Low G x tlinh _ OFFICIAL AUDIO.mp3"
    },
    {
        name: "Ôi Bạn Ơi",
        artist: "Low G, Teddie J",
        img: "../public/images/Ôi Bạn Ơi.jpeg",
        src: "../public/music/Ôi Bạn Ơi (Prod. Maiki) _ Low G ft. Teddie J _ Rap Nhà Làm.mp3"
    },
    {
        name: "Phân Thân",
        artist: "Low G",
        img: "../public/images/Phân Thân.jpeg",
        src: "../public/music/Phân Thân (prod. Maiki) _ Low G x DCGR _ Nhà Hóa Học Đống Đa.mp3"
    },
    {
        name: "PHONG LONG",
        artist: "Low G, Obito, WOKEUP",
        img: "../public/images/PHONG LONG.jpeg",
        src: "../public/music/PHONG LONG 👬 Low G x Obito x WOKEUP _ WCAs 2023.mp3"
    },
    {
        name: "PHÓNG ZÌN ZÌN",
        artist: "tlinh, Low G",
        img: "../public/images/HOP ON DA SHOW.jpeg",
        src: "../public/music/PHÓNG ZÌN ZÌN _ Low G x tlinh _ OFFICIAL AUDIO.mp3"
    },
    {
        name: "Quá Sớm",
        artist: "Low G",
        img: "../public/images/Quá Sớm.jpeg",
        src: "../public/music/Quá Sớm _ Low G _ Rap Nhà Làm.mp3"
    },
    {
        name: "Tam Giác",
        artist: "Anh Phan, Low G, Larria",
        img: "../public/images/Tam Giác.jpeg",
        src: "../public/music/Tam Giác - Anh Phan ft. Low G & Larria. (M_V).mp3"
    },
    {
        name: "Thơ",
        artist: "Low G",
        img: "../public/images/Thơ.jpeg",
        src: "../public/music/Thơ _ @chí-c8chai  ft. Low G _ Rap Nhà Làm.mp3"
    },
    {
        name: "Tiếp Đất",
        artist: "Low G, Thắng, Vantacrow",
        img: "../public/images/Tiếp Đất.jpeg",
        src: "../public/music/Tiếp Đất (prod. Vantacrow) _ Low G ft. Thắng _ Rap Nhà Làm.mp3"
    },
    {
        name: "NGƯỜI ĐI BAO",
        artist: "tlinh, Low G",
        img: "../public/images/NGƯỜI ĐI BAO.jpeg",
        src: "../public/music/tlinh - NGƯỜI ĐI BAO (ft. Low G ) _ OFFICIAL MUSIC VIDEO.mp3"
    },
    {
        name: "vứt zác (vào trong thùng)",
        artist: "tlinh, Low G",
        img: "../public/images/vứt zác.jpeg",
        src: "../public/music/vứt zác (vào trong thùng) - tlinh ft. Low G.mp3"
    },
    {
        name: "CÓ CHUYỆN, CÙNG CHILL",
        artist: "Low G, Wowy, NÂN",
        img: "../public/images/CÓ CHUYỆN, CÙNG CHILL.jpeg",
        src: "../public/music/WOWY x LOW G x NÂN x MASEW _ CÓ CHUYỆN, CÙNG CHILL (#CCCC) x BECK S ICE _ OFFICIAL MV.mp3"
    }
];

window.addEventListener("DOMContentLoaded", () => {
    // Đảm bảo các phần tử tồn tại
    const playlist = document.getElementById("playlist");
    const leftBtn = document.getElementById("left-btn");
    const rightBtn = document.getElementById("right-btn");
    const recommendedAlbums = document.getElementById("recommended-albums");
    const leftBtnAlbum = document.getElementById("left-btn-album");
    const rightBtnAlbum = document.getElementById("right-btn-album");
    const playpauseButton = document.getElementById("playpause-track");
    const playIcon = document.getElementById("play-icon");
    const audio = document.getElementById("audio-player");
    const currentTimeElem = document.getElementById("current-time");
    const durationTimeElem = document.getElementById("duration-time");
    const seekbarProgress = document.getElementById("seekbar-progress");
    const seekbarThumb = document.getElementById("seekbar-thumb");

    let isPlaying = false;

    // Khi người dùng nhấn Play/Pause
    playpauseButton.addEventListener("click", () => {
        if (isPlaying) {
            // Pause audio
            audio.pause();
            playIcon.classList.replace("fa-pause", "fa-play");
        } else {
            // Play audio
            audio.play();
            playIcon.classList.replace("fa-play", "fa-pause");
        }

        isPlaying = !isPlaying;
    });

    // Cập nhật thời gian khi audio đang phát
    audio.addEventListener("timeupdate", () => {
        const currentTime = audio.currentTime;
        const duration = audio.duration;
        const progress = (currentTime / duration) * 100;

        // Cập nhật thời gian hiện tại và tổng thời gian
        currentTimeElem.textContent = formatTime(currentTime);
        durationTimeElem.textContent = formatTime(duration);

        // Cập nhật thanh tiến độ
        seekbarProgress.style.width = `${progress}%`;
        seekbarThumb.style.left = `${progress}%`;
    });

    // Định dạng thời gian
    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = Math.floor(seconds % 60);
        return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
    }

    // Xử lý thanh điều khiển âm lượng
    const volumeSlider = document.getElementById("volume-slider");
    volumeSlider.addEventListener("input", (e) => {
        audio.volume = e.target.value;
    });

    // Khi người dùng click vào seekbar để chuyển đến thời gian cụ thể
    const seekbar = document.getElementById("seekbar");
    seekbar.addEventListener("click", (e) => {
        const seekbarWidth = seekbar.offsetWidth;
        const clickPosition = e.offsetX;
        const newTime = (clickPosition / seekbarWidth) * audio.duration;
        audio.currentTime = newTime;
    });
    const scrollAmount = 250; // Số pixel cuộn mỗi lần

    // Kiểm tra nếu các phần tử không có, ngừng thực thi
    if (!playlist || !leftBtn || !rightBtn || !recommendedAlbums || !leftBtnAlbum || !rightBtnAlbum) {
        console.warn("Không tìm thấy một trong các phần tử cần thiết.");
        return;
    }

    // Sự kiện cuộn playlist
    rightBtn.addEventListener("click", () => {
        playlist.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });

    leftBtn.addEventListener("click", () => {
        playlist.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    });

    // Sự kiện cuộn recommended albums
    rightBtnAlbum.addEventListener("click", () => {
        recommendedAlbums.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });

    leftBtnAlbum.addEventListener("click", () => {
        recommendedAlbums.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    });

    // Render playlist (đảm bảo danh sách playlist được tạo ra đúng cách)
    function renderPlaylist() {
        playlist.style.display = "grid";
        playlist.style.gridAutoFlow = "column";
        playlist.style.gridTemplateRows = "repeat(4, auto)";
        playlist.style.overflowX = "auto";
        playlist.style.overflowY = "hidden";
        playlist.style.scrollbarWidth = "none";
        playlist.style.msOverflowStyle = "none";
        playlist.style.gap = "12px";
        playlist.classList.add("scrollbar-x-hide");

        trackList.forEach(track => {
            const item = document.createElement("div");
            item.className = "min-w-[150px] h-20 w-70 rounded-xl px-5 cursor-pointer hover:bg-[#111114]";

            item.innerHTML = `
                <div class="play-btn relative group p-2 flex items-center">
                    <img src="${track.img}" class="w-10 h-10 rounded-lg object-cover" />
                    <div class="items-center ml-2">
                        <div class="mt-2 font-semibold line-clamp-2">${track.name}</div>
                        <div class="text-sm text-gray-400 line-clamp-1">${track.artist}</div>
                    </div>
                </div>
            `;
            playlist.appendChild(item);
            item.querySelector(".play-btn").addEventListener("click", () => {
                playThisTrack(track);
            });
        });
    }

    renderPlaylist();

    // Sự kiện phát nhạc khi người dùng nhấn vào một bài hát
    window.playThisTrack = function(track) {
        const audio = document.getElementById("audio-player");

        audio.src = track.src;
        audio.play();

        document.querySelector(".playpause-track i").classList
            .replace("fa-play", "fa-pause");

        updateFooterTrackInfo(track);
    };

    // Đảm bảo rằng sự kiện cuộn album được xử lý
    const albumCards = document.querySelectorAll("#recommended-albums .album-card");
    albumCards.forEach((card, index) => {
        card.addEventListener("click", () => {
            import("../service/AudioPlayer").then(module => {
                const audioPlayer = module.default;
                audioPlayer.currentTrackIndex = index;
                audioPlayer.playThisTrack(trackList[index]);
            });
        });
    });

});


window.playThisTrack = function(track) {
    const audio = document.getElementById("audio-player");

    audio.src = track.src;
    audio.play();

    document.querySelector(".playpause-track i").classList
        .replace("fa-play", "fa-pause");

    updateFooterTrackInfo(track);
};




export default Home;