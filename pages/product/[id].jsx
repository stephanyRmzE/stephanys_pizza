import axios from "axios"
import React, {useState} from 'react'
import Image from 'next/image'
import styles from "../../styles/Product.module.css"
import { useDispatch } from 'react-redux'
import { addProduct } from "@/redux/cartSlice"

const Product = ({pizza}) => {
  const [price, setPrice] = useState(pizza.prices[0])
  const [size, setSize] = useState(0)
  const [extras, setExtras] = useState([]);
  const [quantity, setQuantity] = useState(1)
  const dispatch = useDispatch()

  const priceChange = (number) => {
    setPrice(price + number)
  }

  const handleSize = (sizeIndex) => {
    const differencia = pizza.prices[sizeIndex] - pizza.prices[size]
    setSize(sizeIndex)
    priceChange(differencia)
  }

  const handleChange = (e, option) => {
    const checked = e.target.checked;
    if(checked){
      priceChange(option.price)
      setExtras((prev) => [...prev , option]);
    } else {
      priceChange(-option.price)
      setExtras(extras.filter((extra) => extra._id !== option._id));
    }
  }

  const handleClick = () => {
    dispatch(addProduct({...pizza, extras, price, quantity }));
  }

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
          <h1 className={styles.title}>{pizza.title}</h1>
          <span className={styles.price}> $ {price}</span>
          <p className={styles.desc}>{pizza.desc}</p>
          <h3 className={styles.choose}>Choose the size</h3>
          <div className={styles.sizes}>
            <div className={styles.size}>
              <div className={styles.sizeSmall} onClick={()=>handleSize(0)}>
                <Image src='/img/pizza_size.png' alt='pizza' fill  />
              </div>
              <span className={styles.number}>Small</span>
            </div>
            <div className={styles.size}>
              <div className={styles.sizeMedium} onClick={()=>handleSize(1)}>
                <Image src='/img/pizza_size.png' alt='pizza' fill  />
              </div>
              <span className={styles.number}>Medium</span>
            </div>
            <div className={styles.size}>
              <div className={styles.sizeLarge} onClick={()=>handleSize(2)}>
                <Image src='/img/pizza_size.png' alt='pizza' fill  />
              </div>
              <span className={styles.number}>Large</span>
            </div>
          </div>
          <h3 className={styles.choose}>Choose aditional ingredients</h3>
          <div className={styles.ingredients}>
            {pizza.extraOptions.map((option) =>(
              <div className={styles.option} key={option._id}>
                <input
                  type='checkbox'
                  id={option.text}
                  name={option.text}
                  className={styles.checkbox}
                  onChange={(e) => handleChange(e, option)}
                />
                <label htmlFor="double" className={styles.checkboxLabel}>{option.text}</label>
              </div>
            ))}


          </div>
          <div className={styles.add}>
            <input
              onChange = {(e) => setQuantity(e.target.value)}
              type='number'
              defaultValue={1}
              className={styles.quantity}
            />
            <button className={styles.button} onClick={handleClick}> Add to Cart</button>
          </div>
        </div>
      </div>

  )
}

export const getServerSideProps = async ({params}) => {

  let dev = process.env.NODE_ENV !== 'production';
  let { DEV_URL, PROD_URL } = process.env;

  const res = await axios.get(`${dev ? DEV_URL : PROD_URL}/api/products/${params.id}`)

  return {
    props: {
      pizza: res.data,
    },
  };
};

export default Product
