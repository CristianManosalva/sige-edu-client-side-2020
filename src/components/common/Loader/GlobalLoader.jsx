import React from 'react'
import Loader from 'react-loader-spinner'
// import { ThreeDotsLoader } from './ManyLoaders'

const GlobalLoader = ({ style }) => {
  return (
    <div
      style={{
        width: '100%',
        // height: '100',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        ...style,
      }}
    >
      <Loader
        type="ThreeDots"
        color="#1EAEDF"
        secondaryColor="Green"
        height="100"
        width="100"
      />
      <span
        style={{
          fontSize: '1.2rem',
          //   marginTop: '.1rem',
          color: '#1EAEDF',
        }}
      >
        Cargando...
      </span>
    </div>
  )
}

export default GlobalLoader
