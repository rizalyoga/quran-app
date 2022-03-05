import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "../../component/layout/layout";
import style from "./Surah.module.css";
import Loading from "../../component/loading/loading";

interface SurahProps {
  ar: string;
  id: string;
  nomor: string;
  tr: string;
}

const Surah = () => {
  const router = useRouter();
  const { id } = router.query;

  const [surah, setSurah] = useState([]);
  const [ayat, setAyat] = useState("");

  useEffect(() => {
    setTimeout(() => {
      if (!surah) {
        alert("Oops, Internal Server error ! Please refresh the page");
        console.log("Oops, Internal Server error ! Please refresh the page");
        console.log("data surah : ", surah);
      }
    }, 30000);

    const fetchSurah = async () => {
      await fetch(`https://api.npoint.io/99c279bb173a6e28359c/surat/${id}`)
        .then((response) => response.json())
        .then((result) => {
          setSurah(result);
        })
        .catch((err) => {
          console.log("error :", err);
          console.log("Oops, Internal Server error ! Please refresh the page");
        });
    };
    fetchSurah();
  }, [surah, id]);

  if (surah.length === 0) {
    console.log("PLEASE WAIT...");
    return (
      <Layout pageTitle="Surah">
        {/* <h1 style={{ textAlign: "center", marginTop: "50vh" }}>PLEASE WAIT...</h1> */}
        <Loading />
      </Layout>
    );
  }

  const onJump = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (ayat) {
      const elmnt = document.getElementById(ayat);
      if (elmnt) {
        elmnt.scrollIntoView({ block: "center", behavior: "smooth" });
      }
    }
  };

  return (
    <Layout pageTitle="Surah">
      {/* <div className={style["jump-container"]}> */}
      <form onSubmit={(e) => onJump(e)} className={style["jump-container"]}>
        <input type="text" placeholder="Input number of ayat" onChange={(e) => setAyat(e.target.value)} />

        <button type="submit" className={style.btn}>
          Jump
        </button>
      </form>
      {/* </div> */}
      <div className={style.container}>
        {surah.map((surah: SurahProps) => (
          <div key={surah.nomor} id={surah.nomor}>
            <div className={style["ayat-container"]}>
              <p className={style.ayat}>{surah.ar}</p>
              <div className={style.latin} dangerouslySetInnerHTML={{ __html: surah.tr }}></div>
              <p>~{surah.nomor}~</p>
            </div>
            <p className={style.arti}>{surah.id}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Surah;
