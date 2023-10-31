import React from "react";

const gradientYOKey = "$yellow-to-orange";
const gradientOYKey = "$orange-to-yellow";
const gradientROKey = "$red-to-orange";
const gradientORKey = "$orange-to-red";
const orangeKey = "$orange";
const yellowKey = "$yellow";

const gradientYOStyle = `bg-gradient-to-r from-brandYellow via-brandRed to-brandRed text-transparent bg-clip-text`;
const gradientOYStyle = `bg-gradient-to-r from-brandRed to-brandYellow text-transparent bg-clip-text`;
const gradientROStyle = `bg-gradient-to-r from-brandRed via-brandRed to-brandOrange text-transparent bg-clip-text`;
const gradientORStyle = `bg-gradient-to-r from-brandOrange via-brandRed to-brandRed text-transparent bg-clip-text`;
const orangeStyle = `bg-brandRed text-transparent bg-clip-text`;
const yellowStyle = `bg-brandYellow text-transparent bg-clip-text`;

const getStyle = (value) => {
  if (value.includes(gradientYOKey)) {
    return { key: gradientYOKey, style: gradientYOStyle };
  } else if (value.includes(gradientOYKey)) {
    return { key: gradientOYKey, style: gradientOYStyle };
  } else if (value.includes(gradientORKey)) {
    return { key: gradientORKey, style: gradientORStyle };
  } else if (value.includes(gradientROKey)) {
    return { key: gradientROKey, style: gradientROStyle };
  } else if (value.includes(orangeKey)) {
    return { key: orangeKey, style: orangeStyle };
  } else if (value.includes(yellowKey)) {
    return { key: yellowKey, style: yellowStyle };
  } else {
    return { key: "", style: "" };
  }
};

const DecoratedText = ({ content }) => {
  if (content && typeof content === "string") {
    const { key, style } = getStyle(content);
    if (key) {
      return (
        <>
          {content.split(key).map((text, i) => {
            if (i % 2 === 0) {
              return text;
            }
            return (
              <span key={text + i} className={style}>
                {text}
              </span>
            );
          })}
        </>
      );
    } else {
      return <>{content}</>;
    }
  }
  return <></>;
};

export default DecoratedText;
