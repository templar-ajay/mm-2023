import React from "react";
import Link from "next/link";
import { RichText } from "prismic-reactjs";

// Components
import SectionWrapper from "../common/layout/SectionWrapper";
import SocialLinks from "../common/SocialLinks";
import clsx from "clsx";

const Footer = ({ pressPage, footerData }) => {
  const footerItems = footerData.data || {};
  const bgColor = pressPage ? "bg-[#221e1c]" : "bg-footerBG";

  return (
    <footer className={`w-full min-h-[200px] ${bgColor} pb-10`}>
      <SectionWrapper pbs={0}>
        <div className="w-full pt-10 pb-16 largeTablet:pt-12 ">
          <div className="w-[140px] h-6 relative mx-auto tablet:ml-0">
            <img
              alt={"Brand logo"}
              src={"/medicosLogo/medicos-logo-trans-wt.png"}
            />
          </div>
        </div>
        <div className="w-full flex ">
          {/* <div className="w-full largeTablet:w-[45%]">
            <LocalTypography variant="title">SOCIALS</LocalTypography>
            <SocialLinks />
          </div> */}
          <div className="w-full flex flex-wrap items-center tablet:items-start flex-col tablet:flex-row tablet:text-left text-center">
            {footerItems.body.map(({ primary, items, slice_type }, i) => {
              const { title_of_this_block } = primary;
              return (
                <>
                  {slice_type === "call_to_action" ? (
                    <div></div>
                  ) : (
                    <div className="sm:w-1/2 my-3 tablet:my-10 largeTablet:w-[20%] tablet:w-[20%] w-full largeTablet:my-0">
                      <LocalTypography className="!pb-4" variant="title">
                        {RichText.render(title_of_this_block)}
                      </LocalTypography>
                      <div className="w-full flex flex-col">
                        {items.map(({ link, name_of_this_block }) => (
                          <div key={i} className="cursor-pointer">
                            {!name_of_this_block?.length ? (
                              <></>
                            ) : (
                              <Link href={link.url || "/#"} passHref>
                                <LocalTypography variant="item1">
                                  {RichText.render(name_of_this_block)}
                                </LocalTypography>
                              </Link>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              );
            })}
            {/* <div className="w-1/2 my-10 largeTablet:w-[35%] largeTablet:my-0">
              <LocalTypography variant="title">More Sauce</LocalTypography>
              <div className="w-full flex flex-col"> */}
            {/* {navigationItems.socials_networks.map(
                  ({ icon_social, link_to_social }) => (
                    <a
                      key={link_to_social}
                      href={link_to_social}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <LocalTypography variant="item1">
                        {icon_social}
                      </LocalTypography>
                    </a>
                  )
                )} */}
            {/* </div>
            </div> */}
            {/* <div className="w-1/2 mb-10 largeTablet:w-[30%] largeTablet:mb-0">
              <LocalTypography variant="title">Contact Us</LocalTypography>
              <div className="w-full flex flex-col"> */}
            {/* <LocalTypography variant="item1">
                  +1 (123) 456-7890
                </LocalTypography> */}
            {/* <LocalTypography variant="item1">
                  <a href="mailto:manuguerrerof@gmail.com">
                    manuguerrerof@gmail.com
                  </a>
                </LocalTypography>
              </div>
            </div> */}
          </div>
        </div>

        <div className="w-full pt-9 mt-7 flex flex-col-reverse border-t-[0.5px] border-gray-700 largeTablet:flex-row largeTablet:mt-12">
          <div className="flex-grow">
            <LocalTypography variant="item2">
              {RichText.render(footerItems.disclaimer)}
            </LocalTypography>
          </div>
          <div className="flex mb-5 largeTablet:mb-0 ">
            {footerItems.legal.map(({ link, text_for_legal_link }, i) => (
              <div key={i} className="flex">
                <a href={link.url} target="_blank" rel="noreferrer">
                  <LocalTypography variant="item2">
                    {RichText.render(text_for_legal_link)}
                  </LocalTypography>
                </a>
                {i < footerItems.length - 1 && (
                  <div className=" mx-2">
                    <LocalTypography variant="item2">•</LocalTypography>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </footer>
  );
};

const LocalTypography = ({ variant = "item1", children, className }) => {
  const titleStyle =
    "font-bold text-textPrimary opacity-[0.35] text-xs uppercase tracking-[0.2em] pb-8";
  const item1Style =
    "font-normal text-textPrimary text-sm tracking-[-0.02em] opacity-[0.7] pb-3";
  const item2Style =
    "font-normal text-textPrimary text-sm tracking-[-0.02em] opacity-[0.35]";

  const appliedStyle =
    variant === "title"
      ? titleStyle
      : variant === "item1"
      ? item1Style
      : item2Style;
  return <div className={clsx(appliedStyle, className)}>{children}</div>;
};

export default Footer;
