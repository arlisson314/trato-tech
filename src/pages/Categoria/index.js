import Header from 'components/Header';
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styles from './Categoria.module.scss';
import Item from 'components/Item';

function Categoria() {
  const { nomeCategoria } = useParams();

  const {categoria, itens} = useSelector(state => ({
    categoria: state.categorias.find(categoria => categoria.id === nomeCategoria),
    itens: state.itens.filter(product => product.categoria === nomeCategoria),
  }));

  return (
    <div>
      <Header
        titulo={categoria.nome}
        descricao={categoria.descricao}
        imagem={categoria.thumbnail}
      />

      <div className={styles.itens}>
        {itens?.map(item => (
          <Item
            key={item.id}
            {...item}
            // id={item.id}
          />
        ))};
      </div>
    </div>
  );
}

export default Categoria;