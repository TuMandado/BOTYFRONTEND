const initialState = {
    clients: {
        data: [],
        currentPage: 1,
        isLoading: false
    },
    clientPermissions: {
        data: [],
        isLoading: false
    },
    clientCategories: {
        data: [],
        isLoading: false
    }
}

const clientReducer = (state = initialState, action) => {
    switch (action.type) {
        case CLIENT_ADD:
            return {
                ...state,
                clients: {
                    ...state.clients,
                    data: [...state.clients.data, action.client]
                }
            }
        case CLIENT_DELETE:
            return {
                ...state,
                clients: {
                    ...state.clients,
                    data: state.clients.data.filter(client => client.id !== action.id)
                }
            }
        case CLIENT_UPDATE_PERMISSIONS:
            return {
                ...state,
                clientPermissions: {
                    ...state.clientPermissions,
                    data: action.permissions
                }
            }
        case CLIENT_UPDATE_CATEGORIES:
            return {
                ...state,
                clientCategories: {
                    ...state.clientCategories,
                    data: action.categories
                }
            }
        case CLIENT_UPDATE_PAGE:
            return {
                ...state,
                clients: {
                    ...state.clients,
                    currentPage: action.page
                }
            }
        case CLIENT_UPDATE_LOADING:
            return {
                ...state,
                clients: {
                    ...state.clients,
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
    general: generalReducer,
    client: clientReducer
});

const store = createStore(rootReducer);

export default store;