import React from 'react';
import { shallow, mount } from 'enzyme';
import { SignUp } from './sign-up.component';
import { SignUpTitle } from './sign-up.styles';

describe('render shallow react component', () => {
  it('renders DUMB react component', () => {
    const wrapper = shallow(<SignUp />);
    expect(wrapper.length).toEqual(1);
  });
  it('renders 4 input elements and button submit within form', () => {
    const wrapper = shallow(<SignUp />);
    expect(wrapper.find('form').children()).toHaveLength(5);
  });
  it('renders sign in title', () => {
    const wrapper = shallow(<SignUp />);
    expect(wrapper.find(SignUpTitle).text()).toEqual(
      'I do not have a account',
    );
  });
  it('renders SIGN UP text for sign up button', () => {
    const wrapper = shallow(<SignUp />);
    expect(
      wrapper
        .find('[type="submit"]')
        .render()
        .text(),
    ).toEqual('SIGN UP');
  });
  it('handleChange for email input and password input', () => {
    const wrapper = mount(<SignUp />);
    const displayNameInput = wrapper.find('form').childAt(0);
    const emailInput = wrapper.find('form').childAt(1);
    const passwordInput = wrapper.find('form').childAt(2);
    const confirmPasswordInput = wrapper.find('form').childAt(3);
    displayNameInput.props().handleChange({
      target: { name: 'displayName', value: 'test name' },
    });
    emailInput.props().handleChange({
      target: { name: 'email', value: 'email test' },
    });
    passwordInput.props().handleChange({
      target: { name: 'password', value: 'password test' },
    });
    confirmPasswordInput.props().handleChange({
      target: {
        name: 'confirmPassword',
        value: 'test confirm password',
      },
    });
    wrapper.update();
    expect(wrapper.state().displayName).toEqual('test name');
    expect(wrapper.state().email).toEqual('email test');
    expect(wrapper.state().password).toEqual('password test');
    expect(wrapper.state().confirmPassword).toEqual(
      'test confirm password',
    );
  });
  it('calls signUpStart function after submit button click', () => {
    const onSubmitFn = jest.fn();
    const wrapper = mount(<SignUp signUpStart={onSubmitFn} />);
    const button = wrapper.find('form').childAt(4);
    button.simulate('submit');
    expect(onSubmitFn).toHaveBeenCalledTimes(1);
  });
});
