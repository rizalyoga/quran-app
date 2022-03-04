import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Layout from "../component/layout/layout";
import Image from "next/image";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <Layout pageTitle="Home Page">
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>Welcome to Quran App !!!</h1>
          <Image src="/qur'an-logo.png" width={500} height={500} alt="logo Quran" />
          <a
            className={styles.description}
            onClick={() => {
              router.push("/quran");
            }}
          >
            Get started to reading Quran
          </a>
        </main>
      </div>
    </Layout>
  );
};

export default Home;
