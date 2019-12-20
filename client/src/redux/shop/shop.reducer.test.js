import ShopActionTypes from './shop.types';
import shopReducer from './shop.reducer';

describe('shop reducer', () => {
  it('should return initial state', () => {
    const initialState = undefined;
    const expectedState = {
      collections: null,
      isFetching: false,
      errorMessage: undefined,
    };
    expect(shopReducer(initialState, {})).toEqual(expectedState);
  });
  it('sholud handle FETCH_COLLECTIONS_START', () => {
    const initialState = {
      collections: null,
      isFetching: false,
      errorMessage: undefined,
    };
    const action = {
      type: ShopActionTypes.FETCH_COLLECTIONS_START,
    };
    const expectedState = {
      collections: null,
      isFetching: true,
      errorMessage: undefined,
    };
    expect(shopReducer(initialState, action)).toEqual(expectedState);
  });
  it('should handle FETCH_COLLECTIONS_SUCCESS', () => {
    const initialState = {
      collections: null,
      isFetching: false,
      errorMessage: undefined,
    };
    const action = {
      type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
      payload: {
        mens: { mens: 'mens' },
        sneakers: { sneakers: 'sneakers' },
        hats: { hats: 'hats' },
        jackets: { jackets: 'jackets' },
        women: { women: 'women' },
      },
    };
    const expectedState = {
      collections: {
        mens: { mens: 'mens' },
        sneakers: { sneakers: 'sneakers' },
        hats: { hats: 'hats' },
        jackets: { jackets: 'jackets' },
        women: { women: 'women' },
      },
      isFetching: false,
      errorMessage: undefined,
    };
    expect(shopReducer(initialState, action)).toEqual(expectedState);
  });
  it('should handle FETCH_COLLECTIONS_FAILURE', () => {
    const initialState = {
      collections: null,
      isFetching: false,
      errorMessage: undefined,
    };
    const action = {
      type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
      payload: {
        error: 'error',
      },
    };
    const expectedState = {
      collections: null,
      isFetching: false,
      errorMessage: { error: 'error' },
    };
    expect(shopReducer(initialState, action)).toEqual(expectedState);
  });
});
