import Layout from "../../component/layout/layout";
import style from "../../styles/Quran.module.css";
import { useRouter } from "next/router";

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
  const { dataBlog } = props;

  const router = useRouter();

  if (dataBlog.length === 0) {
    <Layout pageTitle="Surah">
      <h1 style={{ textAlign: "center" }}>PLEASE WAIT...</h1>
    </Layout>;
  }

  return (
    <Layout pageTitle="Blog Page">
      <h1 className={style["title-page"]}>LIST OF SURAH</h1>
      {dataBlog.map((blog) => (
        <div key={blog.nama} className={style.container} onClick={() => router.push(`/quran/${blog.nomor}`)}>
          <h4 className={style["title-surah"]}>{blog.nama}</h4>
          <h4 className={style["title-page"]}>
            Surah ke: {blog.nomor} | Jumlah ayat : {blog.ayat}
          </h4>
          <p className={style.content}>{blog.keterangan}</p>
        </div>
      ))}
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
