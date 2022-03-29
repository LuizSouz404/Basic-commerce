import { NextPage } from "next";
import { AdminTab } from "../../components/AdminComponents/AdminTab";
import { Summary } from "../../components/AdminComponents/Summary";
import { Header } from "../../components/Header";
import styles from '../../styles/Content.module.css';

const Dashboard: NextPage = () => {
  return (
    <>
      <Header />
      <AdminTab />

      <div className={styles.container}>
        <Summary />
      </div>
    </>
  )
}

export default Dashboard
