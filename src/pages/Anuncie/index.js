import styles from './Anuncie.module.scss'
import Header from 'components/Header';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { adicionarItem } from 'reducers/itens';
import Button from 'components/Button';

function Anuncie() {
  const categorias = useSelector(state => state.categorias);
  const dispatch = useDispatch()
  const [formdata, setFormData] = useState({
      titilo: '',
      descricao: '',
      foto: '',
      categoria: '',
      preco: 0
    });

  const formHandler = (event) => {
    event.preventDefault()
    dispatch(adicionarItem(formdata))
    setFormData({
      titilo: '',
      descricao: '',
      foto: '',
      categoria: '',
      preco: 0
    })
  }

  return (
    <div className={styles.container}>
      <Header
        titilo='Anuncie aqui!'
        descricao='Anuncie seu produto no Melhor Site de Compras do Brasil.'
      />
      <form
        className={styles.formulario}
        onSubmit={(event) => formHandler(event)}
      >
        <input
          type='text'
          value={formdata.titilo}
          alt='Nome do prodtuto'
          placeholder='Nome do prodtuto'
          onChange={(event) => setFormData({...formdata, titilo: event.target.value})}
        />
        <input
          type='text'
          value={formdata.descricao}
          alt='Descrição do prodtuto'
          placeholder='Descrição do prodtuto'
          onChange={(event) => setFormData({...formdata, descricao: event.target.value})}
        />
        <input
          type='text'
          value={formdata.foto}
          alt='URL da imagem do prodtuto'
          placeholder='URL da imagem do prodtuto'
          onChange={(event) => setFormData({...formdata, foto: event.target.value})}
        />
        <select
          value={formdata.categoria}
          onChange={(event) => setFormData({...formdata, categoria: event.target.value})}
        >
          <option value=''> Selicione a categoria</option>
          {categorias?.map(categoria => (
            <option key={categoria.id}>
              {categoria.nome}
            </option>
          ))}
        </select>
        <input
          min={0}
          type='number'
          value={formdata.preco}
          placeholder='Preço do produto'
          onChange={(event) => setFormData({...formdata, preco: event.target.value})}
        />
        <Button
          type='submit'
        >
          Cadastrar prodtuto
        </Button>
      </form>
    </div>
  );
}

export default Anuncie;