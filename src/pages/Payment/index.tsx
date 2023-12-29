import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Minus,
  Money,
  Plus,
  Trash,
} from 'phosphor-react'
import {
  PaymentInfo,
  PaymentInfoContainer,
  Informations,
  AddressInfo,
  PaymentMethod,
  CoffesInfo,
  CoffeesInfoContainer,
  Title,
  HeaderCard,
  HeaderCardTexts,
  HeaderCardTitleIcon,
  FormRow,
  Complement,
  CityState,
  OptionsPayment,
  OptionPayment,
  Total,
  CoffesList,
  Price,
  TotalPrice,
  PriceLabel,
  PriceText,
  CoffeeContainer,
  CoffeNamePrice,
  CoffeeItem,
  Quantity,
  QuantitySelector,
  ButtonRemove,
  ManagementCoffe,
  LineDivider,
} from './styles'
import { useTheme } from 'styled-components'
export function Payment() {
  const theme = useTheme()
  return (
    <PaymentInfoContainer>
      <PaymentInfo>
        <Title>Cafes selecionados</Title>
        <Informations>
          <AddressInfo>
            <HeaderCard>
              <HeaderCardTexts>
                <HeaderCardTitleIcon>
                  <MapPinLine size={22} color={theme['yellow-700']} />
                  <h2>Endereco de Entrega</h2>
                </HeaderCardTitleIcon>
                <span>informe o endereco onde deseja receber seu pedido</span>
              </HeaderCardTexts>
            </HeaderCard>
            <form>
              <input
                type="text"
                style={{ display: 'block' }}
                placeholder="CEP"
              />
              <input type="text" placeholder="Rua" />
              <FormRow>
                <input type="text" placeholder="Número" />
                <Complement>
                  <input type="text" placeholder="Complemento"></input>
                  <span>Opcional</span>
                </Complement>
              </FormRow>
              <FormRow>
                <input type="text" placeholder="Bairro" />
                <CityState>
                  <input type="text" placeholder="Cidade" />
                  <input
                    type="text"
                    placeholder="UF"
                    style={{ width: '25%' }}
                  />
                </CityState>
              </FormRow>
            </form>
          </AddressInfo>
          <PaymentMethod>
            <HeaderCard>
              <HeaderCardTexts>
                <HeaderCardTitleIcon>
                  <CurrencyDollar size={22} color={theme['purple-700']} />
                  <h2>Pagamento</h2>
                </HeaderCardTitleIcon>
                <span>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </span>
              </HeaderCardTexts>
            </HeaderCard>
            <OptionsPayment>
              <OptionPayment>
                <CreditCard size={16} color={theme['purple-500']} />
                <span>Cartão de crédito</span>
              </OptionPayment>
              <OptionPayment>
                <Bank size={16} color={theme['purple-500']} />
                <span>cartão de débito</span>
              </OptionPayment>
              <OptionPayment>
                <Money size={16} color={theme['purple-500']} />
                <span>dinheiro</span>
              </OptionPayment>
            </OptionsPayment>
          </PaymentMethod>
        </Informations>
      </PaymentInfo>
      <CoffesInfo>
        <Title>Cafes selecionados</Title>
        <CoffeesInfoContainer>
          <CoffesList>
            <CoffeeItem>
              <img src="/images/coffees/coffee-img-1.png" alt="" />
              <CoffeeContainer>
                <CoffeNamePrice>
                  <span>Expresso Tradicional</span>
                  <span>R$ 9,90</span>
                </CoffeNamePrice>
                <ManagementCoffe>
                  <Quantity>
                    <QuantitySelector>
                      <Minus weight="bold" size={14} />
                    </QuantitySelector>
                    <span>0</span>
                    <QuantitySelector>
                      <Plus weight="bold" size={14} />
                    </QuantitySelector>
                  </Quantity>
                  <ButtonRemove>
                    <Trash
                      size={16}
                      color={theme['purple-500']}
                      weight={'regular'}
                    />
                    remover
                  </ButtonRemove>
                </ManagementCoffe>
              </CoffeeContainer>
            </CoffeeItem>
            <LineDivider></LineDivider>
          </CoffesList>

          <Total>
            <Price>
              <PriceLabel>Total de itens</PriceLabel>
              <PriceText>R$ 29,70</PriceText>
            </Price>
            <Price>
              <PriceLabel>Entrega</PriceLabel>
              <PriceText>R$ 3,50</PriceText>
            </Price>
            <TotalPrice>
              <span>Total</span>
              <span>R$ 33,20</span>
            </TotalPrice>
            <button type="button">Confirmar Pedido</button>
          </Total>
        </CoffeesInfoContainer>
      </CoffesInfo>
    </PaymentInfoContainer>
  )
}
