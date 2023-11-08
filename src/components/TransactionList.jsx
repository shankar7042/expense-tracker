import { useTransaction } from "../context/TransactionProvider";

export default function TransactionList() {
  const { transactions, deleteTransaction } = useTransaction();

  const handleDelete = (id) => {
    deleteTransaction(id);
  };

  return (
    <>
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map((t) => (
          <li key={t.id} className={t.amount > 0 ? "plus" : "minus"}>
            {t.text} <span>${t.amount}</span>
            <button className="delete-btn" onClick={() => handleDelete(t.id)}>
              x
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
