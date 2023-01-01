const redux = require('redux')
const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware
const reduxThunkMiddleware = require('redux-thunk').default
const axios = require('axios')
const { response } = require('express')
//State
const initialState = {
  loading: false,
  data: [],
  error: ''
}
const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
const FETCH_USERS_FAIL = 'FETCH_USERS_FAIL'
const fetchUserRequest = () => {
  return {
    type: FETCH_USERS_REQUEST
  }
}
const fetchUserSuccess = users => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users
  }
}
const fetchUserError = error => {
  return {
    type: FETCH_USERS_FAIL,
    payload: error
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true
      }

    case FETCH_USERS_SUCCESS:
      return {
        loading: false,
        users: action.payload,
        error: ''
      }
    case FETCH_USERS_FAIL:
      return {
        loading: false,
        users: [],
        error: action.payload
      }
  }
}

const fetchUser = () => {
  return function (dispatch) {
    dispatch(fetchUserRequest())
    axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
      const user=response.data.map(user=>user.id)
    dispatch(fetchUserSuccess(user))
    }).catch(error=>{
        //error
        dispatch(fetchUserError(error))
    })
  }
}

const store = createStore(reducer, applyMiddleware(reduxThunkMiddleware))
console.log("intial state "+store.getState());
store.subscribe(()=>{
    console.log(store.getState());
})

store.dispatch(fetchUser())
