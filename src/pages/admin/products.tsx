import { NextPage } from "next";
import { useState } from "react";
import { FaPlus } from 'react-icons/fa';
import { AdminTab } from "../../components/AdminComponents/AdminTab";
import { AdminTableProduct } from "../../components/AdminComponents/AdminTableProduct";
import { ButtonContainer } from "../../components/AdminComponents/ButtonCreateProduct/styles";
import { ModalCreateProduct } from "../../components/AdminComponents/ModalCreateProduct";
import { Header } from "../../components/Header";
import styles from '../../styles/Content.module.css';

const Dashboard: NextPage = () => {
  const [isNewProductModalOpen, setIsNewProductModalOpen] =
    useState(false);

  function handleProductsModal() {
    console.log(isNewProductModalOpen)
    setIsNewProductModalOpen(!isNewProductModalOpen);
  }

  return (
    <>
      <ModalCreateProduct
        isOpen={isNewProductModalOpen}
        onRequestClose={handleProductsModal}
      />
      <Header />
      <AdminTab />

      <div className={styles.container}>
        <AdminTableProduct />
      </div>


      <ButtonContainer onClick={()=> handleProductsModal()}>
        <FaPlus size={20} />
        <strong>Adicionar produtos</strong>
      </ButtonContainer>
    </>
  )
}

export default Dashboard
