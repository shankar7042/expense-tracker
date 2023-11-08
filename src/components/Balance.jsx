import { useMemo } from "react";
import { useTransaction } from "../context/TransactionProvider";

export default function Balance() {
  const { transactions } = useTransaction();
  const total = useMemo(() => {
    return transactions.reduce((acc, t) => acc + t.amount, 0);
  }, [transactions]);
  return (
    <>
      <h4>Your Balance</h4>
      <h1 id="balance">${total}</h1>
    </>
  );
}
