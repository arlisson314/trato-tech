import { configureStore } from '@reduxjs/toolkit';
import categoriasSlice from 'reducers/categorias';
import itensSlice from 'reducers/itens';
import carrinhoSlice from 'reducers/carrinho';
import buscaSlice from 'reducers/busca' 

const initialState = configureStore({
  reducer: {
    categorias: categoriasSlice,
    itens: itensSlice,
    carrinho: carrinhoSlice,
    busca: buscaSlice
  },
});

export default initialState;