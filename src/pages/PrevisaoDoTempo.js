import styles from './PrevisaoDoTempo.module.css'
import {useState, useEffect} from 'react'
import {FaSearch} from 'react-icons/fa'
import TelaDeErro from '../components/TelaDeErro'


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
            setInputCidade('')
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
        <div className="max-w-md font-roboto1" >
            <div className="flex border-none mb-8 gap-1">
            <input className='p-3 rounded-md flex-1 bg-cinzapadrao outline-none text-white border-none text-base opacity-80' type="text" placeholder="Digite o nome da cidade" value={inputCidade} onChange={(e)=> setInputCidade(e.target.value)}/> 
            <button className='border-none bg-cinzapadrao opacity-80 text-white rounded-md pt-0 pb-0 pr-5 pl-5 text-sm' onClick={buscarDados}>{<FaSearch/>}</button>
            </div>
            <div className="flex justify-center items-center w-full mb-0.5 z-10 bg-cinzapadrao text-white text-xl font-semibold rounded-tl-md rounded-tr-md opacity-70 h-8 p-8">
                <p className='text-white z-50'>{diaDaSemana}</p>

            </div>
            <div className="w-px410 bg-cinzapadrao opacity-70 font-roboto1 text-white rounded-br-md rounded-bl-md">
                
                <div className="flex justify-evenly items-center p-1 h-12 mb-1 text-xl border-b-2 border-cinzaClaro">
                    <p>{cidade.toUpperCase()}</p>
                {cidade ? (
                <>
                    <img src={iconePais}/>
                </>
                ):(
                    null
                )}
                </div>
                <div className="flex justify-center items-center mb-1 border-b-2 border-cinzaClaro p-0 h-36">
                    <div className="flex flex-col">
                    <p className="font-roboto1 text-xl">Temperatura atual</p>
                    <p className="font-roboto1 text-5xl font-semibold">{temperatura.toFixed(1)}°</p>
                    </div>
                    <img className="w-44" src={icone}/>
                    

                </div>
                <div className="flex justify-evenly items-center h-28 m-0 mb-1 border-b-2 border-cinzaClaro font-roboto1">
                    <div>
                    <p className="font-roboto1 text-xl m-0">mínima</p>
                    <p className="font-roboto1 font-bold text-5xl m-0 tracking-wide">{tempMin.toFixed(1)}°</p>
                    </div>
                    <div>
                    <p className="font-roboto1 text-xl m-0">máxima</p>
                    <p className="font-roboto1 font-bold text-5xl m-0 tracking-wide">{tempMax.toFixed(1)}°</p>
                    </div>

                </div>
                <div className="flex justify-around items-center mb-1 h-28">
                    <div className='flex flex-col'>
                    <p className="font-roboto1 text-xl m-0">Umidade</p>
                    <p className="font-roboto1 text-xl m-0">abaixo de</p>

                    </div>
                    <p className="font-roboto1 font-bold text-5xl m-0 tracking-wide">{umidade}%</p>

                </div>
            </div>
            

        </div>
        

    )
}
export default PrevisaoDoTempo;