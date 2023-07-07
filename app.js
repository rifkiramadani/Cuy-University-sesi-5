// VARIABLE UNTUK REGISTER
let registerUsernameinput = document.getElementById('registerUsernameinput');
let registerPasswordinput = document.getElementById('registerPasswordinput');
let manager = document.getElementById('manager');
let admin = document.getElementById('admin');
let staff = document.getElementById('staff');
let registerButton = document.getElementById('registerButton');

// VARIABLE UNTUK LOGIN
let usernameInput = document.getElementById('usernameInput');
let passwordInput = document.getElementById('passwordInput');
let loginButton = document.getElementById('loginButton');

// VARIABLE UNTUK PERHALAMAN
let managerText = document.getElementById('managerText');
let managerTexttwo = document.getElementById('managerTexttwo');
let managerPic = document.getElementById('managerPic')

let adminText = document.getElementById('adminText');
let adminTexttwo = document.getElementById('adminTexttwo');
let adminPic = document.getElementById('adminPic');

let staffText = document.getElementById('staffText');
let staffTexttwo = document.getElementById('staffTexttwo');
let staffPic = document.getElementById('staffPic');



function daftar() {
    localStorage.setItem('username', registerUsernameinput.value);
    localStorage.setItem('password', registerPasswordinput.value);
    localStorage.setItem('role', option.value);

    if(localStorage.getItem('username') == '' && localStorage.getItem('password') == '' && localStorage.getItem('role') == ''){
        alert('Isi Username Terlebih Dahulu');
        alert('Isi Password Terlebih Dahulu');
        alert('Silahkan Pilih Role Terlebih Dahulu');
        localStorage.removeItem('username');
        localStorage.removeItem('password');
        localStorage.removeItem('role');
        window.location.href = 'register.html'
    }
    else if(localStorage.getItem('username') == registerUsernameinput.value && localStorage.getItem('password') == registerPasswordinput.value && localStorage.getItem('role') == option.value) {
        alert('Username anda adalah: ' + '\n' +  localStorage.getItem('username') + '\n' +
        'Password anda adalah: ' + '\n' + localStorage.getItem('password') + '\n' +
        'Role anda adalah: ' + '\n' + localStorage.getItem('role'))
        window.location.href = 'index.html';
    }
}


function login() {
    if(usernameInput.value == '' && passwordInput.value == ''){
        alert('Username tidak boleh kosong')
        alert('Password tidak boleh kosong')
        window.location.href = 'index.html'
    } 
    else if(localStorage.getItem('username') && localStorage.getItem('password') && localStorage.getItem('role') == 'Manager') {
        alert('Anda Login Sebagai Manager')
        window.location.href = 'manager.html'
        
    }
    else if(localStorage.getItem('username') && localStorage.getItem('password') && localStorage.getItem('role') == 'Admin') {
        alert('Anda Login Sebagai Admin')
        window.location.href = 'admin.html'
    }
    else if(localStorage.getItem('username') && localStorage.getItem('password') && localStorage.getItem('role') == 'Staff') {
        alert('Anda Login Sebagai Staff')
        window.location.href = 'staff.html'
    }
}

if(localStorage.getItem('role') == 'Manager') {
    managerPic.src = 'assests/images/manager.jpg'
    managerText.textContent = 'Halo ' + localStorage.getItem('username');
    managerTexttwo.textContent = '\n' + 'Role anda adalah: ' + localStorage.getItem('role');
}
if(localStorage.getItem('role') == 'Admin') {
    adminPic.src = 'assests/images/admin.jpg'
    adminText.textContent = 'Halo ' + localStorage.getItem('username');
    adminTexttwo.textContent = 'Role anda adalah: ' + localStorage.getItem('role');
}
if(localStorage.getItem('role') == 'Staff') {
    staffPic.src = 'assests/images/staff.jpg'
    staffText.textContent = 'Halo ' + localStorage.getItem('username');
    staffTexttwo.textContent = 'Role anda adalah: ' + localStorage.getItem('role');
}

function logout() {
    alert('Anda Telah Logout')
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    localStorage.removeItem('role');
    window.location.href = 'index.html'
    
}