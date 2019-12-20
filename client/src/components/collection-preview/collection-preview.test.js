import React from 'react';
import { shallow, mount } from 'enzyme';
import { CollectionPreview } from './collection-preview.component';
import {
  PreviewContainer,
  TitleContainer,
} from './collection-preview.styles';

const mockProps = {
  title: 'title',
  items: [1, 2, 3, 4],
  routeName: 'routeName',
};

describe('create snapshot', () => {
  it('captures snapshot of CollectionPreview', () => {
    const wrapper = shallow(<CollectionPreview {...mockProps} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('renders title', () => {
    const wrapper = shallow(<CollectionPreview {...mockProps} />);
    expect(wrapper.find(TitleContainer)).toBeDefined();
  });
  it('renders 4 collection items', () => {
    const wrapper = shallow(<CollectionPreview {...mockProps} />);
    expect(wrapper.find(PreviewContainer).children()).toHaveLength(4);
  });
});
