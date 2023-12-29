import styled from 'styled-components'
import { mixins } from '../../mixins'
import { Car } from 'phosphor-react'

export const Title = styled.h1`
  ${mixins.fonts.titleXS}
  color: ${({ theme }) => theme['base-subtitle']};
`
export const PaymentInfoContainer = styled.main`
  width: 70rem;
  margin: 0 auto;
  display: flex;
  gap: 2rem;
`
export const PaymentInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 40rem;
  gap: 16px;
`
export const Informations = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`
export const Card = styled.div`
  padding: 40px;
  background-color: ${({ theme }) => theme['base-card']};
`
export const AddressInfo = styled(Card)`
  border-radius: 6px;
  form {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-top: 32px;
    > input {
      background-color: ${({ theme }) => theme['base-input']};
      border: 1px solid ${({ theme }) => theme['base-button']};
      padding: 12px;
      border-radius: 4px;
      ${mixins.fonts.textS}
    }
  }
`
export const FormRow = styled.div`
  display: flex;
  gap: 12px;
  > input {
    background-color: ${({ theme }) => theme['base-input']};
    border: 1px solid ${({ theme }) => theme['base-button']};
    padding: 12px;
    border-radius: 4px;
    ${mixins.fonts.textS}
  }
`
export const Complement = styled.div`
  display: flex;
  flex: 1;
  input {
    width: 100%;
    background-color: ${({ theme }) => theme['base-input']};
    border: 1px solid ${({ theme }) => theme['base-button']};
    border-right: none;
    padding: 12px;
    border-radius: 4px 0 0 4px;
    ${mixins.fonts.textS}
  }
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme['base-input']};
    border: 1px solid ${({ theme }) => theme['base-button']};
    border-left: none;
    padding: 12px;
    border-radius: 0 4px 4px 0;
    font-family: Roboto;
    font-size: 12px;
    font-style: italic;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;

    color: ${({ theme }) => theme['base-label']};
  }
`
export const CityState = styled.div`
  display: flex;
  gap: 12px;

  input {
    width: 100%;
    background-color: ${({ theme }) => theme['base-input']};
    border: 1px solid ${({ theme }) => theme['base-button']};
    padding: 12px;
    border-radius: 4px;
    ${mixins.fonts.textS}
  }
`
export const PaymentMethod = styled.div`
  background-color: ${({ theme }) => theme['base-card']};
  border-radius: 6px;
  padding: 40px;
`
export const HeaderCard = styled.header`
  display: flex;
`
export const HeaderCardTitleIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`
export const HeaderCardTexts = styled.div`
  display: flex;
  flex-direction: column;
  h2 {
    ${mixins.fonts.textM}
    color: ${({ theme }) => theme['base-text']};
  }
  span {
    padding-left: 30px;
    ${mixins.fonts.textS}
  }
`
export const CoffesInfo = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 28rem;
`
export const CoffeesInfoContainer = styled(Card)`
  background-color: ${({ theme }) => theme['base-card']};
  display: flex;
  border-radius: 6px 44px;
  flex-direction: column;
`
export const OptionsPayment = styled.div`
  margin-top: 32px;
  display: flex;
  gap: 12px;
`
export const OptionPayment = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  border-radius: 6px;
  padding: 16px;
  gap: 12px;
  background-color: ${({ theme }) => theme['base-button']};
  text-transform: uppercase;
  ${mixins.fonts.buttonM}

  &:hover {
    background-color: ${({ theme }) => theme['base-hover']};
  }
`
export const Total = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  button {
    background-color: ${({ theme }) => theme['yellow-500']};
    color: ${({ theme }) => theme.white};
    padding: 12px;
    text-transform: uppercase;
    border-radius: 6px;
    border: none;
    ${mixins.fonts.buttonG}
    &:hover {
      background-color: ${({ theme }) => theme['yellow-700']};
    }
  }
`
export const CoffesList = styled.div`
  display: flex;
  flex-direction: column;
`
export const Price = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const PriceLabel = styled.span`
  ${mixins.fonts.textS}
`
export const PriceText = styled.span`
  ${mixins.fonts.textM}
`
export const TotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
  ${mixins.fonts.textL}
  font-weight: bold;
`
export const CoffeeContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 0.5rem;

  > div {
    gap: 0.5rem;
  }
`
export const CoffeNamePrice = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`
export const CoffeeItem = styled.div`
  display: flex;
  gap: 1.25rem;
  padding: 8px 4px;
  img {
    max-width: 4rem;
    max-height: 4rem;
  }
`
export const LineDivider = styled.hr`
  border-top: 1px solid ${({ theme }) => theme['base-button']};
  margin: 24px 0px;
`
export const Quantity = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme['base-button']};
  border-radius: 6px;
`
export const QuantitySelector = styled.span`
  display: flex;
  justify-content: center;
  padding: 0.5rem;
  color: ${({ theme }) => theme['purple-500']};
`
export const ButtonRemove = styled.button`
  display: flex;
  justify-content: center;
  text-transform: uppercase;
  gap: 0.25rem;
  padding: 0.5rem;
  ${mixins.fonts.textS}
  color: ${({ theme }) => theme['base-text']};
  background-color: ${({ theme }) => theme['base-button']};
  border: none;
  border-radius: 6px;
`
export const ManagementCoffe = styled.div`
  display: flex;
  gap: 0.5rem;
`
