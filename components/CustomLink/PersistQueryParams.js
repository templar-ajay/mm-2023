"use client";

import Link from "next/link";
import { useRouter } from "next/router";
const PersistQueryParamsLink = ({ href, ...params }) => {
  const router = useRouter();

  const queryParams = router.query;
  console.log("route query params", queryParams);
  console.log("hello world");

  let queryParamsString = "";
  let i = 0;
  for (const [key, value] of Object.entries(queryParams)) {
    queryParamsString += (i ? "&" : "?") + key + "=" + value;
    i++;
  }

  console.log("route query params string", queryParamsString);
  return <Link href={href + queryParamsString} {...params} />;
};

export { PersistQueryParamsLink };
