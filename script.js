document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById('loginForm');
    const logoutButton = document.getElementById('logout');

    // Manejar el inicio de sesión
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            // Verificación simple de inicio de sesión (para demostración)
            if (username === 'user' && password === 'pass') {
                localStorage.setItem('loggedIn', 'true');
                window.location.href = 'home.html';
            } else {
                alert('Invalid username or password');
            }
        });
    }

    // Manejar el cierre de sesión
    if (logoutButton) {
        logoutButton.addEventListener('click', function() {
            localStorage.removeItem('loggedIn');
            window.location.href = 'index.html';
        });

        // Verificar si el usuario está autenticado
        if (!localStorage.getItem('loggedIn')) {
            window.location.href = 'index.html';
        }
    }
});
