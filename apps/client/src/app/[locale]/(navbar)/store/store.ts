import { configureStore, ThunkAction, Action, combineReducers } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { tabSlice } from "./slices/tabSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
    [tabSlice.name]: tabSlice.reducer,
    
});

const makeConfiguredStore = () => configureStore({
    reducer: rootReducer,
    devTools: true,
});

const makeStore  = () => {
    const isServer = typeof window === 'undefined';
    if (isServer) {
        return makeConfiguredStore ();
    } else {
        const persistConfig = {
            key: 'nextjs',
            whitelist: ['tab'],
            storage,
        };
        const persistedReducer = persistReducer(persistConfig, rootReducer);
        let store: any = configureStore({
            reducer: persistedReducer,
            devTools: process.env.NODE_ENV !== 'production',
            middleware: (getDefaultMiddleware) => getDefaultMiddleware({
                serializableCheck: false,
            }),
        });
        store.__persistor = persistStore(store);
        return store;
    }
}

export type RootState = ReturnType<typeof makeStore >;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const wrapper = createWrapper<RootState>(makeStore);