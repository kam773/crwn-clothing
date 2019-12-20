import React from 'react';
import { shallow } from 'enzyme';
import FormTextarea from './form-textarea.component';
import {
  FormTextareaContainer,
  FormTextareaLabel,
} from './form-textarea.styles';

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
    const wrapper = shallow(<FormTextarea {...mockProps} />);
    expect(wrapper.length).toEqual(1);
  });
  it('renders FormTextareaContainer', () => {
    const wrapper = shallow(<FormTextarea {...mockProps} />);
    expect(wrapper.find(FormTextareaContainer)).toBeDefined();
  });
  it('renders FormTextareaLabel', () => {
    const wrapper = shallow(<FormTextarea {...mockProps} />);
    expect(wrapper.find(FormTextareaLabel)).toBeDefined();
  });
});
