import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducers'

/*const store = createStore(
  reducer,
  compose( applyMiddleware(thunk),
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION__  !== 'undefined' ?
    window.__REDUX_DEVTOOLS_EXTENSION__() : null
  )
)*/


let store;
if((window.__REDUX_DEVTOOLS_EXTENSION__ || window.__REDUX_DEVTOOLS_EXTENSION__)){
    store = createStore(
        reducer,
        compose( applyMiddleware(thunk),
          typeof window === 'object' &&
          window.__REDUX_DEVTOOLS_EXTENSION__  !== 'undefined' ?
          window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
      ))
}else{
    store = createStore(
        reducer,
        compose(applyMiddleware(thunk))        
    );
}

export default store


 
