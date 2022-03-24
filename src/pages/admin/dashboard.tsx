import { NextPage } from "next";
import { AdminTab } from "../../components/AdminTab";
import { Header } from "../../components/Header";

const Dashboard: NextPage = () => {
  return (
    <>
      <Header />

      <div>
        <AdminTab />
      </div>
    </>
  )
}

export default Dashboard
