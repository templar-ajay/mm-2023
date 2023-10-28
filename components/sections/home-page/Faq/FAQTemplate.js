import React from "react";
import { FAQTemplateStyles } from "./FAQTemplateStyles";
import FaqPara from "./FaqPara";

const FAQTemplate = ({ faqs }) => {
  const title = faqs.primary?.title[0]?.text;

  return (
    <FAQTemplateStyles className="section section__padding">
      <div className="container container__tight">
        <h2 className="h1 text-sky-400/100">{title}</h2>
        <div className="theCopyP">
          <div className="column">
            {faqs.items.map((item, index) => (
              <FaqPara
                key={index}
                title={item.question_in_h2}
                description={item.answer_rich_text}
              />
            ))}
          </div>
        </div>
      </div>
    </FAQTemplateStyles>
  );
};

export default FAQTemplate;
