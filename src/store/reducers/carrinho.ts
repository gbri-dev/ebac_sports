import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type CarrinhoState = {
  itens: Produto[]
}

const initialState: CarrinhoState = {
  itens: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Produto>) => {
      const produtoItem = action.payload
      if (state.itens.find((produto) => produto.id === produtoItem.id)) {
        console.log(produtoItem)
        alert('Item já adicionado')
      } else {
        state.itens.push(produtoItem)
      }
    }
  }
})

export const { adicionar } = carrinhoSlice.actions
export default carrinhoSlice.reducer
