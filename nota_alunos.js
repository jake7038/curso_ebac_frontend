
function sistemaNotas(aluno,nota){
    this.aluno = aluno
    this.nota = nota
}

aluno1 = new sistemaNotas('roberta', 80)
aluno2 = new sistemaNotas('andre', 50)
aluno3 = new sistemaNotas('marcelo', 60)

//formatado para o formato array
const listaAlunos = [aluno1, aluno2 , aluno3]


alunosPassaram = listaAlunos.filter(function(item){
    if (item.nota >= 60)
        return item.aluno
})


console.log(alunosPassaram)
