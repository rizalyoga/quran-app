import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
// import Layout from "../component/layout/layout";
import Image from "next/image";
import { useRouter } from "next/router";
import Navbar from "../component/navbar/navbar";
import Footer from "../component/footer/footer";
import Head from "next/head";

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Quran APP</title>
        <link rel="shortcut icon" href="/qur'an-logo.png" type="image/x-icon" />
      </Head>
      <Navbar />
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>Welcome to Quran App !!!</h1>
          <Image className={styles.image} src="/qur'an-logo.png" width={500} height={500} alt="logo Quran" />
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
      <Footer />
    </>
  );
};

export default Home;
