import React from 'react';
import { shallow, mount } from 'enzyme';
import { SignIn } from './sign-in.component';
import { SignInTitle, ButtonsBarContainer } from './sign-in.styles';

describe('render shallow react component', () => {
  it('renders DUMB react component', () => {
    const wrapper = shallow(<SignIn />);
    expect(wrapper.length).toEqual(1);
  });
  it('renders 2 input elements and button wrapper within form', () => {
    const wrapper = shallow(<SignIn />);
    expect(wrapper.find('form').children()).toHaveLength(3);
  });
  it('renders sign in title', () => {
    const wrapper = shallow(<SignIn />);
    expect(wrapper.find(SignInTitle).text()).toEqual(
      'I already have an account',
    );
  });
  it('renders sign in sub-title', () => {
    const wrapper = shallow(<SignIn />);
    expect(wrapper.find('span').text()).toEqual(
      'Sign in with your email and password',
    );
  });
  it('renders 2 buttons within buttons container', () => {
    const wrapper = shallow(<SignIn />);
    expect(wrapper.find(ButtonsBarContainer).children()).toHaveLength(
      2,
    );
  });
  it('handleChange for email input and password input', () => {
    const wrapper = mount(<SignIn />);
    const emailInput = wrapper.find('form').childAt(0);
    const passwordInput = wrapper.find('form').childAt(1);
    emailInput.props().handleChange({
      target: { name: 'email', value: 'email test' },
    });
    passwordInput.props().handleChange({
      target: { name: 'password', value: 'password test' },
    });
    wrapper.update();
    expect(wrapper.state().email).toEqual('email test');
    expect(wrapper.state().password).toEqual('password test');
  });
  it('calls emailSignInStart function after submit button click', () => {
    const onSubmitFn = jest.fn();
    const wrapper = mount(<SignIn emailSignInStart={onSubmitFn} />);
    const button = wrapper.find(ButtonsBarContainer).childAt(0);
    button.simulate('submit');
    expect(onSubmitFn).toHaveBeenCalledTimes(1);
  });
});
