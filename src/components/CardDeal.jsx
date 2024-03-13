import React from 'react'
import { card } from '../assets'
import Button from './Button'
import styles, { layout } from '../style'

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Find a better solution <br className='sm:block hidden'/>in a few easy steps.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          We strive to create innovative web solutions, from CMS to mobile apps, that empower businesses. Our mission is to enhance online presence through SEO, e-commerce, and exceptional website design.
        </p>
        <a href="#contact">
          <Button styles='mt-10'/>
        </a>
      </div>
      <div className={layout.sectionImg}>
        <img
          src={card}
          alt='card'
          className='w-[100%] h-[100%]'
        />
      </div>
    </section>
  )
}

export default CardDeal
