import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import { Botao } from '../../styles'

export const Card = styled.div`
  background-color: #ddd;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 32px;
  display: inline-block;
  width: 380px;

  @media (max-width: 768px) {
    width: 320px;
    padding: 12px;
  }
`

export const Nome = styled.textarea`
  font-weight: bold;
  font-size: 24px;
  resize: none;
  border: none;
  background-color: transparent;
  color: #000;
  display: block;

  @media (max-width: 768px) {
    text-align: center;
  }
`

export const Email = styled.textarea`
  padding: 4px 8px;
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  background-color: #000;
  border-radius: 8px;
  margin-right: 16px;
  display: inline-block;
  resize: none;
  border: none;
  width: 240px;
`

export const Telefone = styled.textarea`
  padding: 4px 8px;
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  background-color: #000;
  border-radius: 8px;
  margin-right: 16px;
  display: block;
  resize: none;
  border: none;
  width: 240px;
`

export const BarraAcoes = styled.div`
  border-top: 1px solid rgba (0, 0, 0, 0.1);
  padding-top: 16px;
`

export const BotaoCancelareRemover = styled(Botao)`
  background-color: ${variaveis.vermelho};
`
