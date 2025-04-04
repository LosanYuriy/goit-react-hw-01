import s from "./TransactionHistory.module.css";

const TransactionHistory = ({ transactions }) => {
  return (
    <table className={s.table}>
      <thead className={s.thead}>
        <tr>
          <th className={s.title}>Type</th>
          <th className={s.title}>Amount</th>
          <th className={s.title}>Currency</th>
        </tr>
      </thead>

      <tbody className={s.body}>
        {transactions.map((transaction) => (
          <tr className={s.item} key={transaction.id}>
            <td className={s.text}>{transaction.type}</td>
            <td className={s.text}>{transaction.amount}</td>
            <td className={s.text}>{transaction.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
