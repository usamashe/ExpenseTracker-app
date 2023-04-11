import React from "react";
import {
  TransactionHistory,
  NewTransaction,
  AccountSummary,
  Footer,
} from "./components/components";
import styles from "./App.module.css";
import { GlobalProvider } from "./context/GlobalProvider";

function App() {
  return (
    <div className={styles.shadow}>
      <div className={styles.container}>
        <GlobalProvider>
          <div className={styles.leftContainer}>
            <AccountSummary />
            <NewTransaction />
          </div>
          <div className={styles.rightContainer}>
            <TransactionHistory />
          </div>
        </GlobalProvider>
      </div>
      <Footer />
    </div>
  );
}

export default App;
