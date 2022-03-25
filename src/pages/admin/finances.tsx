import { NextPage } from "next";
import { Summary } from "../../components/AdminComponents/Summary";
import { AdminTab } from "../../components/AdminTab";
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
