import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

const TransactionContext = createContext({
  transactions: [],
});

const TransactionProvider = ({ children }) => {
  const [transactions, setTransactions] = useState(() => {
    const data = JSON.parse(localStorage.getItem("transactions"));
    return data ? data : [];
  });

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
    toast.success("Successfully created!");
  };

  const deleteTransaction = (id) => {
    const filteredTransactions = transactions.filter((t) => t.id !== id);
    setTransactions(filteredTransactions);
    toast.success("Expense Deleted");
  };

  return (
    <TransactionContext.Provider
      value={{ transactions, addTransaction, deleteTransaction }}
    >
      {children}
    </TransactionContext.Provider>
  );
};

export const useTransaction = () => {
  return useContext(TransactionContext);
};

export default TransactionProvider;
