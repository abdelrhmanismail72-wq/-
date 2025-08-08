
function toggleForm(type) {
    document.getElementById('login-form').style.display = type === 'login' ? 'block' : 'none';
    document.getElementById('register-form').style.display = type === 'register' ? 'block' : 'none';
}

function register() {
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;
    if (!username || !password) return alert('يجب ملء جميع الحقول');
    if (localStorage.getItem('user_' + username)) {
        alert('هذا المستخدم مسجل بالفعل');
    } else {
        localStorage.setItem('user_' + username, password);
        alert('تم التسجيل بنجاح');
        toggleForm('login');
    }
}

function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    const storedPassword = localStorage.getItem('user_' + username);
    if (storedPassword === password) {
        localStorage.setItem('current_user', username);
        window.location.href = 'pages/index.html'; // Redirect to lessons page
    } else {
        alert('بيانات الدخول غير صحيحة');
    }
}
