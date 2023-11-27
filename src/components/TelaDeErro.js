import styles from './TelaDeErro.module.css'

function TelaDeErro(){
    return(
        <div className={styles.containerErro}>
            <div className={styles.mensagemDeErro}>
            <p>Você precisa digitar corretamente o nome da cidade, por favor, tente novamente!</p>
            <button>Voltar</button>
            </div>
        </div>
    )
}
export default TelaDeErro;