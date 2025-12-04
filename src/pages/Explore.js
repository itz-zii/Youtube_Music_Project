function Explore() {
    const TagsMood = [
        { name: "Buồn", color: "#7E7E7E" },
        { name: "Lãng mạn", color: "#E74C3C" },
        { name: "Party", color: "#8E44AD" },
        { name: "Tập luyện", color: "#F39C12" },
        { name: "Trên đường đi", color: "#F1C40F" },
        { name: "Tươi vui", color: "#1ABC9C" },
        { name: "Nhạc nạp năng lượng", color: "#FF5733" },
        { name: "Nhạc ru ngủ", color: "#9B59B6" },
        { name: "Tập trung", color: "#3498DB" },
        { name: "Thư giãn", color: "#00BFFF" }
    ];

    const TagsGenre = [
        { name: "Blues", color: "#2980B9" },
        { name: "Bollywood và Ấn Độ", color: "#9B59B6" },
        { name: "Gia đình", color: "#16A085" },
        { name: "Hip-hop", color: "#FF5733" },
        { name: "Jazz", color: "#E74C3C" },
        { name: "Nhạc Á Rập", color: "#D35400" },
        { name: "Nhạc dance và electronic", color: "#F39C12" },
        { name: "Nhạc Thái Lan", color: "#F1C40F" },
        { name: "Nhạc Indonesia", color: "#E67E22" },
        { name: "Nhạc theo mùa", color: "#2ECC71" },
        { name: "Nhạc reggae và caribbean", color: "#34495E" },
        { name: "Rock", color: "#9B59B6" },
        { name: "Indie và alternative", color: "#34495E" },
        { name: "Mandopop và cantopop", color: "#C0392B" },
        { name: "Nhạc K-Pop", color: "#00BFFF" },
        { name: "J-Pop", color: "#FF1493" },
        { name: "Pop", color: "#F39C12" },
        { name: "R&B và soul", color: "#9B59B6" }
    ];

    return `
        <div class="dark:text-white w-full mt-5 flex ml-[250px]">
            <h2 class="font-bold text-xl cursor-pointer hover:bg-[#4a4a4a] bg-[#2f2f2f] rounded-lg border-transparent mx-5 p-5 w-110">Bản phát hành mới</h2>
            <h2 class="font-bold text-xl cursor-pointer hover:bg-[#4a4a4a] bg-[#2f2f2f] rounded-lg border-transparent mx-5 p-5 w-110">Bản phát hành mới</h2>
            <h2 class="font-bold text-xl cursor-pointer hover:bg-[#4a4a4a] bg-[#2f2f2f] rounded-lg border-transparent mx-5 p-5 w-110">Bản phát hành mới</h2>
        </div>
        
        <div class="ml-[280px] mt-15">
            <h1 class="text-white text-5xl font-bold">Tâm trạng và thể loại</h1>
            <p class="text-white my-5 font-bold text-xl">Tâm trạng và khoảnh khắc</p>
           <div class="flex flex-wrap">
    ${TagsMood.map(tag => `
        <div class="mx-2 rounded-lg inline-flex items-center p-0 w-50 m-2 cursor-pointer hover:bg-[#262629] bg-[#1a1a1c] text-white overflow-hidden">
            <div style="background:${tag.color}" class="w-2 h-full"></div>
            <span class="p-2">${tag.name}</span>
        </div>
    `).join('')}
</div>

<p class="text-white my-5 font-bold text-xl mt-10">Dòng nhạc</p>

<div class="flex flex-wrap">
    ${TagsGenre.map(tag => `
        <div class="mx-2 rounded-lg inline-flex items-center p-0 w-50 m-5 cursor-pointer hover:bg-[#262629] bg-[#1a1a1c] text-white overflow-hidden">
            <div style="background:${tag.color}" class="w-2 h-full"></div>
            <span class="p-2">${tag.name}</span>
        </div>
    `).join('')}
</div>

        </div>
    `;
}

export default Explore;
