import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import createFilter from 'redux-persist-transform-filter';
// import sessionStorage from 'redux-persist/es/storage/session';
import storage from 'redux-persist/lib/storage';

// Reducer imports
import { userReducer } from '../reducers/userReducer';

// Create user-only and step-only filters
const saveUserOnlyFilter = createFilter('user', ['user']);

// Persist config to hydrate only user and step
const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['user'],
    transforms: [saveUserOnlyFilter],
};

const rootReducer = combineReducers({
    user: userReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({ serializableCheck: false }),
    devTools: true,
});

export const persistor = persistStore(store);
