const { createSlice } = require('@reduxjs/toolkit');

const initialState = '';

const buscaSlice = createSlice({
  name: 'busca',
  initialState,
  reducers: {
    mudarBusca: (_state, params) => params.payload,
    resetarBusca: () => initialState,
  }
});

export const {mudarBusca, resetarBusca} = buscaSlice.actions;

export default buscaSlice.reducer;