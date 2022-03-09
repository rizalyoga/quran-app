import React from "react";
import { listMenu } from "./data";
import styles from "./Sidebar.module.css";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles["col-menu"]}>
        <ul>
          {listMenu.map((listMenu, index) => (
            <li key={index} className={styles["menu-item"]}>
              <Link href={listMenu.path}>
                <a>
                  <span>{<listMenu.icon />}</span>
                  {listMenu.title}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
