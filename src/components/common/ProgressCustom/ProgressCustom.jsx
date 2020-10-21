import React from 'react'
import { Progress } from 'reactstrap'

const ProgressCustom = ({ parcial, total, label }) => {
  return (
    <>
      <Progress
        style={{ borderRadius: '4px' }}
        value={Math.ceil((parcial / total) * 100)}
      >
        {Math.ceil((parcial / total) * 100)}%
      </Progress>
      <p style={{ color: '#1eaedf', textAlign: 'center', fontSize: '12px' }}>
        {label}
      </p>
    </>
  )
}

export default ProgressCustom
