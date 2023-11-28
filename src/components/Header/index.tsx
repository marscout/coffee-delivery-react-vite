import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo-coffee-delivery.svg'
import {
  CartQuantityInfo,
  CartRedirection,
  HeaderContainer,
  InfosContainer,
  LocalizarionContainer,
} from './styles'
import { MapPin, ShoppingCart } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="" />
      <InfosContainer>
        <LocalizarionContainer>
          <MapPin size={22} weight="fill" />
          <span>Porto Alegre, RS</span>
        </LocalizarionContainer>
        <CartQuantityInfo>
          <span>3</span>
          <NavLink to={'/payment'}>
            <CartRedirection>
              <ShoppingCart size={22} weight={'fill'} />
            </CartRedirection>
          </NavLink>
        </CartQuantityInfo>
      </InfosContainer>
    </HeaderContainer>
  )
}
