import styles from './Carrinho.module.scss'
import Header from 'components/Header';
import { useSelector } from 'react-redux'
import Item from 'components/Item';

function Carrinho() {
  const carrinho = useSelector((state) => {

    const carrinhoReduce = state.carrinho.reduce((itensAcc, itemNoCarrinho) => {
      const item = state.itens.find((item) => item.id === itemNoCarrinho.id);

      itensAcc.push({...item, quantidade: itemNoCarrinho.quantidade});
      
      return itensAcc;
    }, []);
    console.log(carrinhoReduce)

    return carrinhoReduce
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
          />
        ))}
        <div className={styles.total}>
          <strong>
            Resumo da compra
          </strong>
          <span>
            Subtotal: <strong> R$ {0.0.toFixed(2)} </strong>
          </span>
        </div>

      </div>
    </div>
  );
}

export default Carrinho;