import CartActionTypes from './cart.types';
import cartReducer from './cart.reducer';

describe('cart reducer', () => {
  it('should return initial state', () => {
    const initialState = undefined;
    const expectedState = {
      hidden: true,
      cartItems: [],
    };
    expect(cartReducer(initialState, {})).toEqual(expectedState);
  });
  it('should handle TOGGLE_CART_HIDDEN', () => {
    const initialState = {
      hidden: true,
    };
    const action = {
      type: CartActionTypes.TOGGLE_CART_HIDDEN,
      payload: { hidden: false },
    };
    const expectedState = {
      hidden: false,
    };
    expect(cartReducer(initialState, action)).toEqual(expectedState);
  });
  it('should handle ADD_ITEM', () => {
    const initialState = { cartItems: [] };
    const action = {
      type: CartActionTypes.ADD_ITEM,
      payload: {
        id: 2,
        name: 'item',
        price: 200,
        quantity: 1,
        imageUrl: 'url',
      },
    };
    const expectedState = {
      cartItems: [
        {
          id: 2,
          name: 'item',
          price: 200,
          quantity: 1,
          imageUrl: 'url',
        },
      ],
    };
    expect(cartReducer(initialState, action)).toEqual(expectedState);
  });
  it('should handle REMOVE_ITEM', () => {
    const initialState = {
      cartItems: [
        {
          id: 2,
          name: 'item',
          price: 200,
          quantity: 2,
          imageUrl: 'url',
        },
      ],
    };
    const action = {
      type: CartActionTypes.REMOVE_ITEM,
      payload: {
        id: 2,
        name: 'item',
        price: 200,
        quantity: 2,
        imageUrl: 'url',
      },
    };
    const expectedState = {
      cartItems: [
        {
          id: 2,
          name: 'item',
          price: 200,
          quantity: 1,
          imageUrl: 'url',
        },
      ],
    };
    expect(cartReducer(initialState, action)).toEqual(expectedState);
  });
  it('handles CLEAR_ITEM_FROM_CART', () => {
    const initialState = {
      cartItems: [
        {
          id: 2,
          name: 'item',
          price: 200,
          quantity: 2,
          imageUrl: 'url',
        },
      ],
    };
    const action = {
      type: CartActionTypes.CLEAR_ITEM_FROM_CART,
      payload: {
        id: 2,
        name: 'item',
        price: 200,
        quantity: 2,
        imageUrl: 'url',
      },
    };
    const expectedState = {
      cartItems: [],
    };
    expect(cartReducer(initialState, action)).toEqual(expectedState);
  });
});
