document.addEventListener('DOMContentLoaded',function(){
    let imagens = document.querySelectorAll('.imagem');
    let index = 0;

    function mostrarproximaimagem(){
        imagens[index].classList.remove('ativa');
        index = (index + 1) % imagens.length;
        imagens[index].classList.add('ativa');
    }

    setInterval(mostrarproximaimagem,3000);
})