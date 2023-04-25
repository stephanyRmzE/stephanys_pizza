import React from 'react'
import styles from "../styles/Footer.module.css"
import Image from 'next/image'

const Footer = () => {
  return (
    <div className={styles.container}>
       <div className={styles.item}>
        <Image
          src='/img/footer.png'
          alt='footer'
          fill
          sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"/>
       </div>
       <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>Bringing a slice of happiness to your table!</h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
          <p className={styles.text}>
            1654 R. Don Road #304.
            <br /> NewYork, 85022
            <br /> (602) 867-1010
          </p>
          <p className={styles.text}>
            2356 K. Laquie Rd #235.
            <br /> NewYork, 85022
            <br /> (602) 867-1011
          </p>
          <p className={styles.text}>
            1614 E. Erwin St #104.
            <br /> NewYork, 85022
            <br /> (602) 867-1012
          </p>
          <p className={styles.text}>
            1614 W. Caroll St #125.
            <br /> NewYork, 85022
            <br /> (602) 867-1013
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br /> 9:00 – 22:00
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 12:00 – 24:00
          </p>
        </div>
       </div>
    </div>
  )
}

export default Footer
