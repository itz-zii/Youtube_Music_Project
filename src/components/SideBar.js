import logo from "../assets/icons/logo.svg";

function SideBar() {
    // const user = authSevice.currentUser();

    const randomSlug = Math.random();

    return `
        <div class="fixed  w-60 h-full border-r border-r-[#292929]">
            <div class="flex gap-6 items-center pl-5 h-16 ">
                <button class="cursor-pointer size-6">
                     <i class="fa-solid fa-bars dark:text-white text-[20px] size-full "></i>
                 </button>
    
                <a href="/">
                    <img src=${logo} alt="music" class="object-cover">
                </a>
            </div>

            <div class="flex pt-5 flex-col justify-start">
                <a class="dark:text-white hover:bg-[#111114] active:bg-[#1c1c1f] p-3 items-center my-2 flex" href="/">
                <i class="mx-4 text-xl fa-solid fa-house"></i>
                <p class="mx-4">trang chủ</p></a>
                <a class="dark:text-white hover:bg-[#111114] active:bg-[#1c1c1f] p-3 items-center my-2 flex" href="/explore">
                <i class="mx-4 text-xl fa-regular fa-compass"></i>
                <p class="mx-4">khám phá</p></a>
                <a class="dark:text-white hover:bg-[#111114] active:bg-[#1c1c1f] p-3 items-center my-2 flex" href="/library">
                <i class="mx-4 text-xl fa-regular fa-bookmark"></i>
                <p class="mx-4">thư viện</p></a>
                <a class="dark:text-white hover:bg-[#111114] active:bg-[#1c1c1f] p-3 items-center my-2 flex" href="/channel/${randomSlug}">
                <i class="mx-4 text-xl fa-regular fa-circle-play"></i>
                <p class="mx-4">đến trang channel</p></a>
            </div>
        </div>
    `;
}

export default SideBar;
