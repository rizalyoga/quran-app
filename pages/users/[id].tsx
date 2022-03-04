import { useRouter } from "next/router";
import Layout from "../../component/layout/layout";

const Detail = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Layout pageTitle="detail users">
      <h1>INI DETAIL USER {id}</h1>
    </Layout>
  );
};

export default Detail;
