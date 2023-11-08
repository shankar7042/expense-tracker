import { useMemo } from "react";
import { useTransaction } from "../context/TransactionProvider";

export default function IncomeExpenses() {
  const { transactions } = useTransaction();

  const income = useMemo(() => {
    return transactions
      .filter((t) => t.amount > 0)
      .reduce((acc, t) => acc + t.amount, 0);
  }, [transactions]);

  const expense = useMemo(() => {
    return transactions
      .filter((t) => t.amount < 0)
      .reduce((acc, t) => acc + t.amount, 0);
  }, [transactions]);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p id="money-plus" className="money plus">
          +${income}
        </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p id="money-minus" className="money minus">
          ${expense}
        </p>
      </div>
    </div>
  );
}
