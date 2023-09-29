// Função para carregar a imagem do usuário do localStorage
function loadUserImageFromLocalStorage() {
    const storedPic = localStorage.getItem('pic');
    if (storedPic) {
        const imageUser = document.getElementById('imageUser');
        imageUser.innerHTML = "<img id='imagepic' src='" + storedPic + "'>";
    }
}

// Chamando a função para carregar a imagem do usuário ao carregar a página
window.addEventListener('load', loadUserImageFromLocalStorage);
