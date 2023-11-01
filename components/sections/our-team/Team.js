import React from "react";
import Member from "./Member";
import { RichText } from "prismic-reactjs";

const Team = ({ data }) => {
  console.log(`team data`, data);

  return (
    <div>
      <section className="bg-darkBG">
        <div className=" py-[8rem] px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
          <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
            <div className="mb-[4rem] text-[2rem] tablet:text-[2.5rem] largeTablet:text-[3.5rem] tracking-tight font-extrabold text-textPrimary">
              {RichText.render(data.primary.team_introduction)}
            </div>
          </div>
          <div className=" grid gap-8 lg:gap-16  grid-cols-1 mobile_480:grid-cols-2 largeTablet:grid-cols-3 lg:grid-cols-4">
            {data.items.map((x, i) => (
              <Member
                name={x.team_member_name}
                position={x.team_member_position}
                image={x.team_member_image}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
