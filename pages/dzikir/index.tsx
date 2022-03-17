// import { title } from "process";
import React, { useState } from "react";
import Layout from "../../component/layout/layout";
import style from "./index.module.css";
import Image from "next/image";
import Swal from "sweetalert2";

const Dzikir = () => {
  let [total, setTotal] = useState(0);
  let [click, setClick] = useState(false);

  const resetCounter = () => {
    Swal.fire({
      text: "Are you sure to reset counter ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#113A55",
      confirmButtonText: "reset",
    }).then((result) => {
      if (result.isConfirmed) {
        setTotal(0);
      }
    });
  };

  const counter = () => {
    setTotal((total += 1));
  };

  return (
    <Layout pageTitle="Dzikir">
      <div className={style.container}>
        <div className={style.title}>
          <h1>Dzikir Count</h1>
          <a className={style["reset-btn"]} href="#" onClick={resetCounter}>
            reset counter
          </a>
          <div className={style.counter}>{total < 10 ? <p>0{total}</p> : <p>{total}</p>}</div>
          <button onClick={counter}>
            <Image className={style.image} src="/plusButton.png" width={100} height={100} alt="logo Quran" />
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Dzikir;
