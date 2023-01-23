import {
    COMPETITION_FETCH_PAGE_DATA,
    COMPETITION_UPDATE_PAGE,
    COMPETITION_TOGGLE_LOADING,
    COMPETITION_UPDATE_DATA,
    BEST_SELLER_FETCH_PAGE_DATA,
    BEST_SELLER_UPDATE_PAGE,
    BEST_SELLER_TOGGLE_LOADING,
    BEST_SELLER_UPDATE_DATA
} from '../actions/competitionActions';

const initialState = {
    competitionData: {
        data: [],
        currentPage: 1,
        isLoading: false,
        lastFetch: null
    },
    bestSellerData: {
        data: [],
        currentPage: 1,
        isLoading: false,
        lastFetch: null
    }
};

const competitionDataReducer = (state = initialState.competitionData, action) => {
    switch (action.type) {
        case COMPETITION_FETCH_PAGE_DATA:
            return {
                ...state,
                isLoading: true
            };
        case COMPETITION_UPDATE_PAGE:
            return {
                ...state,
                currentPage: action.page
            };
        case COMPETITION_TOGGLE_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            };
        case COMPETITION_UPDATE_DATA:
            return {
                ...state,
                data: action.data,
                lastFetch: Date.now()
            };
        default:
            return state;
    }
};

const bestSellerDataReducer = (state = initialState.bestSellerData, action) => {
    switch (action.type) {
        case BEST_SELLER_FETCH_PAGE_DATA:
            return {
                ...state,
                isLoading: true
            };
        case BEST_SELLER_UPDATE_PAGE:
            return {
                ...state,
                currentPage: action.page
            };
        case BEST_SELLER_TOGGLE_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            };
        case BEST_SELLER_UPDATE_DATA:
            return {
                ...state,
                data: action.data,
                lastFetch: Date.now()
            };
        default:
            return state;
    }
};

const competitionReducer = combineReducers({
    competitionData: competitionDataReducer,
    bestSellerData: bestSellerDataReducer
});

export default competitionReducer;