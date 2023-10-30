export function validPaginationParams(count, upto) {
  if (typeof count !== "number") count = parseInt(count);

  return !!count && count > 0 && count <= upto;
}

export function arrangeLinks(link) {
  let pathname;

  try {
    pathname = new URL(link).pathname;
    !location?.pathname.includes("/es") &&
      (pathname = pathname.split("/es/")[1] || pathname);
  } catch (error) {
    console.log({ error });
    link && link.startsWith("/") && (pathname = link);
  }

  return pathname || "/";
}
