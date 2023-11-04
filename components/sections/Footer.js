import Link from "next/link";
import { RichText } from "prismic-reactjs";
import SectionWrapper from "../common/layout/SectionWrapper";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import Dropdown from "../common/Dropdown";

const Footer = ({ pressPage, footerData }) => {
  const path = usePathname();
  const footerItems = footerData || {};
  const bgColor = pressPage ? "bg-[#221e1c]" : "bg-footerBG";

  return (
    <footer className={`w-full min-h-[200px] ${bgColor} pb-10`}>
      <SectionWrapper pbs={0}>
        <div className="flex justify-between w-full pt-10 pb-16 largeTablet:pt-12 ">
          <div className="w-[140px] h-6">
            <img
              alt={"Brand logo"}
              src={"/medicosLogo/medicos-logo-trans-wt.png"}
            />
          </div>
          <div className="w-[140px] tablet:w-auto h-6">
            <Dropdown
              name="Language Switcher"
              menuItems={[
                { path: "/", title: "English" },
                { path: "/es", title: "Spanish" }
              ]}
            />
          </div>
        </div>
        <div className="w-full flex flex-wrap items-center tablet:items-start flex-col tablet:flex-row tablet:text-left text-center">
          {footerItems.body?.map(({ primary, items, slice_type }, i) => {
            const { title_of_this_block } = primary;
            return (
              <>
                {slice_type === "call_to_action" ? (
                  <div key={slice_type + i + Math.random().toString()}></div>
                ) : (
                  <div
                    key={slice_type + i + Math.random().toString()}
                    className="sm:w-1/2 my-3 tablet:my-10 largeTablet:w-[20%] tablet:w-[20%] w-full largeTablet:my-0"
                  >
                    <LocalTypography className="!pb-4" variant="title">
                      {RichText.render(title_of_this_block)}
                    </LocalTypography>
                    <div className="w-full flex flex-col">
                      {items.map(
                        ({ link: { url, uid }, name_of_this_block }, i) => (
                          <div
                            key={i + Math.random().toString()}
                            className="cursor-pointer"
                          >
                            {!name_of_this_block?.length ? (
                              <></>
                            ) : (
                              <Link
                                key={i + Math.random().toString()}
                                href={
                                  url ||
                                  (uid &&
                                    (path.includes("/es") ? "/es/" : "") +
                                      uid) ||
                                  "/#"
                                }
                                passHref
                              >
                                <LocalTypography variant="item1">
                                  {RichText.render(name_of_this_block)}
                                </LocalTypography>
                              </Link>
                            )}
                          </div>
                        )
                      )}
                    </div>
                  </div>
                )}
              </>
            );
          })}
        </div>

        <div className="w-full pt-9 mt-7 flex flex-col-reverse border-t-[0.5px] border-gray-700 largeTablet:flex-row largeTablet:mt-12">
          <div className="flex-grow">
            <LocalTypography variant="item2">
              {RichText.render(footerItems.disclaimer)}
            </LocalTypography>
          </div>
          <div className="flex mb-5 largeTablet:mb-0 ">
            {footerItems.legal?.map(({ link, text_for_legal_link }, i) => (
              <div key={i + Math.random().toString()} className="flex">
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
