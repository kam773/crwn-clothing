import React from 'react';
import { shallow } from 'enzyme';
import CartItem from './cart-item.component';
import { CartItemImage } from './cart-item.styles';
import renderer from 'react-test-renderer';

const mockProps = {
  imageUrl: 'url',
  price: 20,
  name: 'name',
  quantity: 2,
};

describe('create snapshot', () => {
  it('capture snapshot of CartItem', () => {
    const wrapper = renderer
      .create(<CartItem {...mockProps} />)
      .toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});

describe('shallow render react component', () => {
  it('render the DUMB component', () => {
    const wrapper = shallow(<CartItem {...mockProps} />);
    expect(wrapper.length).toEqual(1);
  });
  it('render image', () => {
    const wrapper = shallow(<CartItem {...mockProps} />);
    expect(wrapper.find(CartItemImage)).toBeDefined();
  });
  it('render price and name', () => {
    const wrapper = shallow(<CartItem {...mockProps} />);
    expect(wrapper.find('span').length).toEqual(2);
  });
});
