import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';
import { fetchCollectionsStartAsync } from './shop.actions';

describe('shop actions', () => {
  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);

  afterEach(() => {
    fetchMock.restore();
  });
  it('fetch collections success', () => {
    const store = mockStore({});
    const expectedActions = [
      'FETCH_COLLECTIONS_START',
      'FETCH_COLLECTIONS_SUCCESS',
    ];

    fetchMock.get('*', { response: 200 });

    return store.dispatch(fetchCollectionsStartAsync()).then(() => {
      const actualActions = store
        .getActions()
        .map(action => action.type);
      expect(actualActions).toEqual(expectedActions);
    });
  });
});
