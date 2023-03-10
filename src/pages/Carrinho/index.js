import styles from './Carrinho.module.scss'
import Header from 'components/Header';
import { useSelector, useDispatch} from 'react-redux'
import Item from 'components/Item';
import { resetarCarrinho } from 'reducers/carrinho';
import Button from 'components/Button';

function Carrinho() {
  const dispatch = useDispatch();

  const {carrinho, valor} = useSelector((state) => {
    let valor = 0;
    const regexp = new RegExp(state.busca, 'i');

    const carrinhoReduce = state.carrinho.reduce((itensAcc, itemNoCarrinho) => {
      const item = state.itens.find((item) => item.id === itemNoCarrinho.id);
      valor += (item.preco * itemNoCarrinho.quantidade);

      if (item.titulo.match(regexp)) {
        itensAcc.push({...item, quantidade: itemNoCarrinho.quantidade});
      }
      return itensAcc;
    }, []);

    return {
      carrinho: carrinhoReduce,
      valor
    }
  });

  return (
    <div>
      <Header
        titulo='Carrinho de compras'
        descricao='Confira podutos que você adicionou ao carrino.'
      />
      <div className={styles.carrinho}>
        {carrinho.map(item => (
          <Item
            key={item.id}
            {...item}
            carrinho
          />
        ))}
        <div className={styles.total}>
          <strong>
            Resumo da compra
          </strong>
          <span>
            Subtotal: <strong> R$ {valor.toFixed(2)} </strong>
          </span>
        </div>
        <Button
          type='button'
          onClick={() => dispatch(resetarCarrinho())}
        >
          Finalizar compra
        </Button>
      </div>
    </div>
  );
}

export default Carrinho;