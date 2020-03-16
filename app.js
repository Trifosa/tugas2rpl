var username = [];
var password = [];

const inputUsername = document.querySelector("#username");
const inputPassword = document.querySelector("#password");
const inputKonfirmasi = document.querySelector("#konfirmasi");
const buttonSubmit = document.querySelector("#submitForm");

buttonSubmit.addEventListener('click', (e) => {
	e.preventDefault();
	const valueInputPassword = inputPassword.value;
	const valueInputUsername = inputUsername.value;
	const valueInputKonfirmasi = inputKonfirmasi.value;
	console.log(valueInputUsername);
	console.log(valueInputPassword);
	console.log(valueInputKonfirmasi);
	
	let flag = 1;
	if(valueInputPassword === valueInputKonfirmasi){
		flag = 0;
		username.push(valueInputUsername);
		password.push(valueInputPassword);
	}
	console.log(username);
	console.log(password);
	
	const warningMsg = document.querySelector(".warning");
	
	if(flag === 1){
		warningMsg.className = "text-danger"
		//console.log("Password tidak sesuai dengan Konfirmasi Password!");
	}else{
		alert("Selamat akun anda berhasil diregistrasi");
	}
})
