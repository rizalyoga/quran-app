import styles from "./unknown.module.css";
import { useEffect } from "react";

import { useRouter } from "next/router";

const unknown = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.text}>Oops... Page Not Found !!!</h1>
    </div>
  );
};

export default unknown;
