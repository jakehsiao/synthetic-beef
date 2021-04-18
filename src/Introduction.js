import React from 'react'

export function Introduction(props) {
  return <div className="introduction">
    <div className="introduction-img-container">
      <img className="introduction-img" src={props.img}></img>
    </div>
    <div className="introduction-content-container">
      <div className="introduction-title">{props.title}</div>
      <div className="introduction-desc">{props.desc}</div>
    </div>
  </div>
}