import React, {useState} from 'react'
import styles from "../../styles/Login.module.css"
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import axios from "axios"

const Login = () => {
  const [username, setUsername] = useState(null)
  const [password, setPassword] = useState(null)
  const [error, setError] = useState(false)
  const router = useRouter()
  let dev = process.env.NODE_ENV !== 'production';
  let { DEV_URL, PROD_URL } = process.env;

  const handleClick = async () => {
    try{
      await axios.post(`${dev ? DEV_URL : PROD_URL}/api/login`, {
        username,
        password,
      });
      router.push("/admin")
    }catch(err){
      console.log(err);
      setError(true)

    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Admin Dashboard</h1>
        <input
          placeholder='username'
          type='text'
          className={styles.input}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          placeholder='password'
          type='password'
          className={styles.input}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={handleClick}
          className={styles.button}
        >
          Sign In
        </button>
        {error && <span className={styles.error}>Wrong Credentials!</span>}
      </div>

    </div>
  )
}

export default Login
