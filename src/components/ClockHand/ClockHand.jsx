import React from 'react'

import classes from './ClockHand.module.scss'

const ClockHand = ({type}) => {
  return (
    <span className={classes[`${type}-hand`]}></span>
  )
}

export default ClockHand