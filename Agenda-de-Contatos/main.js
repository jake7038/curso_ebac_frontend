const form = document.getElementById('form-atividade');
const imgAprovado = '<img src="./img/check.png" alt="aprovado" />';
const imgreprovado = '<img src="./img/delete.png" alt="aprovado" />';
const contatos = [];
const telefone= [];
const email=[];

let linhas = '';
form.addEventListener('submit', function(e){
    e.preventDefault();
   adicionarLinha();
    atualizacao();
  
})

function adicionarLinha(){
    const inputNomeContato = document.getElementById("nome-contato");
    const inputTelefoneAtividade = document.getElementById("telefone-contato");
    const inputEmailContato = document.getElementById("email-contato");
    if (contatos.includes(inputNomeContato.value)){
        alert('O nome: '+ inputTelefoneAtividade.value + " ja foi inserido")
    } else{
        contatos.push(inputNomeContato.value);
        telefone.push(inputTelefoneAtividade.value)
        email.push(inputEmailContato.value)
    
        let linha = '<tr>';
        linha += `<td> ${inputNomeContato.value}</td>`
        linha += `<td> ${inputTelefoneAtividade.value}</td>`
        linha += `<td> ${inputEmailContato.value}</td>`
        linha += `</tr>`
    
        linhas += linha;
    }



    //limpar campos
    inputNomeContato.value='';
    inputTelefoneAtividade.value="";
    inputEmailContato.value='';
}

function atualizacao(){
    const corpoTabela = document.querySelector("tbody")
    corpoTabela.innerHTML = linhas;
}





