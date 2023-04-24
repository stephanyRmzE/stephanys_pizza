import React from 'react'
import styles from "../styles/PizzaCard.module.css"
import Image from 'next/image'

const PizzaCard = () => {
  return (
    <div className={styles.container}>
      <Image src='/img/pizza_margarita.png' alt='pizza' width={200} height={200}/>
      <h1 className={styles.title}>MARGHERITA</h1>
      <span className={styles.price}> $19.90</span>
      <p className={styles.desc}>Tomato sauce, mozzarella cheese, fresh basil.</p>
    </div >
  )
}

export default PizzaCard
