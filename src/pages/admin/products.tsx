import { NextPage } from "next";
import { AdminTableProduct } from "../../components/AdminComponents/AdminTableProduct";
import { ButtonProduct } from "../../components/AdminComponents/ButtonCreateProduct";
import { AdminTab } from "../../components/AdminTab";
import { Header } from "../../components/Header";
import styles from '../styles/Content.module.css'

import { FaPlus } from 'react-icons/fa'

const Dashboard: NextPage = () => {
  return (
    <>
      <Header />
      <AdminTab />

      <div className={styles.container}>
        <AdminTableProduct />
      </div>

      <ButtonProduct icon={FaPlus} title="Adicionar produto"/>
    </>
  )
}

export default Dashboard
