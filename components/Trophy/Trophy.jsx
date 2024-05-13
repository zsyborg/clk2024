import React, { Component } from 'react'
// import styles from './Trophy.module.css'
import trophy from "./trophy.png"
export default class Trophy extends Component {
  render(){

    return (
      <div className="container">
      <div className="row flex-row flex justify-center items-center">
        <div className="col-6 flex flex-col justify-center items-center text-center">

        <img className="trophyImg" src="/trophy.png" alt="" />
        
        </div>
        <div className="col-6 flex flex-col justify-center items-center text-center">
        <p className="text text-white">{this.props.clickCount}</p>
        </div>
      </div>
    </div>
  )
 }
}
// export default Trophy