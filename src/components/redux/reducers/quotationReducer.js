const initialState = {
    projects: [],
    selectedProject: null,
    loading: false,
    error: null
};

function quotationReducer(state = initialState, action) {
    switch (action.type) {
        case 'QUOTATION_FETCH_START':
            return {
                ...state,
                loading: true,
                error: null
            };
        case 'QUOTATION_FETCH_SUCCESS':
            return {
                ...state,
                projects: action.projects,
                loading: false,
                error: null
            };
        case 'QUOTATION_FETCH_FAIL':
            return {
                ...state,
                loading: false,
                error: action.error
            };
        case 'QUOTATION_SELECT_PROJECT':
            return {
                ...state,
                selectedProject: action.project
            };
        case 'QUOTATION_CLEAR_SELECTED_PROJECT':
            return {
                ...state,
                selectedProject: null
            };
        default:
            return state;
    }
}

export default quotationReducer;