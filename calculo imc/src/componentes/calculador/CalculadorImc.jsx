import {useState} from "react"
import styles from "../../assets/Calculadora.module.css";

const Imc = () => { 
    let [altura, setAltura] = useState(0);
    let [peso, setPeso] = useState(0);
    let [res, setRes] = useState(0)
    let [texto, setTexto] = useState('')
    
    const mudaAltura = (event) => {
        setAltura(event.target.value);
    };

    const mudaPeso = (event) => {
        setPeso(event.target.value);
    };
    const mudaRes = () => {
        setRes(peso/(altura*altura));
        imcTipo()
        
    };


    const imcTipo = () => {
        
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
        <div className="container ">
            <input type="number" value={peso} onChange={mudaPeso} />
            <input type="number" value={altura} onChange={mudaAltura} />
            <button  onClick={mudaRes}>Calcular IMC</button>
            <div>
            {res}
            </div>
            <div>
                {texto}
            </div>
        </div>
    )
    
    
    

}

export default Imc