import React from "react";
import { FAQTemplateStyles } from "./FAQTemplateStyles";
import FaqPara from "./FaqPara";

const FAQTemplate = ({ faqs }) => {
  console.log(faqs);

  return (
    <FAQTemplateStyles className="section section__padding">
      <div className="container container__tight">
        <h3 className="h1">{faqs.id}</h3>
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
