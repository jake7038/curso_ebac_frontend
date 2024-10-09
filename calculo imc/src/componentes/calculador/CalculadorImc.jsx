import {useState, useEffect} from "react"
import styles from "../../assets/Calculadora.module.css";

const Imc = () => { 
    let [altura, setAltura] = useState('');
    let [peso, setPeso] = useState('');
    let [res, setRes] = useState(0)
    let [texto, setTexto] = useState('')
    
    const mudaAltura = (event) => {
        let valor = event.target.value.replace(',', '.'); //substitui a virgula por ponto
        if (valor.length <= 4 && /^[0-9.]*$/.test(valor)) { // Se o valor tiver 3 caracteres e não tiver ponto, formata para "X.XX"
            if (valor.length === 3 && !valor.includes('.')) {
                valor = valor[0] + '.' + valor.substring(1);  
            }
            setAltura(valor);
        }
    };

    const mudaPeso = (event) => {
        setPeso(event.target.value);
    };

    const mudaRes = () => {
        setRes(peso/altura*altura);
        imcTipo();
    };




    const imcTipo = () => { //função que retorna a classificação na tabela IMC

        if(res > 40){
            setTexto("Obesidade Grau III");
        }
        if(res > 35 && res < 39.9){
            setTexto("Obesidade Grau II");
        }
        if(res > 30 && res < 34.9){
            setTexto("Obesidade Grau I");
        }
        if(res > 25 && res < 29.9){
            setTexto("Sobrepeso");
        }
        if(res > 18.6 && res < 24.9){
            setTexto("Normal");
        }
        if(res < 18.5){
            setTexto("Abaixo do Normal");
        }
        
    }



    return(
        <div className={styles.container}>  {/* Container principal com estilos */} 
        <div className={styles.inputGroup}>  {/* Grupo de inputs para peso e altura */}
            <div className={styles.inputWrapper}>  {/* Wrapper para o campo de peso */}
                <label htmlFor="peso">Peso (kg)</label>  {/* Rótulo do campo de peso */}
                <input 
                    id="peso" 
                    type="number"  // Campo para número
                    value={peso}  // Valor atual do peso
                    onChange={mudaPeso}  // Chama a função ao mudar o valor
                    min="0"  // O peso não pode ser negativo
                    placeholder="80.0"  // Texto de ajuda no campo
                    step="0.01"  // altera em 0.01 ao clicar no botão do input
                />
            </div>

            <div className={styles.inputWrapper}>  {/* Wrapper para o campo de altura */}
                <label htmlFor="altura">Altura (em metros)</label>  {/* Rótulo do campo de altura */}
                <input 
                    id="altura" 
                    type="number"  // Campo para número
                    value={altura}  // Valor atual da altura
                    onChange={mudaAltura}  // Chama a função ao mudar o valor
                    placeholder="1.80"  // Texto de ajuda no campo
                    step="0.01"  // altera em 0.01 ao clicar no botão do input
                />
            </div>
        </div>
        
        <button onClick={mudaRes}>Calcular IMC</button>  {/* Botão para calcular o IMC */}

        {/* Exibe o resultado e a classificação apenas após o cálculo */}
        {res > 0 && (  // Verifica se o resultado é maior que zero
            <div className={styles.resultado}>  {/* Container para exibir o resultado */}
                <p>Resultado: {res.toFixed(2)}</p>  {/* Exibe o resultado formatado com duas casas decimais */}
                <p>Classificação: {texto}</p>  {/* Exibe a classificação do IMC */}
            </div>
        )}
    </div>
    )
    
    
    

}

export default Imc;