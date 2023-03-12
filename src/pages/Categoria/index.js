import Header from 'components/Header';
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './Categoria.module.scss';
import Item from 'components/Item';
import Button from 'components/Button';

function Categoria() {
  const { nomeCategoria } = useParams();
  const navigate = useNavigate()

  const {categoria, itens} = useSelector(state => {
    const regexp = new RegExp(state.busca, 'i');
    return {
      categoria: state.categorias.find(categoria => categoria.id === nomeCategoria),
      itens: state.itens.filter(product =>
        product.categoria === nomeCategoria
        && product.titulo.match(regexp)  
      )
    }
  });

  return (
    <div>
      <Header
        titulo={categoria.nome}
        descricao={categoria.descricao}
        imagem={categoria.thumbnail}
      >
        <Button
          onClick={() => navigate(`/anuncie/${nomeCategoria}`)}
        >
          Anuncie Aqui.
        </Button>
      </Header>

      <div className={styles.itens}>
        {itens?.map(item => (
          <Item
            key={item.id}
            {...item}
          />
        ))}
      </div>
    </div>
  );
}

export default Categoria;