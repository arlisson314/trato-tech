import styles from './Item.module.scss';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { FaCartPlus } from 'react-icons/fa';
import { mudarFavoritar } from 'reducers/itens';
import { useDispatch, useSelector } from 'react-redux';
import { mudarCarrinho } from 'reducers/carrinho';


const iconeProps = {
  size: 24,
  color: '#041833',
};

export default function Item({ titulo, foto, preco, descricao, favorito, id }) {
  const estaNoCarrinho = useSelector((state) => state
    .carrinho.some(product => product.id === id));

  console.log(useSelector((state) => state.carrinho))

  const dispatch = useDispatch();

  const favoriteHandler = () => {
    dispatch(mudarFavoritar(id))
  };

  const carrinhoHandler = () => {
    dispatch(mudarCarrinho(id))
  }

  return (
    <div className={styles.item}>
      <div className={styles['item-imagem']}>
        <img src={foto} alt={titulo} />
      </div>

      <div className={styles['item-descricao']}>
        <div className={styles['item-titulo']}>
          <h2>{titulo}</h2>
          <p>{descricao}</p>
        </div>
  
        <div className={styles['item-info']}>
          <div className={styles['item-preco']}>
            R$ {preco.toFixed(2)}
          </div>

          <div className={styles['item-acoes']}>
            {favorito
              ? <AiFillHeart
                  {...iconeProps}
                  color='#ff0000'
                  className={styles['item-acao']}
                  onClick={favoriteHandler}/>
              : <AiOutlineHeart
                  {...iconeProps}
                  className={styles['item-acao']}
                  onClick={favoriteHandler}/>
            }
            <FaCartPlus
              {...iconeProps}
              color={estaNoCarrinho ? '#1875E8' : iconeProps.color}
              className={styles['item-acao']}
              onClick={carrinhoHandler}
            />
          </div>
        </div>

      </div>
    </div>
  )
}