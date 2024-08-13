const form = document.getElementById('form-atividade');
const imgAprovado = '<img src="./img/check.png" alt="aprovado" />';
const imgreprovado = '<img src="./img/delete.png" alt="aprovado" />';
const atividades = [];
const notas= [];
const spanAprovado= '<span class="aprovado">Aprovado</span>';
const spanReprovado= '<span class="reprovado">Reprovado</span>';
const notaMinima= parseFloat(prompt("digite a Nota Mínima:")) || 7;

let linhas = '';
form.addEventListener('submit', function(e){
    e.preventDefault();
   adicionarLinha();
    atualizacao();
  
    atualizaMediaFinal();
})

function adicionarLinha(){
    const inputNomeAtividade = document.getElementById("nome-atividade");
    const inputNotaAtividade = document.getElementById("nota-atividade");

    if (atividades.includes(inputNomeAtividade.value)){
        alert('A atividade: '+ inputNomeAtividade.value + " ja foi inserida")
    } else{
        atividades.push(inputNomeAtividade.value);
        notas.push(parseFloat(inputNotaAtividade.value))
    
    
        let linha = '<tr>';
        linha += `<td> ${inputNomeAtividade.value}</td>`
        linha += `<td> ${inputNotaAtividade.value}</td>`
        linha += `<td> ${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgreprovado }</td>`
        linha += `</tr>`
    
        linhas += linha;
    }




    inputNomeAtividade.value='';
    inputNotaAtividade.value="";
}

function atualizacao(){
    const corpoTabela = document.querySelector("tbody")
    corpoTabela.innerHTML = linhas;
}



function atualizaMediaFinal(){
    const mediaFinal = calculoMedia();
    document.getElementById("media-final-valor").innerHTML = mediaFinal.toFixed(2);
    document.getElementById("media-final-resultado").innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado ;

   
    
}

function calculoMedia(){
    let somaNotas= 0;
    for(let i = 0; i< notas.length; i++){
        somaNotas += notas[i];
    }

    const media = somaNotas / notas.length;
    return media;
}