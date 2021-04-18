import React from 'react'

export function Article(props) {
  return <div className="article" onClick={() => window.open(props.url, "_blank")}>
    <div className="article-img-container">
      <img className="introduction-img article-img" src={props.img}></img>
    </div>
      <div className="article-title">{props.title}</div>
  </div>
}