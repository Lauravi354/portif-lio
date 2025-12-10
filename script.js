document.addEventListener("DOMContentLoaded", () => {

    const foto = document.querySelector('.foto');

    if (foto) {
        foto.addEventListener('mouseover', () => {
            foto.style.transform = 'scale(1.18)';
        });

        foto.addEventListener('mouseout', () => {
            foto.style.transform = 'scale(1)';
        });
    }

    const projetos = document.querySelectorAll('.lista-projetos li');

    projetos.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.transform = "scale(1.05)";
            item.style.boxShadow = "0 6px 20px rgba(0,0,0,0.2)";
        });

        item.addEventListener('mouseout', () => {
            item.style.transform = "scale(1)";
            item.style.boxShadow = "0 4px 15px rgba(0,0,0,0.1)";
        });
    });

    const botao = document.querySelector('.botao-projetos');

    if (botao) {
        botao.addEventListener('mouseover', () => {
            botao.style.transform = 'scale(1.05)';
        });

        botao.addEventListener('mouseout', () => {
            botao.style.transform = 'scale(1)';
        });
    }

    const interesses = document.querySelector('.interesses');

    if (interesses) {
        interesses.addEventListener('mouseover', () => {
            interesses.style.transform = 'scale(1.05)'; 
            interesses.style.boxShadow = '0 6px 20px rgba(0,0,0,0.2)';
        });

        interesses.addEventListener('mouseout', () => {
            interesses.style.transform = 'scale(1)'; 
            interesses.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
        });
    }

});