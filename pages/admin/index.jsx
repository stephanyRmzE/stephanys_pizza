import React, {useState} from 'react'
import styles from "../../styles/Admin.module.css"
import Image from 'next/image'
import axios from "axios"

const Index = ({products, orders}) => {

  const [pizzaList, setPizzaList] = useState(products)
  const [orderList, setOrderList] = useState(orders)
  const status = ["Preparing", "On the way", "Delivered"]

  let dev = process.env.NODE_ENV !== 'production';
  let { DEV_URL, PROD_URL } = process.env;


  const handleDelete = async (id) => {


    try{
      const res = await axios.delete(`${dev ? DEV_URL : PROD_URL}/api/products/`+ id)
      setPizzaList(pizzaList.filter((pizza)=> pizza._id !== id))
    }catch(err){
      console.log(err)

    }
  }

  const handleStatus = async (id) => {

    const item = orderList.filter((order)=> order._id === id)[0]
    const currentStatus = item.status

    try{
      const res = await axios.put(`${dev ? DEV_URL : PROD_URL}/api/orders/`+ id, {status: currentStatus + 1});
      setOrderList([
        res.data,
        ...orderList.filter((order)=> order._id !== id)
      ])
    }catch(err){
      console.log(err)

    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Products</h1>
        <table className={styles.table}>
          <thead>
            <tr className={styles.trTitle}>
              <th>Image</th>
              <th>Id</th>
              <th>Title</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {pizzaList.map(product => (

              <tr className={styles.tr} key={product._id} >
                <td className={styles.td} >
                  <div className={styles.imgContainer}>
                    <Image
                    src={product.img}
                    alt='pizza'
                    fill
                    style={{
                    objectPosition: 'center',
                    objectFit:'cover'
                    }}
                    sizes="(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                      33vw"/>
                  </div>
                </td>
                <td className={styles.td}>
                  <span className={styles.name}>{product._id.slice(0,5)}...</span>
                </td>
                <td className={styles.td}>
                  <span className={styles.name}>{product.title}</span>
                </td>
                <td className={styles.td}>
                  <span className={styles.price}>{product.prices[0]}</span>
                </td>
                <td className={styles.td}>
                  <button className={styles.button}>Edit</button>
                  <button className={styles.button} onClick={()=> handleDelete(product._id)} >Delete</button>
                </td>
              </tr>
            ))}

          </tbody>
        </table>
      </div>

      <div className={styles.item}>
        <h1 className={styles.title}>Orders</h1>
        <table className={styles.table}>
          <thead>
            <tr className={styles.trTitle}>
              <th>Id</th>
              <th>Customer</th>
              <th>Total</th>
              <th>Payment</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {orderList.map(order => (
              <tr className={styles.tr} key ={order._id}>
                <td className={styles.td} >
                  <div className={styles.td}>
                    <span className={styles.numbers}>{order._id.slice(0,5)}...</span>
                  </div>
                </td>
                <td className={styles.td}>
                  <span className={styles.name}>{order.customer}</span>
                </td>
                <td className={styles.td}>
                  <span className={styles.price}>{order.total}</span>
                </td>
                <td className={styles.td}>
                  {order.method === 0 ? (<span>Cash</span>) : (<span>Paid</span>)}
                </td>
                <td className={styles.td}>
                  <span className={styles.name}>{status[order.status]}</span>
                </td>
                <td className={styles.td}>
                  <button className={styles.button} onClick={()=> handleStatus(order._id)}>Next Stage</button>

                </td>
              </tr>
          ))}

          </tbody>
        </table>
      </div>

    </div>
  )
}

export const getServerSideProps = async (ctx) => {

  let dev = process.env.NODE_ENV !== 'production';
  let { DEV_URL, PROD_URL } = process.env;
  const myCookie = ctx.req?.cookies || "";

  if (myCookie.token !== process.env.TOKEN) {
    return {
      redirect: {
        destination: "/admin/login",
        permanent: false,
      },
    };
  }

  const productsRes = await axios.get(`${dev ? DEV_URL : PROD_URL}/api/products`)
  const ordersRes = await axios.get(`${dev ? DEV_URL : PROD_URL}/api/orders`)

  return {
    props: {
      products: productsRes.data,
      orders: ordersRes.data,
    },
  };
};

export default Index
