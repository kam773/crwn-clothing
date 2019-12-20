import React from 'react';
import { shallow } from 'enzyme';
import CartDropdown from './cart-dropdown.component';
import {
  EmptyMessageContainer,
  CartItemsContainer,
  CartDropdownButton,
} from './cart-dropdown.styles';
import configureStore from 'redux-mock-store';

describe('shallow render react component', () => {
  const initialState = {
    cartItems: [
      { imageUrl: 'url1', price: 20, name: 'name1', quantity: 2 },
      { imageUrl: 'url2', price: 10, name: 'name2', quantity: 1 },
    ],
    hidden: true,
  };
  const mockStore = configureStore();
  let store, container;

  beforeEach(() => {
    store = mockStore(initialState);
    container = shallow(<CartDropdown store={store} />);
  });
  it('render the connected component', () => {
    expect(container.length).toEqual(1);
  });
  it('render cart empty text component', () => {
    expect(container.find(EmptyMessageContainer)).toBeDefined();
  });
  it('render checkout button', () => {
    expect(container.find(CartDropdownButton)).toBeDefined();
  });
  it('render cart items container', () => {
    expect(container.find(CartItemsContainer)).toBeDefined();
  });
});
