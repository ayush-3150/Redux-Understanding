const redux = require('redux')
const createStore = redux.createStore
const combineReducers = redux.combineReducers
//state
const intialCakeState = {
  numOfCakes: 10
}
const intialIcecreamState = {
  numsOfIcecreams: 10
}

//Creating action
const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

//action creator that returns action
const buyCake = () => {
  return {
    type: BUY_CAKE,
    info: 'first redux action'
  }
}
const buyIcecream = () => {
  return {
    type: BUY_ICECREAM,
    info: 'first redux action'
  }
}

//Reducer
//(previousState,action)=>newState

const CakeReducer = (state = intialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1
      }
    default:
      return state
  }
}
const IceCreamReducer = (state = intialIcecreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numsOfIcecreams: state.numsOfIcecreams - 1
      }
    default:
      return state
  }
}
const rootReducer = combineReducers({
    cake:CakeReducer,
    icecream:IceCreamReducer
})
const store = createStore(rootReducer)
console.log('intial state ' + JSON.stringify(store.getState()))
const unsubscribe = store.subscribe(() => {
  console.log('update state ' + JSON.stringify(store.getState()))
})

store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIcecream())
unsubscribe()
