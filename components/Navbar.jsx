import React from 'react'
import styles from "../styles/Navbar.module.css"
import Image from 'next/image'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import {useSelector} from "react-redux"
import Link from 'next/link';

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity)

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


          <Link className={styles.center} href='/' passHref >
            <Image src='/img/typo_stephany.png' alt='logo' width={200} height={90}></Image>
          </Link>

        </ul>
      </div>
      <Link href='/cart' passHref>
        <div className={styles.item}>
          <div className={styles.cart}>
            <AiOutlineShoppingCart className={styles.cartIcon} />
            <div className={styles.count}>{quantity}</div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Navbar
