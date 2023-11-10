export function linkFromDocument(lang, uid) {
  if (uid == "home") uid = "";
  let link = "";
  if (lang == "es-es") {
    link += "/es/";
  } else if (lang == "en-us") {
    link += "/";
  }
  link += uid;
  return link;
}
