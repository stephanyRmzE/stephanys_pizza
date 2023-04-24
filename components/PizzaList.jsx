import React from 'react'
import styles from "../styles/PizzaList.module.css"
import PizzaCard from './PizzaCard'

const PizzaList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        THE BEST PIZZA IN TOWN
      </h1>
      <p className={styles.desc}>
        Welcome to our pizza place! Please take a look at our menu and choose from our delicious selection of pizzas. All of our pizzas are made with fresh, high-quality ingredients and baked to perfection in our ovens. We offer a variety of classic and specialty pizzas to satisfy any craving. Here are some of our most popular pizzas:
      </p>
      <div className={styles.wrapper}>
        <PizzaCard/>
        <PizzaCard/>
        <PizzaCard/>
        <PizzaCard/>
        <PizzaCard/>
        <PizzaCard/>
        <PizzaCard/>
        <PizzaCard/>
      </div>

    </div>
  )
}

export default PizzaList
