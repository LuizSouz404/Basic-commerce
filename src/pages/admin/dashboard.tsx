import { NextPage } from "next";
import { Summary } from "../../components/AdminComponents/Summary";
import { TransactionsTable } from "../../components/AdminComponents/TransactionTable";
import { AdminTab } from "../../components/AdminTab";
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
