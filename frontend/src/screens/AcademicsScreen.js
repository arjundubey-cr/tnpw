import React from 'react'
import { Button } from 'react-bootstrap'

const AcademicsScreen = () => {
  return (
    <div>
      <Button
        variant='primary'
        size='lg'
        block
        disabled
        className='heading-button font-weight-bolder'>
        Academics
      </Button>
      <div className='mt-3 font-size-large'>
        The Faculty of Engineering and Technology has a thriving atmosphere in
        its environment. We invest our energies heavily in academic rigour,
        career development and campus engagement. Our students have the
        eagerness to learn and ameliorate their skills with practical
        application.
      </div>
    </div>
  )
}

export default AcademicsScreen
