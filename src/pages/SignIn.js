// Lấy nút đăng ký
const openModalBtn = document.getElementById('openModalBtn');

// Hàm mở overlay (modal)
openModalBtn.addEventListener('click', () => {
  // Kiểm tra xem modal đã tồn tại chưa
  if (!document.getElementById('overlay')) {
    // Tạo overlay HTML
    const overlayHTML = `
      <div id="overlay" class="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
        <div class="bg-white p-8 rounded-lg shadow-lg w-96 relative">
          <span id="closeBtn" class="absolute top-2 right-2 text-2xl cursor-pointer">&times;</span>
          <h2 class="text-2xl font-semibold mb-4">Đăng ký tài khoản</h2>
          
          <form id="registerForm">
            <label for="username" class="block text-sm font-medium text-gray-700">Tên người dùng</label>
            <input type="text" id="username" name="username" class="w-full p-2 mb-4 border border-gray-300 rounded" required>
            
            <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" name="email" class="w-full p-2 mb-4 border border-gray-300 rounded" required>
            
            <label for="password" class="block text-sm font-medium text-gray-700">Mật khẩu</label>
            <input type="password" id="password" name="password" class="w-full p-2 mb-4 border border-gray-300 rounded" required>
            
            <button type="submit" class="w-full py-2 bg-green-500 text-white rounded hover:bg-green-700">
              Đăng ký
            </button>
          </form>
        </div>
      </div>
    `;
    
    // Thêm modal vào body
    document.body.insertAdjacentHTML('beforeend', overlayHTML);
    
    // Lấy các phần tử mới
    const overlay = document.getElementById('overlay');
    const closeBtn = document.getElementById('closeBtn');
    const registerForm = document.getElementById('registerForm');
    
    // Đóng modal khi nhấn vào nút đóng
    closeBtn.addEventListener('click', () => {
      overlay.remove();
    });
    
    // Đóng modal khi nhấn ra ngoài modal
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        overlay.remove();
      }
    });

    // Xử lý form submit
    registerForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const username = document.getElementById('username').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      
      // Thực hiện gửi dữ liệu qua Fetch API
      const data = { username, email, password };
      
      try {
        const response = await fetch('https://api.example.com/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
        
        const result = await response.json();
        
        if (response.ok) {
          alert('Đăng ký thành công!');
          console.log(result); // Log kết quả trả về từ API
          overlay.remove();  // Đóng modal sau khi đăng ký thành công
        } else {
          alert('Đăng ký thất bại: ' + result.message);
        }
      } catch (error) {
        console.error('Lỗi:', error);
        alert('Đã xảy ra lỗi, vui lòng thử lại.');
      }
    });
  }
});
