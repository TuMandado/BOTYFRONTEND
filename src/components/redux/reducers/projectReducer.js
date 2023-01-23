import {
    PROJECT_SELECT,
    PROJECT_UPDATE_TOKEN,
    PROJECT_ADD_CLIENT,
    PROJECT_REMOVE_CLIENT,
    PROJECT_UPDATE_CLIENT_PERMISSIONS,
    PROJECT_UPDATE_CATEGORY_PERMISSIONS
} from '../actions/actionTypes';

const initialState = {
    selectedProject: null,
    projects: {},
    clients: {}
};

const projectReducer = (state = initialState, action) => {
    switch (action.type) {
        case PROJECT_SELECT:
            return {
                ...state,
                selectedProject: action.payload
            };
        case PROJECT_UPDATE_TOKEN:
            return {
                ...state,
                projects: {
                    ...state.projects,
                    [action.payload.projectId]: {
                        ...state.projects[action.payload.projectId],
                        token: action.payload.token
                    }
                }
            };
        case PROJECT_ADD_CLIENT:
            return {
                ...state,
                clients: {
                    ...state.clients,
                    [action.payload.clientId]: {
                        projectId: action.payload.projectId,
                        permissions: action.payload.permissions,
                        categoryPermissions: action.payload.categoryPermissions
                    }
                }
            };
        case PROJECT_REMOVE_CLIENT:
            const updatedClients = { ...state.clients };
            delete updatedClients[action.payload.clientId];
            return {
                ...state,
                clients: updatedClients
            };
        case PROJECT_UPDATE_CLIENT_PERMISSIONS:
            return {
                ...state,
                clients: {
                    ...state.clients,
                    [action.payload.clientId]: {
                        ...state.clients[action.payload.clientId],
                        permissions: action.payload.permissions
                    }
                }
            };
        case PROJECT_UPDATE_CATEGORY_PERMISSIONS:
            return {
                ...state,
                clients: {
                    ...state.clients,
                    [action.payload.clientId]: {
                        ...state.clients[action.payload.clientId],
                        categoryPermissions: action.payload.categoryPermissions
                    }
                }
            };
        default:
            return state;
    }
};

export default projectReducer;