import React from 'react'

function Post({post}) {
    const render = post.map((pos) => {
        return( 
        <div key={pos.id}>
            <h1>{pos.title}</h1>
            <p>{pos.body}</p>
            </div>
        )
    })
  return (
    <div>{render}</div>
  )
}

export default Post