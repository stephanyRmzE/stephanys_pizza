import React, {useState} from 'react';
import styles from "../styles/Add.module.css";
import axios from "axios";
import { useRouter } from 'next/router';
import { AiFillCloseCircle } from "react-icons/ai";

const Add = ({setClose}) => {

  const [file, setFile] = useState(null)
  const [title, setTitle] = useState(null)
  const [desc, setDesc] = useState(null)
  const [prices, setPrices] = useState([])
  const [extra, setExtra] = useState(null)
  const [extraOptions, setExtraOptions] = useState([])

  const changePrice = (e, index) => {
    const currentPrices = prices;
    currentPrices[index] = e.target.value
    setPrices(currentPrices)
  }

  const handleExtraInput = (e) => {
    setExtra({ ...extra, [e.target.name]: e.target.value})
  }

  const handleExtra = (e) => {
    setExtraOptions((prev) => [...prev, extra])
  }

  const handleCreate =  async () => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "uploads")
    try {
      const uploadRes = await axios.post(
        "https://api.cloudinary.com/v1_1/dby8sm7q4/image/upload",
        data
      )

      const {url} = uploadRes.data;
      const newProduct = {
        title, desc, prices, extraOptions, img:url,
      };

      let dev = process.env.NODE_ENV !== 'production';
      let { DEV_URL, PROD_URL } = process.env;

      await axios.post(`${dev ? DEV_URL : PROD_URL}/api/products`, newProduct)
      setClose(true)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <button className={styles.closeButton} onClick={() => setClose(true)}   >
          <AiFillCloseCircle className={styles.close}   />
        </button>

        <h1 className={styles.title}>Add a new Pizza</h1>
        <div className={styles.item}>
          <label className={styles.label}>Choose an image</label>
          <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Title</label>
          <input
            className={styles.input}
            type="text"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Description</label>
          <textarea
            type="text"
            rows="4"
            onChange={(e) => setDesc(e.target.value)}
            />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Prices</label>
          <div className={styles.priceContainer}>
            <input
              className={`${styles.input} ${styles.inputSmall}`}
              type="number"
              placeholder='Small'
              onChange={(e) => changePrice(e, 0)}
            />
            <input
              className={`${styles.input} ${styles.inputSmall}`}
              type="number"
              placeholder='Medium'
              onChange={(e) => changePrice(e, 1)}
            />
            <input
              className={`${styles.input} ${styles.inputSmall}`}
              type="number"
              placeholder='Large'
              onChange={(e) => changePrice(e, 2)}
            />
          </div>
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Extra</label>
          <div className={styles.extra}>
            <input
              className={`${styles.input} ${styles.inputSmall}`}
              type="text"
              placeholder='Item'
              name='text'
              onChange={handleExtraInput}
            />
            <input
              className={`${styles.input} ${styles.inputSmall}`}
              type="number"
              placeholder='Price'
              name='price'
              onChange={handleExtraInput}
            />

            <button className={styles.extraButton} onClick={handleExtra} >Add</button>

          </div>
          <div className={styles.extraItems}>
            {extraOptions.map(option => (
              <span key={option.text} className={styles.extraItem}>{option.text}</span>
            ))}
          </div>
        </div>
        <button className={styles.addButton} onClick={handleCreate} >
          Create
        </button>
      </div>

    </div>
  )
}

export default Add
