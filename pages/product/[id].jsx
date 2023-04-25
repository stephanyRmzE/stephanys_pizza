import React, {useState} from 'react'
import Image from 'next/image'
import styles from "../../styles/Product.module.css"


const Product = () => {
  const [size, setSize] = useState(0)
  const pizza = {
    id: 1,
    img: "/img/pizza_margarita.png",
    name: "MARGHERITA",
    price: [16.9, 21.9, 25.9],
    desc: "Tomato sauce, mozzarella cheese, fresh basil.",
  };

  return (

      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.imgContainer}>
            <Image
              src={pizza.img}
              alt='pizza'
              fill
              style={{contain:"cover",
                      objectPosition: 'center'}} />
          </div>
        </div>
        <div className={styles.right}>
          <h1 className={styles.title}>{pizza.name}</h1>
          <span className={styles.price}> {pizza.price[size]}</span>
          <p className={styles.desc}>{pizza.desc}</p>
          <h3 className={styles.choose}>Choose the size</h3>
          <div className={styles.sizes}>
            <div className={styles.size}>
              <div className={styles.sizeSmall} onClick={()=>setSize(0)}>
                <Image src='/img/pizza_size.png' alt='pizza' fill  />
              </div>
              <span className={styles.number}>Small</span>
            </div>
            <div className={styles.size}>
              <div className={styles.sizeMedium} onClick={()=>setSize(1)}>
                <Image src='/img/pizza_size.png' alt='pizza' fill  />
              </div>
              <span className={styles.number}>Medium</span>
            </div>
            <div className={styles.size}>
              <div className={styles.sizeLarge} onClick={()=>setSize(2)}>
                <Image src='/img/pizza_size.png' alt='pizza' fill  />
              </div>
              <span className={styles.number}>Large</span>
            </div>
          </div>
          <h3 className={styles.choose}>Choose aditional ingredients</h3>
          <div className={styles.ingredients}>
            <div className={styles.option}>
              <input
                type='checkbox'
                id='double'
                name='double'
                className={styles.checkbox}
              />
              <label htmlFor="double" className={styles.checkboxLabel}>Double Ingredients</label>
            </div>
            <div className={styles.option}>
              <input
                type='checkbox'
                id='cheese'
                name='cheese'
                className={styles.checkbox}
              />
              <label htmlFor="cheese" className={styles.checkboxLabel}>Extra Cheese</label>
            </div>
            <div className={styles.option}>
              <input
                type='checkbox'
                id='spicy'
                name='spicy'
                className={styles.checkbox}
              />
              <label htmlFor="spicy" className={styles.checkboxLabel}>Spicy Sauce</label>
            </div>
            <div className={styles.option}>
              <input
                type='checkbox'
                id='garlic'
                name='garlic'
                className={styles.checkbox}
              />
              <label htmlFor="garlic" className={styles.checkboxLabel}>Garlic Sauce</label>
            </div>
          </div>
          <div className={styles.add}>
            <input
                type='number'
                defaultValue={1}
                className={styles.quantity}
            />
            <button className={styles.button}> Add to Cart</button>
          </div>
        </div>
      </div>

  )
}

export default Product
