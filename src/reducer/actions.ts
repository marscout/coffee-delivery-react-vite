import { Coffee } from './reducer'

export enum ActionTypes {
  ADD_NEW_COFFEE = 'ADD_NEW_COFFEE',
}

export function addNewCoffee(newCoffee: Coffee) {
  return { type: ActionTypes.ADD_NEW_COFFEE, payload: { newCoffee } }
}
