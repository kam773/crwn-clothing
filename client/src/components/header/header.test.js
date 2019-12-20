import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { Header } from './header.component';
import { MemoryRouter } from 'react-router-dom';
import { OptionsContainer } from './header.styles';

const mockProps = {
  currentUser: {
    displayName: 'name',
    id: 'asfssdg12',
    email: 'email@example.com',
  },
  hidden: true,
};

describe('create snapshot', () => {
  it('captures snapshot of Header', () => {
    const wrapper = renderer
      .create(
        <MemoryRouter>
          <Header {...mockProps} />
        </MemoryRouter>,
      )
      .toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});

describe('shallow render react component', () => {
  it('renders DUMB react component', () => {
    const wrapper = shallow(<Header {...mockProps} />);
    expect(wrapper.length).toEqual(1);
  });
  it('renders Logo component', () => {
    const wrapper = shallow(<Header {...mockProps} />);
    expect(wrapper.find('Logo')).toBeDefined();
  });
  it('renders 4 nav items', () => {
    const wrapper = shallow(<Header {...mockProps} />);
    expect(wrapper.find(OptionsContainer).children()).toHaveLength(4);
  });
  it('renders CartDropdown component', () => {
    const wrapper = shallow(<Header {...mockProps} />);
    expect(wrapper.find('CartDropdown')).toBeDefined();
  });
});
