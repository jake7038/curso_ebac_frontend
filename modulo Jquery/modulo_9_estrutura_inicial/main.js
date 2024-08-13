$(document).ready(function(){
  

    $('header button').click(function(){
    $('form').slideDown();

    })

    $("#cancelar").click(function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(e){
        e.preventDefault();
        const enderecoDaNovaImagem = $("#endereco-imagem-nova").val();
        console.log(enderecoDaNovaImagem);
        const novoItem = $('<li style="display: none" ></li>');
        $(`<img src="${enderecoDaNovaImagem}"/>`).appendTo(novoItem);
        $(`<div class="overlay-imagem-link">
            <a href="${enderecoDaNovaImagem}" title="Ver tamanho real" target="_blank"> Ver Tamanho Real da imagem </a>
            </div>`).appendTo(novoItem);
            $(novoItem).appendTo('ul');
            $(novoItem).fadeIn();
            $("#endereco-imagem-nova").val('')
    })




})