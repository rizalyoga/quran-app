import { ReactNode } from "react";
import Footer from "../footer/footer";
import Navbar from "../navbar/navbar";
import style from "./Layout.module.css";
import Head from "next/head";

interface LayoutProps {
  children: ReactNode;
  pageTitle: string;
}

const Layout = (props: LayoutProps) => {
  const { children, pageTitle } = props;
  return (
    <>
      <Head>
        <title>QUR&apos;AN APP | {pageTitle}</title>
        <link rel="icon" href="/qur'an-logo.png" />
      </Head>
      <Navbar />
      <div className={style.container}>
        <div className={style.content}>{children}</div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
