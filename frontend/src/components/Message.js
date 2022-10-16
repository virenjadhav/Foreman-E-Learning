import React from 'react'

const Message = ({message}) => {
  return (
    <div>
        {message != '' ? 
<div class="alert alert-success" role="alert">
  {/* This is a success alert—check it out! */}
  {message}
</div>
 : ""}
    </div>
  )
}

export default Message