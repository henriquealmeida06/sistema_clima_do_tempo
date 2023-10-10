import styles from './PrevisaoDoTempo.module.css'
import LogoSol from './../assets/img/img_sol.jpg'
import {useState} from 'react'

function PrevisaoDoTempo(){

    const [inputCidade, setInputCidade] = useState('')
    const [cidade, setCidade] = useState('')
    const [dadosClima, setDadosClima] = useState()
    const [tempMin, setTempMin] = useState(0)
    const [tempMax, setTempMax] = useState(0)
    const chaveApi = '848cc25d52bfcd91afbb3cd16913a623'


    const buscarDados = async ()=>{
        try{
            const resposta = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${inputCidade}&appid=${chaveApi}`
            );
            const dados = await resposta.json();

            setDadosClima(dados);
            
            

            setTempMax((dadosClima.main.temp_max-32)*5/9)
        }catch(erro){
            console.error('Houve um erro na obtenção dos dados da previsão')
        }
        setCidade(inputCidade)
    }


    return(
        <div className={styles.containerPrincipal}>
            <div className={styles.inputButton}>
            <input type="text" placeholder="Digite o nome da cidade" value={inputCidade} onChange={(e)=> setInputCidade(e.target.value)}/> 
            <button onClick={buscarDados}>Buscar</button>
            </div>
            <div className={styles.divDiaAtual}>
                <p>Segunda-Feira</p>

            </div>
            <div className={styles.containerSecundario}>
                <div className={styles.divCidade}>
                    <p>{cidade}</p>

                </div>
                <div className={styles.divSimboloClima}>
                    <img className={styles.img_sol} src={LogoSol}/>
                    

                </div>
                <div className={styles.divMaxMin}>
                    <div>
                    <p className={styles.fontePadrao}>mínima</p>
                    <p className={styles.fonteNumero}>{tempMin}</p>
                    </div>
                    <div>
                    <p className={styles.fontePadrao}>máxima</p>
                    <p className={styles.fonteNumero}>{tempMax}</p>
                    </div>

                </div>
                <div className={styles.divUmidade}>
                    <div className={styles.umidadeTexto}>
                    <p className={styles.fontePadrao}>Umidade</p>
                    <p className={styles.fontePadrao}>abaixo de</p>

                    </div>
                    <p className={styles.fonteNumero}>25%</p>

                </div>
            </div>
            

        </div>
        

    )
}
export default PrevisaoDoTempo;