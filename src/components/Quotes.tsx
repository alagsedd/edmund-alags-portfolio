import UseQuotes from "../services/useQuotes";
import styles from "../styles/Quotes.module.css";

const Quotes = () => {
  const { data } = UseQuotes();

  return (
    <>
      <div className={styles.quoteCard}>
        <span className={styles.header}>Quote of the day</span>
        <p>{data?.slip.advice}</p>
      </div>
    </>
  );
};

export default Quotes;
