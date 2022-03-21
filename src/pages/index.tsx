import type { NextPage } from 'next'
import { CardProduct } from '../components/CardProduct'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <CardProduct />
    </div>
  )
}

export default Home
