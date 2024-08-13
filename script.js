document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el comportamiento por defecto del formulario
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simulación de autenticación simple
    if (email === "user@example.com" && password === "password123") {
        // Redirige a la página de inicio después del login
        window.location.href = "home.html";
    } else {
        document.getElementById('errorMessage').textContent = "Invalid email or password!";
    }
});
