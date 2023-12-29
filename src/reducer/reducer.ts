import { produce } from 'immer'
import { ActionTypes } from './actions'

export enum CoffedTypes {
  TRADICIONAL = 'TRADICIONAL',
  GELADO = 'GELADO',
  COM_LEITE = 'COM LEITE',
  ESPECIAL = 'ESPECIAL',
  ALCOOLICO = 'ALCOOLICO',
}

export interface Coffee {
  id: number
  name: string
  description: string
  tags: CoffedTypes[]
  price: number
  image: string
}

export interface CoffeeState {
  coffees: Coffee[]
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function CoffeeReducer(state: CoffeeState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_COFFEE:
      return produce(state, (draft) => {
        draft.coffees.push(action.payload.newCoffee)
      })

    default:
      return state
  }
}
