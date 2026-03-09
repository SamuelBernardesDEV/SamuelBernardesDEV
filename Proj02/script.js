const contador = document.querySelector(".contador");
const clique = document.querySelector(".clique");

let pontos = 0;

clique.addEventListener('click', function(){
    pontos = pontos + 1;
    contador.textContent = pontos;
});
