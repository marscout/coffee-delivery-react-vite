import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { coffees } from '../../../data.json'
import {
  Card,
  CardFooter,
  CardInformation,
  CardQuantityBuy,
  CardsList,
  CardsSectionList,
  CartButton,
  Price,
  Quantity,
  QuantitySelector,
  Tag,
  Tags,
} from './styles'

export function ListCoffees() {
  return (
    <CardsSectionList>
      <h3>Nossos cafes</h3>
      <CardsList>
        {coffees.map((coffee) => (
          <Card key={coffee.id}>
            <img src={coffee.image} alt={coffee.name} />
            <Tags>
              {coffee.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </Tags>
            <CardInformation>
              <h3>{coffee.name}</h3>
              <p>{coffee.description}</p>
            </CardInformation>
            <CardFooter>
              <Price>
                <span>R$</span> {coffee.price}
              </Price>
              <CardQuantityBuy>
                <Quantity>
                  <QuantitySelector>
                    <Minus weight="bold" size={14} />
                  </QuantitySelector>
                  <span>0</span>
                  <QuantitySelector>
                    <Plus weight="bold" size={14} />
                  </QuantitySelector>
                </Quantity>
                <CartButton>
                  <ShoppingCart size={22} weight="fill" />
                </CartButton>
              </CardQuantityBuy>
            </CardFooter>
          </Card>
        ))}
      </CardsList>
    </CardsSectionList>
  )
}
