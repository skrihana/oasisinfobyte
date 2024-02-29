function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    var storedUsername = localStorage.getItem(username);

    if (storedUsername !== null) {
        var storedPassword = localStorage.getItem(username);
        if (password === storedPassword) {
            showMessage("Login successful!");
        } else {
            showMessage("Login failed. Invalid password.");
        }
    } else {
        showMessage("Login failed. Invalid username.");
    }
}

function register() {
    var newUsername = document.getElementById('newUsername').value;
    var newPassword = document.getElementById('newPassword').value;

    var storedUsername = localStorage.getItem(newUsername);

    if (storedUsername === null) {
        localStorage.setItem(newUsername, newPassword);
        showMessage("Registration successful!");
    } else {
        showMessage("Registration failed. Username already exists.");
    }
}

function showMessage(message) {
    var messageDiv = document.getElementById('message');
    messageDiv.innerHTML = message;
    messageDiv.style.display = 'block';

    setTimeout(function() {
        messageDiv.innerHTML = '';
        messageDiv.style.display = 'none';
    }, 3000);
}
