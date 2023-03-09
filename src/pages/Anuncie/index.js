import styles from './Anuncie.module.scss'
import Header from 'components/Header';
import { useSelector } from 'react-redux';

function Anuncie() {
  const categorias = useSelector(state => state.categorias);

  return (
    <div className={styles.container}>
      <Header
        titilo='Anuncie aqui!'
        descricao='Anuncie seu produto no Melhor Site de Compras do Brasil.'
      />
      <form className={styles.formulario}>
        <input type='text' placeholder='Nome do prodtuto' alt='Nome do prodtuto'/>
        <input type='text' placeholder='Descrição do prodtuto' alt='Descrição do prodtuto'/>
        <input type='text' placeholder='URL da imagem do prodtuto' alt='URL da imagem do prodtuto'/>
        <select>
          <option value=''> Selicione a categoria</option>
          {categorias?.map(categoria => (
            <option key={categoria.id}>
              {categoria.nome}
            </option>
          ))}
        </select>
        <input type='number' placeholder='Preço do produto' min={0}/>
        <button type='submit'> Cadastrar prodtuto </button>
      </form>
    </div>
  );
}

export default Anuncie;