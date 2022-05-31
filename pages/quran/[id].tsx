import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "../../component/layout/layout";
import style from "./Surah.module.css";
// import Loading from "../../component/loading/loading";

interface SurahProps {
  ar: string;
  id: string;
  nomor: string;
  tr: string;
  Surah: string;
}

interface PropsSurah {
  surahData: SurahProps[];
}

const Surah = (props: PropsSurah) => {
  const { surahData } = props;
  const router = useRouter();
  const { Surah, id } = router.query;
  const [ayat, setAyat] = useState<string>("");

  /* ---------------------- CSR ( CLIENT SIDE RENDERIGN ) --------------------- */
  // const [surah, setSurah] = useState([]);
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   const fetchSurah = async () => {
  //     // setLoading(true);
  //     await fetch(`https://api.npoint.io/99c279bb173a6e28359c/surat/${id}`)
  //       .then((response) => response.json())
  //       .then((result) => {
  //         setSurah(result);
  //       })
  //       .catch((err) => {
  //         console.log("error :", err);
  //         console.log("Oops, Internal Server error ! Please refresh the page");
  //       });
  //     // .finally(() => setLoading(false));
  //   };
  //   fetchSurah();
  // }, [surah, id]);

  // if (surah.length === 0) {
  //   console.log("PLEASE WAIT...");
  //   return (
  //     <Layout pageTitle="">
  //       {/* <h1 style={{ textAlign: "center", marginTop: "50vh" }}>PLEASE WAIT...</h1> */}
  //       <Loading />
  //     </Layout>
  //   );
  // }

  /* ---------------------- SSR ( SERVER SIDE RENDERIGN ) --------------------- */

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
    <Layout pageTitle={Surah as string}>
      <form onSubmit={(e) => onJump(e)} className={style["jump-container"]}>
        <input type="text" placeholder="Input number of ayat" onChange={(e) => setAyat(e.target.value)} />

        <button type="submit" className={style.btn}>
          Jump
        </button>
      </form>

      <div className={style.container}>
        {!surahData ? (
          <div>Noting data</div>
        ) : (
          surahData.map((surah: SurahProps) => (
            <div key={surah.nomor} id={surah.nomor}>
              <div className={style["ayat-container"]}>
                <p className={style.ayat}>{surah.ar}</p>
                <div className={style.latin} dangerouslySetInnerHTML={{ __html: surah.tr }}></div>
                <p>~{surah.nomor}~</p>
              </div>
              <p className={style.arti}>{surah.id}</p>
            </div>
          ))
        )}
      </div>
    </Layout>
  );
};

export default Surah;

/* -------------------------- GET SERVER SIDE PROPS ( SSR ) ------------------------- */
interface getStaticProps {
  query: {
    id: string;
  };
}

export async function getServerSideProps(context: getStaticProps) {
  const { id } = context.query;
  const res = await fetch(`https://api.npoint.io/99c279bb173a6e28359c/surat/${id}`);
  const surahData = await res.json();

  return {
    props: {
      surahData: surahData,
    },
  };
}
