import React from 'react'
import Linkify from 'react-linkify'

const DescriptionComponent = ({ children, style }) => {
  const componentDecorator = (href, text, key) => (
    <a href={href} key={key} target="_blank">
      {text}
    </a>
  )
  return (
    <div style={{ ...style, whiteSpace: 'pre-wrap' }}>
      <Linkify componentDecorator={componentDecorator}>{children}</Linkify>
    </div>
  )
}

export default DescriptionComponent
