import React from 'react';
import MenuItem from './menu-item.component';
import {
  BackgroundImageContainer,
  ContentSubtitle,
  ContentTitle,
  ContentContainer,
} from './menu-item.styles';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';

const mockProps = {
  title: 'title',
  imageUrl: 'url',
  size: 'xl',
  linkUrl: 'linkUrl',
  history: {},
  match: {},
};

describe('create snapshot', () => {
  it('captures snapshot of MenuItem component', () => {
    const wrapper = renderer
      .create(
        <MemoryRouter>
          <MenuItem {...mockProps} />
        </MemoryRouter>,
      )
      .toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});

describe('render shallow react component', () => {
  it('renders DUMB component', () => {
    const wrapper = shallow(<MenuItem {...mockProps} />);
    expect(wrapper.length).toEqual(1);
  });
  it('renders BackgroundImageContainer', () => {
    const wrapper = shallow(<MenuItem {...mockProps} />);
    expect(wrapper.find(BackgroundImageContainer)).toBeDefined();
  });
  it('renders ContentTitle', () => {
    const wrapper = shallow(<MenuItem {...mockProps} />);
    expect(wrapper.find(ContentTitle)).toBeDefined();
  });
  it('renders ContentSubtitle', () => {
    const wrapper = shallow(<MenuItem {...mockProps} />);
    expect(wrapper.find(ContentSubtitle)).toBeDefined();
  });
});
