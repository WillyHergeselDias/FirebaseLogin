// Configuração do Firebase (substitua com suas credenciais)
const firebaseConfig = {
    apiKey: "SUA_API_KEY",
    authDomain: "SEU_PROJETO.firebaseapp.com",
    projectId: "SEU_PROJETO_ID",
    storageBucket: "SEU_BUCKET.appspot.com",
    messagingSenderId: "SEU_SENDER_ID",
    appId: "SEU_APP_ID"
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
