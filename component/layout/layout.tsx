import { ReactNode, useEffect } from "react";
import Footer from "../footer/footer";
import Navbar from "../navbar/navbar";
import style from "./Layout.module.css";
import Head from "next/head";
import { useRouter } from "next/router";
import NProgress from "nprogress";
import Swal from "sweetalert2";

interface LayoutProps {
  children: ReactNode;
  pageTitle: string;
}

const Layout = (props: LayoutProps) => {
  const { children, pageTitle } = props;
  const router = useRouter();

  useEffect(() => {
    NProgress.configure({ showSpinner: false });
    router.events.on("routeChangeStart", () => {
      NProgress.start();
      // console.log("start page move");
    });

    router.events.on("routeChangeComplete", () => {
      NProgress.done();
      // console.log("complete page move");
    });

    router.events.on("routeChangeError", () => {
      NProgress.done();
      Swal.fire({
        text: "Oops, Internal Server Error ! Please refresh the page",
        icon: "warning",
        showCancelButton: false,
        confirmButtonColor: "#113A55",
        confirmButtonText: "Reload Page",
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.reload();
        }
      });
    });
    return () => {
      NProgress.done();
    };
  }, []);

  return (
    <>
      <Head>
        <title>QUR&apos;AN APP | {pageTitle}</title>
        <link rel="icon" href="/qur'an-logo.png" />
        {/* /* ------------------------------ nprogress CDN -----------------------------  */}
        <link href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css" />
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
