type aluno = {
    nome: string,
    idade: number,
    curso?: string
}

let pessoa1: aluno ={
    nome: `joao`,
    idade: 22
}
function(item: aluno){
    console.log(item.nome)
}
