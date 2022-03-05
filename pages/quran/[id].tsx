import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "../../component/layout/layout";
import style from "./Surah.module.css";
import Loading from "../../component/loading/loading";

interface SurahProps {
  ar: string;
  id: string;
  nomor: string;
}

const Surah = () => {
  const router = useRouter();
  const { id } = router.query;

  const [surah, setSurah] = useState([]);
  const [ayat, setAyat] = useState("");

  console.log(ayat);

  const fetchSurah = async () => {
    await fetch(`https://api.npoint.io/99c279bb173a6e28359c/surat/${id}`)
      .then((response) => response.json())
      .then((result) => {
        setSurah(result);
      });
  };

  useEffect(() => {
    fetchSurah();
    // console.log(surah);
  }, [surah, fetchSurah]);

  if (surah.length === 0) {
    console.log("PLEASE WAIT...");
    return (
      <Layout pageTitle="Surah">
        {/* <h1 style={{ textAlign: "center", marginTop: "50vh" }}>PLEASE WAIT...</h1> */}
        <Loading />
      </Layout>
    );
  }

  const onJump = () => {
    const offset = 45;
    if (ayat) {
      const elmnt = document.getElementById(ayat);
      if (elmnt) {
        elmnt.scrollIntoView({ block: "center", behavior: "smooth" });
      }
    }
  };

  // useEffect(() => {}, []);

  return (
    <Layout pageTitle="Surah">
      <div className={style["jump-container"]}>
        <input type="text" placeholder="Input number of ayat" onChange={(e) => setAyat(e.target.value)} />
        <p className={style.btn} onClick={() => onJump()}>
          Jump
        </p>
      </div>
      <div className={style.container}>
        {surah.map((surah: SurahProps) => (
          <div key={surah.nomor} id={surah.nomor}>
            <div className={style["ayat-container"]}>
              <p className={style.ayat}>{surah.ar}</p>
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
