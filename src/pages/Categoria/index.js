import Header from 'components/Header';
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
// import styles from './Categoria.module.scss';

function Categoria() {
  const { nomeCategoria } = useParams();

  const {nome, descricao, thumbnail } = useSelector(state => state.categorias
    .find(categoria => categoria.id === nomeCategoria));

  return (
    <div>
      <Header
        titulo={nome}
        descricao={descricao}
        imagem={thumbnail}
      />
    </div>
  );
}

export default Categoria;