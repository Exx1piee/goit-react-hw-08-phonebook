import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsSlice";
import { filterReducer } from "./filterSlice";
import { backgroundReducer } from "./backgroundImgSlice";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    } from 'redux-persist';
import storage from "redux-persist/lib/storage";
import { authReducer } from "./BackEndProps/slice";

const authConfig = {
    key: 'auth',
    storage,
    whitelist: ['token', 'isLoggedIn', 'user'],
};

export const store = configureStore({
    reducer: {
        auth: persistReducer(authConfig, authReducer),
        contacts: contactsReducer,
        filter: filterReducer,
        backgroundImages: backgroundReducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);