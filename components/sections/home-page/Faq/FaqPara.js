import React, { useState } from "react";
import { FaqStyles } from "./FaqParaStyles";
import { MdExpandMore as Chevron } from "react-icons/md";
import { motion } from "framer-motion";
import { RichText } from "prismic-reactjs";

const FaqPara = ({ title, description }) => {
  const [showInfo, setInfo] = useState(false);
  const toggleInfo = () => setInfo((showInfo) => !showInfo);

  return (
    <FaqStyles className={showInfo ? `${"faq-open"}` : `${"faq-closed"}`}>
      <button className="question" onClick={toggleInfo}>
        {RichText.render(title)}
        <div className="trigger">
          <Chevron />
        </div>
      </button>
      {showInfo && (
        <motion.div
          initial="closed"
          animate={showInfo ? "open" : "closed"}
          variants={{
            open: { opacity: 1, height: "auto" },
            closed: { opacity: 0, height: 0 }
          }}
          className="answer"
        >
          {RichText.render(description)}
        </motion.div>
      )}
    </FaqStyles>
  );
};

export default FaqPara;
