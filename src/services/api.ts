import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Produto } from '../App'

const isLocal = process.env.NODE_ENV === 'development'
const baseUrl = isLocal ? 'http://192.168.1.8:4000' : 'http://192.168.1.8:4000'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl
  }),
  endpoints: (builder) => ({
    getProdutos: builder.query<Produto[], void>({
      query: () => 'produtos'
    })
  })
})

export const { useGetProdutosQuery } = api
export default api
