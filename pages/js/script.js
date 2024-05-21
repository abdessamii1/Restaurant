document.addEventListener('DOMContentLoaded', () => {

    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            localStorage.setItem('user', JSON.stringify({ username, password }));
            alert('Registration successful! Please log in.');
            window.location.href = 'loginpage.html';
        });
    }

    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const storedUser = JSON.parse(localStorage.getItem('user'));

            if (storedUser && storedUser.username === username && storedUser.password === password) {
                alert('Login successful!');
                window.location.href = 'index.html';
            } else {
                alert('Invalid username or password');
            }
        });
    }

    const userWelcome = document.getElementById('userWelcome');
    if (userWelcome) {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (storedUser) {
            userWelcome.textContent = storedUser.username;
        }
    }
});

function showDetails(card) {
    const overlay = document.getElementById('overlay');
    const overlayInfo = document.getElementById('overlay-info');
    const imageSrc = card.querySelector('img').src;
    const infoContent = card.querySelector('.info').innerHTML;
    
    overlay.style.display = 'flex';
    overlayInfo.innerHTML = `
        <img src="${imageSrc}" alt="Restaurant Image" class="overlay-img">
        ${infoContent}
    `;
}

function hideDetails() {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
}
