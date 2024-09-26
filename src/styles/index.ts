import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'

const EstiloGlobal = createGlobalStyle`
  * {
margin: 0;
padding: 0;
box-sizing: border-box;
font-family: Roboto, sans-serif;
list-style: none;
}
`
export const Container = styled.div`
  display: block;
  align-items: center;
  justify-content: center;
  background-color: #ddd;
`

export const MainContainer = styled.div`
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`
export const Titulo = styled.h2`
  display: block;
  margin-top: 32px;
  margin-bottom: 32px;
  margin-right: 32px;
  font-size: 24px;
  font-weight: bold;
`
export const Campo = styled.input`
  padding: 8px;
  background-color: #fff;
  border-radius: 8px;
  font-weight: bold;
  color: #666666;
  border-color: #666666;
  width: 100%;
`
export const Botao = styled.button`
  font-size: 12px;
  font-weight: bold;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: #2f3640;
  border-radius: 8px;
  margin-right: 8px;
`
export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
`

export default EstiloGlobal
