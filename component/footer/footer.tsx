import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className={styles.container}>
          <h5 className={styles["made-text"]}>MADE BY @RIZALYOGA</h5>
        </div>
      </footer>
    </>
  );
};

export default Footer;
