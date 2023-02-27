const { createSlice } = require('@reduxjs/toolkit');

const initialState = [];

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
      mudarCarrinho: (state, params) => {
        const product = state.some(product => product.id === params.payload)
        if (!product) {
          return [...state, {id: params.payload, quantidade: 1}]
        } 
        return state.filter(item => item.id !== params.payload);
      }
    }
});

export const { mudarCarrinho } = carrinhoSlice.actions;

export default carrinhoSlice.reducer;