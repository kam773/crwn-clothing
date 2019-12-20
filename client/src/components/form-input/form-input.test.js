import React from 'react';
import { shallow, mount } from 'enzyme';
import FormInput from './form-input.component';
import {
  FormInputContainer,
  FormInputLabel,
} from './form-input.styles';

const mockProps = {
  name: 'name',
  type: 'type',
  value: 'value',
  chandleChange: jest.fn(),
  label: 'label',
  required: true,
};

describe('shallow render react component', () => {
  it('renders DUMB react component', () => {
    const wrapper = shallow(<FormInput {...mockProps} />);
    expect(wrapper.length).toEqual(1);
  });
  it('renders FormInputContainer', () => {
    const wrapper = shallow(<FormInput {...mockProps} />);
    expect(wrapper.find(FormInputContainer)).toBeDefined();
  });
  it('renders FormInputLabel', () => {
    const wrapper = shallow(<FormInput {...mockProps} />);
    expect(wrapper.find(FormInputLabel)).toBeDefined();
  });
  it('handleChange works', () => {
    const mockHandleChange = jest.fn();
    const wrapper = mount(
      <FormInput
        handleChange={mockHandleChange}
        value="custom value"
      />,
    );
    wrapper.find(FormInputContainer).simulate('change');
    expect(mockHandleChange).toHaveBeenCalledTimes(1);
  });
});
