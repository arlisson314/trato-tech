const { createSlice } = require('@reduxjs/toolkit');

const initialState = [];

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
      mudarCarrinho: (state, params) => {
        const product = state.some(product => product.id === params.payload);

        if (!product) {
          return [...state, {id: params.payload, quantidade: 1}];
        };

        return state.filter(item => item.id !== params.payload);
      },
      mudarQuantidade: (state, params) => {
        // state = state.map(itemNoCarrinho => {
        //   if (itemNoCarrinho.id === params.payload.id) {
        //     itemNoCarrinho.quantidade += params.payload.quantidade;
        //   }
        //   return itemNoCarrinho;
        // })
        const product = state.find(itemNoCarrinho => itemNoCarrinho.id === params.payload.id);
        product.quantidade += params.payload.quantidade;
      },
      resetarCarrinho: () => initialState,
    }
});

export const { mudarCarrinho, mudarQuantidade, resetarCarrinho } = carrinhoSlice.actions;

export default carrinhoSlice.reducer;