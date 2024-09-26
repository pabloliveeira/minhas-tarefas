import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

type ContatosState = {
  itens: Contato[]
}

const initialState: ContatosState = {
  itens: [
    {
      id: 1,
      nome: 'Pablo Borges',
      email: 'pablo230197@gmail.com',
      telefone: '(37)99971-7544'
    },
    {
      id: 2,
      nome: 'Luana Antonelly',
      email: 'luana123@gmail.com',
      telefone: '(37)99999-9999'
    },
    {
      id: 3,
      nome: 'Edson Junior',
      email: 'edson123@gmail.com',
      telefone: '(37)99999-9999'
    },
    {
      id: 4,
      nome: 'Laine Canedo',
      email: 'laine123@gmail.com',
      telefone: '(37)99999-9999'
    },
    {
      id: 5,
      nome: 'Eliette Torquatto',
      email: 'eliette123@gmail.com',
      telefone: '(37)99999-9999'
    }
  ]
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contato) => contato.id !== action.payload
      )
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexDoContato = state.itens.findIndex(
        (c) => c.id === action.payload.id
      )
      if (indexDoContato >= 0) {
        state.itens[indexDoContato] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const contatoJaExiste = state.itens.find(
        (contato) =>
          contato.nome.toLowerCase() === action.payload.nome.toLowerCase()
      )
      if (contatoJaExiste) {
        alert('Já existe um contato com esse nome')
      } else {
        const ultimoContato = state.itens[state.itens.length - 1]
        const contatoNovo = {
          ...action.payload,
          id: ultimoContato ? ultimoContato.id + 1 : 1
        }
        state.itens.push(contatoNovo)
      }
    }
  }
})

export const { remover, editar, cadastrar } = contatosSlice.actions
export default contatosSlice.reducer
