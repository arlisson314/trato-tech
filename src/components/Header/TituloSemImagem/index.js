import styles from './TituloSemImagem.module.scss'

function TituloSemImagem({children, titulo, descricao}) {
  console.log(children);
  return (
    <div className={styles.container}>
      <h1 className={styles.titulo}>{titulo}</h1>
      <h2 className={styles.descricao}>{descricao}</h2>
      {children}
    </div>
  )
}

export default TituloSemImagem;