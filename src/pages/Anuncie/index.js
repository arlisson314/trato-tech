import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { adicionarItem } from 'reducers/itens';
import { useSelector,  useDispatch } from 'react-redux';

import Header from 'components/Header';
import Button from 'components/Button';
import styles from './Anuncie.module.scss'


function Anuncie() {
  const dispatch = useDispatch();
  const { nomeCategoria = '' } = useParams();
  const categorias = useSelector(state => state.categorias);
  const { register, reset, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      categoria: nomeCategoria
    }
  });
  

  const formHandler = (data) => {
    dispatch(adicionarItem(data));
    reset();
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
          alt='Nome do prodtuto'
          placeholder='Nome do prodtuto'
          className={errors.titulo ? styles['input-erro'] : ''}
          {...register('titulo', {required: 'O campo titulo é obrigatório'})}
        />
        {errors.titulo && <span className={styles['mensagem-erro']}>{errors.titulo.message}</span>}

        <input
          type='text'
          alt='Descrição do prodtuto'
          placeholder='Descrição do prodtuto'
          {...register('descricao', {required: 'O campo descricao é obrigatório'})}
          className={errors.descricao ? styles['input-erro'] : ''}
        />
        {errors.descricao && <span className={styles['mensagem-erro']}>{errors.descricao.message}</span>}

        <input
          type='text'
          alt='URL da imagem do prodtuto'
          placeholder='URL da imagem do prodtuto'
          {...register('foto', {required: 'O campo imagem é obrigatório'})}
          className={errors.foto ? styles['input-erro'] : ''}
        />
        {errors.foto && <span className={styles['mensagem-erro']}>{errors.foto.message}</span>}

        <select
          {...register('categoria', {required: 'O campo categoria é obrigatório'})}
          disabled={Boolean(nomeCategoria)}
          className={errors.categoria ? styles['input-erro'] : ''}
        >
          <option value=''>Selicione a categoria</option>
          {categorias?.map(categoria => (
            <option key={categoria.id} value={categoria.id}>
              {categoria.nome}
            </option>
          ))}
        </select>
        {errors.categoria && <span className={styles['mensagem-erro']}>{errors.categoria.message}</span>}

        <input
          min={0}
          type='number'
          placeholder='Preço do produto'
          {...register('preco', {required: 'O campo preço é obrigatório', valueAsNumber: true})}
          className={errors.preco ? styles['input-erro'] : ''}
        />
        {errors.preco && <span className={styles['mensagem-erro']}>{errors.preco.message}</span>}

        <Button
          type='submit'
        >
          Cadastrar prodtuto
        </Button>
      </form>
    </div>
  );
};

export default Anuncie;
