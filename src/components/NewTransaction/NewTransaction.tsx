import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalProvider";
import styles from "./NewTransaction.module.css";

import { Transaction } from "../../types";
import { add } from "../../images/images";

const NewTransaction: React.FC = () => {
  const {
    addTransaction,

    description,
    setDescription,
    date,
    setDate,
    time,
    setTime,
    amount,
    setAmount,
  } = useContext(GlobalContext);

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newTransaction: Transaction = {
      id: Math.round(Math.random() * 10000000),
      description: description,
      amount: +(+amount).toFixed(2),
      date: new Date(date + " " + time),
    };
    addTransaction && addTransaction(newTransaction);
    setDescription && setDescription("");
    setDate && setDate("");
    setTime && setTime("");
    setAmount && setAmount("");
  };

  return (
    <fieldset className={styles.container}>
      <legend>Add New Transaction</legend>
      <form onSubmit={submit}>
        <div className={styles.description}>
          <label htmlFor="description">
            Description<sup>*</sup>
          </label>
          <input
            id="description"
            type="text"
            className={styles.input}
            placeholder="Describe the transaction..."
            value={description}
            onChange={(e) => setDescription && setDescription(e.target.value)}
            required
          />
        </div>

        <div className={styles.date}>
          <label htmlFor="date">
            Date<sup>*</sup>
          </label>
          <input
            id="date"
            type="date"
            className={styles.input}
            value={date}
            onChange={(e) => setDate && setDate(e.target.value)}
            required
          />
        </div>

        <div className={styles.time}>
          <label htmlFor="time">Time</label>
          <input
            id="time"
            type="time"
            className={styles.input}
            value={time}
            onChange={(e) => setTime && setTime(e.target.value)}
          />
        </div>

        <div className={styles.amount}>
          <label htmlFor="amount">
            Amount<sup>*</sup> ($)<sup>**</sup>
          </label>
          <input
            id="amount"
            type="number"
            className={styles.input}
            value={amount}
            onChange={(e) => setAmount && setAmount(e.target.value)}
            placeholder="$0"
            required
          />
        </div>

        <button className={styles.addBtn}>
          <img src={add} alt="" />
          <p className={styles.btnText}>Add Transaction</p>
        </button>
      </form>

      <p className={styles.footNote}>* Required field</p>
      <p className={styles.footNote}>
        ** Enter positive amount for income and negative amount for expenses.
      </p>
    </fieldset>
  );
};

export default NewTransaction;
