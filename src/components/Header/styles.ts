import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 0 0 2rem;

  max-width: 74rem;

  margin: 2rem auto;

  img {
    width: 5.3095rem;
    height: 2.5rem;
  }
`
export const InfosContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.75rem;
  justify-content: center;
  align-items: center;
`

export const LocalizarionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  border-radius: 6px;
  line-height: 1.3;
  gap: 0.25rem;
  color: ${(props) => props.theme['purple-500']};
  background-color: ${(props) => props.theme['purple-200']};
`
export const CartRedirection = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme['yellow-700']};
  background-color: ${(props) => props.theme['yellow-200']};

  margin-top: -19px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  border-radius: 6px;

  span {
    position: relative;
    top: 0;
  }
`
export const CartQuantityInfo = styled.div`
  span {
    position: relative;
    top: -8px;
    left: calc(32px - 6px);

    font-size: 0.75rem;

    background-color: ${(props) => props.theme['yellow-700']};
    color: ${(props) => props.theme.white};
    padding: 2px 6px;
    border-radius: 50%;
  }
`
