import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { Directory } from './directory.component';

const mockProps = {
  sections: [
    {
      title: 'hats',
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
      id: 1,
      linkUrl: 'shop/hats',
    },
    {
      title: 'hats',
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
      id: 1,
      linkUrl: 'shop/hats',
    },
  ],
};
describe('create snapshot', () => {
  it('captures snapshot of Directory component', () => {
    const wrapper = renderer
      .create(<Directory {...mockProps} />)
      .toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
