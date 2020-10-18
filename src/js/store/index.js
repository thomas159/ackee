import { createStore, applyMiddleware, compose } from 'redux'
import { persistStore, persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import thunk from 'redux-thunk'
import reducers from '../reducers'

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2, // see "Merge Process" section for details.
  whitelist: [ 'rateRecipe' ],
}

const rootReducer = {
  ...reducers,
}

const pReducer = persistCombineReducers(persistConfig, rootReducer)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(pReducer, composeEnhancers(applyMiddleware(thunk)))

export const persistor = persistStore(store)
export default store
