import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import  {CookieStorage}  from 'redux-persist-cookie-storage'
import Cookies from 'js-cookie';
import rootReducer, { RootState } from './reducers/index';

// Configures the Redux Persist reducer with the desired options
const persistConfig = {
    key: 'root',
    storage: new CookieStorage(Cookies)
};


const persistedReducer = persistReducer<RootState>(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
});

export const persistor = persistStore(store, null, () => {
    console.log('Rehydration completed!');
});
