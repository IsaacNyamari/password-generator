function passwordGenerator() {
    const length = 12;
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    
    document.getElementById('password').value = password;
}
document.getElementById('generatePassword').addEventListener('click', passwordGenerator);
function copyPassword() {
    const passwordField = document.getElementById('password');
    passwordField.select();
    document.execCommand('copy');
    alert('Password copied to clipboard!');
}
document.getElementById('copyPassword').addEventListener('click', copyPassword);

function togglePasswordVisibility() {
    const passwordField = document.getElementById('password');
    const toggleButton = document.getElementById('togglePassword');
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        toggleButton.innerHTML = '<i class="fa fa-eye-slash" aria-hidden="true"></i> hide';
    } else {
        passwordField.type = 'password';
        toggleButton.innerHTML = '<i class="fa fa-eye" aria-hidden="true"></i> show';
    }
}