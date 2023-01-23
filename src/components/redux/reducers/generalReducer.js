const initialState = {
    currentPage: 1,
    isLoading: false,
    data: [],
    lastFetch: null
};

const salesDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case SALES_UPDATE_PAGE:
            return {
                ...state,
                currentPage: action.page
            };
        case SALES_TOGGLE_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            };
        case SALES_UPDATE_DATA:
            return {
                ...state,
                data: action.data,
                lastFetch: Date.now()
            };
        default:
            return state;
    }
};

const postsDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case POSTS_UPDATE_PAGE:
            return {
                ...state,
                currentPage: action.page
            };
        case POSTS_TOGGLE_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            };
        case POSTS_UPDATE_DATA:
            return {
                ...state,
                data: action.data,
                lastFetch: Date.now()
            };
        default:
            return state;
    }
};

const dailySaleDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case DAILY_SALES_UPDATE_PAGE:
            return {
                ...state,
                currentPage: action.page
            };
        case DAILY_SALES_TOGGLE_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            };
        case DAILY_SALES_UPDATE_DATA:
            return {
                ...state,
                data: action.data,
                lastFetch: Date.now()
            };
        default:
            return state;
    }
};

const lowPriceDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOW_PRICE_UPDATE_PAGE:
            return {
                ...state,
                currentPage: action.page
            };
        case LOW_PRICE_TOGGLE_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            };
        case LOW_PRICE_UPDATE_DATA:
            return {
                ...state,
                data: action.data,
                lastFetch: Date.now()
            };
        default:
            return state;
    }
};

const sellersDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELLERS_UPDATE_PAGE:
            return {
                ...state,
                currentPage: action.page
            };
        case SELLERS_TOGGLE_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            };
        case SELLERS_UPDATE_DATA:
            return {
                ...state,
                sellers: {
                    ...state.sellers,
                    data: action.data,
                    isLoading: false
                }
            }
        case SELLERS_UPDATE_PAGE:
            return {
                ...state,
                sellers: {
                    ...state.sellers,
                    currentPage: action.page
                }
            }
        case SELLERS_UPDATE_LOADING:
            return {
                ...state,
                sellers: {
                    ...state.sellers,
                    isLoading: true
                }
            }
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    auth: authReducer,
    admin: adminReducer,
    catalog: catalogReducer,
    competition: competitionReducer,
    general: generalReducer
});

const store = createStore(rootReducer);

export default store;