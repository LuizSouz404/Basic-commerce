import { NextPage } from "next";
import { AdminTableProduct } from "../../components/AdminComponents/AdminTableProduct";
import { AdminTab } from "../../components/AdminTab";
import { Header } from "../../components/Header";

const Dashboard: NextPage = () => {
  return (
    <>
      <Header />
      <AdminTab />

      <div>
        <AdminTableProduct />
      </div>
    </>
  )
}

export default Dashboard
