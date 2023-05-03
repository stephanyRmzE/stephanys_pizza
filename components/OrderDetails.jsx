import React from 'react'
import styles from '../styles/OrderDetails.module.css'
import { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import Link from 'next/link';

const OrderDetails = ({ total, createOrder, setCash }) => {

  const [customer, setCustomer] = useState("")
  const [address, setAddress] = useState("")

  const handleClick = () => {
    createOrder({
      customer: customer,
      address: address,
      total: total,
      method: 0,
      });

  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <button className={styles.closeButton} onClick={() => setCash(false)}   >
          <AiFillCloseCircle className={styles.close}   />
        </button>
        <h1 className={styles.title}>
          You will pay ${total} after delivery.
        </h1>
        <div className={styles.item}>
          <label className={styles.label} htmlFor="">Name Surname</label>
          <input
            placeholder='John Doe'
            type="text"
            className={styles.input}
            onChange={(e)=>setCustomer(e.target.value)}/>
        </div>
         <div className={styles.item}>
          <label className={styles.label} htmlFor="">Phone Number</label>
          <input
            placeholder='+1 234 567 89'
            type="text"
            className={styles.input}
            />
        </div>
        <div className={styles.item}>
          <label className={styles.label} htmlFor="">Address</label>
          <textarea
            rows={5}
            placeholder='Elton St. 505 NY'
            type="text"
            className={styles.textarea}
            onChange={(e)=>setAddress(e.target.value)}
            />
        </div>
        <button onClick={handleClick} className={styles.button}>
          ORDER
        </button>
      </div>
    </div>
  )
}

export default OrderDetails
