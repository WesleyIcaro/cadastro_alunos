import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistedReducers = persistReducer(
    {
      key: 'CONSUMING_API_CADASTRO',
      storage,
      whitelist: ['auth'],
    },
    reducers,
  );
  return persistedReducers;
};
