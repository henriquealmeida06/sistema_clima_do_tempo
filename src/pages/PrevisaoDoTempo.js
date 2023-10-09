import styles from './PrevisaoDoTempo.module.css'
import LogoSol from './../assets/img/img_sol.jpg'

function PrevisaoDoTempo(){
    return(
        <div className={styles.containerPrincipal}>
            <div className={styles.inputButton}>
            <input type="text" placeholder="Digite o nome da cidade"/> 
            <button>Buscar</button>
            </div>
            <div className={styles.divDiaAtual}>
                <p>Segunda-Feira</p>

            </div>
            <div className={styles.containerSecundario}>
                <div className={styles.divCidade}>
                    <p>Arapiraca</p>

                </div>
                <div className={styles.divSimboloClima}>
                    <img className={styles.img_sol} src={LogoSol}/>
                    

                </div>
                <div className={styles.divMaxMin}>
                    <div>
                    <p className={styles.fontePadrao}>mínima</p>
                    <p className={styles.fonteNumero}>24°</p>
                    </div>
                    <div>
                    <p className={styles.fontePadrao}>máxima</p>
                    <p className={styles.fonteNumero}>28°</p>
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