import { takeLatest, call, put, all } from 'redux-saga/effects';

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils';

import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from './shop.actions';

import ShopActionTypes from './shop.types';

export const requestCollections = () => {
  return firestore
    .collection('collections')
    .get()
    .then(snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(
        snapshot,
      );
      return collectionsMap;
    })
    .catch(error => {
      console.log(error);
    });
};

export function* fetchCollectionsAsync() {
  try {
    const collectionsMap = yield call(requestCollections);
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync,
  );
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)]);
}
