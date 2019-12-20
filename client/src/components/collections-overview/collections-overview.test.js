import React from 'react';
import { shallow, mount } from 'enzyme';
import { CollectionsOverview } from './collections-overview.component';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

describe('create shapshot', () => {
  const initialState = {
    collections: [
      {
        routeName: '/mens',
        id: '12',
        title: 'Mens',
        items: [
          { id: '1', imageUrl: 'url', price: 200 },
          { id: '1', imageUrl: 'url', price: 200 },
        ],
      },
      {
        routeName: '/mens',
        id: '12',
        title: 'Mens',
        items: [
          { id: '1', imageUrl: 'url', price: 200 },
          { id: '1', imageUrl: 'url', price: 200 },
        ],
      },
      {
        routeName: '/mens',
        id: '12',
        title: 'Mens',
        items: [
          { id: '1', imageUrl: 'url', price: 200 },
          { id: '1', imageUrl: 'url', price: 200 },
        ],
      },
      {
        routeName: '/mens',
        id: '12',
        title: 'Mens',
        items: [
          { id: '1', imageUrl: 'url', price: 200 },
          { id: '1', imageUrl: 'url', price: 200 },
        ],
      },
    ],
  };

  const mockStore = configureStore();
  let store;
  let container;

  store = mockStore(initialState);
  container = shallow(
    <MemoryRouter>
      <CollectionsOverview {...initialState} />
    </MemoryRouter>,
  ).dive();

  it('captures snapshot of CollectionsOverview', () => {
    const wrapper = renderer.create(container).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
