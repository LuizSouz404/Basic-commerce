import type { NextPage } from 'next'
import { CardProduct } from '../components/CardProduct'
import { Filter } from '../components/Filter'
import { Header } from '../components/Header'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <Filter />
        <CardProduct />
      </div>
    </>
  )
}

export default Home
