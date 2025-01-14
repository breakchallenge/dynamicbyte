import React from 'react'
import styles from '../style'
import Button from './Button'

const CTA = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
      <div className='flex-1 flex flex-col'>
        <h2 className={styles.heading2}>Let's try our service now!</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Everything you need to collaborate with us and grow your business anywhere on the planet.
        </p>
      </div>
      <a href="#contact">
        <div className={`${styles.flexCenter} sm:ml-10 ml-0`}>
          <Button/>
        </div>
      </a>
    </section>
  )
}

export default CTA
