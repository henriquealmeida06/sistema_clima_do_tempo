import styles from './PrevisaoDoTempo.module.css'
import {useState, useEffect} from 'react'


function PrevisaoDoTempo(){

    const [inputCidade, setInputCidade] = useState('')
    const [cidade, setCidade] = useState('')
    const [tempMin, setTempMin] = useState(0)
    const [tempMax, setTempMax] = useState(0)
    const [umidade, setumidade] = useState(0)
    const [temperatura, setTemperatura] = useState(0)
    const [imgPrevisao, setImgPrevisao] = useState('03n')
    const [country, setCountry] = useState(null)
    const [dadosTeste, setDadosTeste] = useState()
    const chaveApi = '848cc25d52bfcd91afbb3cd16913a623'
    const icone = `http://openweathermap.org/img/wn/${imgPrevisao}@4x.png`
    const iconePais = `https://flagsapi.com/${country}/flat/64.png`

    const diasDaSemana = ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado']
    const hoje = new Date();
    const diaDaSemana = diasDaSemana[hoje.getDay()];
    
    

  

    
    const buscarDados = async ()=>{
        try{
            const resposta = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${inputCidade}&appid=${chaveApi}`
            );
            const dados = await resposta.json();

            
            setumidade(dados.main.humidity)
            setTempMin(dados.main.temp_min - 273.15.toFixed(1))
            setTempMax(dados.main.temp_max -273.15)
            setTemperatura(dados.main.temp - 273.15.toFixed(1));
            setImgPrevisao(dados.weather[0].icon)
            setCountry(dados.sys.country)
            setDadosTeste(dados)
            console.log(dadosTeste.main)
            
            
            

            
        }catch(erro){
            console.error('Houve um erro na obtenção dos dados da previsão')
        }
        setCidade(inputCidade)
    }
    useEffect(()=>{
    buscarDados()
}, [])
    return(
        <div className={styles.containerPrincipal}>
            <div className={styles.inputButton}>
            <input type="text" placeholder="Digite o nome da cidade" value={inputCidade} onChange={(e)=> setInputCidade(e.target.value)}/> 
            <button onClick={buscarDados}>Buscar</button>
            </div>
            <div className={styles.divDiaAtual}>
                <p>{diaDaSemana}</p>

            </div>
            <div className={styles.containerSecundario}>
                
                <div className={styles.divCidade}>
                    <p>{cidade.toUpperCase()}</p>
                {cidade ? (
                <>
                    <img src={iconePais}/>
                </>
                ):(
                    null
                )}
                </div>
                <div className={styles.divSimboloClima}>
                    <div className={styles.divTemperatura}>
                    <p className={styles.fontePadrao}>Temperatura atual</p>
                    <p className={styles.fonteNumero}>{temperatura.toFixed(1)}°</p>
                    </div>
                    <img className={styles.img_sol} src={icone}/>
                    

                </div>
                <div className={styles.divMaxMin}>
                    <div>
                    <p className={styles.fontePadrao}>mínima</p>
                    <p className={styles.fonteNumero}>{tempMin.toFixed(1)}°</p>
                    </div>
                    <div>
                    <p className={styles.fontePadrao}>máxima</p>
                    <p className={styles.fonteNumero}>{tempMax.toFixed(1)}°</p>
                    </div>

                </div>
                <div className={styles.divUmidade}>
                    <div className={styles.umidadeTexto}>
                    <p className={styles.fontePadrao}>Umidade</p>
                    <p className={styles.fontePadrao}>abaixo de</p>

                    </div>
                    <p className={styles.fonteNumero}>{umidade}%</p>

                </div>
            </div>
            

        </div>
        

    )
}
export default PrevisaoDoTempo;