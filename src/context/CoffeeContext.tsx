import { createContext, useReducer } from 'react'
import { addNewCoffee } from '../reducer/actions'
import { CoffeeReducer } from '../reducer/reducer'

interface Coffee {
  id: number
  name: string
  description: string
  tags: ['TRADICIONAL', 'GELADO', 'COM LEITE', 'ESPECIAL', 'ALCOOLICO']
  price: number
  image: string
}

interface CoffeeContextType {
  coffees: Coffee[]
  AddNewCoffee: (coffee: Coffee) => void
}

interface CoffeeContextProviderProps {
  children: React.ReactNode
}

export const CoffeeContext = createContext({} as CoffeeContextType)

export function CoffeeContextProvider({
  children,
}: CoffeeContextProviderProps) {
  const [coffeeState, dispatch] = useReducer(CoffeeReducer, {
    coffees: [],
  })

  const { coffees } = coffeeState

  function AddNewCoffee(coffe: Coffee) {
    dispatch(addNewCoffee(coffe))
  }

  return (
    <CoffeeContext.Provider value={{ coffees, AddNewCoffee }}>
      {children}
    </CoffeeContext.Provider>
  )
}
