import { call } from 'redux-saga/effects';
import { expectSaga } from 'redux-saga-test-plan';
import {
  fetchCollectionsAsync,
  requestCollections,
} from './shop.sagas';
import { fetchCollectionsSuccess } from './shop.actions';

describe('test shop sagas', () => {
  it('should make request for collections to firestore', () => {
    const mockCollections = {
      mens: {
        routeName: 'mens',
        id: '18e2t1B0UGyTMXUsuq4u',
        title: 'Mens',
        items: Array(6),
      },
      hats: {
        routeName: 'hats',
        id: 'IVW8W5ZuxbnertdZ0JOQ',
        title: 'Hats',
        items: Array(9),
      },
      sneakers: {
        routeName: 'sneakers',
        id: 'jdJzXqOYjNTPuY1UEdY6',
        title: 'Sneakers',
        items: Array(8),
      },
      jackets: {
        routeName: 'jackets',
        id: 'nG2TWy92v1qxe4Vym2YC',
        title: 'Jackets',
        items: Array(5),
      },
      womens: {
        routeName: 'womens',
        id: 'z5v0hPwq6V6oGvgmxkcJ',
        title: 'Womens',
        items: Array(7),
      },
    };

    return expectSaga(fetchCollectionsAsync)
      .provide([[call(requestCollections), mockCollections]])
      .put(fetchCollectionsSuccess(mockCollections))
      .run();
  });
});
