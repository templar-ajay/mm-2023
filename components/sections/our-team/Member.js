import React from "react";
import { RichText } from "prismic-reactjs";
import Image from "next/image";

const Member = ({ name, image, position }) => {
  console.log("member", image);
  return (
    <div>
      <div className="text-center text-gray-500 dark:text-gray-400 ">
        <Image
          className="mx-auto mb-4 w-36 h-36 rounded-full"
          src={image.url}
          width={image.dimensions.width}
          height={image.dimensions.height}
          alt={image.alt}
        />
        <h3 className="mb-1 text-2xl font-bold tracking-tight text-textPrimary">
          <a href="#">{RichText.render(name)}</a>
        </h3>
        <p className="text-mm_primary">{RichText.render(position)}</p>
      </div>
    </div>
  );
};

export default Member;
