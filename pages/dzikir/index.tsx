import { title } from "process";
import React from "react";
import Layout from "../../component/layout/layout";
import style from "./index.module.css";

const Dzikir = () => {
  return (
    <Layout pageTitle="Dzikir">
      <div className={style.container}>
        <div className={style.title}>
          <h1>Dzikir Count</h1>
        </div>
      </div>
    </Layout>
  );
};

export default Dzikir;
