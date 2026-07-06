
var btn = [document.querySelector("#pessoa0"), document.querySelector("#pessoa1"), document.querySelector("#pessoa2"), document.querySelector("#pessoa3"), document.querySelector("#pessoa4"), document.querySelector("#pessoa5")]
var back = [document.querySelector("#return0"), document.querySelector("#return1"), document.querySelector("#return2"), document.querySelector("#return3"), document.querySelector("#return4"), document.querySelector("#return5")]

for(let i = 0; i< 6; i++){
    btn[i].addEventListener("click", function(){
        var number = "#resumo"+ i.toString();
        var lista = document.querySelector('#elenco');
        var pagina = document.querySelector(number);
        

        lista.classList.toggle('elenco__escolha--active')
    
        pagina.classList.toggle('elenco__astro__item--active');
    
        back[i].addEventListener("click", function(){
            lista.classList.add('elenco__escolha--active');
            pagina.classList.remove('elenco__astro__item--active');
        })
    })
}






