const form = document.getElementById('form-deposito');
function campoVazio(x, y){
    if(y > x)
    return true;
    else
    return false;
}

form.addEventListener("submit", function(e){
    let formEValido = false;
    e.preventDefault();
    
    var primeiroNumero = document.getElementById("primeiro-numero");
    var segundoNumero = document.getElementById("segundo-numero");
    
    var resultado = 'Não sei';

    
    
    
    formEValido = campoVazio(primeiroNumero.value, segundoNumero.value);

   
    if(formEValido){
       switch (primeiroNumero.value > segundoNumero.value){
        case true:
        resultado = "Maior que";
        break;
        case false:
            switch (segundoNumero.value == primeiroNumero.value){
                case false:
                    resultado = "Menor que";
                    break;
                case true:
                    resultado = "Igual";
                    break;
            }
            
       }
        const mensagemSucesso = `o Número <b>${primeiroNumero.value}</b> é <b> ${resultado}</b> o numero <b>${segundoNumero.value}</b>`;
        document.querySelector('.success-message').innerHTML = mensagemSucesso;
            const containerMesagemSucesso = document.querySelector(".success-message");
            containerMesagemSucesso.innerHTML = mensagemSucesso;
            containerMesagemSucesso.style.display = 'block';
            primeiroNumero.value='';
            segundoNumero.value='';
    } 
    
    else{
        alert("o Segundo numero tem que ser maior que o primeiro");
        
        primeiroNumero.value='';
        segundoNumero.value='';
    }
})
console.log(form);