"use client";

import Link from "next/link";
import { PrismicNextLink } from "@prismicio/next";
import { useRouter } from "next/router";
const PersistQueryParamsLink = ({ href, ...props }) => {
  const router = useRouter();
  const { pathname, query } = router;

  // Merge the current query parameters with any additional parameters
  const mergedQuery = { ...query, ...props.query };

  // Construct the final href with merged query parameters
  const finalHref = {
    pathname: href,
    query: mergedQuery
  };

  return <Link href={finalHref} {...props} />;
};
const PersistQueryParamsPrismicNextLink = ({ href, ...props }) => {
  const router = useRouter();
  const { pathname, query } = router;

  // Merge the current query parameters with any additional parameters
  const mergedQuery = { ...query, ...props.query };

  // Construct the final href with merged query parameters
  const finalHref = {
    pathname: href,
    query: mergedQuery
  };

  return <PrismicNextLink href={finalHref} {...props} />;
};

export { PersistQueryParamsLink, PersistQueryParamsPrismicNextLink };
