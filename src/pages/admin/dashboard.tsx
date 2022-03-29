import { NextPage } from "next";
import { AdminTab } from "../../components/AdminComponents/AdminTab";
import { Summary } from "../../components/AdminComponents/Summary";
import { TransactionsTable } from "../../components/AdminComponents/TransactionTable";
import { Header } from "../../components/Header";

const Dashboard: NextPage = () => {
  return (
    <>
      <Header />
      <AdminTab />

      <div>
        <Summary />
        <TransactionsTable />
      </div>
    </>
  )
}

export default Dashboard
