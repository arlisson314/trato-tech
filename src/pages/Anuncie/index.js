import { useForm } from 'react-hook-form';
import { adicionarItem } from 'reducers/itens';
import { useSelector,  useDispatch } from 'react-redux';

import Header from 'components/Header';
import Button from 'components/Button';
import styles from './Anuncie.module.scss'


function Anuncie() {
  const dispatch = useDispatch();
  const { register, reset, handleSubmit } = useForm();
  const categorias = useSelector(state => state.categorias);

  const formHandler = (arg) => {
    dispatch(adicionarItem(arg))
    reset()
  }

  return (
    <div className={styles.container}>
      <Header
        titilo='Anuncie aqui!'
        descricao='Anuncie seu produto no Melhor Site de Compras do Brasil.'
      />
      <form
        className={styles.formulario}
        onSubmit={handleSubmit(formHandler)}
      >
        <input
          type='text'
          {...register('nome')}
          alt='Nome do prodtuto'
          placeholder='Nome do prodtuto'
        />

        <input
          type='text'
          {...register('descricao')}
          alt='Descrição do prodtuto'
          placeholder='Descrição do prodtuto'
        />

        <input
          type='text'
          {...register('imagem')}
          alt='URL da imagem do prodtuto'
          placeholder='URL da imagem do prodtuto'
        />

        <select {...register('categoria')}>
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
          {...register('preco')}
          placeholder='Preço do produto'
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