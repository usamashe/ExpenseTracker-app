import React, { useContext } from "react";
import cx from "classnames";

import { TransactionItem } from "../components";
import { GlobalContext } from "../../context/GlobalProvider";

import styles from "./TransactionHistory.module.css";
import { add1 } from "../../images/images";

const TransactionHistory: React.FC = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <fieldset
      className={cx(
        styles.container,
        transactions.length ? null : styles.emptyContainer
      )}
    >
      <legend>Transaction History</legend>
      {transactions.length ? (
        <ul>
          {transactions.map((transaction) => (
            <TransactionItem key={transaction.id} transaction={transaction} />
          ))}
        </ul>
      ) : (
        <div className={styles.noTransaction}>
          <img className={styles.addIcon} src={add1} alt="" />
          <p className={styles.text}>Add transactions to see history.</p>
        </div>
      )}
    </fieldset>
  );
};

export default TransactionHistory;
