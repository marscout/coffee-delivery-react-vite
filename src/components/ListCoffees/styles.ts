import styled from 'styled-components'
import { mixins } from '../../mixins'

export const CardsSectionList = styled.section`
  padding-top: 2rem;
  width: 70rem;
  margin: 0 auto;
  > h3 {
    color: ${({ theme }) => theme['base-subtitle']};
    ${mixins.fonts.titleL}
  }
`

export const CardsList = styled.div`
  padding-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`
export const Card = styled.div`
  width: 16rem;
  min-width: 16rem;
  background-color: ${({ theme }) => theme['base-card']};
  border-radius: 6px 36px 6px 36px;
  > img {
    display: flex;
    position: relative;
    top: -20px;
    margin: 0 auto;
  }
`
export const Tags = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.25rem;
  > span {
    background-color: ${({ theme }) => theme['yellow-200']};
    color: ${({ theme }) => theme['yellow-700']};
    padding: 0.25rem 0.5rem;
    border-radius: 4rem;
    ${mixins.fonts.tag}
  }
`
export const Tag = styled.span`
  background-color: ${({ theme }) => theme['yellow-200']};
  color: ${({ theme }) => theme['yellow-700']};
  padding: 0.25rem 0.5rem;
  border-radius: 4rem;
  ${mixins.fonts.tag}
`
export const CardInformation = styled.div`
  > h3 {
    display: flex;
    justify-content: center;
    padding: 0.5rem 1.25rem;
    ${mixins.fonts.titleS}
  }

  > p {
    ${mixins.fonts.textS}
    display: flex;
    justify-content: center;
    padding: 0 1.25rem 1.25rem;
    text-align: center;
    color: ${({ theme }) => theme['base-label']};
  }
`
export const CardFooter = styled.div`
  width: 13rem;
  gap: 2rem;
  display: flex;
  padding: 0 1.5rem 1.25rem;
`
export const Price = styled.span`
  display: flex;
  justify-content: center;
  gap: 0.25rem;
  align-items: baseline;
  ${mixins.fonts.titleM}
  > span {
    font-weight: 400;
    ${mixins.fonts.textS}
  }
`

export const CardQuantityBuy = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`
export const Quantity = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme['base-button']};
  border-radius: 6px;
`
export const QuantitySelector = styled.span`
  padding: 0.5rem;
  color: ${({ theme }) => theme['purple-500']};
`
export const CartButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  color: ${({ theme }) => theme.white};
  border-radius: 6px;
  padding: 0.5rem;
  background-color: ${({ theme }) => theme['purple-700']};
`
