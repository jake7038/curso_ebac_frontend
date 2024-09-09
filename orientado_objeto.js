//classe principal
function afiliado(nome,idade) {

    this.nome = nome;
    let _estado = 'Cliente';
    this.idade = idade;


    //metodos get e set

    this.getEstado = function(){
        return _estado
    }
    this.setEstado = function(val){
        _estado = val
    }

}
//classe derivada
function gerente(nome,idade){
    afiliado.call(this,nome,idade);
    this.setEstado('Gerente');
    this.salario = 3500
}

//classe derivada
function estagiario(nome,idade){
    afiliado.call(this,nome,idade);
    this.setEstado('Estagiário');
    this.salario = 1500;
}

const afiliado1 = new afiliado('maria','21');
const afiliado2 = new gerente('marcus', '28')
const afiliado3 = new estagiario('joao','22')


console.log('o primeiro afiliado é '+ afiliado1.getEstado());
console.log('o segundo afiliado é '+ afiliado2.getEstado());
console.log('o terceiro afiliado é '+ afiliado3.getEstado());
