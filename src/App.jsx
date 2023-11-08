import {
  AddTransaction,
  Balance,
  Header,
  IncomeExpenses,
  TransactionList,
} from "./components";

export default function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </>
  );
}
