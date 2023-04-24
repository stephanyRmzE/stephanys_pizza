import React from 'react'
import styles from "../styles/Navbar.module.css"
import Image from 'next/image'
import { AiOutlineShoppingCart } from 'react-icons/ai';

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src='/img/telephone.png' alt='telephone' width={32} height={32}></Image>
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>ORDER NOW!</div>
          <a className={styles.phoneNumber} href="tel:012 34567">012 345 678</a>
          </div>
      </div>

      <div className={styles.item}>
        <ul className={styles.list}>

          <li className={styles.listItem}>Products</li>
          <li className={styles.listItem}>Menu</li>
          <Image src='/img/typo_stephany.png' alt='logo' width={200} height={90}></Image>
          <li className={styles.listItem}>Events</li>

          <li className={styles.listItem}>Contact</li>
        </ul>
      </div>
      <div className={styles.item}>
        <div className={styles.cart}>
          <AiOutlineShoppingCart className={styles.cartIcon} />
          <div className={styles.count}>2</div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
