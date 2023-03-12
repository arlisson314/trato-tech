import styles from './TituloComImagem.module.scss'

function TituloComImagem({children, titulo, descricao, imagem, className}) {
  return (
    <div className={`${className} ${styles.header}`}>
      <div className={styles['header-texto']}>
        <h1>{titulo}</h1>
        <h2>{descricao}</h2>
        {children}
      </div>
      <div className={styles['header-imagem']}>
        <img src={imagem} alt={titulo} />
      </div>
    </div>
  )
}

export default TituloComImagem;