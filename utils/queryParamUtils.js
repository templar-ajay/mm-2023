export function validPaginationParams(count, upto) {
  if (typeof count !== "number") count = parseInt(count);

  return !!count && count > 0 && count <= upto;
}

export function arrangeLinks(link, matcher) {
  let pathname;
  try {
    pathname = new URL(link).pathname;
    !matcher.includes("/es") &&
      (pathname = pathname.split("/es")[1] || pathname);
  } catch (error) {
    console.log({ error });
    link && link.startsWith("/") && (pathname = link);
  }
  return pathname.startsWith("/") ? pathname : "/" + pathname || "/";
}
