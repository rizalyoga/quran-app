import styles from "./Navbar.module.css";
import style from "./Sidebar.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { listMenu } from "./data";
import { TiThMenu } from "react-icons/ti";
import { MdClose } from "react-icons/md";
import { useState } from "react";
import Sidebar from "./sidebar";

const Navbar = () => {
  const router = useRouter();

  const [show, setShow] = useState<boolean>(false);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <>
      <Sidebar show={show} />
      <div className={styles.container}>
        <div className={styles.rowbar}>
          <div className={styles.logo} onClick={() => router.push("/")}>
            QURAN APP
          </div>
          <div className={styles["row-menu"]}>
            <ul className={styles["col-menu"]}>
              {listMenu.map((listMenu, index) => (
                <li key={index} className={styles["menu-item"]}>
                  <Link href={listMenu.path}>
                    <a>{listMenu.title}</a>
                  </Link>
                </li>
              ))}
              {show ? <MdClose className={styles["menu-icon"]} onClick={handleShow} /> : <TiThMenu className={styles["menu-icon"]} onClick={handleShow} />}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
