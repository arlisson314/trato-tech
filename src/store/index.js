import { configureStore } from '@reduxjs/toolkit';
import categoriasSlice from 'reducers/categorias';
import itensSlice from 'reducers/itens';

const initialState = configureStore({
  reducer: {
    categorias: categoriasSlice,
    itens: itensSlice,
  },
});

export default initialState;