import React from 'react'

import PropTypes from 'prop-types'

import styles from './card.module.css'

const Card = (props) => {
  return (
    <div className={` ${styles['card']} ${styles[props.rootClassName]} `}>
      <div className={styles['info']}>
        <span className={styles['text']}>{props.text}</span>
        <span className={styles['text1']}>{props.text1}</span>
      </div>
    </div>
  )
}

Card.defaultProps = {
  rootClassName: '',
  text: 'Business',
  text1: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do.',
}

Card.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
}

export default Card
