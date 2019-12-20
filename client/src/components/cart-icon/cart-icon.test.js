import React from 'react';
import { shallow } from 'enzyme';
import CartIcon from './cart-icon.component';
import { ShoppingIcon, ItemCountContainer } from './cart-icon.styles';
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';

const initialState = {
  cart: {
    cartItems: [1, 2, 3],
    hidden: true,
  },
  itemCount: 0,
};
const mockStore = configureStore();
let store;
let container;

describe('create snapshot', () => {
  beforeEach(() => {
    store = mockStore(initialState);
    container = shallow(<CartIcon store={store} />);
  });
  it('capture snapshot of CartItem', () => {
    const wrapper = renderer.create(container).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});

describe('render connected component', () => {
  beforeEach(() => {
    store = mockStore(initialState);
    container = shallow(<CartIcon store={store} />);
  });
  it('render cart icon', () => {
    expect(container.find(ShoppingIcon)).toBeDefined();
  });
  it('render count container', () => {
    expect(container.find(ItemCountContainer)).toBeDefined();
  });
});
