import React, { useState } from "react";
import Button from "./Button";
import Image from "next/image";
import leftArrow from "../../public/icons/orange_left_arrow.png";
import rightArrow from "../../public/icons/orange_right_arrow.png";

export default function PaginationBar({ totalPage, activePage }) {
  const [active, setActive] = useState(activePage);

  const getItemProps = (index) => ({
    variant: active === index ? "filled" : "text",
    color: "gray",
    onClick: () => setActive(index),
    className: "rounded-full"
  });

  const next = () => {
    if (active === totalPage) return;
    setActive(active + 1);
  };

  const prev = () => {
    if (active === 1) return;
    setActive(active - 1);
  };

  return (
    <div className="flex items-center gap-4">
      <Button
        variant="text"
        className="flex items-center gap-2 rounded-full"
        onClick={prev}
        disabled={active === 1}
      >
        <Image width={40} height={40} src={leftArrow} className="h-4 w-4" />
      </Button>
      <div className="flex items-center gap-2">
        <Button {...getItemProps(1)}>1</Button>
        <Button {...getItemProps(2)}>2</Button>
        <Button {...getItemProps(3)}>3</Button>
        <Button {...getItemProps(4)}>4</Button>
        <Button {...getItemProps(5)}>5</Button>
      </div>
      <Button
        variant="text"
        className="flex items-center gap-2 rounded-full"
        onClick={next}
        disabled={active === totalPage}
      >
        <Image width={40} height={40} src={rightArrow} className="h-4 w-4" />
      </Button>
    </div>
  );
}
