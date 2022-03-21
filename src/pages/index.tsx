import type { NextPage } from 'next'
import { CardProduct } from '../components/CardProduct'
import { ComplexFilter } from '../components/ComplexFilter'
import { Header } from '../components/Header'
import { TableProducts } from '../components/TableProducts'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <ComplexFilter />
        <TableProducts />
      </div>
    </>
  )
}

export default Home
