import {
  CATALOG_FETCH_PAGE_DATA,
  CATALOG_UPDATE_PAGE,
  CATALOG_TOGGLE_LOADING,
  CATALOG_UPDATE_DATA
} from '../actions/catalogActions';

const initialState = {
  catalogData: {
    data: [],
    currentPage: 1,
    isLoading: false,
    lastFetch: null
  },
  winCatalogData: {
    data: [],
    currentPage: 1,
    isLoading: false,
    lastFetch: null
  }
};

const catalogDataReducer = (state = initialState.catalogData, action) => {
  switch (action.type) {
    case CATALOG_FETCH_PAGE_DATA:
      return {
        ...state,
        isLoading: true
      };
    case CATALOG_UPDATE_PAGE:
      return {
        ...state,
        currentPage: action.page
      };
    case CATALOG_TOGGLE_LOADING:
      return {
        ...state,
        isLoading: action.isLoading
      };
    case CATALOG_UPDATE_DATA:
      return {
        ...state,
        data: action.data,
        lastFetch: Date.now()
      };
    default:
      return state;
  }
};

const winCatalogDataReducer = (state = initialState.winCatalogData, action) => {
  switch (action.type) {
    case CATALOG_FETCH_PAGE_DATA:
      return {
        ...state,
        isLoading: true
      };
    case CATALOG_UPDATE_PAGE:
      return {
        ...state,
        currentPage: action.page
      };
    case CATALOG_TOGGLE_LOADING:
      return {
        ...state,
        isLoading: action.isLoading
      };
    case CATALOG_UPDATE_DATA:
      return {
        ...state,
        data: action.data,
        lastFetch: Date.now()
      };
    default:
      return state;
  }
};

const catalogReducer = combineReducers({
  catalogData: catalogDataReducer,
  winCatalogData: winCatalogDataReducer
});

export default catalogReducer;
