import { configureStore } from '@reduxjs/toolkit';
import categoriasSlice from 'reducers/categorias';

const initialState = configureStore({
  reducer: {
    categorias: categoriasSlice,
  },
});

export default initialState;