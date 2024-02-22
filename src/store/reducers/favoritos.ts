import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type favoritosState = {
  itens: Produto[]
}

const initialState: favoritosState = {
  itens: []
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    favoritar: (state, action: PayloadAction<Produto>) => {
      const itemFavorito = action.payload
      if (state.itens.find((p) => p.id === itemFavorito.id)) {
        state.itens = state.itens.filter((p) => p.id !== itemFavorito.id)
      } else {
        state.itens.push(itemFavorito)
      }
    }
  }
})

export const { favoritar } = favoritosSlice.actions
export default favoritosSlice.reducer
