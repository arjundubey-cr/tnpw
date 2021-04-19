import React, { useEffect, useState } from 'react'
import { Alert } from 'react-bootstrap'

const Message = ({ variant, children, duration, onDurationEnd }) => {
  const [show, setShow] = useState(false)
  useEffect(() => {
    setShow(true)
  }, [show])

  setTimeout(() => {
    setShow(false)
  }, 2000)

  return (
    <Alert show={show} variant={variant}>
      {children}
    </Alert>
  )
}

Message.defaultProps = {
  variant: 'info',
  show: true,
  duration: 2000,
}

export default Message
