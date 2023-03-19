import { useState } from 'react';
import { FaCartPlus } from 'react-icons/fa';
import { editarItem, mudarFavoritar } from 'reducers/itens';
import { useDispatch, useSelector } from 'react-redux';
import { mudarCarrinho, mudarQuantidade} from 'reducers/carrinho';
import {
  AiOutlineHeart,
  AiFillHeart,
  AiFillMinusCircle,
  AiFillPlusCircle,
  AiOutlineCheck,
  AiFillEdit
} from 'react-icons/ai';

import classNames from 'classnames';
import styles from './Item.module.scss';
import Input from 'components/Input';

const iconeProps = {
  size: 24,
  color: '#041833',
};
const quantidadeProps = {
  size: 32,
  color: '#18758E',
};


export default function Item({
  titulo, foto, preco,
  descricao, favorito,
  id, carrinho, quantidade }) {

  const [modoEdição, setModoEdição] = useState(false);
  const [novoTitulo, setNovoTitulo] = useState(titulo);
  const dispatch = useDispatch();
  const estaNoCarrinho = useSelector((state) => state
    .carrinho.some(product => product.id === id));


  const favoriteHandler = () => {
    dispatch(mudarFavoritar(id))
  };

  const carrinhoHandler = () => {
    dispatch(mudarCarrinho(id))
  }

  const componenteModoEdicao = <>
    {modoEdição
      ? <AiOutlineCheck
          {...iconeProps}
          className={styles['item-acao']}
          onClick={() => {
            dispatch(editarItem({id, item: {titulo: novoTitulo}}))
            setModoEdição(false)
          }}
        />
      : <AiFillEdit
          {...iconeProps}
          className={styles['item-acao']}
          onClick={() => setModoEdição(true)}
        />
    }
  </>

  return (
    <div className={classNames(styles.item,{ 
      [styles.itemNoCarrinho]: carrinho})
    }>
      <div className={styles['item-imagem']}>
        <img src={foto} alt={titulo} />
      </div>

      <div className={styles['item-descricao']}>
        <div className={styles['item-titulo']}>
          {modoEdição
            ? <Input
                value={novoTitulo}
                onChange={({target}) => setNovoTitulo(target.value)}
              />

            :  <h2>{titulo}</h2>
          }
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
            {carrinho
              ? (
                <div className={styles.quantidade}>
                  Quantidade:
                  <AiFillMinusCircle
                    {... quantidadeProps}
                    onClick={() => {
                      if (quantidade > 0) {
                        dispatch(mudarQuantidade({id, quantidade: -1}))}
                      }  
                    }/>

                  <span>{String(quantidade||0).padStart(2, '0')}</span>

                  <AiFillPlusCircle
                    {... quantidadeProps}
                    onClick={() => dispatch(mudarQuantidade({id, quantidade: 1}))}
                  />
                </div>
              )
              : (
                <>
                  <FaCartPlus
                    {...iconeProps}
                    color={estaNoCarrinho ? '#1875E8' : iconeProps.color}
                    className={styles['item-acao']}
                    onClick={carrinhoHandler}
                    />
                  {componenteModoEdicao}
                </>
              )
            }
          </div>
        </div>

      </div>
    </div>
  )
}