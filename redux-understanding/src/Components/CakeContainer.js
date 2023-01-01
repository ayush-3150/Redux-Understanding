import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux'

function CakeContainer (props) {
  return (
    <div>
      <h2>No of cakes- {props.noOfCakes}</h2>
      <button onClick={props.buyCake} type='submit'>
        Buy Cake
      </button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    noOfCakes: state.noOfCakes
  }
}

const mapDisptachToProps = dispatch => {
  return {
    buyCake: () => dispatch(buyCake())
  }
}

export default connect(mapStateToProps, mapDisptachToProps)(CakeContainer)
