import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className={styles.container}>
          <h5 className={styles["made-text"]}>
            MADE BY{" "}
            <a href="https://github.com/rizalyoga" target="_blank">
              @RIZALYOGA
            </a>
          </h5>
        </div>
      </footer>
    </>
  );
};

export default Footer;
