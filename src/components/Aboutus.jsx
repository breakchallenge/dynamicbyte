import React from 'react'
import { team } from '../constants'
import styles from '../style'
import Card from './Card'

const Aboutus = () => {
  return (
    <section id='about' className={`${styles.paddingY} ${styles.flexce} flex-col relative`}>
      <div className='absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40'/>
      <div className='w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]'>
        <h2 className={styles.heading2}>Our Team </h2>
        <div className='w-full md:mt-0 mt-6'>
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>
            Our team of seasoned professionals is dedicated to delivering innovative solutions that drive business growth. We leverage cutting-edge technologies and industry best practices to create robust, scalable, and user-friendly websites and applications. 
          </p>  
        </div>
      </div>
      <div className='flex flex-wrap justify-center w-full feedback-contrainer relative z-[1]'>
        {team.map((card) => (
          <Card key={card.id} {...card}/>        
        ))}
      </div>      
    </section>
  )
}

export default Aboutus
