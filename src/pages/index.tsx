import { Products } from '@prisma/client'
import type { GetServerSideProps } from 'next'
import Head from 'next/head'
import { ComplexFilter } from '../components/ComplexFilter'
import { Header } from '../components/Header'
import { TableProducts } from '../components/TableProducts'
import { prisma } from '../lib/prisma'
import styles from '../styles/Content.module.css'

type ProductsProps = {
  products: Products[]
}

const Home = ({ products }: ProductsProps) => {
  return (
    <>
      <Head>
        <title>Basics | Produtos</title>
      </Head>
      <Header />
      <div className={styles.container}>
        <ComplexFilter />
        <TableProducts products={products}/>
      </div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const products = await prisma.products.findMany();

  const data = products.map(product => {
    return {
      id: product.id,
      product_name: product.product_name,
      product_price: product.product_price,
      product_stock: product.product_stock,
      category: product.category,
      thumbnail: product.thumbnail,
      created_at: product.created_at.toISOString(),
      updated_at: product.updated_at.toISOString()
    }
  })

  return {
    props: {
      products: data
    }
  }
}

export default Home
