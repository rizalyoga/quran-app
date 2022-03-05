import styles from "./Navbar.module.css";
import Link from "next/link";
import { Router, useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.rowbar}>
        <div className={styles.logo} onClick={() => router.push("/")}>
          QURAN APP
        </div>
        <div className={styles["row-menu"]}>
          <ul className={styles["col-menu"]}>
            <li className={styles["menu-item"]}>
              <Link href="/">
                <a>HOME</a>
              </Link>
            </li>
            {/* <li className={styles["menu-item"]}>
              <Link href="/users">
                <a>USER</a>
              </Link>
            </li> */}
            <li className={styles["menu-item"]}>
              <Link href="/quran">
                <a>SURAH</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
