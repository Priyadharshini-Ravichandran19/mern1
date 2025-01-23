function handleLogin() {
    const username = document.getElementById('user').value;
    const password = document.getElementById('pass').value;
    const error = document.getElementById('error');

    if (!username || !password) {
        error.textContent = 'Please fill in all required fields.';
        error.style.color = 'red';
        return;
    }

    const loginData = [
        {username: "PRIYADHARSHINI", password: "pd19"},
        {username: "sriranjani", password: "SR01"},
        {username: "Happypd", password: "1904PD"}
    ];

    const isValid = loginData.some((user) => user.username === username && user.password === password);

    if (isValid) {
        error.textContent = 'Login Successful';
        error.style.color = 'green';

        setTimeout(() => {
            window.location.href = 'flexbox.html';
        }, 2000); 
    } else {
        error.textContent = 'Invalid username or password.';
        error.style.color = 'red';
    }
}
