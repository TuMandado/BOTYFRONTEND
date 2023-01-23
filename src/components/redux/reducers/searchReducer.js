const initialState = {
    searchParameters: {
        key: '',
        category: '',
        seller: '',
        site: '',
        brand: '',
        negative_key: '',
        negative_category: '',
        competencia: false,
    },
    searchResults: [],
    loading: false,
    error: null
};

function searchReducer(state = initialState, action) {
    switch (action.type) {
        case 'SEARCH_UPDATE_PARAMETERS':
            return {
                ...state,
                searchParameters: {
                    ...state.searchParameters,
                    ...action.parameters
                }
            };
        case 'SEARCH_START':
            return {
                ...state,
                loading: true,
                error: null
            };
        case 'SEARCH_SUCCESS':
            return {
                ...state,
                searchResults: action.results,
                loading: false,
                error: null
            };
        case 'SEARCH_FAIL':
            return {
                ...state,
                loading: false,
                error: action.error
            };
        default:
            return state;
    }
}

export default searchReducer;