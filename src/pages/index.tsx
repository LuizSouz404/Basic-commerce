import type { NextPage } from 'next'
import { CardItem } from '../components/CardItem'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <CardItem />
    </div>
  )
}

export default Home
