import React from 'react';
import { shallow } from 'enzyme';
import { CheckoutItem } from './checkout-item.component';
import {
  ImageContainer,
  RemoveButtonContainer,
  TextContainer,
  QuantityContainer,
} from './checkout-item.styles';
import renderer from 'react-test-renderer';

const mockProps = {
  cartItem: {
    name: 'name',
    imageUrl: 'url',
    price: '20',
    quantity: '2',
  },
  clearItem: jest.fn(),
  addItem: jest.fn(),
  removeItem: jest.fn(),
};

describe('create shanpshot', () => {
  it('capture snapshot of CheckoutItem', () => {
    const wrapper = renderer
      .create(<CheckoutItem {...mockProps} />)
      .toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});

describe('shallow render react component', () => {
  it('render the DUMB component', () => {
    const wrapper = shallow(<CheckoutItem {...mockProps} />);
    expect(wrapper.length).toEqual(1);
  });
  it('render ImageContainer', () => {
    const wrapper = shallow(<CheckoutItem {...mockProps} />);
    expect(wrapper.find(ImageContainer)).toBeDefined();
  });
  it('render RemoveButtonContainer', () => {
    const wrapper = shallow(<CheckoutItem {...mockProps} />);
    expect(wrapper.find(RemoveButtonContainer)).toBeDefined();
  });
  it('render TextContainer', () => {
    const wrapper = shallow(<CheckoutItem {...mockProps} />);
    expect(wrapper.find(TextContainer)).toBeDefined();
  });
  it('render QuantityContainer', () => {
    const wrapper = shallow(<CheckoutItem {...mockProps} />);
    expect(wrapper.find(QuantityContainer)).toBeDefined();
  });
});
