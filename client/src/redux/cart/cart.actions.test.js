import CartActionTypes from './cart.types';
import {
  addItem,
  removeItem,
  clearItemFromCart,
  toggleCartHidden,
} from './cart.actions';

describe('cart actions', () => {
  it('handle toggleCartHidden', () => {
    const expectedAction = {
      type: CartActionTypes.TOGGLE_CART_HIDDEN,
    };
    expect(toggleCartHidden()).toEqual(expectedAction);
  });
  it('handle addItem', () => {
    const item = {
      id: 2,
      name: 'item',
      price: 200,
      quantity: 1,
      imageUrl: 'url',
    };
    const expectedAction = {
      type: CartActionTypes.ADD_ITEM,
      payload: {
        id: 2,
        name: 'item',
        price: 200,
        quantity: 1,
        imageUrl: 'url',
      },
    };
    expect(addItem(item)).toEqual(expectedAction);
  });
  it('handle removeItem', () => {
    const item = {
      id: 2,
      name: 'item',
      price: 200,
      quantity: 2,
      imageUrl: 'url',
    };
    const expectedAction = {
      type: CartActionTypes.REMOVE_ITEM,
      payload: {
        id: 2,
        name: 'item',
        price: 200,
        quantity: 2,
        imageUrl: 'url',
      },
    };
    expect(removeItem(item)).toEqual(expectedAction);
  });
  it('handle clearItemFromCart', () => {
    const item = {
      id: 2,
      name: 'item',
      price: 200,
      quantity: 2,
      imageUrl: 'url',
    };
    const expectedAction = {
      type: CartActionTypes.CLEAR_ITEM_FROM_CART,
      payload: {
        id: 2,
        name: 'item',
        price: 200,
        quantity: 2,
        imageUrl: 'url',
      },
    };
    expect(clearItemFromCart(item)).toEqual(expectedAction);
  });
});
