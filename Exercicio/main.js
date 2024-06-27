$(document).ready(function(){
  

    $('header button').click(function(){
    $('form').slideDown();

    })

    $("#cancelar").click(function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(e){
        e.preventDefault();
        const tarefaNova = $("#endereco-tarefa-nova").val();
        
        var lista = $("div").css({border: "solid black"});
        
       

        const novoItem = $('<li> </li>');
        $(`<p class= "click-lista"  >${tarefaNova}</p>`).appendTo(novoItem);
        
            $(novoItem).appendTo('ol');
            $(lista, novoItem).fadeIn();
            $("#endereco-tarefa-nova").val('')
            
            $(".click-lista").click(function(){

                $(this).css("text-decoration" , "line-through");
            })


    })

   






})