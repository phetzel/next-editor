import { useRouter } from "next/router";
import { useEffect } from "react";

const DetailPage = () => {
  const router = useRouter();
  const textId = router.query.textId;

  return <div>{textId}</div>;
};

export default DetailPage;
