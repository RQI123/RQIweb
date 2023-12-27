
function registerUser() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const gmail = document.getElementById('gmail').value;

    // Kirim data ke server (disimulasikan dengan menampilkan pesan)
    const registrationMessage = document.getElementById('registrationMessage');
    registrationMessage.textContent = `Registrasi berhasil! Username: ${username}, Gmail: ${gmail}`;
}
