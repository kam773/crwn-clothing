import React from 'react';
import { shallow } from 'enzyme';
import CustomButton from './custom-button.component';
import renderer from 'react-test-renderer';

describe('create snapshot', () => {
  it('captures snapshot of CustomButton', () => {
    const wrapper = renderer.create(<CustomButton />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});

describe('shallow render react component', () => {
  it('renders DUMB react component', () => {
    const wrapper = shallow(<CustomButton />);
    expect(wrapper.length).toEqual(1);
  });
});
