import React from 'react';
import { shallow } from 'enzyme';
import Spinner from './spinner.component';
import { SpinnerContainer } from './spinner.styles';

describe('render shallow react component', () => {
  it('renders DUMB react component', () => {
    const wrapper = shallow(<Spinner />);
    expect(wrapper.length).toEqual(1);
  });
  it('renders SpinnerContainer', () => {
    const wrapper = shallow(<Spinner />);
    expect(wrapper.find(SpinnerContainer)).toBeDefined();
  });
});
