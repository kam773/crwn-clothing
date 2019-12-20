import React from 'react';
import { shallow } from 'enzyme';
import { CollectionItem } from './collection-item.component';
import {
  AddButton,
  BackgroundImage,
  NameContainer,
  PriceContainer,
} from './collection-item.styles';
import renderer from 'react-test-renderer';

const mockProps = {
  addItem: jest.fn(),
  item: { name: 'name', price: '20', imageUrl: 'url' },
};

describe('create snapshot', () => {
  it('capture snapshot of CollectionItem', () => {
    const wrapper = renderer
      .create(<CollectionItem {...mockProps} />)
      .toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});

describe('shallow render react component', () => {
  it('render the DUMB component', () => {
    const wrapper = shallow(<CollectionItem {...mockProps} />);
    expect(wrapper.length).toEqual(1);
  });
  it('render AddButton', () => {
    const wrapper = shallow(<CollectionItem {...mockProps} />);
    expect(wrapper.find(AddButton)).toBeDefined();
  });
  it('render BackgroundImage', () => {
    const wrapper = shallow(<CollectionItem {...mockProps} />);
    expect(wrapper.find(BackgroundImage)).toBeDefined();
  });
  it('render NameContainer', () => {
    const wrapper = shallow(<CollectionItem {...mockProps} />);
    expect(wrapper.find(NameContainer)).toBeDefined();
  });
  it('render PriceContainer', () => {
    const wrapper = shallow(<CollectionItem {...mockProps} />);
    expect(wrapper.find(PriceContainer)).toBeDefined();
  });
});
