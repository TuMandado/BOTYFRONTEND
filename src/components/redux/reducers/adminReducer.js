import {
    ADMIN_ADD_USER,
    ADMIN_DELETE_USER,
    ADMIN_UPDATE_USER,
    ADMIN_ADD_CLIENT,
    ADMIN_DELETE_CLIENT,
    ADMIN_UPDATE_CLIENT,
    ADMIN_ADD_SKU,
    ADMIN_DELETE_SKU,
    ADMIN_UPDATE_SKU,
    ADMIN_ADD_PVP,
    ADMIN_DELETE_PVP,
    ADMIN_UPDATE_PVP
} from '../actions/actionTypes';

const initialState = {
    users: [],
    clients: [],
    skus: [],
    pvps: []
};

const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADMIN_ADD_USER:
            return {
                ...state,
                users: [...state.users, action.user]
            };
        case ADMIN_DELETE_USER:
            return {
                ...state,
                users: state.users.filter(user => user.id !== action.userId)
            };
        case ADMIN_UPDATE_USER:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.user.id) {
                        return action.user;
                    }
                    return user;
                })
            };
        case ADMIN_ADD_CLIENT:
            return {
                ...state,
                clients: [...state.clients, action.client]
            };
        case ADMIN_DELETE_CLIENT:
            return {
                ...state,
                clients: state.clients.filter(client => client.id !== action.clientId)
            };
        case ADMIN_UPDATE_CLIENT:
            return {
                ...state,
                clients: state.clients.map(client => {
                    if (client.id === action.client.id) {
                        return action.client;
                    }
                    return client;
                })
            };
        case ADMIN_ADD_SKU:
            return {
                ...state,
                skus: [...state.skus, action.sku]
            };
        case ADMIN_DELETE_SKU:
            return {
                ...state,
                skus: state.skus.filter(sku => sku.id !== action.skuId)
            };
        case ADMIN_UPDATE_SKU:
            return {
                ...state,
                skus: state.skus.map(sku => {
                    if (sku.id === action.sku.id) {
                        return action.sku;
                    }
                    return sku;
                })
            };
        case ADMIN_ADD_PVP:
            return {
                ...state,
                pvps: [...state.pvps, action.pvp]
            };
        case ADMIN_DELETE_PVP:
            return {
                ...state,
                pvps: state.pvps.filter(pvp => pvp.id !== action.pvpId)
            };
        case ADMIN_UPDATE_PVP:
            return {
                ...state,
                pvps: state.pvps.map(pvp => {
                    if (pvp.id === action.pvp.id) {
                        return action.pvp;
                    }
                    return pvp;
                })
            };
        default:
            return state;
    }
};

export default adminReducer;