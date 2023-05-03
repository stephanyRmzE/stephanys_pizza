import React from 'react'
import styles from "../styles/PizzaList.module.css"
import PizzaCard from './PizzaCard'

const PizzaList = ( {pizzaList} ) => {


  return (
    <div className={styles.container}>

      <h1 className={styles.title}>
        THE BEST PIZZA IN TOWN
      </h1>
      <p className={styles.desc}>
        Welcome to our pizza place! Please take a look at our menu and choose from our delicious selection of pizzas. All of our pizzas are made with fresh, high-quality ingredients and baked to perfection in our ovens. We offer a variety of classic and specialty pizzas to satisfy any craving. Here are some of our most popular pizzas:
      </p>
      <div className={styles.wrapper}>
          {pizzaList.map((pizza) =>
            <div key={pizza._id} className={styles.card}>
              <PizzaCard pizza={pizza}/>
            </div>
          )}

      </div>

    </div>
  )
}

export default PizzaList
