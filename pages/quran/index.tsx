import Layout from "../../component/layout/layout";
import style from "../../styles/Quran.module.css";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

interface Post {
  id: string;
  nomor: string;
  ayat: number;
  nama: string;
  keterangan: string;
}

interface BlogProps {
  dataBlog: Post[];
}

interface Id {
  id: string;
  nomor: string;
}

const Blog = (props: BlogProps) => {
  // const debounce = require("lodash.debounce");

  const { dataBlog } = props;

  const [term, setTerm] = useState("");

  const router = useRouter();

  const changeValue = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = await e.target.value;
    setTerm(newValue);
    // console.log(term);
  };

  useEffect(() => {
    // console.log(term);
  }, [term]);

  if (dataBlog.length === 0) {
    <Layout pageTitle="Surah">
      <h1 style={{ textAlign: "center" }}>PLEASE WAIT...</h1>
    </Layout>;
  }

  return (
    <Layout pageTitle="Blog Page">
      <div className={style.header}>
        <h1 className={style["title-page"]}>LIST OF SURAH</h1>
        <div className={style["search-form"]}>
          <input type="search" onChange={changeValue} placeholder="Enter Surah Name" />
          {/* <p>search</p> */}
        </div>
      </div>
      <div className={style.container}>
        {dataBlog
          .filter((surah) => surah.nama.toLowerCase().includes(term.toLowerCase()))
          .map((blog) => (
            <div key={blog.nama} className={style["card-content"]} onClick={() => router.push(`/quran/${blog.nomor}?Surah=${blog.nama}`)}>
              <h4 className={style["title-surah"]}>{blog.nama}</h4>
              <h4 className={style["sub-title-surah"]}>
                Surah ke: {blog.nomor} | Jumlah ayat : {blog.ayat}
              </h4>
              <p className={style.content}>{blog.keterangan}</p>
            </div>
          ))}
      </div>
    </Layout>
  );
};

export default Blog;

export async function getServerSideProps() {
  const res = await fetch(`https://api.npoint.io/99c279bb173a6e28359c/data`);
  const dataBlog = await res.json();
  return {
    props: {
      dataBlog: dataBlog,
    },
  };
}
