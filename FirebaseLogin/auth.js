// Configuração do Firebase (substitua com suas credenciais)
 const firebaseConfig = {
    apiKey: "AIzaSyASoec9JeGFGqQD66FmmTggQaMVNSR0R3k",
    authDomain: "tela-login-d91da.firebaseapp.com",
    projectId: "tela-login-d91da",
    storageBucket: "tela-login-d91da.firebasestorage.app",
    messagingSenderId: "122460402473",
    appId: "1:122460402473:web:7a17ac8510872461223d38"
  };

// Inicializa o Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Login com e-mail/senha
document.getElementById("loginForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("errorMessage");
    errorMessage.style.display = "none";
    
    
    auth.signInWithEmailAndPassword(email, password)
        .then(() => {
            // Redireciona para a página de dashboard após login
            window.location.href = "dashboard.html";
        })
        .catch((error) => {
            // Mensagem única para erros de email/senha
            errorMessage.textContent = "E-mail ou senha incorretos. Por favor, tente novamente.";
            errorMessage.style.display = "block";
        });
});

document.getElementById("loginGoogle").addEventListener("submit",(e) =>
{
 e.preventDefault();
 let GoogleProvider = new auth.GoogleAuthProvider();
 auth.signInWithPopup(GoogleProvider);
})

document.getElementById("loginGithub").addEventListener("submit",(e) =>
{
 e.preventDefault();
 let GithubProvider = new auth.GithubAuthProvider();
 auth.signInWithPopup(GithubProvider);
})

// Verifica se o usuário já está logado ao carregar a página
auth.onAuthStateChanged((user) => {
    if (user) {
        // Se já estiver autenticado, redireciona para o dashboard
        window.location.href = "dashboard.html";
    }
});