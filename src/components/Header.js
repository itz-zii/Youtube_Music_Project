import screenCast from "../assets/icons/screenCast.svg?raw";
import SideBar from "./SideBar";

async function Header() {
    return `
    ${SideBar()}  

    <div class="flex items-center h-16 ">

     <div class="container mx-auto flex items-center">
        <label class="group flex items-center ml-auto w-[480px] h-[41.6px] border border-[#ffffff26] rounded-lg  bg-[#292929]">
          <span class="cursor-pointer ml-4 mr-4 ">
            <i class="fa-solid fa-magnifying-glass dark:text-[#999c9b] group-hover:text-white"></i>
          </span>
      
          <input 
            placeholder="Tìm bài hát, đĩa nhạc, nghệ sĩ, podcast" type="text" 
            class="dark:text-white outline-hidden border-hidden w-4/5 h-full text-[16px] font-thin mb-0.5"
          >

          <span class="flex items-center justify-center flex-1 h-full cursor-pointer">
            <i class="fa-solid fa-xmark dark:text-[#999c9b] font-normal text-[15px] group-hover:text-white" ></i>
          </span>
        </label>

        <div class="flex items-center gap-4 ml-auto ">
          <button class="cursor-pointer dark:text-white">
            <span class="w-5 h-5 inline-block dark:text-white">
              ${screenCast}
            </span>
          </button>

          <button class="cursor-pointer">
            <i class="fa-solid fa-ellipsis-vertical dark:text-white text-[18px]"></i>
          </button>

          <!-- 🔥 Nút mở modal -->
          <button class="cursor-pointer dark:bg-white h-8 px-4 rounded-full text-[14px] font-medium">
            <span id="openModalBtn">Đăng ký</span>
          </button>
        </div>
     </div>
    </div>

    <div id="authModal" class="hidden fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div class="bg-white w-[400px] rounded-lg p-6 text-black relative">

        <button id="closeModalBtn" class="absolute top-3 right-3 text-xl cursor-pointer">&times;</button>

        <h2 class="text-2xl font-bold mb-4 text-center">Đăng ký</h2>

        <form id="registerForm" class="flex flex-col gap-3">
          <input class="border p-2 rounded" type="text" placeholder="Tên người dùng" required>
          <input class="border p-2 rounded" type="email" placeholder="Email" required>
          <input class="border p-2 rounded" type="password" placeholder="Mật khẩu" required>
          <button class="bg-black text-white p-2 rounded mt-2">Đăng ký</button>
        </form>

        <p class="text-center mt-4 text-sm">
            Đã có tài khoản? 
            <span id="switchToLogin" class="text-blue-600 cursor-pointer">Đăng nhập</span>
        </p>

        <form id="loginForm" class="flex flex-col gap-3 mt-6 hidden">
          <input class="border p-2 rounded" type="email" placeholder="Email" required>
          <input class="border p-2 rounded" type="password" placeholder="Mật khẩu" required>
          <button class="bg-black text-white p-2 rounded mt-2">Đăng nhập</button>
        </form>

      </div>
    </div>
    `;
}



export default Header;
