import { useEffect } from "react";

const Script4Html = ({ lang }) => {
  useEffect(() => {
    // this script executes after page has loaded
    document.querySelector("html").setAttribute("lang", lang);
  }, []);

  return <div></div>;
};

export default Script4Html;
